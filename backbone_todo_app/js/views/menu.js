app.views.menu = Backbone.View.extend({
	templete: _.template($("#tpl-menu").html()), 
	initialize: function() {
		this.render();
	}, 
	render: function() {
		this.$el.html(this.template({}));
	}
})

var ViewsFactory = {
	menu: function(){
		if (!this.menuView) {
			this.menuView = new api.views.menu({
				el: $("#menu")
			});
		}
		return this.menuView; 
	}
};