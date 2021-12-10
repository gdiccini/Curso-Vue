<template>
  <div class="info-container">
    <p v-show="person.id"><strong>ID: {{ person.id }}</strong></p>
    <p v-show="person.id"><strong>Nome: {{ person.name }}</strong></p>
    <p v-show="person.id"><strong>Idade: {{ person.age }}</strong></p>
  </div>
</template>

<script>

export default {
  props: {
    person: Object,
  }
}
</script>

<style lang="scss">
.info-container {
  width: 48%;
  border: 1px solid gray;
  text-align: center;
}
</style>