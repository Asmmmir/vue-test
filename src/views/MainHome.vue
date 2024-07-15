<template>
  <div>
    <div>
      <SearchInput
        :query="searchQuery"
        @update-query="updateQuery"
      />
      <AutoComplete
        :suggestions="filteredPlayers"
        :showSuggestions="showSuggestions"
        @selectPlayer="selectPlayer"
        :query="searchQuery"
      />
    </div>
  </div>
</template>
  
  <script>
  import SearchInput from "../components/SearchInput.vue";
  import AutoComplete from "../components/AutoComplete.vue";

  import { players } from "../data/constants.js";
  
  export default {
    name: "MainHome",
    data() {
      return {
        searchQuery: '',
        players,
        filteredPlayers: [],
        selectedPlayer: null,
        showSuggestions: false
      };
    },
    components: {
      SearchInput,
      AutoComplete,

    },
    methods: {
      updateQuery(query) {
        this.searchQuery = query;
        if (this.searchQuery.length >= 3) {
          this.filteredPlayers = this.players
            .filter(player =>
              player.name.toLowerCase().includes(this.searchQuery.toLowerCase())
            )
            .slice(0, 10);
          this.showSuggestions = true;
        } else {
          this.showSuggestions = false;
        }
      },
  
      selectPlayer(player) {
        this.selectedPlayer = player;
        this.showSuggestions = false;
        this.searchQuery = player.name;
      },
    },
  };
  </script>
  
  <style scoped>
  
  #app {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100vh;
  }
  
  </style>
  