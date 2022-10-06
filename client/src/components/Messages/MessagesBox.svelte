<script>
  import MessageInput from "./MessageInput.svelte"
  import MessagesHeader from "./MessagesHeader.svelte"
  import MessagesList from "./MessagesList.svelte"
</script>

<div class="messages-box">
  <MessagesHeader />
  <MessagesList />
  <MessageInput />
</div>

<style>
  .messages-box {
    background: var(--white);
    display: grid;
    grid-template-rows: min-content 1fr min-content;
    height: 100%;
  }
</style>
