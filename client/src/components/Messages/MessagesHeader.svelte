<script>
  import ArrowBack from "../Icons/ArrowBack.svelte"

  export let groupTitle = "The office"
  export let membersList = ["Jim", "Pam", "Dwight", "Kelly"]
</script>

<header class="messages-header">
  <ArrowBack width="1rem" height="1.25rem" />
  <img
    class="group-img"
    src="/headWendy.png"
    alt=""
    style="filter:grayscale()"
  />
  <div>
    <h1>{groupTitle}</h1>
    <h2>{membersList}</h2>
  </div>
</header>

<style>
  .messages-header {
    display: flex;
    align-items: center;
    background: var(--black);
    padding: 0.5rem 1.5rem;
    gap: 1.5rem;
    color: var(--white);
  }

  .group-img {
    height: 4rem;
    transform: translateY(1rem);
  }
  h2 {
    font-size: 0.75rem;
  }
</style>
