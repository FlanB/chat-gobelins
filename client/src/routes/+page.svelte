<script>
	import { socket } from "../stores.js"
	import MessageInput from "$components/MessageInput.svelte"
  import MessagesList from "$components/MessagesList.svelte"

	socket.on("message", (message) => {
		console.log(message)
	})
</script>

<MessageInput/>
<MessagesList/>


