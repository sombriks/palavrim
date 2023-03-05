<template>
  <div @click="emit('onLetter', props.digit)">
    <span>{{ props.digit }}</span>
  </div>
</template>

<script setup>
import {computed} from "vue";

const props = defineProps(['digit', "letters"])

const bg = computed(() => {
  const status = props.letters?.flatMap(x => x).find(l => l.letter === props.digit)
  if (status) {
    if (status.exactMatch) return "lightgreen"
    if (status.letterPresent) return "lightyellow"
    if (status.letterNotPresent) return "lightsalmon"
  }
  return "white"
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
  border: 1px solid cadetblue;
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
