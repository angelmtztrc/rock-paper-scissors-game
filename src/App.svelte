<script>
  import SelectItem from './components/SelectItem.svelte';
  import MatchResult from './components/MatchResult.svelte';
  import Header from './components/Header.svelte';
  import Modal from './components/Modal.svelte';

  let score = 0;
  let selectedItem = '';
  let enemyItem = '';
  let matchStatus = '';
  let rules = false;

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
  };

  const generateMatch = async () => {
    await generateEnemyPick();
    if (selectedItem === 'paper') {
      if (enemyItem === 'paper') {
        matchStatus = 'Draw';
      } else if (enemyItem === 'scissors') {
        score >= 1 ? score-- : null;
        matchStatus = 'You Lose';
      } else {
        score++;
        matchStatus = 'You Win';
      }
    } else if (selectedItem === 'scissors') {
      if (enemyItem === 'paper') {
        score++;
        matchStatus = 'You Win';
      } else if (enemyItem === 'scissors') {
        matchStatus = 'Draw';
      } else {
        score >= 1 ? score-- : null;
        matchStatus = 'You Lose';
      }
    } else {
      if (enemyItem === 'paper') {
        score >= 1 ? score-- : null;
        matchStatus = 'You Lose';
      } else if (enemyItem === 'scissors') {
        score++;
        matchStatus = 'You Win';
      } else {
        matchStatus = 'Draw';
      }
    }
  };

  const handleSelect = item => {
    selectedItem = item;
    generateMatch();
  };

  const handleReset = () => {
    selectedItem = '';
    enemyItem = '';
  };
</script>

<div class="relative bg-gradient-to-b from-radial-primary to-radial-secondary">
  {#if rules}
    <Modal on:close={() => (rules = false)} />
  {/if}
  <main class="min-h-screen py-10  container mx-auto flex flex-col">
    <Header {score} />

    {#if selectedItem === '' || selectedItem === null || selectedItem === undefined}
      <SelectItem {handleSelect} />
    {:else}
      <MatchResult {selectedItem} {enemyItem} {matchStatus} {handleReset} />
    {/if}
    <div class="absolute bottom-0 right-0 w-full flex justify-end mb-5 mr-5">
      <button
        on:click={() => (rules = true)}
        class="px-8 py-2 border-2 border-white rounded-lg text-white uppercase focus:outline-none">Rules</button>
    </div>
  </main>
</div>
