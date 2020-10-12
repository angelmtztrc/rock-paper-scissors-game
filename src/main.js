import App from './App.svelte';

const app = new App({
  target: document.body,
  props: {
    title: 'Rock, Paper and Scissors Game'
  }
});

export default app;
