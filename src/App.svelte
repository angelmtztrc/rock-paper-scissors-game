<script>
  let score = 0;
  let selectedItem = '';
  let enemyItem = '';
  let matchStatus = '';

  const generateEnemyPick = () => {
    const enemyPick = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    switch (enemyPick) {
      case 1:
        enemyItem = 'paper';
        break;
      case 2:
        enemyItem = 'scissors';
        break;
      case 3:
        enemyItem = 'rock';
        break;
      default:
        break;
    }
  }

  const generateMatch = async () => {
    await generateEnemyPick();
    if(selectedItem === 'paper'){
      if(enemyItem === 'paper'){
        matchStatus = 'Draw'
      } else if(enemyItem === 'scissors'){
        score >= 1 ? score-- : null;
        matchStatus = 'You Lose'
      } else {
        score++;
        matchStatus = 'You Win'
      }
    } else if(selectedItem === 'scissors') {
      if(enemyItem === 'paper'){
        score++;
        matchStatus = 'You Win'
      } else if(enemyItem === 'scissors'){
        matchStatus = 'Draw'
      } else {
        score >= 1 ? score-- : null;
        matchStatus = 'You Lose'
      }
    } else {
      if(enemyItem === 'paper'){
        score >= 1 ? score-- : null;
        matchStatus = 'You Lose'
      } else if(enemyItem === 'scissors'){
        score++;
        matchStatus = 'You Win'
      } else {
        matchStatus = 'Draw'
      }
    }
  }

  const handleSelect = item => {
    selectedItem = item;
    generateMatch();
  }

  const handleReset = () => {
    selectedItem = '';
    enemyItem = '';
  }

</script>

<main class="bg-gradient-to-b from-radial-primary to-radial-secondary">
  <div class="min-h-screen py-10  container mx-auto flex flex-col">
  <header class="px-6 py-4 xl:w-full xl:max-w-3xl xl:mx-auto flex justify-between items-center border-2 border-gray-outline rounded-lg">
    <h1 class="text-3xl text-white font-bold uppercase">
      <span class="block -mb-3">Rock</span>
      <span class="block -mb-3">Paper</span>
      <span class="block">Scissors</span>
    </h1>
    <div class="bg-white px-12 py-4 text-center rounded-lg">
      <p class="text-score uppercase leading-none">Score</p>
      <span class="text-6xl text-dark font-bold leading-none">{score}</span>
    </div>
  </header>
  {#if selectedItem === '' || selectedItem === null || selectedItem === undefined}
    <main id="options" class="w-full max-w-md my-auto mx-auto flex justify-between flex-wrap">
      <div class="h-40 w-40 flex justify-center items-center rounded-full bg-gradient-to-b from-paper-primary to-paper-secondary shadow-inner-b">
        <div on:click={() => handleSelect('paper')} class="h-28 w-28 bg-white flex justify-center items-center rounded-full shadow-inner-t hover:shadow-none transition-shadow ease-in-out duration-300 cursor-pointer">
          <img src="./images/icon-paper.svg" alt="paper" />
        </div>
      </div>
      <div class="h-40 w-40 flex justify-center items-center rounded-full bg-gradient-to-b from-scissors-primary to-scissors-secondary shadow-inner-b">
        <div on:click={() => handleSelect('scissors')} class="h-28 w-28 bg-white flex justify-center items-center rounded-full shadow-inner-t hover:shadow-none transition-shadow ease-in-out duration-300 cursor-pointer">
          <img src="./images/icon-scissors.svg" alt="scissors" />
        </div>
      </div>    
      <div class="h-40 w-40 mx-auto flex justify-center items-center rounded-full bg-gradient-to-b from-rock-primary to-rock-secondary shadow-inner-b">
        <div on:click={() => handleSelect('rock')} class="h-28 w-28 bg-white flex justify-center items-center rounded-full shadow-inner-t hover:shadow-none transition-shadow ease-in-out duration-300 cursor-pointer">
          <img src="./images/icon-rock.svg" alt="rock" />
        </div>
      </div>
    </main>
  {:else}
    <main class="w-full max-w-2xl my-auto mx-auto flex justify-between">
      <div>
        <p class="mb-10 text-lg text-white text-center uppercase">You Picked</p>
        <div class="h-48 w-48 flex justify-center items-center rounded-full bg-gradient-to-b from-{selectedItem}-primary to-{selectedItem}-secondary { matchStatus === 'You Win' ? 'shadow-win' : 'shadow-inner-b' }">
          <div class="h-36 w-36 bg-white flex justify-center items-center rounded-full shadow-inner-t hover:shadow-none transition-shadow ease-in-out duration-300 cursor-pointer">
            <img src="./images/icon-{selectedItem}.svg" alt="{selectedItem}" />
          </div>
        </div>
      </div>
      <div class="flex flex-col justify-center items-center">
        <h1 class="mb-2 text-4xl text-white font-bold uppercase">{matchStatus}</h1>
        <button on:click={handleReset} class="px-10 py-2 bg-white rounded-lg text-sm text-red-600 uppercase">Play Again</button>
      </div>
      <div>
        <p class="mb-10 text-lg text-white text-center uppercase">The House Picked</p>
        <div class="h-48 w-48 flex justify-center items-center rounded-full bg-gradient-to-b from-{enemyItem}-primary to-{enemyItem}-secondary { matchStatus === 'You Lose' ? 'shadow-win' : 'shadow-inner-b' }">
          <div class="h-36 w-36 bg-white flex justify-center items-center rounded-full shadow-inner-t hover:shadow-none transition-shadow ease-in-out duration-300 cursor-pointer">
            <img src="./images/icon-{enemyItem}.svg" alt="{enemyItem}" />
          </div>
        </div>
      </div>
    </main>
  {/if}
</div>
</main>

<style>
  main#options {
    background-image: url(/images/bg-triangle.svg);
    background-repeat: no-repeat;
    background-position: center;
    background-size: 200px;
  }
</style>