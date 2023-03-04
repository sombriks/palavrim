<template>
  <span><i>Guess {{props.match.guesses.length + 1}} of {{ match.maxAttempts}}</i></span>
</template>
<script setup>
const props = defineProps(["match"])
</script>