new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        showAlert() {
            alert('Desafio 1')
        },
        updateValue(event) {
            this.valor = event.target.value
        }
    }
})