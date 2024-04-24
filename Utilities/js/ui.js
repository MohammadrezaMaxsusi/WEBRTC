
import  * as constants from './constants.js'

export const updatePersonalCode = (personalCode)=>{
    const personalCodeText = document.getElementById('personal_code_paragraph');
    personalCodeText.innerHTML = personalCode
}



export const showIncomingCall =(callType, acceptCallHandler , rejectCallHandler)=>{

    const callTypeInfo = constants.callType.CHAT_PERSONAL_CODE  === callType ? "Chat" : "Video"
    

}
