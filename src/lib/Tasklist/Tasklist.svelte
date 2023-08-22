<script>
  import Addtask from "./Addtask.svelte";
  import Task from "./Task.svelte";

  export let tasklist;
  export let filter;

  function filterContent(List, Filter) {
    return List.filter((elem) => {
      return Filter === "completed"
        ? elem.completed === true && elem.deleted === false
        : Filter === "pending"
        ? elem.completed === false && elem.deleted === false
        : Filter === "deleted"
        ? elem.deleted === true
        : elem.deleted === false;
    });
  }
  function addtask(Context) {
    const id =
      tasklist.length === 0
        ? 1
        : Math.max(...tasklist.map((elem) => elem.id)) + 1;
    tasklist.push({
      id: id,
      context: Context.detail,
      completed: false,
      important: false,
      deleted: false,
    });
    tasklist = tasklist;
  }
</script>

<div class="tasklist">
  <Addtask on:addtask={addtask} />
  <span> Or using Ctrl + Enter to add.</span>

  <div class="tasks">
    {#each filterContent(tasklist, filter) as task}
      <Task bind:task />
    {:else}
      <span> Nothing here</span>
    {/each}
  </div>
</div>

<style lang="scss">
  .tasklist {
    margin-left: 15em;

    span {
      color: #aaa;
    }
  }
</style>
