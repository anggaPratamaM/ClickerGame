Clazz.createPackage("com.test.widget");

Clazz.com.test.widget.Hero = Clazz.extend(Clazz.WidgetWithTemplate, {

	templateUrl : "../template/hero.tmp",
	defaultContainer : "widget\\:hero",
	constant: null,
	statusBar: null,
	title: null,
	heroOne: null,
	heroTwo: null,
	heroThree: null,
	constant: null,
	statusBar: null,


	initialize : function(config){
		//config object needed
		this.constant = config.constant;
		this.statusBar = config.statusBar;

		//set title
		this.title = 'Heroes';
		this.data.title = this.title;
		
		//hero-list
		this.heroOne = new Clazz.com.test.widget.HeroOne('Hero 1');
		this.heroTwo = new Clazz.com.test.widget.HeroTwo('Hero 2');
		this.heroThree = new Clazz.com.test.widget.HeroThree('Hero 3');
		
		//listener HEROES
		this.clickHeroListener = new Clazz.com.test.ClickHeroListener({
			'constant': this.constant,
			'statusBar': this.statusBar,
			'heroOne': this.heroOne,
			'heroTwo': this.heroTwo,
			'heroThree': this.heroThree,
		});
		this.heroOne.clickHeroOne.add(this.clickHeroListener.addLevelHeroOne, this.clickHeroListener);
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
