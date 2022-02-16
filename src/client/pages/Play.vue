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
onMounted(async () => {
  const ret = await getGame(route.params.game);
  game.value = ret.data;
});
const myGuess = (guess) => {
  results.value.push({ guess });
};
</script>
<template>
  <LineResult :game="game" v-for="res in results" :result="res"></LineResult>
  <GuessLine :game="game" @enter-guess="myGuess"></GuessLine>
  <Keyboard :game="game" :results="results"></Keyboard>
  <router-link to="/create">Criar</router-link>
</template>
