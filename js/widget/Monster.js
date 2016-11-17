Clazz.createPackage("com.test.widget");

Clazz.com.test.widget.Monster = Clazz.extend(Clazz.WidgetWithTemplate, {

	templateUrl : "../template/monster.tmp",
	defaultContainer : "widget\\:monster",
	title: null,
	healthPoin: null,
	maxHealthPoin: null,
	monsterLevel: null,
	healthBar: null,
	clickMonster: null,

	initialize : function(){
		this.title = 'Monsters'
		this.data.titleMonster = this.title;
		this.healthPoin = 10;
		this.maxHealthPoin = 10;
		this.healthBar = this.healthPoin/this.maxHealthPoin*100;
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
		//animate monster's healthbar
		var healthBarID = $('#healthBar');
		var healthHalf = 50;
		var healthInjury = 25;
		var self = this;
		healthBarID.css('width',self.healthBar+'%');
		healthBarID.css('background',function(){
			console.log(self.healthBar);
			if(self.healthBar > healthHalf){
				return 'green';
			}else if(self.healthBar > healthInjury){
				return 'yellow';
			}else{
				return 'red';
			}
		});
	},

	setMonsterAfterClick: function(healthAfterClick, maxHealthPoin, monsterLevel){
		this.healthPoin = healthAfterClick;
		this.data.healthPoin = this.healthPoin;
		this.maxHealthPoin = maxHealthPoin;
		this.monsterLevel = monsterLevel;
		this.data.monsterLevel = this.monsterLevel;
		this.healthBar = (healthAfterClick/maxHealthPoin)*100;
		//animate monster's healthbar
		var healthBarID = $('#healthBar');
		healthBarID.css('width',this.healthBar+'%');
		// re-render
		this.render();
	}
});
