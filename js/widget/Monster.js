Clazz.createPackage("com.test.widget");

Clazz.com.test.widget.Monster = Clazz.extend(Clazz.WidgetWithTemplate, {

	templateUrl : "../template/monster.tmp",
	defaultContainer : "widget\\:monster",
	title: null,
	healthPoin: null,
	maxHealthPoin: null,
	monsterLevel: null,
	clickMonster: null,

	initialize : function(title){
		this.data = {"title":title};
		this.healthPoin = 10;
		this.maxHealthPoin = 10;
		this.data.healthPoin = this.healthPoin;
		this.monsterLevel = 1;
		this.data.monsterLevel = this.monsterLevel;
		this.clickMonster = new signals.Signal();
	},
	
	preRender : function(whereToRender, renderFunction){

		renderFunction(this.data, whereToRender);
	},

	bindUI : function(){
		var self = this;
		$('.monster').click(function(){
			self.clickMonster.dispatch(self.healthPoin, self.maxHealthPoin, self.monsterLevel);
		});
	}, 

	postRender : function(){
		
	},

	setMonsterAfterClick: function(healthAfterClick, maxHealthPoin, monsterLevel){
		this.healthPoin = healthAfterClick;
		this.data.healthPoin = this.healthPoin;
		this.maxHealthPoin = maxHealthPoin;
		this.monsterLevel = monsterLevel;
		this.data.monsterLevel = this.monsterLevel;
		this.render();
	},
});
