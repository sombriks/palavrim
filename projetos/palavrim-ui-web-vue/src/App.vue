<template>
  <header>
    <button class="rules" @click="showHelpDialog = !showHelpDialog">
      Regras
    </button>
    <h1>palavrim</h1>
    <button class="stats" @click="showStatsDialog = !showStatsDialog">
      Status
    </button>
  </header>
  <main>
    <GuessPanel :match="match"></GuessPanel>
    <InputPanel :match="match" @onGuess="addGuess"></InputPanel>
    <StatsDialog v-if="showStatsDialog" @onClose="showStatsDialog = false"></StatsDialog>
    <HelpDialog v-if="showHelpDialog" @onClose="showHelpDialog = false"></HelpDialog>
    <br/>
  </main>
  <footer>
    <i> &copy; sombriks {{ date }} </i>
  </footer>
</template>

<script setup>
import {ref} from 'vue'
import GuessPanel from '@/components/GuessPanel.vue'
import InputPanel from "@/components/GuessInput.vue";
import StatsDialog from '@/components/StatsDialog.vue'
import HelpDialog from '@/components/HelpDialog.vue'
import {getCurrentMatch, isFinished, isVictory, saveCurrentMatch} from "@/palavrim";

const showHelpDialog = ref(false)
const showStatsDialog = ref(false)

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

header > button {
  margin: 2em;
  align-content: center;
  border: 1px solid cadetblue;
  min-width: 3em;
  min-height: 3em;
  border-radius: 0.3em;
}

.rules {
  background-color: lightyellow;
}

.stats {
  background-color: lightgreen;
}

main {
  flex-direction: column;
}
</style>
