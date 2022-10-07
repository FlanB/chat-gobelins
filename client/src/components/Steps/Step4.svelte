<script>
  import AvatarHead from "../AvatarHead.svelte"
  import { loginStep,socket } from "$/stores"
  import randomFonts from "$/functions/randomFonts"

  let imgSrc = sessionStorage.getItem("avatar")
  let color = sessionStorage.getItem("avatarColor")
  let inputNameValue = ""

  const handleConfirmClick = () => {
    if (inputNameValue.length > 0) {
      sessionStorage.setItem("username", inputNameValue)
      socket.emit("setUsername", inputNameValue)
      loginStep.update((n) => n + 1)
    }
  }
</script>

<div class="step-container">
  <div class="presentation-text">
    <p use:randomFonts>C'est quoi ton petit nom ?</p>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="#EFEFEF"
      viewBox="0 0 267 109"
      preserveAspectRatio="none"
    >
      <path
        d="M234.5 0 267 22.4l-8.3 35.2-8.3 42.4-70.8 8.8L129.4 96l-115.7 6.4-13.3-60L19.5 0l103.3 5.6L234.5 0Z"
      />
    </svg>
  </div>
  <AvatarHead {imgSrc} background={color} />
  <form class="input-container" on:submit={handleConfirmClick}>
    <input
      type="text"
      placeholder="NOM"
      maxlength="10"
      bind:value={inputNameValue}
      required
    />
  </form>
  <div class="cta">
    <button on:click={handleConfirmClick}>
      <p use:randomFonts>Suivant</p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="#EFEFEF"
        viewBox="0 0 213 48"
        preserveAspectRatio="none"
      >
        <path
          d="m0 0 55 3.5L139 0h74v17.3l-2.6 14 2.6 15-92-3.5L58.6 48 0 46.3l2.6-29L0 0Z"
        />
      </svg>
    </button>
  </div>
</div>

<style>
  .step-container {
    display: grid;
    grid-template-rows: repeat(2, 1fr) max-content 1fr;
    height: 100%;
    justify-items: center;
    gap: 1rem;
  }
  .presentation-text {
    position: relative;
    z-index: 1;
    padding: 1.5rem;
    font-size: 1.5rem;
    text-align: center;
    align-self: flex-end;
  }

  .presentation-text svg,
  .cta svg {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
  }
  button {
    position: relative;
    z-index: 1;
    padding: 1rem 3rem;
  }
  .input-container input {
    color: var(--white);
    font-size: 2rem;
    text-align: center;
    font-family: "Handmade", sans-serif;
  }
</style>
