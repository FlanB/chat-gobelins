import { io } from "socket.io-client"
import { writable } from "svelte/store"

export const socket = io("http://localhost:3001")
socket.on("connect", () => {
  console.log("connected")
})

export const loginStep = writable(0)

