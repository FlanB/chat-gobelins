<script>
  import { onMount } from "svelte"

  let video = null
  let imgSrc = ""

  onMount(async () => {
    let stream = await navigator.mediaDevices.getUserMedia({
      video: true,
      audio: false,
      facingMode: "user",
    })
    // reverse stream direction
    video.srcObject = stream
  })

  const takePhoto = () => {
    const canvas = document.createElement("canvas")
    const ctx = canvas.getContext("2d")
    canvas.width = video.videoWidth
    canvas.height = video.videoHeight
    ctx.scale(-1, 1)
    ctx.drawImage(video, -canvas.width, 0, canvas.width, canvas.height)
    let image_data_url = canvas.toDataURL("image/jpeg")

    // stop the video stream
    video.srcObject.getTracks().forEach((track) => track.stop())

    // data url of the image
    console.log(image_data_url)
    imgSrc = image_data_url
  }
</script>

<!-- svelte-ignore a11y-media-has-caption -->

<!-- overlay on video -->

<div class="video-container">
  <div class="overlay">
    <div class="line" />
    <div class="circle" />
  </div>
  {#if imgSrc}
    <img src={imgSrc} alt="" />
  {:else}
    <video bind:this={video} on:click={takePhoto} autoplay />
  {/if}
</div>

<style>
  .overlay {
    z-index: 1;
    position: absolute;
    width: 40vw;
    height: 60vw;
    pointer-events: none;
  }
  .line {
    position: absolute;
    bottom: 20%;
    height: 4px;
    width: 100%;
    background: white;
  }
  .circle {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 4px solid white;
  }
  .video-container {
    position: relative;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  img,
  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  video{
    transform: scaleX(-1);
  }
</style>
