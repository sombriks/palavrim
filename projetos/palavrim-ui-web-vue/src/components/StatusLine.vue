<template>
<div>{{ props?.err }}</div>
<div v-if="!props.match.victory && !props.match.finished">
  <span><i>Tentativa {{props.match.guesses.length + 1}} de {{ match.maxAttempts}}</i></span>
</div>
<div v-if="props.match.finished || props.match.victory">
  <span v-if="props.match.victory"><i>Vitória! Palavra nova só amanhã!</i></span>
  <span v-else><i>Derrota! A palavra era "{{ props.match.word.toUpperCase() }}"</i></span>
</div>
</template>
<script setup>
const props = defineProps(["match", "err"])
</script>