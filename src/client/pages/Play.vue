<script setup>
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";

import Keyboard from "../components/Keyboard.vue";
import GuessLine from "../components/GuessLine.vue";
import LineResult from "../components/LineResult.vue";

import { getGame } from "../config/api.js";

const router = useRouter();
const route = useRoute();

const game = ref({});
const results = ref([]);
const aWord = ref("");

onMounted(async () => {
  const ret = await getGame(route.params.game);
  game.value = ret.data;
});

const myGuess = (guess) => {
  console.log(guess);
  results.value.push({ guess });
  aWord.value = "";
};

const newLetter = (letter) => {
  aWord.value += letter;
};
</script>
<template>
  <div :class="$style.section">
    <div :class="$style.margin">
      <LineResult
        :game="game"
        v-for="res in results"
        :result="res"
      ></LineResult>
    </div>
  </div>
  <div :class="$style.section">
    <GuessLine v-model="aWord" :game="game" @enter-guess="myGuess"></GuessLine>
  </div>
  <div :class="$style.section">
    <Keyboard
      v-model="aWord"
      :game="game"
      :results="results"
      @new-letter="newLetter"
      @enter="myGuess(aWord)"
    ></Keyboard>
  </div>
  <router-link to="/create">Criar</router-link>
</template>
<style module>
.section {
  display: flex;
  justify-content: center;
}
.section,
.margin {
  margin: 0.2em;
}
</style>
