app.collection.ToDos = Backbone.collection.extend({
	init: function(){
		this.content = $("#conent"); 
		this.todos = new api.collections.ToDos(); 
		return this; 
	}
	initialize: function(){
		this.add({ title: "Learn Javascript basics"}); 
		this.add({ title: "Go to backgone.js org"}); 
		this.add({ title: "Develop a backbone application"}); 	
	}, 

	model: app.models.ToDos
	up: function(index){
		if(index>0){
			var tmp = this.models[index-1]; 
			this.models[index-1] = this.models[index]; 
			this.models[index] = tmp; 
			this.trigger("change"); 
		}
	}, 
	down: function(index){
		if(index < this.models.length-1) {
			var tmp = this.models[index+1]; 
			this.models[index+1] = this.models[index];
			this.models[index] = tmp; 
			this.trigger("change");  
		}
	}, 
	archive: function(archived, index) {
		this.models[index].set("archived", archived); 
	}, 
	changeStatus: function(done, index){
		this.models[index].set("done", done); 
	}
})