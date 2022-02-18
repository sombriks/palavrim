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
const onLetter = (l) => (word.value += l);
const apaga = () => {
  const w = word.value.split("");
  w.pop();
  word.value = w.join("");
};
</script>
<template>
  <h1>Dê uma palavra para desafiar os outros</h1>
  <div :class="$style['new-word']">
    <input type="text" readonly v-model="word" />
  </div>
  <div :class="$style['new-word']">
    <Keyboard
      @new-letter="onLetter"
      v-model="word"
      @erase="apaga"
      @enter="criar"
    ></Keyboard>
  </div>
</template>
<style module>
.new-word {
  display: flex;
  justify-content: center;
  margin: 0.2em;
}
.new-word > input[type="text"] {
  width: 50%;
  align-items: center;
  font-size: xx-large;
  padding: 0.1em;
  font-family: "Courier New", Courier, monospace;
}
</style>
