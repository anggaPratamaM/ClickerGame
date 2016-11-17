Clazz.createPackage("com.test.widget");

Clazz.com.test.widget.HeroTwo = Clazz.extend(Clazz.WidgetWithTemplate, {

	templateUrl : "../template/heroTwo.tmp",
	defaultContainer : "widget\\:herotwo",
	name: null,
	attackAdder: null,
	attackAdded: null,
	price: null,
	level: null,
	clickHeroTwo: null,

	initialize : function(name){
		//hero status
		this.attackAdder = 15;
		this.attackAdded = 0;
		this.price = 10;
		this.level = 0;
		//heroTwo handlebars
		this.data.nameTwo = name;
		this.data.levelTwo = this.level;
		this.data.attackAddedTwo = this.attackAdded;
		this.data.priceTwo = this.price;
		//listener
		this.clickHeroTwo = new signals.Signal();

	},
	
	setHeroTwo : function(level, attackAdded, price){
		//reset status
		this.level = level;
		this.attackAdded = attackAdded;
		this.price = price;
		//reset to heroTwo handlebars
		this.data.levelTwo = this.level;
		this.data.attackAddedTwo = this.attackAdded;
		this.data.priceTwo = this.price;
		this.render();
	},

	preRender : function(whereToRender, renderFunction){
		renderFunction(this.data, whereToRender);
	},

	bindUI : function(){
		var self = this;
		$('#heroTwo').click(function(){
			self.clickHeroTwo.dispatch(
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
