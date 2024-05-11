import * as store from './store.js'
import * as wss from './wss.js'
import * as webRTChandler from './webRTCHandler.js'
import *  as constants from './constants.js'
import { getIncomingCall } from './elements.js'
const socket = io('/')
wss.registerSocketEvent(socket)



//copy to clipboard

webRTChandler.getLocalPreview()
const personalCodeCopyButton = document.getElementById('personal_code_copy_button')
personalCodeCopyButton.addEventListener('click' , ()=>{
    const personalCode = store.getSatet().socketId;
    navigator.clipboard && navigator.clipboard.writeText(personalCode)
})


//event listener for connection button 

const personalCodeChatButton = document.getElementById('personal_code_chat_button')
const personalCodeVideoButton = document.getElementById('personal_code_video_button')

personalCodeChatButton.addEventListener('click' , ()=>{
    const calleePersonalCode = document.getElementById('personal_code_input').value
    const callType = constants.callType.CHAT_PERSONAL_CODE
    webRTChandler.sendPreOffer(callType , calleePersonalCode)
})

personalCodeVideoButton.addEventListener('click' , ()=>{
    const calleePersonalCode = document.getElementById('personal_code_input').value
    const callType = constants.callType.VIDEO_PERSONAL_CODE
    webRTChandler.sendPreOffer(callType , calleePersonalCode)
})
 //messenger

 const newMessageInput = document.getElementById('new_message_input')
newMessageInput.addEventListener('keydown' , (event)=>{
    console.log('test message');
    const key = event.key
    if (key == 'Enter'){
        webRTChandler.sendMessageDataChannel(event.target.value)
        newMessageInput.value= ""
    }

})
const sendMessageButton = document.getElementById('send_message_button')
sendMessageButton.addEventListener('click' , ()=>{
    webRTChandler.sendMessageDataChannel(newMessageInput.value)
    newMessageInput.value = ""
})