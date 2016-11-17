Clazz.createPackage("com.test.widget");

Clazz.com.test.widget.Hero = Clazz.extend(Clazz.WidgetWithTemplate, {

	templateUrl : "../template/hero.tmp",
	defaultContainer : "widget\\:hero",
	title: null,
	heroOne: null,
	heroTwo: null,
	heroThree: null,


	initialize : function(title){
		this.data.title = title;
		this.heroOne = new Clazz.com.test.widget.HeroOne('Hero 1');
		this.heroTwo = new Clazz.com.test.widget.HeroTwo('Hero 2');
		this.heroThree = new Clazz.com.test.widget.HeroThree('Hero 3');
	},

	preRender : function(whereToRender, renderFunction){
		
		renderFunction(this.data, whereToRender);
	},

	bindUI : function(){
		
	}, 

	postRender : function(){
		this.heroOne.render();
		this.heroTwo.render();
		this.heroThree.render();
	}


});
