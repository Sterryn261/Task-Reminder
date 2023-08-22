<script>
  import Addtask from "./Addtask.svelte";
  import Task from "./Task.svelte";

  export let tasklist;
  export let filter;
</script>

<div class="tasklist">
  <Addtask />
  <span> Or using Ctrl + Enter to add.</span>

  <div class="tasks">
    {#each tasklist as task}
      <Task bind:task/>
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
