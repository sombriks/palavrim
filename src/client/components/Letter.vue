<script setup>
import { defineProps } from "vue";
const { guess, index, char, mode } = defineProps([
  "guess",
  "index",
  "mode",
  "char",
]);
</script>
<template>
  <div :class="[$style.letter, $style[mode]]">
    {{ (guess && guess[index]) || "" }}
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
  font-family: "Courier New", Courier, monospace;
  font-weight: bolder;
}
.guess,
.match,
.doubles,
.exists,
.none {
  color: gray;
  border: solid 0.25em gray;
  background-color: lightgray;
}
.match {
  color: green;
  border-color: green;
  background-color: lightgreen;
}
.doubles {
  color: blue;
  border-color: blue;
  background-color: lightblue;
}
.exists {
  color: orange;
  border-color: orange;
  background-color: lightgoldenrodyellow;
}
.none {
  color: brown;
  border-color: brown;
  background-color: lightcoral;
}
</style>
