<script>
  import Container from "$/components/Container.svelte"
  import MessagesBox from "$/components/Messages/MessagesBox.svelte"
  import Step1 from "$/components/Steps/Step1.svelte"
  import Step3 from "$/components/Steps/Step3.svelte"
  import Step4 from "$/components/Steps/Step4.svelte"
  import TakePhoto from "$/components/TakePhoto.svelte"

  import { loginStep } from "$/stores"

  //TODO: Check if pending message of camera is up
  //TODO: Create a function to transform all words with different fonts
  //TODO: optimize step template
</script>

<Container>
  <!-- <MessagesBox /> -->
  {#if $loginStep === 0}
    <Step1 />
  {:else if $loginStep === 1}
    <TakePhoto />
  {:else if $loginStep === 2}
    <Step3 />
  {:else if $loginStep === 3}
    <Step4 />
    {:else}
    <MessagesBox />
  {/if}
</Container>
