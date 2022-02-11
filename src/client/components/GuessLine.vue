<script setup>
import { defineProps } from "vue";
import Letter from "./Letter.vue";

const { word } = defineProps({
  word: Array,
});
console.log(word);
</script>
<template>
  <div :class="$style.line">
    <Letter :letter="letter" v-for="letter in word"></Letter>
  </div>
</template>
<style module>
.line {
  display: flex;
}
</style>
