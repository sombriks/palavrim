<template>
  <div class="guess-digit">
    <span>X</span>
  </div>
</template>

<script setup></script>

<style scoped>
.guess-digit {
  --guess-size: 3em;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid cadetblue;
  border-radius: 0.3em;
  margin: 0.2em;
  max-width: var(--guess-size);
  min-width: var(--guess-size);
  max-height: var(--guess-size);
  min-height: var(--guess-size);
}
</style>
