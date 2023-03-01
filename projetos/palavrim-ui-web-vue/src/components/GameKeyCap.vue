<template>
  <div>
    <span>{{ props.digit }}</span>
  </div>
</template>

<script setup>
const props = defineProps(['digit'])
</script>

<style scoped>
div {
  --key-height: 3em;
  --key-width: 1.5em;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid cadetblue;
  border-radius: 0.3em;
  margin: 0.2em;
  min-width: var(--key-width);
  max-height: var(--key-height);
  min-height: var(--key-height);
}
span {
  margin: 0.9em;
}
</style>
