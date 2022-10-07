<script>
  import { loginStep } from "$/stores"
  import randomFonts from "$/functions/randomFonts"

  const handleClick = () => {
    loginStep.update((n) => n + 1)
  }
</script>

<div class="step1-container">
  <div class="presentation-text">
    <h1 use:randomFonts>Prends toi en photo avant de pouvoir discuter</h1>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="#EFEFEF"
      viewBox="0 0 290 133"
      preserveAspectRatio="none"
    >
      <path
        d="m254.2 0 35.2 27.4-9 43-9 51.8-76.9 10.8-54.4-15.6-125.6 7.8L0 51.8 20.8 0l112 6.8L254.2 0Z"
      />
    </svg>
  </div>
  <button on:click={handleClick}>
    <p use:randomFonts>C'est parti !</p>
    <svg
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
      fill="#EFEFEF"
      viewBox="0 0 213 48"
    >
      <path
        d="m0 0 55 3.5L139 0h74v17.3l-2.6 14 2.6 15-92-3.5L58.6 48 0 46.3l2.6-29L0 0Z"
      />
    </svg>
  </button>
</div>

<style>
  .step1-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 4rem;
    height: 100%;
    text-transform: uppercase;
  }
  .presentation-text {
    position: relative;
    z-index: 1;
    width: 80%;
    text-align: center;
  }
  h1 {
    font-size: 1.5rem;
    padding: 1.5rem;
  }
  button {
    position: relative;
    z-index: 1;
    padding: 1rem 3rem;
    font-size: 1rem;
  }
  svg {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }
</style>
