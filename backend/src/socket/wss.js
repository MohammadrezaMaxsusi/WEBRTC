import * as store from '../store/store.js'
import * as ui from '../webRTCHandler/ui.js'
import * as webRTCHandler from '../webRTCHandler/webRTCHandler.js'
import * as constants from '../constant/constants.js'
let socketIo = null
export const registerSocketEvent = (socket) =>{
    socket.on('connect' , ()=>{
        socketIo = socket
        store.setSocketId(socket.id)
        ui.updatePersonalCode(socket.id)
    })

    socket.on('pre-offer' , (data)=>{
        webRTCHandler.handlePreOffer(data)
    })
    socket.on('pre-offer-answer' , (data)=>{
        console.log("socket on")

        webRTCHandler.handlePreOfferAnswer(data)

    })
    socket.on('webRTC-signaling' , (data)=>{
        switch (data.type){
            case constants.webRTCSignaling.OFFER :
                webRTCHandler.handleWebRTCOffer(data)
                break
            case constants.webRTCSignaling.ANSWER :
                webRTCHandler.handleWebRTCAnswer(data)
                break
            case constants.webRTCSignaling.ICE_CANDIDATE :
                webRTCHandler.handleWebRTcandidate(data)
            default :
                return
        }
    })
}

export const sendPreOffer = (data) =>{
    socketIo.emit('pre-offer' , data)
}

export const sendPreOfferAnswer = (data)=>{
    socketIo.emit('pre-offer-answer' , data)

}

export const sendDataUsingWebRTCSignaling = (data)=>{
    socketIo.emit('webRTC-signaling'  , data)
}