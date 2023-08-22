<script>
</script>

<div class="add-task">
  <form
    on:submit|preventDefault={() => {
      console.log("added");
    }}
  >
    <textarea placeholder="New task..." />
    <button type="submit">Add</button>
  </form>
</div>

<style lang="scss">
  .add-task {
    textarea {
      resize: none;

      font-family: Verdana, Geneva, Tahoma, sans-serif;
      font-size: 100%;

      width: 51%;
      height: 2em;
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
