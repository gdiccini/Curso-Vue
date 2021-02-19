new Vue({
  el: '#main',
  data: {
    monsterHp: 100,
    monsterHpColor: 'green',
    heroHp: 100,
    heroHpColor: 'green',
    displayAction: true,
    victory: false,
    defeat: false,
    heroAtk: [],
    heroCure: [],
    monsterAtk: []
  },
  methods: {
    heroLife: function() {
      return `${this.heroHp}%`
    },
    monsterLife: function() {
      return `${this.monsterHp}%`
    },
    monsterAttak: function() {
      const hp = Math.ceil(Math.random() * 14);
      const atkLog = `Monster strikes with ${hp} power!`;
      this.monsterAtk.push(atkLog);
      if (this.heroHp - hp <= 0){
        this.heroHp = 0;
      } else {
        this.heroHp -= hp;
      }
    },
    heroAttak: function() {
      const hp = Math.ceil(Math.random() * 14);
      const atkLog = `Hero strikes with ${hp} power!`;
      this.heroAtk.push(atkLog);
      if (this.monsterHp - hp <= 0){
        this.monsterHp = 0;
      } else {
        this.monsterHp -= hp;
      }
    },
    specialAttak: function() {
      const hp = Math.ceil(Math.random() * 17);
      const atkLog = `Hero strikes with special attack giving ${hp} damage!`;
      this.heroAtk.push(atkLog);
      this.monsterAttak();
      if (this.monsterHp - hp <= 0){
        this.monsterHp = 0;
      } else {
        this.monsterHp -= hp;
      }
    },
    cureHero: function() {
      const hp = Math.ceil(Math.random() * 17);
      const atkLog = `Hero cures himself in ${hp}hp.`;
      this.heroAtk.push(atkLog);
      if (this.heroHp + hp >= 100){
        this.heroHp = 100;
        this.monsterAttak();
        this.heroCriticalLife()
      } else {
        this.heroHp += hp;
        this.monsterAttak();
        this.heroCriticalLife()
      }
    },
    monsterCriticalLife: function() {
      if(this.monsterHp <= 25) this.monsterHpColor = 'red';
      if(this.monsterHp > 25) this.monsterHpColor = 'green';

    },
    heroCriticalLife: function() {
      if(this.heroHp <= 25) {
        this.heroHpColor = 'red'
      } else {
        this.heroHpColor = 'green'
      }
    },
    victoryOrDefeat: function() {
      if (this.heroHp === 0) {
        this.defeat = !this.defeat;
        this.displayAction = true;
      } else if (this.monsterHp === 0) {
        this.victory = !this.victory;
        this.displayAction = true;
      }
    },
    reset: function() {
      this.monsterHp = 100;
      this.heroHp = 100;
      this.heroLife;
      this.monsterLife;
      this.heroCriticalLife();
      this.monsterCriticalLife();
      this.displayAction = true;
      this.heroAtk = [];
      this.monsterAtk = [];
      this.heroCure = [];
    },
    startBtn: function() {
      this.heroHp = 100;
      this.monsterHp = 100;
      this.displayAction = !this.displayAction;
      this.victoryOrDefeat();
      this.heroCriticalLife();
      this.monsterCriticalLife();
      this.victory = false;
      this.defeat = false;
    }
  }
})