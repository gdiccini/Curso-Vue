new Vue({
  el: '#desafio',
  data: {
    name: 'Giovani',
    age: 30,
    imgLink: 'https://vuejs.org/images/logo.png'
  },
  methods: {
    randomNumber: function() {
      return Math.random();
    }
  }
})