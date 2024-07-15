<template>
  <div class="player-details">
    <h1>Player</h1>
    <h1>Name:{{ player.name }}</h1>
    <h1>Id: {{ player.id }}</h1>
  </div>
</template>

<script>
import { players } from "../data/constants.js";
export default {
  name: "PlayerDetail",
  data() {
    return {
      player: null,
    };
  },
  props: {
    id: Number,
  },
  created() {
    this.fetchPlayerData();
  },
  methods: {
    fetchPlayerData() {
      const playerId = this.id;
      this.player = players.find((player) => player.id === playerId);
    },
  },
};
</script>

<style scoped>
.player-details {
  text-align: center;
}
</style>
