
import  * as constants from './constants.js'
import * as elements from './elements.js'

export const updatePersonalCode = (personalCode)=>{
    const personalCodeText = document.getElementById('personal_code_paragraph');
    personalCodeText.innerHTML = personalCode
    // const canvas = document.getElementById('qrCode')
    
    //  QRCode.toCanvas(canvas, personalCode , function (error) {
    //   if (error) console.error(error)
    //   console.log('success!');
    // })
}

export const updateLocalVideo = (stream)=>{
    const localVideo = document.getElementById('local_video')
    localVideo.srcObject = stream
    localVideo.addEventListener('loadedmetadata' , ()=>{
        localVideo.play()
    }) 
}

export const updateRemoteVideo = (stream)=>{
    const remoteVideo = document.getElementById('remote_video')
    remoteVideo.srcObject = stream
    const remoteVideo2 = document.getElementById('remote_video2')
    remoteVideo2.srcObject = stream
}
export const showIncomingCall =(callType, acceptCallHandler , rejectCallHandler)=>{

    const callTypeInfo = constants.callType.CHAT_PERSONAL_CODE  === callType ? "Chat" : "Video"
    
    const IncomingCall = elements.getIncomingCall(callTypeInfo , acceptCallHandler , rejectCallHandler)

    //removing extra tag in dialog tag 

    const dialogHTML = document.getElementById('dialog')
    dialogHTML.querySelectorAll('*').forEach((dialogHTML)=> dialogHTML.remove())
    dialogHTML.appendChild(IncomingCall)

}


export const showCallingDialog = (rejectCallHandler) =>{
        //removing extra tag in dialog tag 
        const callingDialog = elements.callingDialogBox(rejectCallHandler)
        const dialogHTML = document.getElementById('dialog')
        dialogHTML.querySelectorAll('*').forEach((dialogHTML)=> dialogHTML.remove())
        dialogHTML.appendChild(callingDialog)
}


export const removeCallDialog = ()=>{
    const dialogHTML = document.getElementById('dialog')
    dialogHTML.querySelectorAll('*').forEach((dialogHTML)=> dialogHTML.remove())
}


export const showAnswerStatus = (preOfferAnswer)=>{
    let messageBox = null
    if (preOfferAnswer === constants.preOfferAnswer.CALL_REJECTED)
        messageBox = elements.callAnswerStatus('تماس رد شده' , 'شما برای طرف تماس مهم نبوده اید ')
    if (preOfferAnswer === constants.preOfferAnswer.CALL_UNAVAILABLE)
        messageBox = elements.callAnswerStatus(' مشکل در برقراری ارتباط ' , 'مخاطب  در دسترس نمیباشد')
    if (preOfferAnswer === constants.preOfferAnswer.COLEE_NOT_FOUND)
        messageBox = elements.callAnswerStatus('یافت نشد' , 'شناسه مورد نطر یافت نشد ')
    const dialogHTML = document.getElementById('dialog')
    dialogHTML.appendChild(messageBox)
    console.log(dialogHTML)

    setTimeout(()=>{
        removeCallDialog()
    } , 4000)
}


//ui helper functions 
export  const appendMessage = (message , right = false)=>{
    const messageContainer = document.getElementById('messages_container')
    const messageElement = right ? elements.getRighttMessage(message) : elements.getLeftMessage(message)
    messageContainer.appendChild(messageElement)
}
export const clearMessanger = ()=>{
    const messageContainer = document.getElementById('messages_container')
    //clear message here 
}
export const showCallElements  = (callType) =>{
    if (callType === constants.callType.CHAT_PERSONAL_CODE){
        showChatCallElements()
    }
    if (callType === constants.callType.VIDEO_PERSONAL_CODE){
        showVideoCallElements()
    }
}

export const enableDashboard = ()=>{
    const dashBoardBlocker = document.getElementById('dashboard_blur')
    if(!dashBoardBlocker.classList.contains('display_none')){
        dashBoardBlocker.classList.add('display_none')
    }

}

const desableDashboard = ()=>{
    const dashBoardBlocker = document.getElementById('dashboard_blur')
    if(dashBoardBlocker.classList.contains('display_none')){
        dashBoardBlocker.classList.remove('display_none')
    }
}

const showElement = (element)=>{
    const dashBoardBlocker = document.getElementById('dashboard_blur')
    const elementHtml = document.getElementById(element)
    elementHtml.classList.remove('display_none')
    if(dashBoardBlocker.classList.contains('display_none')){
        elementHtml.classList.remove('desplay_none')
    }
}


export const hideElement = (element)=>{
    const elementHtml = document.getElementById(element)
    elementHtml.classList.add('display_none')
    const dashBoardBlocker = document.getElementById('dashboard_blur')
    if(!dashBoardBlocker.classList.contains('display_none')){
        elementHtml.classList.add('desplay_none')
    }
}

const showChatCallElements = ()=>{
    showElement('finish_chat_button_container')
    showElement('new_message')
    desableDashboard()
}
const showVideoCallElements = ()=>{
    showElement('call_buttons')
    showElement('remote_video')
    showElement('remote_video2')
    showElement('new_message')
    hideElement('video_placeholder')
    desableDashboard()

}
