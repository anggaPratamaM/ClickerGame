$(document).ready(function(){

	var gamePage = new Clazz.com.test.widget.GamePage();
	Clazz.navigationController = new Clazz.NavigationController({
	    mainContainer : "page\\:widget"
	});
	Clazz.navigationController.push(gamePage);
	
});

