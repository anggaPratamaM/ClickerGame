Clazz.createPackage("com.test.widget");

Clazz.com.test.widget.HeroOne = Clazz.extend(Clazz.WidgetWithTemplate, {

	templateUrl : "../template/heroOne.tmp",
	defaultContainer : "widget\\:heroone",
	title: null,
	attackAdder: null,
	attackAdded: null,
	price: null,
	level: null,

	initialize : function(name){
		//hero status
		this.attackAdder = 1;
		this.attackAdded = 0;
		this.price = 1;
		this.level = 0;
		//heroOne handlebars
		this.data.nameOne = name;
		this.data.levelOne = this.level;
		this.data.attackAddedOne = this.attackAdded;
		this.data.priceOne = this.price;
		//listener
		this.clickHeroOne = new signals.Signal();

	},
	
	setHeroOne : function(level, attackAdded){
		//reset status
		this.level = level;
		this.attackAdded = attackAdded;
		//reset to heroOne handlebars
		this.data.levelOne = this.level;
		this.data.attackAddedOne = this.attackAdded;
		this.render();
	},

	preRender : function(whereToRender, renderFunction){
		renderFunction(this.data, whereToRender);
	},

	bindUI : function(){
		var self = this;
		$('#heroOne').click(function(){
			self.clickHeroOne.dispatch(
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
