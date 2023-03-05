<template>
<div>{{ props?.err }}</div>
<div v-if="!props.match.victory && !props.match.finished">
  <span><i>Guess {{props.match.guesses.length + 1}} of {{ match.maxAttempts}}</i></span>
</div>
<div v-if="props.match.finished || props.match.victory">
  <span v-if="props.match.victory"><i>Victory! new word tomorrow</i></span>
  <span v-else><i>Loser! the word was "{{ props.match.word.toUpperCase() }}"</i></span>
</div>
</template>
<script setup>
const props = defineProps(["match", "err"])
</script>