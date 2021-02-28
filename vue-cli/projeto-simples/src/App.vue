<template>
  <div id="app">
    <h1>{{ titulo }}</h1>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      titulo: 'Teste Data usando Vue JS!!',
    }
  }
}

</script>

<style>
  #app {
    background-color: red;
  }
</style>
