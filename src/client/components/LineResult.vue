<script setup>
import { ref, defineProps, defineEmits, onMounted, onUnmounted } from "vue";

import Letter from "./Letter.vue";

const { game, result } = defineProps(["game", "result"]);
</script>
<template>
  <div>
    <Letter
      v-for="(char, i) in result"
      :char="char"
      :guess="result"
      :index="i"
      mode="guess"
    ></Letter>
  </div>
</template>

<style module>
.line {
  display: flex;
}
</style>
