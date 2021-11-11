new Vue({
	el: '#desafio',
	data: {
		effect: false,
		changeClass: '',
		applyClass: false,
		width: '0',
	},
	methods: {
		iniciarEfeito() {
			this.effect = !this.effect;
			console.log(this.effect);
		},
		iniciarProgresso() {
			let valor = 0;
			const temporizador = setInterval(() => {
				valor += 5;
				this.width = `${valor}%`;
				if (valor === 100) clearInterval(temporizador);
			}, 500)
		},
		update(event) {
			if(event.target.value === 'true') {
				this.applyClass = true;
			} else if (event.target.value === 'false') {
				this.applyClass = false;
			}
			console.log(this.applyClass);
		}
	}
})
