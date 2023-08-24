<script>
  import Filter from "./Filter.svelte";

  export let tasklist;
  export let filter;
</script>

<nav>
  <div class="title">Task Reminder</div>
  <Filter bind:tasklist bind:filter />
</nav>

<style lang="scss">
  nav {
    position: fixed;
    background-color: #aaa;

    top: 0;
    left: 0;

    border-right: 0.01em solid #000;

    height: 100%;

    .title {
      padding: 0.5em 1em;
      background-color: white;

      font-size: 140%;
      text-align: center;
    }
  }
</style>
