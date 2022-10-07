<script>
  export let imgSrc = "/head.png"
  export let background = "white"
  export let animationState = "running"
  export let width
</script>

<div
  class="container"
  style:min-width={width}
  style:max-width={width}
  style:--head-url={`url(${imgSrc})`}
  style:--background={background}
  style:--animation-state={animationState === "paused" ? "paused" : "running"}
  style:--animation-iteration-count={animationState === "once"
    ? "3"
    : "infinite"}
>
  <div class="head-container top">
    <img class="top-head-img" src={imgSrc} alt="" />
  </div>
  <div class="head-container bottom">
    <img class="bottom-head-img" src={imgSrc} alt="" />
  </div>
</div>

<style>
  .container {
    position: relative;
    width: max-content;
  }
  img {
    object-fit: contain;
    filter: grayscale();
    width: 100%;
    height: 100%;
  }

  .head-container.top {
    animation: topHeadMove 1s var(--animation-iteration-count) linear
      alternate-reverse var(--animation-state);
  }
  .head-container.top::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform: scale(1.05);
    background: var(--background);
    -webkit-mask-image: var(--head-url);
    mask-image: var(--head-url);
    -webkit-mask-size: contain;
    mask-size: contain;
    clip-path: polygon(-10% -10%, 100% 0, 100% 75%, 0 75%);
  }
  .head-container.bottom {
    position: absolute;
    top: 0;
    left: 0;
    animation: bottomHeadMove 1s var(--animation-iteration-count) linear
      alternate-reverse var(--animation-state);
    clip-path: polygon(0 75%, 100% 75%, 110% 100%, -10% 100%);
  }
  .head-container.bottom::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform: scale(1.05);
    background: var(--background);
    -webkit-mask-image: var(--head-url);
    mask-image: var(--head-url);
    -webkit-mask-size: contain;
    mask-size: contain;
    clip-path: ellipse(40% 50% at 50% 40%);
  }
  .top-head-img {
    clip-path: polygon(0 0, 100% 0, 100% 75%, 0 75%);
  }
  .bottom-head-img {
    /* clip-path: polygon(0 75%, 100% 75%, 100% 100%, 0 100%) ; */
    clip-path: ellipse(40% 50% at 50% 40%);
  }
  @keyframes bottomHeadMove {
    0% {
      transform: rotate(0) translateY(0);
    }
    25% {
      transform: rotate(-1deg) translateY(10px);
    }
    50% {
      transform: rotate(2deg) translateY(0);
    }
    75% {
      transform: rotate(1deg) translateY(20px);
    }
    100% {
      transform: rotate(-1deg) translateY(15px);
    }
  }

  @keyframes topHeadMove {
    0% {
      transform: rotate(0) translateY(0);
    }
    25% {
      transform: rotate(1deg) translateY(-10px);
    }
    50% {
      transform: rotate(-1deg) translateY(0);
    }
    75% {
      transform: rotate(2deg) translateY(-5px);
    }
    100% {
      transform: rotate(1deg) translateY(-2px);
    }
  }
</style>
