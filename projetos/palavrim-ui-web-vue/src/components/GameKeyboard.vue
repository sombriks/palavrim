<template>
  <div>
    <div class="line">
      <GameKeyCap @onLetter="onLetter" digit="Q" :letters="letters"></GameKeyCap>
      <GameKeyCap @onLetter="onLetter" digit="W" :letters="letters"></GameKeyCap>
      <GameKeyCap @onLetter="onLetter" digit="E" :letters="letters"></GameKeyCap>
      <GameKeyCap @onLetter="onLetter" digit="R" :letters="letters"></GameKeyCap>
      <GameKeyCap @onLetter="onLetter" digit="T" :letters="letters"></GameKeyCap>
      <GameKeyCap @onLetter="onLetter" digit="Y" :letters="letters"></GameKeyCap>
      <GameKeyCap @onLetter="onLetter" digit="U" :letters="letters"></GameKeyCap>
      <GameKeyCap @onLetter="onLetter" digit="I" :letters="letters"></GameKeyCap>
      <GameKeyCap @onLetter="onLetter" digit="O" :letters="letters"></GameKeyCap>
      <GameKeyCap @onLetter="onLetter" digit="P" :letters="letters"></GameKeyCap>
    </div>
    <div class="line">
      <GameKeyCap @onLetter="onLetter" digit="A" :letters="letters"></GameKeyCap>
      <GameKeyCap @onLetter="onLetter" digit="S" :letters="letters"></GameKeyCap>
      <GameKeyCap @onLetter="onLetter" digit="D" :letters="letters"></GameKeyCap>
      <GameKeyCap @onLetter="onLetter" digit="F" :letters="letters"></GameKeyCap>
      <GameKeyCap @onLetter="onLetter" digit="G" :letters="letters"></GameKeyCap>
      <GameKeyCap @onLetter="onLetter" digit="H" :letters="letters"></GameKeyCap>
      <GameKeyCap @onLetter="onLetter" digit="J" :letters="letters"></GameKeyCap>
      <GameKeyCap @onLetter="onLetter" digit="K" :letters="letters"></GameKeyCap>
      <GameKeyCap @onLetter="onLetter" digit="L" :letters="letters"></GameKeyCap>
    </div>
    <div class="line">
      <GameKeyCap @onLetter="onLetter" digit="Enter"></GameKeyCap>
      <GameKeyCap @onLetter="onLetter" digit="Z" :letters="letters"></GameKeyCap>
      <GameKeyCap @onLetter="onLetter" digit="X" :letters="letters"></GameKeyCap>
      <GameKeyCap @onLetter="onLetter" digit="C" :letters="letters"></GameKeyCap>
      <GameKeyCap @onLetter="onLetter" digit="V" :letters="letters"></GameKeyCap>
      <GameKeyCap @onLetter="onLetter" digit="B" :letters="letters"></GameKeyCap>
      <GameKeyCap @onLetter="onLetter" digit="N" :letters="letters"></GameKeyCap>
      <GameKeyCap @onLetter="onLetter" digit="M" :letters="letters"></GameKeyCap>
      <GameKeyCap @onLetter="emit('onLetter', {key:'Backspace'})" digit="⌫"></GameKeyCap>
    </div>
  </div>
</template>

<script setup>
import GameKeyCap from '@/components/GameKeyCap.vue'
import {computed} from "vue";

const props = defineProps(["match"])
const emit = defineEmits(["onLetter", "onErr"])

const letters = computed(() => props.match.guesses.map(g => g.status))

const onLetter = (key) => emit("onLetter", {key})
</script>

<style scoped>
div.line {
  display: flex;
  justify-content: center;
}
</style>
