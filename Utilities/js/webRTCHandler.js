
import * as ui from './ui.js'
import * as wss from './wss.js'
import  * as constants from './constants.js'
import * as store from './store.js'
let connectedUserDetails = null
let peerConnection;
let dataChannel ;
const defaultContrains = {
    audio :true,
    video :true
}
const configuration = {
    iceServers : [
        {
            urls : 'stun:stun.1.google.com:13902'
        }
    ]
}
const createPeerConnection  = ()=>{
    peerConnection = new RTCPeerConnection(configuration)
    dataChannel = peerConnection.createDataChannel('chat')
    peerConnection.ondatachannel = (event)=>{
        const dataChannel = event.channel
        dataChannel.onopen = ()=>{
            console.log("data channel created")
        }
        dataChannel.onmessage = (event)=>{
            const message = JSON.parse(event.data)
            ui.appendMessage(message , false)
        }
    }

    peerConnection.onicecandidate =(event)=>{
        console.log("test for getting information from stun server ... ");
        if(event.candidate){
            wss.sendDataUsingWebRTCSignaling({
                connectedUserSocketID : connectedUserDetails.socketId,
                type : constants.webRTCSignaling.ICE_CANDIDATE,
                candidate : event.candidate
            })
            
        }
    }

    const remoteStream = new MediaStream()
    store.setRemoteStream(remoteStream);
    ui.updateRemoteVideo(remoteStream);
    peerConnection.ontrack = (event)=>{
        remoteStream.addTrack(event.track)
    }
    //add stream to peer connection 

    if( connectedUserDetails.callType === constants.callType.VIDEO_PERSONAL_CODE){
        const localStream = store.getSatet().localStream;
        for (const track of localStream.getTracks()){
            peerConnection.addTrack(track , localStream)
        }
    }
}
export const getLocalPreview = ()=>{
    navigator.mediaDevices.getUserMedia(defaultContrains)
    .then((stream)=>{
        ui.updateLocalVideo(stream)
        store.setLocalStream(stream)
    })
}
export const sendPreOffer = (callType , calleePersonalCode) =>{
    const data = {
        callType,
        calleePersonalCode
    }
    connectedUserDetails = {
        callType ,
        socketId :calleePersonalCode
    }
    ui.showCallingDialog(callingDialogRejectHandler)
    wss.sendPreOffer(data)
}


export const handlePreOffer =  (data)=>{
    const {callType , collerSocketId} = data
    connectedUserDetails = {
        socketId : collerSocketId,
        callType
    }

    ui.showIncomingCall(callType , acceptCallHandler  , rejectCallHandler);

}


export const sendMessageDataChannel = (message)=>{
    const stringfieMessage = JSON.stringify(message)
    dataChannel.send(stringfieMessage)
}

const acceptCallHandler = ()=>{
    createPeerConnection();
    sendPreOfferAnswer(constants.preOfferAnswer.CALL_ACCEPTED);
    ui.showCallElements(connectedUserDetails.callType)
}
const rejectCallHandler = ()=>{
    sendPreOfferAnswer(constants.preOfferAnswer.CALL_REJECTED);
    
}
const callingDialogRejectHandler = ()=>{
    console.log("rejected call")
}

const sendPreOfferAnswer = (preOfferAnswer)=>{
    const data ={
        callerSocketId : connectedUserDetails.socketId,
        preOfferAnswer
    }
    ui.removeCallDialog()
    wss.sendPreOfferAnswer(data)
}

export const handlePreOfferAnswer = (data) =>{
    const {preOfferAnswer}  = data
    ui.removeCallDialog()
    if (preOfferAnswer === constants.preOfferAnswer.COLEE_NOT_FOUND){
        ui.showAnswerStatus(preOfferAnswer)
    }
    else if (preOfferAnswer === constants.preOfferAnswer.CALL_UNAVAILABLE){
        ui.showAnswerStatus(preOfferAnswer)
        
    }
    else if (preOfferAnswer === constants.preOfferAnswer.CALL_REJECTED){
        ui.showAnswerStatus(preOfferAnswer)
        
    }
    else if (preOfferAnswer === constants.preOfferAnswer.CALL_ACCEPTED){
        ui.showCallElements(connectedUserDetails.callType);
        createPeerConnection();
        sendWebRTCOffer();
    }
}



const sendWebRTCOffer = async()=>{
    const offer = await peerConnection.createOffer();
    await peerConnection.setLocalDescription(offer);

    wss.sendDataUsingWebRTCSignaling({
        connectedUserSocketID : connectedUserDetails.socketId,
        type : constants.webRTCSignaling.OFFER,
        offer : offer
    })

}


export const handleWebRTCOffer = async (data)=>{
    await peerConnection.setRemoteDescription(data.offer)
    const answer = await peerConnection.createAnswer();
    await peerConnection.setLocalDescription(answer)
    wss.sendDataUsingWebRTCSignaling(
        {
            connectedUserSocketID : connectedUserDetails.socketId,
            type : constants.webRTCSignaling.ANSWER,
            answer : answer
        }
    )
}

export const handleWebRTCAnswer = async (data)=>{
    console.log("handeling answer .. ");
    await peerConnection.setRemoteDescription(data.answer)
}
//ui helper functions 
export const handleWebRTcandidate = async (data) =>{
    try {
        await peerConnection.addIceCandidate(data.candidate)
    }
    catch(err) {
        console.log('eror occurd');
        console.log(err);
    }
}

