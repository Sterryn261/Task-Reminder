<script>
  import { createEventDispatcher } from "svelte";
  let dispatch = createEventDispatcher();

  let textarea;
  let context;
</script>

<div class="add-task">
  <form
    on:submit|preventDefault={() => {
      dispatch("addtask", context);
      context = "";
    }}
  >
    <textarea
      placeholder="New task..."
      bind:this={textarea}
      bind:value={context}
      on:input={() => {
        textarea.style.height = "auto";
        textarea.style.height = textarea.scrollHeight - 10 + "px";
      }}
    />
    <button type="submit">Add</button>
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

      border: 0.01em solid #000;
      border-radius: 0.5em;
      margin-left: 1em;

      font-size: 125%;

      background: #fff;
    }
  }
</style>
