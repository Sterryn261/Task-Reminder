<script>
  import { theme } from "../../stores";
  import Filter from "./Filter.svelte";

  export let tasklist;
  export let filter;
</script>

<nav
  style="background: var({$theme === 'light'
    ? '--light-navbar'
    : '--dark-navbar'});
            border-color: var({$theme === 'light'
    ? '--light-border'
    : '--dark-border'})"
>
  <div
    class="title"
    style="background: var({$theme === 'light'
      ? '--light-title'
      : '--dark-title'});
      color: var({$theme === 'light' ? '--light-text' : '--dark-text'})"
  >
    Task Reminder
  </div>
  <Filter bind:tasklist bind:filter />
  <button
    class="edit-mode"
    on:click={() => {
      $theme === "light" ? theme.set("dark") : theme.set("light");
    }}
    style="background: var({$theme === 'light'
      ? '--light-button'
      : '--dark-button'});
  color: var({$theme === 'light' ? '--light-text' : '--dark-text'}); 
  border-color: var({$theme === 'light' ? '--light-border' : '--dark-border'})"
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
