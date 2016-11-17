Clazz.createPackage("com.test.widget");

Clazz.com.test.ClickHeroListener = Clazz.extend(Clazz.Base, {
	
	initialize : function(config){
		this.constant = config.constant;
		this.statusBar = config.statusBar;
		this.heroOne = config.heroOne;
		this.heroTwo = config.heroTwo;
		this.heroThree = config.heroThree;
		
	},

	addLevelHeroOne: function(heroOneLevel, heroOneAttackAdded, heroOneAttackAdder, heroOnePrice){
		var attack = this.statusBar.attack;
		var coin = this.statusBar.coin;
		var levelAdder = this.constant.C_LEVEL_ADDER;
		if(coin >= heroOnePrice){// if coins are enough to upgrade hero level
			coin = coin - heroOnePrice; // substract coin by price
			heroOneLevel = heroOneLevel + levelAdder; // add hero level by one
			attack = attack + heroOneAttackAdder; // add attack by heroOneAttackAdder
			heroOneAttackAdded = heroOneAttackAdded + heroOneAttackAdder; // add attackAdded by attackAdder
		}else{
			alert('You have not enough coins!! Try to kill some monsters!');
		}
		this.statusBar.setAttack(attack);
		this.statusBar.setCoin(coin);
		this.heroOne.setHeroOne(heroOneLevel, heroOneAttackAdded);	
		
	},

	addLevelHeroTwo: function(heroTwoLevel, heroTwoAttackAdded, heroTwoAttackAdder, heroTwoPrice){
		var attack = this.statusBar.attack;
		var coin = this.statusBar.coin;
		var levelAdder = this.constant.C_LEVEL_ADDER;
		if(coin >= heroTwoPrice){// if coins are enough to upgrade hero level
			coin = coin - heroOTwoPrice; // substract coin by price
			heroTwoLevel = heroTwoLevel + levelAdder; // add hero level by Two
			attack = attack + heroTwoAttackAdder; // add attack by heroTwoAttackAdder
			heroTwoAttackAdded = heroTwoAttackAdded + heroTwoAttackAdder; // add attackAdded by attackAdder
		}else{
			alert('You have not enough coins!! Try to kill some monsters!');
		}
		this.statusBar.setAttack(attack);
		this.statusBar.setCoin(coin);
		this.heroTwo.setHeroTwo(heroTwoLevel, heroTwoAttackAdded);	
		
	}
});
