<script>
  export let selectedItem;
  export let enemyItem;
  export let matchStatus;
  export let handleReset;
</script>

<main class="w-full max-w-xs lg:max-w-2xl my-auto mx-auto flex justify-between flex-wrap lg:flex-no-wrap">
  <div class="order-1">
    <p class="mb-10 text-lg text-white text-center uppercase">You Picked</p>
    <div
      class="h-36 lg:h-48 w-36 lg:w-48 flex justify-center items-center rounded-full bg-gradient-to-b from-{selectedItem}-primary to-{selectedItem}-secondary {matchStatus === 'You Win' ? 'shadow-win' : 'shadow-inner-b'}">
      <div
        class="h-28 lg:h-36 w-28 lg:w-36 bg-white flex justify-center items-center rounded-full shadow-inner-t hover:shadow-none transition-shadow ease-in-out duration-300 cursor-pointer">
        <img src="./images/icon-{selectedItem}.svg" alt={selectedItem} />
      </div>
    </div>
  </div>
  <div class="order-3 lg:order-2 mx-auto lg:mx-0 mt-5 lg:mt-0 flex flex-col justify-center items-center">
    <h1 class="mb-2 text-4xl text-white font-bold uppercase">{matchStatus}</h1>
    <button
      on:click={handleReset}
      class="px-10 py-2 bg-white rounded-lg text-sm text-red-600 uppercase">Play
      Again</button>
  </div>
  <div class="order-2 lg:order-3">
    <p class="mb-10 text-lg text-white text-center uppercase">
      The House Picked
    </p>
    <div
      class="h-36 lg:h-48 w-36 lg:w-48 flex justify-center items-center rounded-full bg-gradient-to-b from-{enemyItem}-primary to-{enemyItem}-secondary {matchStatus === 'You Lose' ? 'shadow-win' : 'shadow-inner-b'}">
      <div
        class="h-28 lg:h-36 w-28 lg:w-36 bg-white flex justify-center items-center rounded-full shadow-inner-t hover:shadow-none transition-shadow ease-in-out duration-300 cursor-pointer">
        <img src="./images/icon-{enemyItem}.svg" alt={enemyItem} />
      </div>
    </div>
  </div>
</main>
