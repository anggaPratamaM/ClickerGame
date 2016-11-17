Clazz.createPackage("com.test.widget");

Clazz.com.test.ClickMonsterListener = Clazz.extend(Clazz.Base, {
	
	initialize : function(config){
		this.monster = config.monster;
		this.statusBar = config.statusBar;
	},

	reduceHp: function(healthMonster, maxHealthPoin, monsterLevel){
		var attack = this.statusBar.attack;
		var coin = this.statusBar.coin;
		healthMonster = healthMonster - attack;
		if(healthMonster <= 0){// if monster die
			$('#scream').show();
			this.statusBar.setMonsterKilled();
			maxHealthPoin = Math.floor(maxHealthPoin*1.2);
			healthMonster = maxHealthPoin;
			monsterLevel++;
			coin = coin + (monsterLevel-1);
		}
		this.statusBar.setCoin(coin);
		this.monster.setMonsterAfterClick(healthMonster, maxHealthPoin, monsterLevel);
	}
});
