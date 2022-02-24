<script setup>
import { onMounted } from "vue";
import { checkMyself, syncGames } from "./config/db.js";
import { saveUser, getGamesFromUser } from "./config/api.js";

onMounted(() => {
  console.log("sync user")
  checkMyself().then(saveUser).then(getGamesFromUser).then(syncGames);
});
</script>

<template>
  <div :class="$style.shell">
    <div :class="$style.content">
      <header :class="$style.menu">
        <router-link to="/recent-games">
          <button :class="$style.navs">Palavrim</button>
        </router-link>
        <router-link to="/create">
          <button :class="$style.navs">Criar</button>
        </router-link>
        <router-link to="/my-games">
          <button :class="$style.navs">Meus jogos</button>
        </router-link>
        <button :class="$style.opts1">Regras</button>
        <button :class="$style.opts2">Sobre</button>
      </header>
      <div>
        <hr />
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>

<style module>
.shell {
  display: flex;
  justify-content: center;
  /* flex-direction: column; */
}
.content {
  display: flex;
  justify-content: center;
  flex-direction: column;
  max-width: 800px;
}
.menu {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.navs,
.opts1,
.opts2 {
  /* color: gray;
  background-color: lightgray; */

  border: solid 0.25em;
  color: green;
  border-color: green;
  background-color: lightgreen;

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
.opts1 {
  color: orange;
  border-color: orange;
  background-color: lightgoldenrodyellow;
}
.opts2 {
  color: blue;
  border-color: blue;
  background-color: lightblue;
}
</style>
