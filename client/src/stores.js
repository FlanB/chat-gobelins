import { io } from "socket.io-client"
import { writable } from "svelte/store"

export const socket = io("https://chat-gobelins-server.onrender.com/")
socket.on("connect", () => {
  console.log("connected")
})
socket.on("disconnect", () => {
  console.log("disconnected")
})

export const loginStep = writable(0)
