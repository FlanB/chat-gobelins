<script>
  import AvatarHead from "../AvatarHead.svelte"
  export let avatarSrc = "/head.png"
  export let content = "lorem ipsum dolor sit amet"
  export let direction = "left"
</script>

<div
  class="message"
  style:flex-direction={direction === "left" && "row-reverse"}
  style:transform-origin={direction}
>
  <div
    class="content"
    style:transform={direction === "left" && "translateX(-75px) rotate(10deg)"}
  >
    <p>{content}</p>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 186 89"
      fill="#f9f9f9"
      preserveAspectRatio="none"
    >
      <path
        d="m7 .5 56 7.1L119.6 1 176 .5l10 27.6-11 35.5 1 25-43.6-.8L66 80.7 7 88.6l6-32.1L.5 24.9 7 .5Z"
      />
    </svg>
  </div>
  <div>
    <AvatarHead
      width="8rem"
      imgSrc={avatarSrc}
      background="aqua"
      animationState="once"
    />
  </div>
</div>

<style>
  .message {
    display: flex;
    align-items: flex-start;
    justify-content: flex-end;
    width: 90%;
    margin: auto;
    transition: transform 0.2s ease-out;
    font-family: "Archivo", sans-serif;
  }

  .content {
    position: relative;
    z-index: 1;
    width: max-content;
    transform: translateX(16px) rotate(-10deg);
  }
  .content p {
    padding: 1rem 1.5rem;
    width: 10rem;
  }
  .content svg {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    filter: drop-shadow(0px 2px 7px rgba(134, 134, 134, 0.25));
    z-index: -1;
  }
</style>
