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
  background-color: var(--shadow);
  position: fixed;
  width: 100vw;
  height: 100vh;
  bottom:0px;
  display: flex;
  justify-content: center;
  align-items: center;
  -moz-backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(3px);
  backdrop-filter: blur(3px);
}

.panel {
  border: var(--border);
  background-color: var(--present);
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
