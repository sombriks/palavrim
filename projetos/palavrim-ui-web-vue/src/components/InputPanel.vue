<template>
  <GuessLine :guess="current"></GuessLine>
  <StatusLine :match="match" :err="err"></StatusLine>
  <GameKeyboard :match="match" @onLetter="onType"></GameKeyboard>
</template>
<script setup>
import {computed, onBeforeUnmount, onMounted, ref} from "vue";
import GameKeyboard from '@/components/GameKeyboard.vue'
import GuessLine from '@/components/GuessLine.vue'
import StatusLine from "@/components/StatusLine.vue";
import {newGuess} from "@/palavrim";

const props = defineProps(["match"])

const word = ref("")
const err = ref("")

const current = computed(() => {
  return {
    guess:word.value.padEnd(props.match.word.length,"_"),
    status:props.match.word.split("").map(() => {})
  }
})

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

const onType = (e) => {
  if(e.key == "Enter") {
    tryIt();
  } else if (e.key == "Backspace") {
    const list = word.value.split("");
    list.pop()
    word.value = list.join("")
  } else if (e.key.length == 1 && word.value.length < props.match.word.length) {
    word.value += e.key.replace(/\W/g,"")
  }
}

onMounted(() => {
  document.addEventListener("keyup", onType)
})

onBeforeUnmount(() => {
  document.removeEventListener("keyup", onType)
})
</script>