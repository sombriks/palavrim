<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

import { createGame } from "../config/api.js";
import { findMe, saveGame } from "../config/db.js";

import Keyboard from "../components/Keyboard.vue";

const router = useRouter();

const word = ref("");
const criar = (_) => {
  findMe()
    .then((me) => createGame({ uid: me.uid, word: word.value }))
    .then(saveGame)
    .then((game) => router.push(`/play/${game.uid}`));
};
</script>
<template>
  <h1>Dê uma palavra para desafiar os outros</h1>
  <form @submit.prevent="criar">
    <input type="text" v-model="word" />
    <button type="submit">Criar</button>
  </form>
  <Keyboard></Keyboard>
</template>
