<script>
  import { theme } from "../../stores";
  import styleTheme from "../theme";

  export let tasklist;
  export let filter = "all";

  let tasks = [
    {
      display: "All",
      command: "all",
      number: 0,
      lightBg: "#F9F5F6",
      darkBg: "#EEEEEE",
      lightText: "#000",
      darkText: "#000",
    },
    {
      display: "Important",
      command: "important",
      number: 0,
      lightBg: "#FF9B9B",
      darkBg: "#C63D2F",
      lightText: "#000",
      darkText: "#fff",
    },
    {
      display: "Completed",
      command: "completed",
      number: 0,
      lightBg: "#CBFFA9",
      darkBg: "#4E9F3D",
      lightText: "#000",
      darkText: "#fff",
    },
    {
      display: "Pending",
      command: "pending",
      number: 0,
      lightBg: "#FDFFAE",
      darkBg: "#FEC260",
      lightText: "#000",
      darkText: "#000",
    },
    {
      display: "Deleted",
      command: "deleted",
      number: 0,
      lightBg: "#787A91",
      darkBg: "#444444",
      lightText: "#fff",
      darkText: "#fff",
    },
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
    tasks[4].number = tasklist.filter((elem) => elem.deleted === true).length;
  }
</script>

<div class="context-filter">
  {#each tasks as task}
    <button
      class={task.command}
      on:click={() => {
        filter = task.command;
      }}
      style="background: {$theme === 'light' ? task.lightBg : task.darkBg};
            color: {$theme === 'light' ? task.lightText : task.darkText};
            border-color: var({$theme === 'light' ? '--light-border' : '--dark-border'})"
    >
      <span> {task.display} </span>
      <div
        class="counter"
        style="background: {filter === task.command
          ? styleTheme($theme, 'button', true)
          : styleTheme($theme, 'button', false)};
  color: {filter === task.command
          ? styleTheme($theme, 'text', true)
          : styleTheme($theme, 'text', false)};
  border-color: {filter === task.command
          ? styleTheme($theme, 'border', true)
          : styleTheme($theme, 'border', false)}"
      >
        {task.number}
      </div>
    </button>
  {/each}
</div>

<style lang="scss">
  .context-filter {
    display: flex;
    flex-direction: column;

    border: 0.05em solid;
    border-right: none;

    button {
      position: relative;
      text-align: left;
      font-size: 100%;

      padding: 0.3em 1em;
      border: none;
      border-top: 0.05em solid;
      border-bottom: 0.05em solid;

      .counter {
        position: absolute;

        height: 100%;
        line-height: 175%;
        width: 20%;
        top: 0;
        right: 0;

        text-align: center;

        border-left: 0.01em solid;
        border-right: none;
        border-radius: 1em 0 0 1em;
      }
    }
    button:hover {
      cursor: pointer;
    }
  }
</style>
