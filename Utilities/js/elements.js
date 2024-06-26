export const getIncomingCall = (callType , acceptCallHandler , rejectCallHandler)=>{
    // console.log("getting call");
    const dialog = document.createElement("div")
    dialog.classList.add('dialog_wrapper')
    const dialogContent = document.createElement("div")
    dialog.appendChild(dialogContent)
    dialogContent.classList.add('dialog_content')

    const title = document.createElement('p')
    title.classList.add('dialog_title')
    title.innerHTML = `تماس ${callType}`
    const imageContainer = document.createElement('div')
    imageContainer.classList.add('dialog_image_container')
    const image = document.createElement('img')
    const avatarImagePath = './utils/images/dialogAvatar.png'
    image.src = avatarImagePath
    imageContainer.appendChild(image)
    dialogContent.appendChild(title)
    dialogContent.appendChild(imageContainer)

    const dialog_button_container = document.createElement('div')
    dialog_button_container.classList.add('dialog_button_container')
    const acceptCallButtonContainer = document.createElement('div')
    acceptCallButtonContainer.classList.add('dialog_button_container')
    const acceptCallButton = document.createElement('button')
    acceptCallButton.classList.add('dialog_accept_call_button')
    const acceptCallButtonImage = document.createElement('img')
    acceptCallButtonImage.classList.add('dialog_button_image')
    const acceptCallButtonImagePath = './utils/images/acceptCall.png'
    acceptCallButtonImage.src = acceptCallButtonImagePath
    acceptCallButton.append(acceptCallButtonImage)
    acceptCallButtonContainer.appendChild(acceptCallButton)


    const rejectCallButtonContainer = document.createElement('div')
    rejectCallButtonContainer.classList.add('dialog_button_container')
    const rejectCallButton = document.createElement('button')
    rejectCallButton.classList.add('dialog_reject_call_button')
    const rejectCallButtonImage = document.createElement('img')
    rejectCallButtonImage.classList.add('dialog_button_image')
    const rejectCallButtonImagePath = './utils/images/rejectCall.png'
    rejectCallButtonImage.src = rejectCallButtonImagePath
    rejectCallButton.append(rejectCallButtonImage)
    rejectCallButtonContainer.appendChild(rejectCallButton)
    dialog_button_container.appendChild(acceptCallButtonContainer)
    dialog_button_container.appendChild(rejectCallButtonContainer)
    dialogContent.appendChild(dialog_button_container)
    acceptCallButton.addEventListener('click' , ()=>acceptCallHandler())
    rejectCallButton.addEventListener('click' , ()=>rejectCallHandler())
    return dialog


}

export const callingDialogBox = (callingDialogReject)=>{

    const dialog = document.createElement("div")
    dialog.classList.add('dialog_wrapper')
    const dialogContent = document.createElement("div")
    dialog.appendChild(dialogContent)
    dialogContent.classList.add('dialog_content')

    const title = document.createElement('p')
    title.classList.add('dialog_title')
    title.innerHTML = "در حال تماس ..."
    const imageContainer = document.createElement('div')
    imageContainer.classList.add('dialog_image_container')
    const image = document.createElement('img')
    const avatarImagePath = './utils/images/dialogAvatar.png'
    image.src = avatarImagePath
    imageContainer.appendChild(image)
    dialogContent.appendChild(title)
    dialogContent.appendChild(imageContainer)
    const dialog_button_container = document.createElement('div')
    dialog_button_container.classList.add('dialog_button_container')
    const rejectCallButtonContainer = document.createElement('div')
    rejectCallButtonContainer.classList.add('dialog_button_container')
    const rejectCallButton = document.createElement('button')
    rejectCallButton.classList.add('dialog_reject_call_button')
    const rejectCallButtonImage = document.createElement('img')
    rejectCallButtonImage.classList.add('dialog_button_image')
    const rejectCallButtonImagePath = './utils/images/rejectCall.png'
    rejectCallButtonImage.src = rejectCallButtonImagePath
    rejectCallButton.append(rejectCallButtonImage)
    rejectCallButtonContainer.appendChild(rejectCallButton)
    dialog_button_container.appendChild(rejectCallButtonContainer)
    dialogContent.appendChild(dialog_button_container)
    return dialog
}


export const callAnswerStatus = (title ,  text)=>{
    const dialog = document.createElement("div")
    dialog.classList.add('dialog_wrapper')
    const dialogContent = document.createElement("div")
    dialog.appendChild(dialogContent)
    dialogContent.classList.add('dialog_content')
    const title_ = document.createElement('p')
    title_.classList.add('dialog_title')
    title_.innerHTML = title
    const text_ = document.createElement('p')
    text_.classList.add('dialog_title')
    text_.innerHTML = text
    dialogContent.appendChild(title_)
    dialogContent.appendChild(text_)
    return dialog
}

export const getLeftMessage  = (message) =>{
    const messageContainer = document.createElement('div')
    messageContainer.classList.add('message_left_container')
    const messageParagh=document.createElement('p')
    messageParagh.classList.add('message_left_paragraph')
    messageParagh.innerHTML = message
    messageContainer.appendChild(messageParagh)
    return messageContainer
}
export const getRighttMessage  = (message) =>{
    const messageContainer = document.createElement('div')
    messageContainer.classList.add('message_right_container')
    const messageParagh=document.createElement('p')
    messageParagh.classList.add('message_right_paragraph')
    messageParagh.innerHTML = message
    messageContainer.appendChild(messageParagh)
    // messageContainer.scrollTop = messageContainer.scrollHeight;
    return messageContainer
}
