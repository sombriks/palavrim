<template>
  <header>
    <a class="github" target="github" href="https://github.com/sombriks/palavrim">
      <img src="github-mark.png"/>
    </a>
    <button class="theme" @click="changeTheme" v-html="thm"></button>
    <h1>palavrim</h1>
    <button class="rules" @click="showHelpDialog = !showHelpDialog">
      &#x24D8;
    </button>
    <button class="stats" @click="showStatsDialog = !showStatsDialog">
      &#x1F4CA;
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
const thm = ref("&#x1F31E;")

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
  if(thm.value === "&#x1F312;") {
    thm.value = "&#x1F31E;"
    document.body.className="dark"
  } else {
    thm.value = "&#x1F312;"
    document.body.className="light"
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

main {
  flex-direction: column;
}

header > button, header > a {
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
  width:50%;
  height:50%;
}

.rules, .stats, .github, .theme {
  font-size: 16px;
}

.github {
  background-color: var(--match);
}

.theme {
  background-color: var(--blank);
}

.rules {
  background-color: var(--present);
}

.stats {
  background-color: var(--match);
}
</style>
