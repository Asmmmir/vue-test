<template>
  <div id="app">
  <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style scoped>

#app {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

</style>
