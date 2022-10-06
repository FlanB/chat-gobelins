<script>
  import { socket } from "$/stores.js"

  let messages = []
  socket.emit("getMessages")
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
