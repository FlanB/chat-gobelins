import { io } from "socket.io-client"
import { readable } from "svelte/store";

export const socket = io("http://localhost:3001")
socket.on("connect", () => {
	console.log("connected")
})
