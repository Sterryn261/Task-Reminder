<script>
  export let tasklist;
  export let filter = "all";

  let tasks = {
    all: 0,
    completed: 0,
    pending: 0,
    deleted: 0,
  };
  $: {
    tasks.all = tasklist.filter((elem) => elem.deleted === false).length;
    tasks.completed = tasklist.filter((elem) => elem.completed === true).length;
    tasks.pending = tasklist.filter((elem) => elem.completed === false).length;
    tasks.deleted = tasklist.filter((elem) => elem.deleted === true).length;
  }
</script>

<div class="context-filter">
  <button class="all" on:click={() => {filter = "all"}}>
    <span> All </span>
    <div class="counter">
      {tasks.all}
    </div>
  </button>
  <button class="completed" on:click={() => {filter = "completed"}}>
    <span> Completed </span>
    <div class="counter">
      {tasks.completed}
    </div>
  </button>
  <button class="pending" on:click={() => {filter = "pending"}}>
    <span> Pending </span>
    <div class="counter">
      {tasks.pending}
    </div>
  </button>
  <button class="deleted" on:click={() => {filter = "deleted"}}>
    <span> Deleted </span>
    <div class="counter">
      {tasks.deleted}
    </div>
  </button>
</div>

<style lang="scss">
  .context-filter {
    display: flex;
    flex-direction: column;

    button {
      position: relative;
      text-align: left;
      font-size: 100%;

      padding: 0.3em 1em;

      .counter {
        position: absolute;

        height: 100%;
        line-height: 175%;
        width: 20%;
        top: 0;
        right: 0;

        text-align: center;

        border-left: 0.01em solid #000;

        background: #fff;
      }
    }
  }
</style>
