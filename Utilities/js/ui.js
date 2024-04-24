
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
    
    const IncomingCall = elements.getIncomingCall()
}
