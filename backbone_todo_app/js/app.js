var app = (function() {

    var api = {
        views: {}, 
        models: {}, 
        collections: {}, 
        content: null, 
        router: null, 
        todos: null,
        init: function() {
            this.content = $("#content"); 
        }, 
        changeContent: function(element) {
            this.content.empty().append(element); 
            return this; 
        }, 
        title: function(str){
            $("h1").text(str); 
            return this; 
        }
    }; 
    var ViewsFactory = {}; 
    var Router = Backbone.Router.extend({}); 
    var ViewClass = Backbone.View.extend({ });
    var view = new ViewClass(); 
    api.router = new Router(); 

    return api;

})(); 