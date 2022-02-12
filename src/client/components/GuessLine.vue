<script setup>
import { defineProps, onMounted, onUnmounted } from "vue";
import Letter from "./Letter.vue";

const { word } = defineProps(["word"]);

const onKey = (e) => {
  console.log(e);
};

onMounted(() => window.addEventListener("keydown", onKey));
onUnmounted(() => window.removeEventListener("keydown", onKey));
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
