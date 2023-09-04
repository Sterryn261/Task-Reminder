<script>
  import { theme } from "../../stores";
  import styleTheme from "../theme";

  import Filter from "./Filter.svelte";

  export let tasklist;
  export let filter;
</script>

<nav
  style="background: {styleTheme($theme, 'navbar', false)};
        border-color: {styleTheme($theme, 'border', false)}"
>
  <div
    class="title"
    style="background: {styleTheme($theme, 'title', false)};
      color: {styleTheme($theme, 'text', false)}"
  >
    Task Reminder
  </div>
  <Filter bind:tasklist bind:filter />
  <button
    class="edit-mode"
    on:click={() => {
      $theme === "light" ? theme.set("dark") : theme.set("light");
    }}
    style="background: {styleTheme($theme, 'button', false)};
  color: {styleTheme($theme, 'text', false)}; 
  border-color: v{styleTheme($theme, 'border', false)}"
  >
    Light - Dark mode
  </button>
</nav>

<style lang="scss">
  nav {
    position: fixed;
    top: 0;
    left: 0;

    border-right: 0.01em solid;

    height: 100%;

    .title {
      padding: 0.5em 1em;

      font-size: 140%;
      text-align: center;
    }
    .edit-mode {
      position: absolute;
      right: 0;
      bottom: 0;

      height: 5%;
      width: 100%;
      border: 0;
      border-top: 0.01em solid;

      font-size: 125%;
    }
  }
</style>
