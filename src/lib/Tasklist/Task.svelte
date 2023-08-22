<script>
  export let task;
</script>

<div class="task">
  <div class="main-context">
    <button title="Mark as completed" style:background-color = {task.completed === true ? "lightgreen" : "yellow"}/>
    <div class="context">{task.context}</div>
  </div>
  <div class="sub-context">
    <button> Delete </button>
    <button> Edit </button>
    <button> Mark as important </button>
    <div class="reminder">
      <span> Remind me at </span>
      <input type="datetime-local" />
    </div>
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

      border: 0.01em solid #000;
      border-radius: 1em;

      background: #fff;

      button {
        height: 2em;
        width: 2em;
        margin-left: 1em;
        border-radius: 1em;
      }
    }
    .sub-context {
      display: flex;
      flex-direction: row;
      padding-left: 1em;
      gap: 0.5em;

      button {
        background: #fff;
        border: 0.01em solid #000;
        border-radius: 0 0 1em 1em;
        padding: 0.5em;

        font-size: 100%;
        font-family: Verdana, Geneva, Tahoma, sans-serif;

        border-top: none;
      }
      .reminder {
        background: #fff;
        border: 0.01em solid #000;
        border-radius: 0 0 1em 1em;
        padding: 0.2em 0.5em;
        border-top: none;

        line-height: 175%;
      }
    }
  }
</style>
