<script>
  import { socket } from "$/stores.js"
  import Message from "./Message.svelte"

  let messagesContainer = null
  let messages = []

  // socket.emit("getMessages", (data) => {
  //   console.log(data)
  //   messages = data
  // })
  socket.on("message", (message) => {
    messages = [...messages, message.value]

    setTimeout(() => {
      messagesContainer.scrollTop = messagesContainer.scrollHeight
    }, 1)
  })
</script>

{#if messages.length}
  <ul bind:this={messagesContainer}>
    {#each messages as message}
      <Message content={message} />
    {/each}
  </ul>
{:else}
  <div class="blank">C’est pas qu’on s’ennuie mais bon...</div>
{/if}

<style>
  ul {
    display: flex;
    flex-direction: column;
    overflow-y: auto;
  }
  .blank {
    text-align: center;
    font-size: 2rem;
    color: #e6e6e6;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80%;
    margin: auto;
  }
</style>
