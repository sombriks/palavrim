<template>
  <div>
    <input v-model="word" @keyup.enter="tryIt()"/>
    <button @click="tryIt()">try</button>
  </div>
  <div>{{ err }}</div>
</template>
<script setup>
import {ref} from "vue";
import {newGuess} from "@/palavrim";

const props = defineProps(["match"])

const word = ref("")
const err = ref("")

const emit = defineEmits(["onGuess", "onErr"])

const tryIt = () => {
  err.value = ""
  try {
    const w = word.value
    const guess = newGuess(props.match, w)
    emit("onGuess", guess)
  } catch (e) {
    emit("onErr", e)
    err.value = e.message
  } finally {
    word.value = ""
  }
}
</script>
<style>

</style>