<script>
  import { onMount } from "svelte";
  import Navbar from "./lib/Navbar/Navbar.svelte";
  import Tasklist from "./lib/Tasklist/Tasklist.svelte";
  import { theme } from "./stores";

  let tasklist = [];
  onMount(() => {
    if (localStorage.getItem("theme") === null) {
      $theme = "dark";
    } else {
      $theme = localStorage.getItem("theme");
    }
    tasklist = JSON.parse(localStorage.getItem("tasklist"));
  });

  let filter;
</script>

<main style="background: {$theme === 'light' ? '#F1F1F1' : '#181818'};">
  <Navbar bind:tasklist bind:filter />
  <Tasklist bind:tasklist bind:filter />
</main>

<style lang="scss">
  main {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }
</style>
