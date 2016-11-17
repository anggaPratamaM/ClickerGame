Clazz.createPackage("com.test.widget");

Clazz.com.test.ClickHeroListener = Clazz.extend(Clazz.Base, {
	
	initialize : function(config){
		this.hero = config.hero;
		this.statusBar = config.statusBar;
		this.constant = config.constant;
	},

	addLevelHeroOne: function(heroOneLevel, attackAdded, attackAdder, heroOnePrice){
		var attack = this.statusBar.attack;
		var coin = this.statusBar.coin;
		var levelAdder = this.constant.C_LEVEL_ADDER;
		if(coin >= heroOnePrice){// if coins are enough to upgrade hero level
			coin = coin - heroOnePrice; // substract coin by price
			heroOneLevel = heroOneLevel + levelAdder; // add hero level by one
			attack = attack + attackAdder; // add attack by heroOneAttackAdder
			attackAdded = attackAdded + attackAdder; // add attackAdded by attackAdder
		}else{
			alert('You have not enough coins!! Try to kill some monsters!');
		}
		this.statusBar.setAttack(attack);
		this.statusBar.setCoin(coin);
		this.hero.setHeroOne(heroOneLevel, attackAdded);	
		
	}
});
