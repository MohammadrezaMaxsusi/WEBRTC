
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