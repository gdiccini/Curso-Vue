new Vue({
  el: '#app',
  data: {
    playerWins: false,
    monsterWins: false,
    actions: [],
    monsterLife: 100,
    heroLife: 100,
    specialCounter: 0,
    gameOn: false
  },
  methods: {
    heroAtk() {
      this.specialCounter += 1;
      if (this.monsterLife > 0) {
        const heroAtk = Math.round(Math.random() * (11 - 7) + 7);
        this.actions.unshift(`Herói atacou com ${heroAtk} de força`);
        if (this.monsterLife - heroAtk >= 0) {
          this.monsterLife -= heroAtk;
        } else {
          this.monsterLife = 0;
        }
      }
    },
    specialAtk() {
      this.specialCounter = 0;
      if (this.monsterLife > 0) {
        const heroAtk = Math.round(Math.random() * (18 - 7) + 7);
        this.actions.unshift(`Herói usou especial com ${heroAtk} de força`);
        if (this.monsterLife - heroAtk >= 0) {
          this.monsterLife -= heroAtk;
        } else {
          this.monsterLife = 0;
        }
      }
    },
    monsterAtk() {
      if (this.heroLife > 0) {
        const monsterAtk = Math.round(Math.random() * (14 - 9) + 9);
        this.actions.unshift(`Monstro atacou com ${monsterAtk} de força`);
        if (this.heroLife - monsterAtk >= 0) {
          this.heroLife -= monsterAtk;
        } else {
          this.heroLife = 0;
        }
      }
    },
    heal() {
      if (this.heroLife > 0) {
        const heroHeal = Math.round(Math.random() * (15 - 10) + 10);
        this.actions.unshift(`Herói curou ${heroHeal}`);
        if (this.heroLife + heroHeal <= 100) {
          this.heroLife += heroHeal;
        } else {
          this.heroLife = 100;
        }
      }
    },
    atakTurn() {
      if (this.monsterLife > 0 && this.heroLife > 0) {
        this.heroAtk();
      }
      if (this.monsterLife > 0 && this.heroLife > 0) {
        this.monsterAtk();
      }
    },
    specialAtkTurn() {
      if (this.monsterLife > 0 && this.heroLife > 0) {
        this.specialAtk();
      }
      if (this.monsterLife > 0 && this.heroLife > 0) {
        this.monsterAtk();
      }
    },
    healTurn() {
      if (this.heroLife > 0 && this.monsterLife > 0) {
        this.heal();
        this.monsterAtk();
      }
    },
    giveUp() {
      this.heroLife = 100
      this.monsterLife = 100
      this.gameOn = false
      this.actions = []
      this.monsterWins = false
      this.heroWins = false
    },
    actionClass(action) {
      if (action.includes('curou')) {
        return 'playerHeal'
      } else if (action.includes('especial')) {
        return 'specialAtk'
      } else if(action.includes('Herói')) {
        return 'player'
      } else {
        return 'monster';
      }
    }
  },
  watch: {
    monsterLife() {
      if (this.monsterLife == 0) {
        this.playerWins = true;
      }
    },
    heroLife() {
      if (this.heroLife == 0) {
        this.monsterWins = true;
      }
    }
  },
})