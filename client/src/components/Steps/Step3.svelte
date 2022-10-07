<script>
  import AvatarHead from "../AvatarHead.svelte"
  import { loginStep, socket } from "$/stores"
  import randomFonts from "$/functions/randomFonts"

  let imgSrc = sessionStorage.getItem("avatar")
  const colors = ["#01B76D", "#FFAA00", "#FC21ED", "#FE7026", "#F9F9F9"]
  let selectedColor = colors[colors.length - 1]

  const handleColorClick = (color) => {
    if (color.target.nodeName === "path") {
      selectedColor = color.target.parentNode.getAttribute("stroke")
    } else {
      selectedColor = color.target.getAttribute("stroke")
    }
  }

  const handleConfirmClick = () => {
    sessionStorage.setItem("avatarColor", selectedColor)
    socket.emit("setColor", selectedColor)
    loginStep.update((n) => n + 1)
  }
</script>

<div class="step2-container">
  <div class="presentation-text">
    <p use:randomFonts>Choisi ta couleur</p>
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
  <AvatarHead {imgSrc} background={selectedColor} />
  <div class="colors">
    {#each colors as color}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        stroke={color}
        stroke-linecap="round"
        stroke-width="3"
        width="60"
        height="60"
        viewBox="0 0 40 39"
        class:selected={color === selectedColor}
        on:click={handleColorClick}
      >
        <path
          transform-origin="center"
          transform="scale(0.5)"
          d="M9.1 8.7c0 .7-1.1 1.7-1.5 2.3a91.3 91.3 0 0 0-4 7C3 19.1 2.2 20.3 2 21.5c-.2.8 1.3-.8 1.3-.8 5.5-5.1 10-11.2 15.2-16.6.7-.8 1.4-1.6 2.3-2 .4-.3-.8 2-.9 2a82.3 82.3 0 0 0-9.7 17.4c-.2.6-2 5.3-.1 3.1 4.3-5 7.6-10.7 12.2-15.4 0 0 .8-.9.8-.5 0 2-2 4.5-2.8 6.3a145 145 0 0 0-8.7 19.8c-.2.7 0 .2.2-.2 2.7-4.6 6.1-9 9.3-13.3A97 97 0 0 1 33 7.4c.4-.4-.3 1.2-.6 1.7-3 5.3-6.1 10.5-8.8 16a87.1 87.1 0 0 0-3.4 8c-.1.4-.5 1.2-.1 1.1.3-.1.7-.6.9-.8l3.3-3c4.2-4 8.2-8.3 12.4-12.5.4-.4 1.5-1.7 1.3-1.2-.1.4-.7 1-.9 1.2l-3.4 5.9-5.3 10c-.5 1-1 2-1.3 3.2"
        />
      </svg>
    {/each}
  </div>
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
  .step2-container {
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

  .colors {
    display: flex;
  }
  .selected {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 59 56'%3E%3Cpath stroke='%23fff' stroke-linecap='round' stroke-width='3' d='M27.2 2h-8.4c-5.3.3-9.7 4.3-12.5 8.4-7.5 10.9-4.7 26.8 4.9 35.5 5.4 5 11.6 7.7 19 8 9 .5 15.7-3.8 21.2-10.7a24.5 24.5 0 0 0 5.6-16c-.3-10.1-8-17.4-15.6-23'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
  }
  button {
    position: relative;
    z-index: 1;
    padding: 1rem 3rem;
  }
</style>
