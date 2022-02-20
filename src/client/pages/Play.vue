<script setup>
import { ref, reactive, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";

import Keyboard from "../components/Keyboard.vue";
import GuessLine from "../components/GuessLine.vue";
import LineResult from "../components/LineResult.vue";

import { getGame } from "../config/api.js";

const router = useRouter();
const route = useRoute();

const game = ref({ word: "" });
const results = ref([]);
const aWord = ref("");

onMounted(async () => {
  const ret = await getGame(route.params.game);
  game.value = ret.data;
});

const myGuess = (guess) => {
  if (guess.length < game.value.word.length) {
    console.log("too small");
    return;
  } else if (guess.length > game.value.word.length) {
    guess = guess.split("");
    while (guess.length > game.value.word.length) {
      guess.pop();
    }
    guess = guess.join("");
  }
  results.value.push({ guess });
  aWord.value = "";
};

const newLetter = (letter) => {
  aWord.value += letter;
};

const apaga = () => {
  const w = aWord.value.split("");
  w.pop();
  aWord.value = w.join("");
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
    <GuessLine
      v-if="game.word"
      v-model="aWord"
      :word="game.word"
      @enter-guess="myGuess"
    ></GuessLine>
  </div>
  <div :class="$style.section">
    <Keyboard
      v-model="aWord"
      :game="game"
      :results="results"
      @new-letter="newLetter"
      @erase="apaga"
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
