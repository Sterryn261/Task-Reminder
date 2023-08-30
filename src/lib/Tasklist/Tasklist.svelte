<script>
  import Addtask from "./Addtask.svelte";
  import Task from "./Task.svelte";
  import { theme } from "../../stores";

  export let tasklist;
  export let filter;

  function addtask(elem) {
    const context = elem.detail;
    tasklist.push({
      context: context,
      completed: false,
      important: false,
      deleted: false,
    });
    tasklist = tasklist;
  }
  function completeTask(elem) {
    const index = elem.detail;
    tasklist[index].completed = !tasklist[index].completed;
    tasklist = tasklist;
  }
  function permanentlyDeleteTask(elem) {
    const index = elem.detail;
    tasklist.splice(index, 1);
    tasklist = tasklist;
  }
  function deleteTask(elem) {
    const index = elem.detail;
    tasklist[index].deleted = !tasklist[index].deleted;
  }
  function importantTask(elem) {
    const index = elem.detail;
    tasklist[index].important = !tasklist[index].important;

    tasklist = tasklist.sort((a, b) => b.important - a.important);
  }
</script>

<div class="tasklist">
  <Addtask on:addtask={addtask} />
  <span
    style="
    color: var({$theme === 'light'
      ? '--light-description-text'
      : '--dark-description-text'})"
  >
    Or using Ctrl + Enter to add.</span
  >

  <div class="tasks">
    {#each tasklist as task, index}
      <Task
        bind:task
        bind:filter
        {index}
        on:complete-task={completeTask}
        on:delete-task={deleteTask}
        on:important-task={importantTask}
        on:permanently-delete-task={permanentlyDeleteTask}
      />
    {/each}
  </div>
</div>

<style lang="scss">
  .tasklist {
    margin-left: 15em;
    margin-top: 1em;
  }
</style>
