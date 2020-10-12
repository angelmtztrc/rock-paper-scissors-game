<script>
  export let score;
</script>

<header
  class="px-6 py-4 w-full mx-auto max-w-xs lg:max-w-3xl flex justify-between items-center border-2 border-gray-outline rounded-lg">
  <h1 class="text-2xl lg:text-3xl text-white font-bold uppercase">
    <span class="block -mb-3">Rock</span>
    <span class="block -mb-3">Paper</span>
    <span class="block">Scissors</span>
  </h1>
  <div class="bg-white px-8 lg:px-12 py-4 text-center rounded-lg">
    <p class="text-score uppercase leading-none">Score</p>
    <span class="text-5xl lg:text-6xl text-dark font-bold leading-none">{score}</span>
  </div>
</header>
