<script setup>
import { defineProps } from "vue";
const { char, index } = defineProps(["char", "guess", "index", "mode"]);
</script>
<template>
  <div :class="[$style.letter, $style[mode]]">
    {{ guess[index] }}
  </div>
</template>
<style module>
.letter {
  min-width: 1.5em;
  min-height: 1.5em;
  margin: 0.05em;
  border-radius: 0.5em;
  text-align: center;
  vertical-align: middle;
}
.guess {
  border: solid 0.25em gray;
}
</style>
