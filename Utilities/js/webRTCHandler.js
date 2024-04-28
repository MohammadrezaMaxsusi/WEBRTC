
import * as ui from './ui.js'
import * as wss from './wss.js'
import  * as constants from './constants.js'
import * as store from './store.js'
let connectedUserDetails = null
let peerConnection;

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
    peerConnection.onicecandidate =(event)=>{
        console.log("test for getting information ");
        if(event.candidate){
            //send our ice candidate 
            
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
        sendWerbRTCOffer();
    }
}



const sendWerbRTCOffer = async()=>{
    const offer = await peerConnection.createOffer();
    await peerConnection.setLocalDescription(offer);
    wss.sendDataUsingWebRTCSignaling({
        connectedUserSocketID : connectedUserDetails.socketId,
        type : constants.webRTCSignaling.OFFER,
        offer : offer
    })
}


export const handleWebRTCOffer = (data)=>{
    console.log('offer came')
    console.log(data)
}
//ui helper functions 


