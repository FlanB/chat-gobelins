<script>
  export let imgSrc
</script>

<div class="container">
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
  }
  img {
    object-fit: contain;
    filter: grayscale();
  }

  .head-container.top {
    animation: topHeadMove 1s infinite linear alternate;
  }
  .head-container.top::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform: scale(1.05);
    background: aqua;
    -webkit-mask-image: url("/head.png");
    mask-image: url("/head.png");
    clip-path: polygon(-10% -10%, 100% 0, 100% 75%, 0 75%);
  }
  .head-container.bottom {
    position: absolute;
    top: 0;
    left: 0;
    animation: bottomHeadMove 1s infinite linear alternate;
  }
  .head-container.bottom::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform: scale(1.05);
    background: aqua;
    -webkit-mask-image: url("/head.png");
    mask-image: url("/head.png");
    clip-path: polygon(0 75%, 100% 75%, 100% 100%, 0 100%);
  }
  .top-head-img {
    clip-path: polygon(0 0, 100% 0, 100% 75%, 0 75%);
  }
  .shadow {
    height: 100%;

    width: 100%;
    z-index: -1;

    filter: none;
  }
  .bottom-head-img {
    clip-path: polygon(0 75%, 100% 75%, 100% 100%, 0 100%);
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
