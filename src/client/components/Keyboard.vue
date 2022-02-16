<script setup>
import { defineProps } from "vue";
const { game, results } = defineProps(["game", "results"]);
const line1 = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"];
const line2 = ["a", "s", "d", "f", "g", "h", "j", "k", "l"];
const line3 = ["z", "x", "c", "v", "b", "n", "m"];
</script>
<template>
  <div :class="$style.keyb">
    <button :class="$style.key" v-for="s in line1">{{ s }}</button>
    <br />
    <button :class="$style.key" v-for="s in line2">{{ s }}</button>
    <br />
    <button :class="$style.key" v-for="s in line3">{{ s }}</button>
    <button :class="$style['large-key']">&#x232B;</button>
    <button :class="$style['large-key']">&#x21B5;</button>
  </div>
</template>
<style module>
.keyb {
  display: flex;
  flex-wrap: wrap;
  max-width: 15em;
}
.key, .large-key {
  border: 1px solid black;
  border-radius: 3px;
  border-radius: 0.5em;
  min-width: 1.5em;
  min-height: 1.5em;
  margin: 0.05em;
  text-align: center;
  vertical-align: middle;
  font-family: "Courier New", Courier, monospace;
  font-weight: bolder;
  justify-content: center;
  text-align: center;
}
.large-key {

  min-width: 3em;
}
</style>
