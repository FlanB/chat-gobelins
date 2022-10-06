<script>
  import { socket } from "$/stores.js"
  import Message from "./Message.svelte"

  let messages = []
  socket.emit("getMessages", (data) => {
    console.log(data);
    messages = data
  })
  socket.on("message", (message) => {
    messages = [...messages, message.value]
  })
</script>

<ul>
  {#if messages.length}
    {#each messages as message}
      <li>{message}</li>
    {/each}
  {:else}
    <li>No messages yet</li>
  {/if}
</ul>
<Message />
<Message direction="right"/>


