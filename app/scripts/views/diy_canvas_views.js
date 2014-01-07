App.DiyCanvasView = Ember.View.extend({

	dragEnter:function(){
		console.log('enter canvas');
	},
	dragOver:function(){
		console.log('drag over canvas');
	},

	didInsertElement:function(){
		this.setDiyMainHeight();
		$(window).bind('resize',this.setDiyMainHeight);

	},

	//计算并设置DiyMian的高度
	setDiyMainHeight:function(){
		var windowHeight = $(window).height();
		var headerHeight = $("header").height();
		var diyTopHeight = $(".diy-top").height();
		var footerHeight = $("footer").height();
		var height = windowHeight - headerHeight - diyTopHeight - footerHeight;
		if(height <=300){
			height = 300;
		}
		$("#canvas").height(height);
		var diyLeftNavHeight = $('.diy-left .panel .nav').height();
		$('.diy-left .panel .tab-content').height(height-diyLeftNavHeight);
		// console.log(headerHeight);
	},


});