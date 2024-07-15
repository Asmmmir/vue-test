<template>
    <div class="search">
      <input
        type="text"
        :value="query"
        @input="updateQuery"
        placeholder="Search players..."
      />
    </div>
  </template>
  
  <script>
  export default {
    props: {
      query: {
        type: String,
        required: true,
      },
    },
    methods: {
      updateQuery(event) {
        this.$emit('update-query', event.target.value);
      },
    },
  };
  </script>
  
  <style scoped>
  .search input {
    padding: 1em;
    font-size: 14px;
  }

  .search {
    display: flex;
  }

  .search__icon {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  </style>
  