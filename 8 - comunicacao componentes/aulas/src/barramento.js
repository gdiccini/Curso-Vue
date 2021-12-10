import Vue from 'vue';

export default new Vue({
  methods: {
    alterarIdade(idade) {
      this.$emit('mudarIdade', idade);
    },
    quandoIdadeMudar(callback) {
      this.$on('mudarIdade', callback);
    }
  }
});