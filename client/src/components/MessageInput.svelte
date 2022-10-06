<script>
	import { socket } from "$/stores.js"

	let messageValue = ""

	const onSubmitMessage = () => {
		socket.emit("message", messageValue)
		messageValue = null
	}
</script>

<form on:submit|preventDefault={onSubmitMessage}>
  <input bind:value={messageValue}  name="message" placeholder="Type your message here" type="text">
  <input type="submit" value="Send">
</form>