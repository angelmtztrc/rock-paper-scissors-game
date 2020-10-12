<script>
  export let handleSelect;
</script>

<style>
  main#options {
    background-image: url(/images/bg-triangle.svg);
    background-repeat: no-repeat;
    background-position: center;
    background-size: 200px;
  }
</style>

<main
  id="options"
  class="w-full max-w-xs lg:max-w-md my-auto mx-auto flex justify-between flex-wrap">
  <div
    class="h-32 lg:h-40 w-32 lg:w-40 flex justify-center items-center rounded-full bg-gradient-to-b from-paper-primary to-paper-secondary shadow-inner-b">
    <div
      on:click={() => handleSelect('paper')}
      class="h-24 lg:h-28 w-24 lg:w-28 bg-white flex justify-center items-center rounded-full shadow-inner-t hover:shadow-none transition-shadow ease-in-out duration-300 cursor-pointer">
      <img src="./images/icon-paper.svg" alt="paper" />
    </div>
  </div>
  <div
    class="h-32 lg:h-40 w-32 lg:w-40 flex justify-center items-center rounded-full bg-gradient-to-b from-scissors-primary to-scissors-secondary shadow-inner-b">
    <div
      on:click={() => handleSelect('scissors')}
      class="h-24 lg:h-28 w-24 lg:w-28 bg-white flex justify-center items-center rounded-full shadow-inner-t hover:shadow-none transition-shadow ease-in-out duration-300 cursor-pointer">
      <img src="./images/icon-scissors.svg" alt="scissors" />
    </div>
  </div>
  <div
    class="h-32 lg:h-40 w-32 lg:w-40 mx-auto flex justify-center items-center rounded-full bg-gradient-to-b from-rock-primary to-rock-secondary shadow-inner-b">
    <div
      on:click={() => handleSelect('rock')}
      class="h-24 lg:h-28 w-24 lg:w-28 bg-white flex justify-center items-center rounded-full shadow-inner-t hover:shadow-none transition-shadow ease-in-out duration-300 cursor-pointer">
      <img src="./images/icon-rock.svg" alt="rock" />
    </div>
  </div>
</main>
