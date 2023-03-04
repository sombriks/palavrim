<template>
  <div>
    <div class="line">
      <GameKeyCap digit="Q" :letters="letters"></GameKeyCap>
      <GameKeyCap digit="W" :letters="letters"></GameKeyCap>
      <GameKeyCap digit="E" :letters="letters"></GameKeyCap>
      <GameKeyCap digit="R" :letters="letters"></GameKeyCap>
      <GameKeyCap digit="T" :letters="letters"></GameKeyCap>
      <GameKeyCap digit="Y" :letters="letters"></GameKeyCap>
      <GameKeyCap digit="U" :letters="letters"></GameKeyCap>
      <GameKeyCap digit="I" :letters="letters"></GameKeyCap>
      <GameKeyCap digit="O" :letters="letters"></GameKeyCap>
      <GameKeyCap digit="P" :letters="letters"></GameKeyCap>
    </div>
    <div class="line">
      <GameKeyCap digit="A" :letters="letters"></GameKeyCap>
      <GameKeyCap digit="S" :letters="letters"></GameKeyCap>
      <GameKeyCap digit="D" :letters="letters"></GameKeyCap>
      <GameKeyCap digit="F" :letters="letters"></GameKeyCap>
      <GameKeyCap digit="G" :letters="letters"></GameKeyCap>
      <GameKeyCap digit="H" :letters="letters"></GameKeyCap>
      <GameKeyCap digit="J" :letters="letters"></GameKeyCap>
      <GameKeyCap digit="K" :letters="letters"></GameKeyCap>
      <GameKeyCap digit="L" :letters="letters"></GameKeyCap>
    </div>
    <div class="line">
      <GameKeyCap digit="Enter"></GameKeyCap>
      <GameKeyCap digit="Z" :letters="letters"></GameKeyCap>
      <GameKeyCap digit="X" :letters="letters"></GameKeyCap>
      <GameKeyCap digit="C" :letters="letters"></GameKeyCap>
      <GameKeyCap digit="V" :letters="letters"></GameKeyCap>
      <GameKeyCap digit="B" :letters="letters"></GameKeyCap>
      <GameKeyCap digit="N" :letters="letters"></GameKeyCap>
      <GameKeyCap digit="M" :letters="letters"></GameKeyCap>
      <GameKeyCap digit="⌫"></GameKeyCap>
    </div>
  </div>
</template>

<script setup>
import GameKeyCap from '@/components/GameKeyCap.vue'
import {computed} from "vue";

const props = defineProps(["match"])

const letters = computed(() => props.match.guesses.map(g => g.status))
</script>

<style scoped>
div.line {
  display: flex;
  justify-content: center;
}
</style>
