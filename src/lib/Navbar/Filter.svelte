<script>
  export let tasklist;
  export let filter = "all";

  let tasks = [
    { display: "All", command: "all", number: 0 },
    { display: "Important", command: "important", number: 0 },
    { display: "Completed", command: "completed", number: 0 },
    { display: "Pending", command: "pending", number: 0 },
    { display: "Deleted", command: "deleted", number: 0 },
];
  $: {
    tasks[0].number = tasklist.filter((elem) => elem.deleted === false).length;
    tasks[1].number = tasklist.filter(
      (elem) => elem.important === true && elem.deleted === false
    ).length;
    tasks[2].number = tasklist.filter(
      (elem) => elem.completed === true && elem.deleted === false
    ).length;
    tasks[3].number = tasklist.filter(
      (elem) => elem.completed === false && elem.deleted === false
    ).length;
    tasks[4].number = tasklist.filter(
      (elem) => elem.deleted === true
    ).length;
  }
</script>

<div class="context-filter">
  {#each tasks as task}
    <button
    class={task.command}
    on:click={() => {
      filter = task.command;
    }}
  >
    <span> {task.display} </span>
    <div class="counter">
      {task.number}
    </div>
  </button>
  {/each}
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
