<template>
  <div class="shadow" @click="emit('onClose')">

    <div class="panel">
      <h2>Placar</h2>
    </div>
  </div>
</template>

<script setup>
const emit = defineEmits(["onClose"])

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
