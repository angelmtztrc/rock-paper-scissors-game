<script>
  import { createEventDispatcher, onDestroy } from 'svelte';

  const dispatch = createEventDispatcher();
  const close = () => dispatch('close');

  let modal;

  const previously_focused =
    typeof document !== 'undefined' && document.activeElement;

  if (previously_focused) {
    onDestroy(() => {
      previously_focused.focus();
    });
  }
</script>

<style>
  div#modal {
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
</style>

<div
  class="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-25"
  on:click={close} />
<div
  id="modal"
  class="absolute overflow-auto p-8 w-full h-full lg:w-auto lg:h-auto bg-white flex flex-col lg:block rounded-lg"
  role="dialog"
  arial-modal="true"
  bind:this={modal}>
  <div class="flex justify-between items-center">
    <h2 class="text-4xl text-dark font-bold uppercase">Rules</h2>
    <svg
      on:click={close}
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"><path
        fill="#3B4262"
        fill-rule="evenodd"
        d="M16.97 0l2.122 2.121-7.425 7.425 7.425 7.425-2.121 2.12-7.425-7.424-7.425 7.425L0 16.97l7.425-7.425L0 2.121 2.121 0l7.425 7.425L16.971 0z"
        opacity=".25" /></svg>
  </div>
  <main class="my-auto lg:mt-10">
    <img src="images/image-rules.svg" alt="rules" class="w-full" />
  </main>
</div>
