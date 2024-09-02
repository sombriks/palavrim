<template>
  <br />
  <div>{{ props?.err }}</div>
  <div v-if="!props.match.victory && !props.match.finished">
    <span
      ><i
        >Tentativa {{ props.match.guesses.length + 1 }} de
        {{ match.maxAttempts }}</i
      ></span
    >
  </div>
  <div v-if="props.match.finished || props.match.victory">
    <span v-if="props.match.victory"
      ><i>Vitória! Palavra nova só amanhã!</i>
    </span>
    <span v-else
      ><i
        >Derrota! A palavra era "{{ props.match.word.toUpperCase() }}"</i
      ></span
    >
    <pre>{{ text }}</pre>
    <div>
      <button class="sharebtn" @click="share('https://mastodon.world/share')">
        <span class="icon-mastodon"></span></button
      >&nbsp;
      <button
        class="sharebtn"
        @click="share('https://bsky.app/intent/compose')"
      >
        <span class="icon-icons8-butterfly-50"></span></button
      >&nbsp;
      <button
        class="sharebtn"
        @click="share('https://www.threads.net/intent/post')"
      >
        <span class="icon-at-symbol"></span></button
      >&nbsp;
    </div>
  </div>
  <br />
</template>
<script setup>
import { computed } from 'vue'
import { shareMatch } from '@/palavrim'

const props = defineProps(['match', 'err'])
const text = computed(() => {
  if (props.match.finished || props.match.victory) {
    return shareMatch(props.match)
  }
  return ''
})
const share = (base) => {
  const msg = `${
    props.match.victory ? 'Adivinhei a palavra!' : 'Não foi dessa vez!'
  }\n\n${text.value}\n\n${window.location.href}`
  navigator.clipboard.writeText(`${msg}`)
  window.open(encodeURI(`${base}?text=${msg}`))
}
</script>
<style scoped>
.sharebtn {
  margin: 0.5em;
  align-content: center;
  background-color: var(--match);
  color: var(--fg);
  border: var(--border);
  min-width: 3em;
  min-height: 3em;
  max-height: 3em;
  border-radius: 0.3em;
}
</style>
