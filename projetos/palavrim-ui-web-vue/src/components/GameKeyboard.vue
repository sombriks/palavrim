<template>
  <div>
    <div class="line">
      <GameKeyCap digit="Q"></GameKeyCap>
      <GameKeyCap digit="W"></GameKeyCap>
      <GameKeyCap digit="E"></GameKeyCap>
      <GameKeyCap digit="R"></GameKeyCap>
      <GameKeyCap digit="T"></GameKeyCap>
      <GameKeyCap digit="Y"></GameKeyCap>
      <GameKeyCap digit="U"></GameKeyCap>
      <GameKeyCap digit="I"></GameKeyCap>
      <GameKeyCap digit="O"></GameKeyCap>
      <GameKeyCap digit="P"></GameKeyCap>
    </div>
    <div class="line">
      <GameKeyCap digit="A"></GameKeyCap>
      <GameKeyCap digit="S"></GameKeyCap>
      <GameKeyCap digit="D"></GameKeyCap>
      <GameKeyCap digit="F"></GameKeyCap>
      <GameKeyCap digit="G"></GameKeyCap>
      <GameKeyCap digit="H"></GameKeyCap>
      <GameKeyCap digit="J"></GameKeyCap>
      <GameKeyCap digit="K"></GameKeyCap>
      <GameKeyCap digit="L"></GameKeyCap>
    </div>
    <div class="line">
      <GameKeyCap digit="Enter"></GameKeyCap>
      <GameKeyCap digit="Z"></GameKeyCap>
      <GameKeyCap digit="X"></GameKeyCap>
      <GameKeyCap digit="C"></GameKeyCap>
      <GameKeyCap digit="V"></GameKeyCap>
      <GameKeyCap digit="B"></GameKeyCap>
      <GameKeyCap digit="N"></GameKeyCap>
      <GameKeyCap digit="M"></GameKeyCap>
      <GameKeyCap digit="⌫"></GameKeyCap>
    </div>
  </div>
</template>

<script setup>
import GameKeyCap from '@/components/GameKeyCap.vue'

const props = defineProps(["match"])
</script>

<style scoped>
div.line {
  display: flex;
  justify-content: center;
}
</style>
