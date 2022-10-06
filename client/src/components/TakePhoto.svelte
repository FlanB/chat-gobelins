<script>
  import { onMount } from "svelte"
  import { page } from "$app/stores"
  import AvatarHead from "./AvatarHead.svelte"

  const fetchApiParameter = $page.url.searchParams.has("fetch")

  let video = null
  let imgSrc = ""
  let faceOverlayWidth = 0
  let faceOverlayHeight = 0

  onMount(async () => {
    let stream = await navigator.mediaDevices.getUserMedia({
      video: true,
      audio: false,
      facingMode: "user",
    })
    video.srcObject = stream
  })

  const takePhoto = () => {
    video.srcObject.getTracks().forEach((track) => track.stop())
    const canvas = document.createElement("canvas")
    const ctx = canvas.getContext("2d")

    const faceOverlayWidthModified = faceOverlayWidth * 0.75
    const faceOverlayHeightModified = faceOverlayHeight * 0.65

    canvas.width = faceOverlayWidthModified
    canvas.height = faceOverlayHeightModified
    ctx.scale(-1, 1)

    ctx.drawImage(
      video,
      (video.videoWidth - faceOverlayWidthModified) / 2,
      (video.videoHeight - faceOverlayHeightModified) / 2,
      canvas.width,
      canvas.height,
      -canvas.width,
      0,
      canvas.width,
      canvas.height
    )
    let image_data_url = canvas.toDataURL("image/jpeg")

    if (fetchApiParameter) {
      fetch("https://api.remove.bg/v1.0/removebg", {
        method: "POST",
        headers: {
          accept: "image/*",
          "X-Api-Key": "9bkaSAWoFbREYvjVnVemJ1qa",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          image_file_b64: image_data_url,
          crop: true,
          size: "preview",
        }),
      }).then((response) => {
        response.blob().then((blob) => {
          imgSrc = URL.createObjectURL(blob)
        })
      })
    } else {
      imgSrc = image_data_url
    }
  }
</script>

<div class="video-container">
  <div
    bind:clientWidth={faceOverlayWidth}
    bind:clientHeight={faceOverlayHeight}
    class="face-overlay"
  >
    <div class="line" />
    <div class="circle" />
  </div>
  {#if imgSrc}
    <AvatarHead {imgSrc} background="aqua" />
  {:else}
    <!-- svelte-ignore a11y-media-has-caption -->
    <video bind:this={video} on:click={takePhoto} autoplay />
  {/if}
</div>

<style>
  .face-overlay {
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
  video {
    transform: scaleX(-1);
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
</style>
