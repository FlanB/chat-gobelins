<script>
  import Container from "$/components/Container.svelte"
  import MessagesBox from "$/components/Messages/MessagesBox.svelte"
  import Step1 from "$/components/Steps/Step1.svelte"
  import TakePhoto from "$/components/TakePhoto.svelte"

  import { loginStep } from "$/stores"
  console.log($loginStep)
</script>

<Container>
  <!-- <MessagesBox /> -->
  {#if $loginStep === 0}
    <Step1 />
  {:else if $loginStep === 1}
    <TakePhoto />
  {/if}
</Container>
