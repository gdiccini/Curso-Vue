new Vue({
    el: '#desafio',
    data: {
        valor: 0
    },
    computed: {
        resultado() {
            return this.valor !== 37 ? 'Valor Diferete' : 'Valor igual';
        }
    },
    watch: {
        valor(newValue) {
            if(newValue == 37) {
                setTimeout(() => {
                    this.valor = 0;
                }, 5000);
            }
        }
    }
});