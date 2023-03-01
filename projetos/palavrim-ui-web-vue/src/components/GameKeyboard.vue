<template>
  <div>
    <div class="line">
      <GameKeyCap digit="A"></GameKeyCap>
      <GameKeyCap digit="A"></GameKeyCap>
      <GameKeyCap digit="A"></GameKeyCap>
      <GameKeyCap digit="A"></GameKeyCap>
      <GameKeyCap digit="A"></GameKeyCap>
      <GameKeyCap digit="A"></GameKeyCap>
      <GameKeyCap digit="A"></GameKeyCap>
      <GameKeyCap digit="A"></GameKeyCap>
      <GameKeyCap digit="A"></GameKeyCap>
      <GameKeyCap digit="A"></GameKeyCap>
    </div>
    <div class="line">
      <GameKeyCap digit="A"></GameKeyCap>
      <GameKeyCap digit="A"></GameKeyCap>
      <GameKeyCap digit="A"></GameKeyCap>
      <GameKeyCap digit="A"></GameKeyCap>
      <GameKeyCap digit="A"></GameKeyCap>
      <GameKeyCap digit="A"></GameKeyCap>
      <GameKeyCap digit="A"></GameKeyCap>
      <GameKeyCap digit="A"></GameKeyCap>
      <GameKeyCap digit="A"></GameKeyCap>
    </div>
    <div class="line">
      <GameKeyCap digit="A"></GameKeyCap>
      <GameKeyCap digit="A"></GameKeyCap>
      <GameKeyCap digit="A"></GameKeyCap>
      <GameKeyCap digit="A"></GameKeyCap>
      <GameKeyCap digit="A"></GameKeyCap>
      <GameKeyCap digit="A"></GameKeyCap>
      <GameKeyCap digit="A"></GameKeyCap>
      <GameKeyCap digit="A"></GameKeyCap>
      <GameKeyCap digit="A"></GameKeyCap>
    </div>

  </div>
</template>

<script>
import GameKeyCap from "@/components/GameKeyCap.vue";

export default {
  name: "GameKeyboard",
  components: {GameKeyCap: GameKeyCap}
}
</script>

<style scoped>
  div.line {
    display: flex;
    justify-content: center;
  }
</style>