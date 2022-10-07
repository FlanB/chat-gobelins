<script>
  import UsersList from "../UsersList.svelte"
  import MessageInput from "./MessageInput.svelte"
  import MessagesHeader from "./MessagesHeader.svelte"
  import MessagesList from "./MessagesList.svelte"

  let userListOpen = false

  function handleHeaderClick() {
    userListOpen = !userListOpen
  }
</script>

{#if userListOpen}
  <UsersList {handleHeaderClick} />
{:else}
  <div class="messages-box">
    <MessagesHeader onClick={handleHeaderClick} />
    <MessagesList />
    <MessageInput />
  </div>
{/if}

<style>
  .messages-box {
    background: var(--white);
    display: grid;
    grid-template-rows: min-content 1fr min-content;
    height: 100%;
  }
</style>
