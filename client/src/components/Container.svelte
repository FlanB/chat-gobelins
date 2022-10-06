<div class="background-container">
  <div class="container">
    <slot />
  </div>
</div>

<style>
  .background-container {
    background: #1e1e1e;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
  }
  .container {
    width: 425px;
    background: var(--black);
  }
  @media (max-width: 425px) {
    .container {
      width: 100%;
    }
  }
</style>
