<template>
  <div class="list-container">
    <ul>
      <li>
        <hr>
          <div class="line-container">
            <p><strong>#ID</strong></p>
            <p><strong>Nome</strong></p>
          </div>
        <hr>
      </li>
      <li v-for="(person, index) in people" :key="index" @click="selectPerson(person)">
          <div class="line-container">
            <p>{{ person.id }}</p>
            <p>{{ person.name }}</p>
          </div>
        <hr>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      people: [
        { id: 1, name: 'Ana', age: 31 },
        { id: 2, name: 'João', age: 12 },
        { id: 3, name: 'Giovani', age: 18 },
        { id: 4, name: 'Jonas', age: 25 },
        { id: 5, name: 'Barbara', age: 22 },
        { id: 6, name: 'Gui', age: 32 },
      ],
    }
  },
  methods: {
    selectPerson(person) {
      this.$emit('selectPerson', person)
    }
  }
}
</script>

<style lang="scss">
.list-container {
  width: 48%;

  ul {
    padding: 0;
    margin: 0;
    li {
      list-style-type: none;

      &:hover {
        background-color: gray;
      }
      hr {
        margin: 0;
       }
      .line-container {
        display: flex;

        p {
          width: 50%;
          text-align: center;
        }
      }
    }
  }
}
</style>