<template>
  <div @click="emit('onLetter', props.digit)">
    <span>{{ props.digit }}</span>
  </div>
</template>

<script setup>
import {computed} from "vue";
import {getLetterColor} from "@/palavrim";

const props = defineProps(['digit', "letters"])

const bg = computed(() => {
  const statuses = props.letters?.flatMap(x => x)
      .filter(l => l.letter === props.digit) || []
  const status = statuses.reduce((p,c) => ({...p, ...c}),{})
  return getLetterColor(status)
})

const emit = defineEmits(["onLetter", "onErr"])
</script>

<style scoped>
div {
  --key-height: 3em;
  --key-width: 1.5em;
  display: flex;
  justify-content: center;
  align-items: center;
  border: var(--border);
  border-radius: 0.3em;
  margin: 0.2em;
  min-width: var(--key-width);
  max-height: var(--key-height);
  min-height: var(--key-height);
  background-color: v-bind(bg);
}

span {
  margin: 0.9em;
  user-select: none;
}
</style>
