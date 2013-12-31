App.DiyView = Ember.View.extend({
	diyMainHeight:null,
	diyMainstyle:null,

	didInsertElement:function(){
		self = this;
		self.setDiyMainHeight(self);
		$(window).bind('resize',function(){
			self.setDiyMainHeight(self);
		});
	},


	setDiyMainHeight:function(DiyView){
		var windowHeight = $(window).height();
		var headerHeight = $("header").height();
		var diyTopHeight = $(".diy-top").height();
		var footerHeight = $("footer").height();
		DiyView.set('diyMainHeight',windowHeight - headerHeight - diyTopHeight - footerHeight);
		DiyView.set('diyMainstyle','height:'+DiyView.get('diyMainHeight')+'px;');
	},





});