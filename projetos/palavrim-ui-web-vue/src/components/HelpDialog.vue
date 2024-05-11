<template>
  <div class="shadow" @click="emit('onClose')">
    <div class="panel">
      <h2>Tente adivinhar a palavra</h2>
      <p>Isto
        <span style="display: inline-block">
          <GuessDigit :index="0" :guess="{guess:'_', status:[{}] }"></GuessDigit>
        </span>
        significa uma letra desconhecida
      </p>
      <p>Isto
        <span style="display: inline-block">
          <GuessDigit :index="0" :guess="{guess:'L', status:[{exactMatch:true}] }"></GuessDigit>
        </span>
        significa uma letra certa na posição certa
      </p>
      <p>Isto
        <span style="display: inline-block">
          <GuessDigit :index="0" :guess="{guess:'E', status:[{letterPresent:true}] }"></GuessDigit>
        </span>
        significa uma letra certa na posição errada
      </p>
      <p>Isto
        <span style="display: inline-block">
          <GuessDigit :index="0" :guess="{guess:'E', status:[{doubleLetterPresent:true}] }"></GuessDigit>
        </span>
        significa uma letra certa na posição errada e a letra aparece mais de uma vez
      </p>
      <p>Isto
        <span style="display: inline-block">
          <GuessDigit :index="0" :guess="{guess:'O', status:[{letterNotPresent:true}] }"></GuessDigit>
        </span>
        significa uma letra errada, não tem na palavra
      </p>
      <p>Uma palavra aleatória é escolhida por dia</p>
      <p>Descubra a palavra em até 8 tentativas</p>
    </div>
  </div>
</template>

<script setup>
import GuessDigit from "@/components/GuessDigit.vue";

const emit = defineEmits(["onClose"])

</script>

<style scoped>
.shadow {
  background-color: var(--shadow);
  position: fixed;
  width: 100vw;
  height: 100vh;
  display: flex;
  bottom:0px;
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
  margin-left: 3em;
  margin-right: 3em;
}
</style>
