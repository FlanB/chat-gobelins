<script>
  import { socket } from "$/stores.js"

  let messageValue = ""

  const onSubmitMessage = () => {
    socket.emit("message", messageValue)
    messageValue = null
  }
</script>

<form class="message-input" on:submit|preventDefault={onSubmitMessage}>
  <div class="input-container">
    <input
      bind:value={messageValue}
      name="message"
      placeholder="Type your message here"
      type="text"
    />
    <svg
      width="279"
      height="48"
      preserveAspectRatio="none"
      viewBox="0 0 279 48"
      fill="#EFEFEF"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 2.66667L68.709 4.26667H146.787L224.345 0L279 2.66667L276.397 34.1333L279 45.3333L193.114 42.6667L94.2146 48L0 45.3333L3.12313 14.9333L0 2.66667Z"
      />
    </svg>
  </div>
  <button />
</form>

<style>
  .message-input {
    display: flex;
    padding: 2rem 1.5rem;
    gap: 0.5rem;
    align-items: center;
  }

  .input-container {
    position: relative;
    flex-grow: 1;
    z-index: 1;
  }
  .input-container input {
    width: 100%;
    box-sizing: border-box;
  }
  .input-container svg {
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    pointer-events: none;
    z-index: -1;
  }
  button {
    background-image: url("data:image/svg+xml,%3Csvg width='48' height='48' viewBox='0 0 48 48' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M2.2069 1.73494L21.5172 0L36.9655 1.73494H46.3448L48 24.8675L46.3448 48L33.1034 44.5301L18.2069 46.8434L2.2069 48L0 32.3855L3.86207 12.7229L2.2069 1.73494Z' fill='%23151515'/%3E%3Cpath d='M16 24L24 23L32.5 24' stroke='%23F9F9F9'/%3E%3Cpath d='M30 20L33 24L30.5 28' stroke='%23F9F9F9'/%3E%3C/svg%3E%0A");
    width: 3rem;
    height: 3rem;
    cursor: pointer;
  }
</style>
