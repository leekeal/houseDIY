$(document).ready(function(){


	var s = Snap("#canvas svg");
	var redCircle = s.circle(120,120,30); 

	redCircle.attr({
		fill: "#cc0000", 
		stroke: "#000000", 
		strokeWidth: "2" 
	});

	redCircle.drag();

	redCircle.click(function(){
		console.log('click');
	})


	// regular rectangle
	var c = s.rect(200, 100, 100, 10);
	c.drag();

})