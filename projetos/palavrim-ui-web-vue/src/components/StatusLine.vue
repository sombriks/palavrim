<template>
  <br/>
  <div>{{ props?.err }}</div>
  <div v-if="!props.match.victory && !props.match.finished">
    <span><i>Tentativa {{ props.match.guesses.length + 1 }} de {{ match.maxAttempts }}</i></span>
  </div>
  <div v-if="props.match.finished || props.match.victory">
    <span v-if="props.match.victory"><i>Vitória! Palavra nova só amanhã!</i>  </span>
    <span v-else><i>Derrota! A palavra era "{{ props.match.word.toUpperCase() }}"</i></span>
    <pre>{{ text }}</pre>
    <div>
      <button class="sharebtn" @click="share('https://mastodon.world/share')">toot</button>&nbsp;
      <button class="sharebtn" @click="share('https://twitter.com/intent/tweet')">tweet</button>&nbsp;
    </div>
  </div>
  <br/>
</template>
<script setup>
import {computed} from "vue"
import {shareMatch} from "@/palavrim"

const props = defineProps(["match", "err"])
const text = computed(() => {
  if (props.match.finished || props.match.victory) {
    return shareMatch(props.match)
  }
  return ""
})
const share = (base) => {
  const msg = `Adivinhei a palavra!\n${text.value}`;
  navigator.clipboard.writeText(msg);
  window.open(encodeURI(`${base}?text=${msg}&url=${window.location.href}&hashtags=wordle,palavrim`))
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
