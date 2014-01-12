
/******************
命名空间
******************/
window.House = {
	Flat:{
		Components:{}
	},
	Space:{},
}


/******************
   组件
   ******************/
   House.Flat.Component = function(snap,option,eventHandler){
   	this.snap = snap;
   	this.option = option;
   	this.e = null;
   	this.eventHandler = eventHandler;
   };

   House.Flat.Component.prototype = {
   	init:function(){
   		this.draw();
   		this.drag();
   		this.e.click(this.click.bind(this));
   		this.e.dblclick(this.dblclick.bind(this));
   	},
   	drag: function(){
   		if(this.option.dragSwitch == undefined || this.option.dragSwitch == true){
   			this.e.drag();
   		}
   		else if(this.option.dragSwitch == false){
   			this.e.undrag();
   		}
   	},
   	click:function(){
   		if(this.eventHandler.click){
   			this.eventHandler.click(this);
   		}
   	},
   	dblclick:function(){
   		if(this.eventHandler.dblclick){
   			this.eventHandler.dblclick(this);
   		}
   	},
   	remove:function(){
   		this.e.remove();
   	},
   };

/******************
墙
******************/
House.Flat.Components.Wall = function(snap,option,eventHandler){
	House.Flat.Component.call(this,snap,option,eventHandler);
}

House.Flat.Components.Wall.prototype = new House.Flat.Component();

House.Flat.Components.Wall.prototype.draw = function(){
	this.e = this.snap.rect(this.option.x, this.option.y, this.option.long, this.option.thick);
},



/******************
工厂
******************/
House.Flat.Factory = function(){
	var snap = Snap("#canvas svg");
	this.createComponent = function(option){
		var component = new House.Flat.Components[option.name](snap,option.option,option.event);
		component.init();
		return component;
	}
}


$(document).ready(function(){
	var flat = new House.Flat.Factory();

	wall = flat.createComponent({
		name:'Wall',
		option:{
			x:400,
			y:100,
			long:200,
			thick:15,
			drag:true,
		},
		event:{
			click:function(e){
				console.log('click')
				console.log(e);
			},
			dblclick:function(e){
				e.remove();
				console.log(e);
			}
		}
	});

})


