<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

import { createGame } from "../config/api.js";
import { findMe, saveGame } from "../config/db.js";

import Keyboard from "../components/Keyboard.vue";

const router = useRouter();

const word = ref("");
const criar = (_) => {
  if (word.value.length < 4) {
    console.log("too short");
    return;
  }
  findMe()
    .then((me) => createGame({ uid: me.uid, word: word.value }))
    .then(saveGame)
    .then((game) => router.push(`/play/${game.uid}`));
};
const onLetter = (l) => {
  if (word.value.length < 6) word.value += l;
};
const apaga = () => {
  const w = word.value.split("");
  w.pop();
  word.value = w.join("");
};
</script>
<template>
  <h1>Escreva uma nova palavra</h1>
  <small>entre 4 e 6 letras</small>
  <div :class="$style['new-word']">
    <input :class="$style.create" type="text" readonly v-model="word" title="entre 4 e 6 letras" />
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
  width: 85%;
  align-items: center;
  font-size: xx-large;
  padding: 0.1em;
  font-family: "Courier New", Courier, monospace;
  background-color: black;
  color:aliceblue;
  border: solid 0.15em aliceblue;
}
</style>
