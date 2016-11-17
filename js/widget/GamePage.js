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
		this.header = new Clazz.com.test.widget.Header('Clicker Hero KaWe');
		this.statusBar = new Clazz.com.test.widget.StatusBar('Status Bar');// STATUS BAR
		this.hero = new Clazz.com.test.widget.Hero('Hero');// HERO
		this.monster = new Clazz.com.test.widget.Monster('Monster');// MONSTER
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
