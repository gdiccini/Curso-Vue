new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        showAlert() {
            alert('Deu bom!');
        },
        getValue(event) {
            this.valor = event.target.value;
        }
    }
})