new Vue({
	el: '#desafio',
	data: {
		myClass: 'destaque',
		myClass2: '',
		myClass3: '',
		applyClass4: false,
		style1: '',
		width: 0
	},
	methods: {
		iniciarEfeito() {
			setInterval(() => {
				this.myClass = this.myClass == 'destaque' ? 'encolher' : 'destaque';
			}, 2000);''
		},
		iniciarProgresso() {
			let valor = 0;
			const temporizador = setInterval(() => {
				valor += 1;
				this.width = `${valor}%`;
				if(valor == 100) clearInterval(temporizador);
			}, 50);
		},
		setClass4(event) {
			if(event.target.value === 'true') {
				this.applyClass4 = true;
			} else if (event.target.value == 'false') {
				this.applyClass4 = false;
			}
		}
	}
})
