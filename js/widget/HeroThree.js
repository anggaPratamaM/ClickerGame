Clazz.createPackage("com.test.widget");

Clazz.com.test.widget.HeroThree = Clazz.extend(Clazz.WidgetWithTemplate, {

	templateUrl : "../template/heroThree.tmp",
	defaultContainer : "widget\\:heroThree",
	title: null,
	attackAdder: null,
	attackAdded: null,
	price: null,
	level: null,
	clickHeroThree: null,

	initialize : function(name){
		//hero status
		this.attackAdder = 100;
		this.attackAdded = 0;
		this.price = 50;
		this.level = 0;
		//heroThree handlebars
		this.data.nameThree = name;
		this.data.levelThree = this.level;
		this.data.attackAddedThree = this.attackAdded;
		this.data.priceThree = this.price;
		//listener
		this.clickHeroThree = new signals.Signal();

	},
	
	setHeroThree : function(level, attackAdded){
		//reset status
		this.level = level;
		this.attackAdded = attackAdded;
		//reset to heroThree handlebars
		this.data.levelThree = this.level;
		this.data.attackAddedThree = this.attackAdded;
		this.render();
	},

	preRender : function(whereToRender, renderFunction){
		renderFunction(this.data, whereToRender);
	},

	bindUI : function(){
		var self = this;
		$('#heroThree').click(function(){
			self.clickHeroThree.dispatch(
				self.level, 
				self.attackAdded, 
				self.attackAdder, 
				self.price
			);
		});
	}, 

	postRender : function(){
	}

});
