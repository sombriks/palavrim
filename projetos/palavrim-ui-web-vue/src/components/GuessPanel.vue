<template>
  <GuessLine v-for="n in props.match.maxAttempts" :key="n" :match="props.match"></GuessLine>
</template>

<script setup>
import GuessLine from '@/components/GuessLine.vue'

const props = defineProps(["match"])
</script>

<style scoped></style>
