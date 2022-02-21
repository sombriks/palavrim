<script setup>
import {
  ref,
  defineProps,
  defineEmits,
  onMounted,
  onUnmounted,
  computed,
} from "vue";

import Letter from "./Letter.vue";

const { game, result } = defineProps(["game", "result"]);

const letterMode = computed(() => {
  const letters = game.word.split("").map((e) => e.toUpperCase());
  const guesses = result.guess.split("").map((e) => e.toUpperCase());
  const modes = [];
  for (let i = 0; i < letters.length; i++) {
    if (letters[i] == guesses[i]) {
      modes.push("match");
    } else {
      const len = letters.filter((l) => l == guesses[i]).length;
      if (len > 1) {
        modes.push("doubles");
      }
      if (len) {
        modes.push("exists");
      } else {
        modes.push("none");
      }
    }
  }
  console.log(modes);
  return modes;
});
</script>
<template>
  <div :class="$style.line">
    <Letter
      v-for="(char, i) in result.guess"
      :char="char"
      :guess="result.guess"
      :index="i"
      :mode="letterMode[i]"
    ></Letter>
  </div>
</template>

<style module>
.line {
  display: flex;
}
</style>
