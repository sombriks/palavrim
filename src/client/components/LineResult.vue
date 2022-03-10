<script setup>
import { defineProps, computed } from "vue";

import Letter from "./Letter.vue";

import { letterMode } from "./LetterMode.js";

const { game, result } = defineProps(["game", "result"]);

const letterModeCp = computed(() => {
  const letters = game.word.split("").map((e) => e.toUpperCase());
  const guesses = result.guess.split("").map((e) => e.toUpperCase());
  return letterMode(letters, guesses);
});
</script>
<template>
  <div :class="$style.line">
    <Letter
      v-for="(char, i) in result.guess"
      :char="char"
      :guess="result.guess"
      :index="i"
      :mode="letterModeCp[i]"
    ></Letter>
  </div>
</template>

<style module>
.line {
  display: flex;
}
</style>
