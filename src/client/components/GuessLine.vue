<script setup>
import {
  ref,
  toRef,
  defineProps,
  defineEmits,
  onMounted,
  onUnmounted,
  watch,
  getCurrentInstance,
} from "vue";

import * as alphabet from "../config/alphabet.js";

import Letter from "./Letter.vue";

const props = defineProps(["word", "modelValue"]);
const { word, modelValue } = props;
const emit = defineEmits(["enter-guess", "update:modelValue"]);
const myGuess = toRef(props, "modelValue");

const onKey = (e) => {
  // console.log(e)
  if (alphabet.enter == e.key) {
    emit("enter-guess", myGuess.value);
    myGuess.value = "";
  } else if (alphabet.backspace == e.key) {
    const novo = myGuess.value.split("");
    novo.pop();
    myGuess.value = novo.join("");
  } else if (word && myGuess.value.length >= word.length) {
    return;
  } else if (alphabet.letters.find((l) => l == e.key)) {
    myGuess.value += e.key.toUpperCase();
  }
};
</script>

<template>
  <div :class="$style.line">
    <Letter
      :guess="myGuess"
      :index="i"
      mode="guess"
      v-for="(letter, i) in word"
    ></Letter>
  </div>
</template>

<style module>
.line {
  display: flex;
}
</style>
