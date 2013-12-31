App.DiyTopView = Ember.View.extend({
	templateName: 'diy/top',
	actions: {
		topButtonClick:function(){
			console.log("diy-top-view");
			this.get('controller').send('topButtonClick'); 
		}
	},
	
});