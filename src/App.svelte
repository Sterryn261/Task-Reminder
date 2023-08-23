<script>
  import Navbar from "./lib/Navbar/Navbar.svelte";
  import Tasklist from "./lib/Tasklist/Tasklist.svelte";

  let tasklist = [
    {
      context: "aaaaa",
      completed: true,
      important: true,
      deleted: false,
    },
    {
      context: "abcde",
      completed: false,
      important: true,
      deleted: false,
    },
    {
      context: "nothing",
      completed: false,
      important: false,
      deleted: false,
    },
  ];
  let filter;
</script>

<main>
  <Navbar bind:tasklist bind:filter />
  <Tasklist bind:tasklist bind:filter />
</main>
