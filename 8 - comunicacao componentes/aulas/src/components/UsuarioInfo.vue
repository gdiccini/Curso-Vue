<template>
    <div class="componente">
        <h2>As Informações de Usuário</h2>
        <p>Vários detalhes...</p>
        <p>Nome do Usuário: <strong>{{ inverterNome() }}</strong></p>
        <p>Idade do Usuário: <strong>{{ idade }}</strong></p>
        <button @click="reiniciarNome">Reiniciar nome por evento</button>
        <button @click="reiniciarFn()">Reiniciar nome por função callback</button>
    </div>
</template>

<script>
import barramento from '@/barramento';

export default {
    props: {
        nome: String,
        reiniciarFn: Function,
        idade: Number,
    },
    methods: {
        inverterNome() {
            return this.nome.split('').reverse().join('');
        },
        reiniciarNome() {
            this.nome = 'Pedro';
            this.$emit('reiniciarNome', this.nome);
        }
    },
    created() {
        barramento.quandoIdadeMudar((idade) => {
            this.idade = idade;
        })
    }
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #ec485f;
        color: #fff;
    }
</style>
