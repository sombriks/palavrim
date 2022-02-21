<script setup>
import { defineProps, defineEmits, onMounted, onUnmounted, toRef } from "vue";
const line1 = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"];
const line2 = ["a", "s", "d", "f", "g", "h", "j", "k", "l"];
const line3 = ["z", "x", "c", "v", "b", "n", "m"];

const props = defineProps({
  game: Object,
  results: Array,
  modelValue: String,
  enabled: {
    type: Boolean,
    default: true,
  },
});

const { game, results, modelValue, enabled } = props;

const active = toRef(props, "enabled"); // TODO enxugar sintaxe

const emit = defineEmits(["new-letter", "erase", "enter", "update:modelValue"]);

const onLetter = (l) => {
  if (active.value) emit("new-letter", l);
};

const onKey = (e) => {
  if (
    line1.find((k) => k == e.key) ||
    line2.find((k) => k == e.key) ||
    line3.find((k) => k == e.key)
  ) {
    onLetter(e.key);
  } else if ("Enter" == e.key) {
    emit("enter");
  } else if ("Backspace" == e.key) {
    emit("erase");
  } else {
    console.log(e.key);
  }
};

onMounted(() => window.addEventListener("keydown", onKey));
onUnmounted(() => window.removeEventListener("keydown", onKey));
</script>
<template>
  <!-- TODO: pintar teclas de acordo com os resultados e a palavra -->
  <div :class="$style.blank">
    <div :class="$style.keyb">
      <button @click="onLetter(s)" :class="$style.key" v-for="s in line1">
        {{ s }}
      </button>
    </div>
    <div :class="$style.keyb">
      <button @click="onLetter(s)" :class="$style.key" v-for="s in line2">
        {{ s }}
      </button>
    </div>
    <div :class="$style.keyb">
      <button @click="onLetter(s)" :class="$style.key" v-for="s in line3">
        {{ s }}
      </button>
      <button @click="emit('erase')" :class="$style['large-key']">
        &#x232B;
      </button>
      <button @click="emit('enter')" :class="$style['large-key']">
        &#x21B5;
      </button>
    </div>
  </div>
</template>
<style module>
.blank {
  margin: 0em;
}
.keyb {
  display: flex;
  flex-wrap: wrap;
  max-width: 28em;
}
.key,
.large-key {
  border: 1px solid black;
  border-radius: 3px;
  border-radius: 0.5em;
  min-width: 2.5em;
  min-height: 3em;
  margin: 0.05em;
  text-align: center;
  vertical-align: middle;
  font-family: "Courier New", Courier, monospace;
  font-weight: bolder;
  justify-content: center;
  text-align: center;
}
.large-key {
  min-width: 3.8em;
}
</style>
