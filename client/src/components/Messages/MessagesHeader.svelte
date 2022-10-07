<script>
  import randomFonts from "$/functions/randomFonts"

  import { socket } from "$/stores"

  const imgSrc = sessionStorage.getItem("avatar")

  export let groupTitle = "The office"
  export let membersList = ["Jim", "Pam", "Dwight", "Kelly"]
  export let onClick = () => {}

  socket.emit("getUsers")
  socket.on("users", (data) => {
    membersList = data.map((user) => user.name).slice(0, 4)
    console.log(membersList)
  })
</script>

<header on:click={onClick} class="messages-header">

  <img class="group-img" src={imgSrc} alt="" style="filter:grayscale()" />
  <div>
    <h1 use:randomFonts>{groupTitle}</h1>
    <h2>{membersList},...</h2>
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
    z-index: 10;
    cursor: pointer;
  }

  .group-img {
    height: 4rem;
    transform: translateY(1rem);
  }
  h2 {
    font-size: 0.75rem;
  }
</style>
