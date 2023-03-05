<template>
<div>{{ props?.err }}</div>
<div>
  <span><i>Guess {{props.match.guesses.length + 1}} of {{ match.maxAttempts}}</i></span>
</div>
</template>
<script setup>
const props = defineProps(["match", "err"])
</script>