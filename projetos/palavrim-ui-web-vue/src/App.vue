<template>
  <header>
    <h1>palavrim</h1>
  </header>
  <main>
    <GuessPanel :match="match"></GuessPanel>
    <InputPanel :match="match" @onGuess="addGuess"></InputPanel>
    <StatsDialog></StatsDialog>
    <HelpDialog></HelpDialog>
    <br/>
  </main>
  <footer>
    <i> &copy; sombriks {{ date }} </i>
  </footer>
</template>

<script setup>
import {ref} from 'vue'
import GuessPanel from '@/components/GuessPanel.vue'
import StatsDialog from '@/components/StatsDialog.vue'
import HelpDialog from '@/components/HelpDialog.vue'
import words from '@/assets/words'
import {newMatch} from "@/palavrim";
import InputPanel from "@/components/InputPanel.vue";

const match = ref(newMatch(words))

const date = ref(new Date().getFullYear())

const addGuess = (guess) => {
  // https://vuejs.org/guide/essentials/reactivity-fundamentals.html#limitations-of-reactive
  match.value.guesses = [...match.value.guesses, guess]
}
</script>

<style scoped>
header,
main,
footer {
  display: flex;
  justify-content: center;
  align-items: center;
}

main {
  flex-direction: column;
}
</style>
