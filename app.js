// import express from 'express';
const express = require('express')
const http = require('http');
const app = express();
const server = http.createServer(app)
const io = require('socket.io')(server)
const PORT = process.env.PORT || 3000;
const QRcode = require('qrcode')

app.use(express.static('Utilities'))
app.get('/' , (req , res)=>{
    console.log("test")
    res.sendFile(__dirname + '/Utilities/index.html')
})
let connectedPeers = []
io.on('connection' , (socket) => {

    connectedPeers.push(socket.id)
    console.log(connectedPeers)

    socket.on('pre-offer' , (data)=>{
        //send from here to client 
        const {calleePersonalCode , callType} = data
        const connectedPeer = connectedPeers.find((peerId) => {
            return peerId === calleePersonalCode})
        if (connectedPeer) {
            const data = {
                collerSocketId : socket.id,
                callType 
            }
            io.to(calleePersonalCode).emit('pre-offer', data)
        }

    })
    socket.on('pre-offer-answer' , (data)=>{
        const {callerSocketId } = data
        const connectedPeer = connectedPeers.find((peerId) => {
            return peerId === callerSocketId})
        if (connectedPeer) {
            io.to(callerSocketId).emit('pre-offer-answer', data)
        }
        
    })
    socket.on('webRTC-signaling' , (data)=>{
        console.log(data.type)
        const {connectedUserSocketID}  = data
        const connectedPeer = connectedPeers.find((peerId) => {
            return peerId === connectedUserSocketID})
        if (connectedPeer) {
            // const data = {
            //     collerSocketId : socket.id,
            //     // callType 
            // }
            io.to(connectedUserSocketID).emit('webRTC-signaling', data)
        }
    })
    socket.on('disconnect' , ()=>{
        const newConnection = connectedPeers.filter((peer)=>{
            return peer !== socket.id
        })

    connectedPeers = newConnection
    })
})



server.listen(PORT , ()=> {
})

