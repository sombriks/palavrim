<template>
  <div class="shadow" @click="emit('onClose')">

    <div class="panel">
      <h2>Placar</h2>
      <p>{{ partidas.length }} Partidas</p>
      <p>{{ vitorias.length }} Vitórias</p>
      <p>{{ derrotas.length }} Derrotas</p>
      <p>{{ media }} Quantidade média de tentativas</p>
    </div>
  </div>
</template>

<script setup>
import {loadPalavrim} from "@/palavrim";
import {computed} from "vue";

const emit = defineEmits(["onClose"])

const palavrim = loadPalavrim()

const partidas = Object.keys(palavrim.matches)

const vitorias = computed(() =>
    partidas.filter(p => palavrim.matches[p].victory))

const derrotas = computed(() =>
    partidas.filter(p => palavrim.matches[p].finished
        && !palavrim.matches[p].victory))

const media = computed(() =>
    partidas.map(p => palavrim.matches[p].guesses.length)
        .reduce((a, b) => a + b) / partidas.length)
</script>

<style scoped>
.shadow {
  background-color: rgba(95, 158, 160, 0.6);
  position: fixed;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.panel {
  border: 1px solid cadetblue;
  background-color: lightyellow;
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: column;
}

p, h2 {
  margin-left: 1em;
  margin-right: 1em;
}
</style>
