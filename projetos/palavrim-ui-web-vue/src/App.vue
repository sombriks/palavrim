<template>
  <header>
    <button>
      Rules
    </button>
    <h1>palavrim</h1>
    <button>
      Stats
    </button>
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
import {getCurrentMatch, isFinished, isVictory, saveCurrentMatch} from "@/palavrim";
import InputPanel from "@/components/GuessInput.vue";


const match = ref(getCurrentMatch())

const date = ref(new Date().getFullYear())

const addGuess = (guess) => {
  // https://vuejs.org/guide/essentials/reactivity-fundamentals.html#limitations-of-reactive
  match.value.guesses = [...match.value.guesses, guess]
  match.value.finished = isFinished(match.value)
  match.value.victory = isVictory(match.value)
  // todo game statistics
  saveCurrentMatch(match.value)
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

header {
  justify-content: space-around;
}

main {
  flex-direction: column;
}
</style>
