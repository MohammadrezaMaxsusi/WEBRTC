
import * as ui from './ui.js'
import * as wss from './wss.js'
let connectedUserDetails = null
export const sendPreOffer = (callType , calleePersonalCode) =>{
    const data = {
        callType,
        calleePersonalCode
    }
    wss.sendPreOffer(data)
}


export const handlePreOffer =  (data)=>{
    const {callType , callerPersonalCode} = data
    connectedUserDetails = {
        socketId : callerPersonalCode,
        callType
    }

    ui.showIncomingCall(callType , acceptCallHandler  , rejectCallHandler);

}

const acceptCallHandler = ()=>{

}
const rejectCallHandler = ()=>{
    
}