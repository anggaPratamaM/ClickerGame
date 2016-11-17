Clazz.createPackage("com.test.widget");

Clazz.com.test.widget.StatusBar = Clazz.extend(Clazz.WidgetWithTemplate, {

	templateUrl : "../template/statusBar.tmp",
	defaultContainer : "widget\\:statusBar",
	title: null,
	attack: null,
	monsterKilled: null,
	coin: null,
	

	initialize : function(title){
		this.data = {"title":title};
		this.attack = 1;
		this.monsterKilled = 0;
		this.coin = 0;
		this.data.attack = this.attack;
		this.data.monsterKilled = this.monsterKilled;
		this.data.coin = this.coin;

	},

	setAttack : function(addAttack){
		this.attack = addAttack;
		this.data.attack = this.attack;
		this.render();
	},
	
	setCoin : function(coin){
		this.coin = coin;
		this.data.coin = this.coin;
		this.render();
	},

	setMonsterKilled : function(){
		this.monsterKilled ++;
		this.data.monsterKilled = this.monsterKilled;
		this.render();	
	},
	
	preRender : function(whereToRender, renderFunction){
		
		renderFunction(this.data, whereToRender);
	},

	bindUI : function(){
		
	}, 

	postRender : function(){
	
	}


});
