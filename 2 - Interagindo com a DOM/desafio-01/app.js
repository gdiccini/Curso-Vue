new Vue({
  el: '#desafio',
  data: {
    name: 'Giovani',
    age: 30,
    imageLink: 'https://miro.medium.com/max/2000/1*ACR0gj0wbx91V_xgURifWg.png'
  },
  methods: {
    randomNumber() {
      return Math.random();
    }
  }
})