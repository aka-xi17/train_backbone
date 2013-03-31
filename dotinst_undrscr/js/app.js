(function() {
	var Task = Backbone.Model.extend({
		defaults:{
			title:'do something',
			completed:false
		},
	});
	var task1 = new Task();


	console.log(task1.toJSON());


	//View
	var TaskView = Backbone.View.extend({
		tagName:'li',
		className:'liClass',
		id:'liId',
		template:_.template($('#task-template').html()),
		render: function(){
			var template = this.template(this.model.toJSON());
			this.$el.html(template);
			return this;
		}
	});

	var taskView = new TaskView({ model:task1});
	console.log(taskView.render().el);
	$('body').append(taskView.render().el);

})();