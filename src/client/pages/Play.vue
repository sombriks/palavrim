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
const letters = ref([
  { v: "p" },
  { v: "a" },
  { v: "l" },
  { v: "a" },
  { v: "v" },
  { v: "r" },
  { v: "i" },
  { v: "m" },
]);
const results = ref([]);
onMounted(async () => {
  const ret = await getGame(route.params.game);
  game.value = ret.data;
  letters.value = game.value.word.split("").map((l) => ({ v: l }));
});
</script>
<template>
  <br />
  <LineResult v-for="res in results" :result="res"></LineResult>
  <br />
  <GuessLine :word="letters"></GuessLine>
  <br />
  <Keyboard :word="letters"></Keyboard>
  <br />
  <router-link to="/create">Criar</router-link>
</template>
