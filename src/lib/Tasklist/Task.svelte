<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  import { theme } from "../../stores";
  import styleTheme from "../theme";

  export let task;
  export let filter;
  export let index;

  let edit;
  let datetime;
  let textarea;

  let remind;
  function setReminder(datetime) {
    clearTimeout(remind);
    if (datetime !== undefined && Date.parse(datetime) - Date.now() >= 0) {
      remind = setTimeout(() => {
        alert(task.context);
      }, Date.parse(datetime) - Date.now());
    }
  }
  setReminder(datetime);
  $: setReminder(datetime);

  function filterContent(Task, Filter) {
    return Filter === "deleted" && Task.deleted === true
      ? true
      : Task.deleted === true
      ? false
      : Filter === "important" && Task.important === true
      ? true
      : Filter === "completed" && Task.completed === true
      ? true
      : Filter === "pending" && Task.completed === false
      ? true
      : Filter === "all"
      ? true
      : false;
  }

  function styleThemeButton(currentTheme) {
    return `
        background: ${styleTheme(currentTheme, "button", false)};
        color: ${styleTheme(currentTheme, "text", false)};
        border-color: ${styleTheme(currentTheme, "border", false)};
      `
  }
</script>

<div
  class="task"
  style:display={filterContent(task, filter) ? "block" : "none"}
>
  <div
    class="main-context"
    style="
    background: {task.important === true
      ? styleTheme($theme, 'important-task', false)
      : styleTheme($theme, 'task', false)};
    color: {styleTheme($theme, 'text', false)}; 
    border-color: {styleTheme($theme, 'border', false)}"
  >
    <button
      title="Mark as completed"
      style="background-color:{task.completed === true
        ? 'lightgreen'
        : 'yellow'}"
      on:click={() => dispatch("complete-task", index)}
    />
    {#if edit}
      <textarea
        bind:this={textarea}
        bind:value={task.context}
        on:input={() => {
          textarea.style.height = "auto";
          textarea.style.height = textarea.scrollHeight - 10 + "px";
        }}
        on:pointerdown={() => {
          textarea.style.height = "auto";
          textarea.style.height = textarea.scrollHeight - 10 + "px";
        }}
        style="color: {styleTheme($theme, "text", false)}"
      />
    {:else}
      <div class="context">{task.context}</div>
    {/if}
  </div>
  <div class="sub-context">
    {#if task.deleted}
      <button
        on:click={() => dispatch("delete-task", index)}
        style="{styleThemeButton($theme)}"
      >
        Restore
      </button>
      <button
        on:click={() => dispatch("permanently-delete-task", index)}
        style="{styleThemeButton($theme)}"
      >
        Permanently Delete
      </button>
    {:else if edit}
      <button
        on:click={() => (edit = false)}
        style="{styleThemeButton($theme)}"
      >
        Complete
      </button>
    {:else}
      <button
        on:click={() => {
          clearTimeout(remind);
          datetime = undefined;
          dispatch("delete-task", index);
        }}
        style="{styleThemeButton($theme)}"
      >
        Delete
      </button>
      <button
        on:click={() => (edit = true)}
        style="{styleThemeButton($theme)}"
      >
        Edit
      </button>
      <button
        on:click={() => dispatch("important-task", index)}
        style="{styleThemeButton($theme)}"
      >
        Mark as important
      </button>
      <div
        class="reminder"
        style="{styleThemeButton($theme)}"
      >
        <span> Remind me at </span>
        <input type="datetime-local" bind:value={datetime} />
      </div>
    {/if}
  </div>
</div>

<style lang="scss">
  .task {
    display: flex;
    flex-direction: column;
    margin-top: 1em;

    .main-context {
      display: flex;
      flex-direction: row;
      gap: 1em;

      width: 60%;
      padding: 1em 0;

      border: 0.01em solid;
      border-radius: 1em;

      button {
        height: 2em;
        width: 2em;
        margin-left: 1em;
        border-radius: 1em;
      }
      textarea {
        resize: none;
        overflow-y: hidden;

        font-family: Verdana, Geneva, Tahoma, sans-serif;
        font-size: 100%;

        width: 90%;
        border: none;
        margin-right: 1em;

        background: transparent;
      }
      .context {
        width: 90%;
        overflow-wrap: break-word;
      }
    }
    .sub-context {
      display: flex;
      flex-direction: row;
      padding-left: 1em;
      gap: 0.5em;

      button {
        border: 0.01em solid;
        border-radius: 0 0 1em 1em;
        padding: 0.5em;

        font-size: 100%;
        font-family: Verdana, Geneva, Tahoma, sans-serif;

        border-top: none;
      }
      button:hover {
        cursor: pointer;
      }
      .reminder {
        border: 0.01em solid #000;
        border-radius: 0 0 1em 1em;
        padding: 0.2em 0.5em;
        border-top: none;

        line-height: 175%;
      }
    }
  }
</style>
