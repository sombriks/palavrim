<template>
  <br/>
  <div>{{ props?.err }}</div>
  <div v-if="!props.match.victory && !props.match.finished">
    <span><i>Tentativa {{ props.match.guesses.length + 1 }} de {{ match.maxAttempts }}</i></span>
  </div>
  <div v-if="props.match.finished || props.match.victory">
  <span v-if="props.match.victory">
    <i>Vitória! Palavra nova só amanhã!</i>&nbsp;
    <a href="#" @click="share('https://mastodon.world/share')">toot</a>&nbsp;
    <a href="#" @click="share('https://twitter.com/intent/tweet')">tweet</a>&nbsp;
  </span>
    <span v-else><i>Derrota! A palavra era "{{ props.match.word.toUpperCase() }}"</i></span>
    <pre>{{ text }}</pre>
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
  window.open(encodeURI(`${base}?text=${msg}&url=${window.location.href}&hashtags=wordle,palavrim`))
}
</script>