let state = {
    socketId : null ,
    localStream : null ,
    remoteStream :null ,
    screenSharingStream : null ,
    allowConnectionsFromStranger : false ,
    screenSharingActive : false,
}


export const setSocketId = (socketId) =>{
    state = {
        ...state ,
        socketId
    }

    console.log(socketId)
}
export const setLocalStream = (stream) =>{
    state = {
        ...state ,
        localStream : stream
    }
}

export const setAllowConnectionStranger = (allowconnection)=>{
    state= {
        ...state , 
        allowConnectionsFromStranger : allowconnection
    }
} 

export const setRemoteStream = (remoteStream)=>{
    state= {
        ...state , 
        remoteStream : remoteStream
    }
}
export const setScreenSharingStream = (screenSharingStream)=>{
    state= {
        ...state , 
        screenSharingStream : screenSharingStream
    }
}
export const setScreenSharingActive = (screenSharingActive)=>{
    state= {
        ...state , 
        screenSharingActive : screenSharingActive
    }
}



export const getSatet = ()=>{
    return state
}