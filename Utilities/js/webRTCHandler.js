
import * as ui from './ui.js'
import * as wss from './wss.js'
import  * as constants from './constants.js'

let connectedUserDetails = null
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
    sendPreOfferAnswer(constants.preOfferAnswer.CALL_ACCEPTED);
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
    wss.sendPreOfferAnswer(data)
}