<script>
  import { createEventDispatcher } from "svelte";
  let dispatch = createEventDispatcher();

  import { theme } from "../../stores";
  import styleTheme from "../theme";

  let textarea;
  let context = "";

  function addTask() {
    if (context !== "") dispatch("addtask", context);
    context = "";
  }
</script>

<div class="add-task">
  <form
    on:submit|preventDefault={() => {
      addTask();
    }}
  >
    <textarea
      placeholder="New task..."
      style="background: {styleTheme($theme, "task", false)};
        color: {styleTheme($theme, "text", false)};
        border-color: {styleTheme($theme, "border", false)};"
      bind:this={textarea}
      bind:value={context}
      on:input={() => {
        textarea.style.height = "auto";
        textarea.style.height = textarea.scrollHeight - 10 + "px";
      }}
      on:keydown={(e) => {
        if (e.key === "Enter" && e.ctrlKey === true) {
          addTask();
        }
      }}
    />
    <button
      type="submit"
      style="background: {styleTheme($theme, "button", false)};
      color: {styleTheme($theme, "text", false)};
      border-color: {styleTheme($theme, "border", false)};"
      >Add</button
    >
  </form>
</div>

<style lang="scss">
  .add-task {
    textarea {
      resize: none;
      overflow-y: hidden;

      font-family: Verdana, Geneva, Tahoma, sans-serif;
      font-size: 100%;

      width: 51%;
      padding: 0.5em;
      border-radius: 1em;
    }
    button {
      position: absolute;

      height: 2.3em;
      width: 4em;

      border: 0.01em solid;
      border-radius: 0.5em;
      margin-left: 1em;

      font-size: 125%;

    }
    button:hover {
      cursor: pointer;
    }
  }
</style>
