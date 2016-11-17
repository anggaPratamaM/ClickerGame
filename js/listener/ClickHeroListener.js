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
			heroOnePrice = Math.floor(heroOnePrice*1.2); // reset the price - multiply it by 1.2  
		}else{
			alert('You have not enough coins!! Try to kill some monsters!');
		}
		this.statusBar.setAttack(attack);
		this.statusBar.setCoin(coin);
		this.heroOne.setHeroOne(heroOneLevel, heroOneAttackAdded, heroOnePrice);	
		
	},

	addLevelHeroTwo: function(heroTwoLevel, heroTwoAttackAdded, heroTwoAttackAdder, heroTwoPrice){
		var attack = this.statusBar.attack;
		var coin = this.statusBar.coin;
		var levelAdder = this.constant.C_LEVEL_ADDER;
		if(coin >= heroTwoPrice){// if coins are enough to upgrade hero level
			coin = coin - heroTwoPrice; // substract coin by price
			heroTwoLevel = heroTwoLevel + levelAdder; // add hero level by Two
			attack = attack + heroTwoAttackAdder; // add attack by heroTwoAttackAdder
			heroTwoAttackAdded = heroTwoAttackAdded + heroTwoAttackAdder; // add attackAdded by attackAdder
			heroTwoPrice = Math.floor(heroTwoPrice*1.2); // reset the price - multiply it by 1.2
		}else{
			alert('You have not enough coins!! Try to kill some monsters!');
		}
		this.statusBar.setAttack(attack);
		this.statusBar.setCoin(coin);
		this.heroTwo.setHeroTwo(heroTwoLevel, heroTwoAttackAdded, heroTwoPrice);	
		
	},

	addLevelHeroThree: function(heroThreeLevel, heroThreeAttackAdded, heroThreeAttackAdder, heroThreePrice){
		var attack = this.statusBar.attack;
		var coin = this.statusBar.coin;
		var levelAdder = this.constant.C_LEVEL_ADDER;
		if(coin >= heroThreePrice){// if coins are enough to upgrade hero level
			coin = coin - heroThreePrice; // substract coin by price
			heroThreeLevel = heroThreeLevel + levelAdder; // add hero level by Three
			attack = attack + heroThreeAttackAdder; // add attack by heroThreeAttackAdder
			heroThreeAttackAdded = heroThreeAttackAdded + heroThreeAttackAdder; // add attackAdded by attackAdder
			heroThreePrice = Math.floor(heroThreePrice*1.2); // reset the price - multiply it by 1.2
		}else{
			alert('You have not enough coins!! Try to kill some monsters!');
		}
		this.statusBar.setAttack(attack);
		this.statusBar.setCoin(coin);
		this.heroThree.setHeroThree(heroThreeLevel, heroThreeAttackAdded, heroThreePrice);	
		
	}
});
