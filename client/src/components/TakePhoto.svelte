<script>
  import { onMount } from "svelte"
  import { page } from "$app/stores"
  import AvatarHead from "./AvatarHead.svelte"
  import { loginStep, socket } from "$/stores"
  import randomFonts from "$/functions/randomFonts"

  const fetchApiParameter = $page.url.searchParams.has("fetch")
  const canvasApiParameter = $page.url.searchParams.has("canvas")

  let video = null
  // let canvas = null
  let imgSrc = ""
  let faceOverlayWidth = 0
  let faceOverlayHeight = 0
  let cameraPending = true

  //stream on canvas
  // async function launchCamera() {
  //   let stream = await navigator.mediaDevices.getUserMedia({
  //     video: true,
  //     audio: false,
  //     facingMode: "user",
  //   })
  //   cameraPending = false
  //   video.srcObject = stream
  //   const ctx = canvas.getContext("2d")
  //   const { width, height } = video.getBoundingClientRect()
  //   canvas.width = width
  //   canvas.height = height
  //   ctx.drawImage(video, 0, 0, width, height)
  // }

  // function takePhoto() {
  //   console.log("take photo")
  // }

  const launchCamera = async () => {
    let stream = await navigator.mediaDevices.getUserMedia({
      video: true,
      audio: false,
      facingMode: "user",
    })
    cameraPending = false
    video.srcObject = stream
  }

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
          const a = new FileReader()
          a.onload = (e) => {
            imgSrc = e.target.result
          }
          a.readAsDataURL(blob)
        })
      })
    } else {
      imgSrc = image_data_url
    }
  }

  const handleConfirmClick = () => {
    sessionStorage.setItem("avatar", imgSrc)
    socket.emit("setAvatar", imgSrc)
    loginStep.update((n) => n + 1)
  }

  const handleCancelClick = () => {
    imgSrc = ""
    launchCamera()
  }

  onMount(launchCamera)
</script>

<div class="video-container">
  {#if imgSrc}
    <div class="step2-container">
      <div class="presentation-text">
        <p use:randomFonts>Tu valides ce beau visage ?</p>
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
      <AvatarHead {imgSrc} background="white" />
      <div class="cta">
        <button on:click={handleConfirmClick}>
          <p use:randomFonts>oh que oui !</p>
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
        <button class="stroke-button" on:click={handleCancelClick}>
          <p use:randomFonts>horrible...</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke="#EFEFEF"
            viewBox="0 0 213 48"
            preserveAspectRatio="none"
            fill="none"
          >
            <path
              d="m0 0 55 3.5L139 0h74v17.3l-2.6 14 2.6 15-92-3.5L58.6 48 0 46.3l2.6-29L0 0Z"
            />
          </svg>
        </button>
      </div>
    </div>
  {:else}
    <!-- svelte-ignore a11y-media-has-caption -->
    <video bind:this={video} on:click={takePhoto} autoplay playsinline />
    <!-- <canvas bind:this={canvas} on:click={takePhoto} /> -->
    {#if cameraPending}
      <div class="pending-message">
        <p use:randomFonts>autorise la caméra bg, laisse moi voir ta tronche</p>
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
      </div>
    {:else}
      <div
        bind:clientWidth={faceOverlayWidth}
        bind:clientHeight={faceOverlayHeight}
        class="face-overlay"
      >
        <div class="line" />
        <div class="circle" />
      </div>
    {/if}
  {/if}
</div>

<style>
  .step2-container {
    display: grid;
    grid-template-rows: repeat(3, 1fr);
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

  svg {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
  }
  .cta {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
  button {
    position: relative;
    z-index: 1;
    padding: 1rem 3rem;
  }
  .stroke-button {
    color: var(--white);
  }
  .pending-message {
    position: absolute;
    color: var(--white);
    font-size: 1.5rem;
    width: 80%;
    z-index: 1;
    color: var(--black);
    padding: 1.5rem;
    text-align: center;
    text-transform: uppercase;
  }
  .face-overlay {
    z-index: 1;
    position: absolute;
    width: 80%;
    height: 60%;
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
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  video,
  canvas {
    transform: scaleX(-1);
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
</style>
