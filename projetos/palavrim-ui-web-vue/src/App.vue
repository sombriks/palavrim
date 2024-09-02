<template>
  <header>
    <a
      class="github"
      target="github"
      href="https://github.com/sombriks/palavrim"
    >
      <span class="icon-github"></span>
    </a>
    <button class="theme" @click="changeTheme">
      <span class="icon-sun"></span>
    </button>
    <h1>palavrim</h1>
    <button class="rules" @click="showHelpDialog = !showHelpDialog">
      <span class="icon-info"></span>
    </button>
    <button class="stats" @click="showStatsDialog = !showStatsDialog">
      <span class="icon-stats-bars2"></span>
    </button>
  </header>
  <main>
    <GuessPanel :match="match"></GuessPanel>
    <InputPanel :match="match" @onGuess="addGuess"></InputPanel>
    <StatsDialog
      v-if="showStatsDialog"
      @onClose="showStatsDialog = false"
    ></StatsDialog>
    <HelpDialog
      v-if="showHelpDialog"
      @onClose="showHelpDialog = false"
    ></HelpDialog>
    <br />
  </main>
  <footer>
    <i> &copy; sombriks {{ date }} </i>
    <br />
    <a href="privacy.html">Privacidade</a>
  </footer>
</template>

<script setup>
import { ref } from 'vue'
import { useHead } from '@vueuse/head'

import GuessPanel from '@/components/GuessPanel.vue'
import InputPanel from '@/components/GuessInput.vue'
import StatsDialog from '@/components/StatsDialog.vue'
import HelpDialog from '@/components/HelpDialog.vue'
import {
  getCurrentMatch,
  isFinished,
  isVictory,
  saveCurrentMatch
} from '@/palavrim'

useHead({
  title: 'Palavrim',
  meta: [
    {
      name: 'description',
      content: 'puzzle to figure out a portuguese word'
    },
    {
      name: 'keywords',
      content: 'vue, vite, vite-ssg, ssg, game, wordle, palavrim, showcase'
    }
  ]
})

const showHelpDialog = ref(false)
const showStatsDialog = ref(false)
const thm = ref('&#x1F31E;')

const match = ref(getCurrentMatch())

const date = ref(new Date().getFullYear())

const addGuess = (guess) => {
  // https://vuejs.org/guide/essentials/reactivity-fundamentals.html#limitations-of-reactive
  match.value.guesses = [...match.value.guesses, guess]
  match.value.finished = isFinished(match.value)
  match.value.victory = isVictory(match.value)
  saveCurrentMatch(match.value)
}

const changeTheme = () => {
  if (thm.value === '&#x1F312;') {
    thm.value = '&#x1F31E;'
    document.body.className = 'dark'
  } else {
    thm.value = '&#x1F312;'
    document.body.className = 'light'
  }
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

footer {
  flex-direction: column;
}

footer > a {
  color: var(--fg);
}

main {
  flex-direction: column;
}

header > button,
header > a {
  margin: 0.5em;
  align-content: center;
  border: var(--border);
  min-width: 3em;
  min-height: 3em;
  max-width: 3em;
  max-height: 3em;
  border-radius: 0.3em;
}

header > a {
  display: flex;
  justify-content: center;
  align-items: center;
}

header > a > img {
  width: 50%;
  height: 50%;
}

.github,
.theme,
.rules,
.stats {
  font-size: 16px;
  color: var(--fg);
  background-color: var(--bg);
}
</style>
