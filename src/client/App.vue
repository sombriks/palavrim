<script setup>
import { checkMyself, syncGames } from "./config/db.js";
import { saveUser, getGamesFromUser } from "./config/api.js";

checkMyself().then(saveUser).then(getGamesFromUser).then(syncGames);
</script>

<template>
  <div :class="$style.shell">
    <div :class="$style.content">
      <header :class="$style.menu">
        <router-link to="/newgames">
          <button :class="$style.opts">Palavrim</button>
        </router-link>
        <router-link to="/create">
          <button :class="$style.opts">Criar</button>
        </router-link>
        <button :class="$style.opts">Regras</button>
        <button :class="$style.opts">Estatísticas</button>
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
}
.menu {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.opts {
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
</style>
