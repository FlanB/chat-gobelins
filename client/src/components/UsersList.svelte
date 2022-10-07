<script>
  import randomFonts from "$/functions/randomFonts"
  import { socket } from "$/stores"
  import AvatarHead from "./AvatarHead.svelte"
  import ArrowBack from "./Icons/ArrowBack.svelte"

  export let handleHeaderClick = () => {}
  let users = []
  socket.emit("getUsers")
  socket.on("users", (data) => {
    users = data
    console.log(users)
  })
</script>

<div class="arrow-back" on:click={handleHeaderClick}>
  <ArrowBack width="1rem" height="1.25rem" />
</div>
<div class="users-list">
  {#each users as user}
    <div
      class="user"
      style:transform={`translateX(${Math.random() * 10 - 5}px) translateY(${
        Math.random() * 10 - 5
      }px) rotate(${Math.random() * 40 - 20}deg)
        scale(${Math.random() * 0.5 + 0.5})`}
    >
      <AvatarHead width="100%" imgSrc={user.avatar} background={user.color} />
      <p>{user.name}</p>
    </div>
  {/each}
</div>

<style>
  .users-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
    grid-gap: 1rem;
    padding: 1rem;
    color: var(--white);
    font-family: "Handmade", sans-serif;
    position: relative;
  }
  p{
    position: absolute;
    left: 0;
    right: 0;
    top: 50%;
    text-align: center;

  }
  .arrow-back {
    color: var(--white);
    padding: 1rem;
  }
</style>
