<template>
  <div class="suggestions">
    <ul class="suggestions__list" v-if="showSuggestions">
      <li
        v-for="player in suggestions"
        :key="player.id"
        class="suggestions__item"
        @click="goToPlayer(player)"
        v-html="highlightLetter(player.name)"
      ></li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    suggestions: Array,
    showSuggestions: Boolean,
    query: String,
  },
  methods: {
    highlightLetter(name) {
      const regex = new RegExp(`(${this.query})`, "gi");
      return name.replace(regex, "<strong>$1</strong>");
    },
    goToPlayer(player) {
      this.$router.push({ name: "PlayerDetail", params: { id: player.id } });
    },
  },
};
</script>

<style scoped>
.suggestions {
  background-color: white;
  box-shadow: 5px 1px 13px black;
}

.suggestions__list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.suggestions__item {
  cursor: pointer;
  padding: 0.5em;
}

.suggestions__item:hover {
  background-color: rgb(167, 167, 167);
}
</style>
