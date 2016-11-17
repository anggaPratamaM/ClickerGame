Clazz.createPackage("com.test.widget");

Clazz.com.test.widget.GamePage = Clazz.extend(Clazz.WidgetWithTemplate, {

	templateUrl : "../template/gamePage.tmp",
	defaultContainer : "page\\:gamePage",
	constant: null,
	header: null,
	statusBar: null,
	hero: null,
	monster: null,


	initialize : function(config){
		this.constant = new Clazz.com.test.constant.Constant();// CONSTANT
		this.header = new Clazz.com.test.widget.Header();
		this.statusBar = new Clazz.com.test.widget.StatusBar();// STATUS BAR
		this.hero = new Clazz.com.test.widget.Hero({// HERO
			'constant': this.constant,
			'statusBar': this.statusBar
		});
		this.monster = new Clazz.com.test.widget.Monster();// MONSTER
		
		//listener MONSTER
		this.clickMonsterListener = new Clazz.com.test.ClickMonsterListener({
			'statusBar': this.statusBar,
			'monster': this.monster
		});
		this.monster.clickMonster.add(this.clickMonsterListener.reduceHp, this.clickMonsterListener);
	},

	preRender : function(whereToRender, renderFunction){
		
		renderFunction(this.data, whereToRender);
	},

	bindUI : function(){

	}, 

	postRender : function(){
		this.header.render();
		this.statusBar.render();
		this.hero.render();
		this.monster.render();
	}

	
});
