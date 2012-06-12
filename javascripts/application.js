// time 54.41
 $.fn.extend({

	taskStates:['task-empty', 'task-x', 'task-apostrophe', 'task-dash'],
	
	resetTaskStateClassNames:function() { 
		var elements = this;
		$.each($.fn.taskStates, function() {
			elements.removeClass(this);
		})
		return this;
	},
	
	resetTaskState:function() { },
	
	toggleTaskState:function() { 
		this.resetTaskStateClassNames();
		
		return this.each(function() {
			var element = $(this);
			var taskStateIndex = element.data('taskStateIndex') || 0;
			taskStateIndex = (taskStateIndex + 1) % $.fn.taskStates.length;

			element.data('taskStateIndex', taskStateIndex)
				.addClass($.fn.taskStates[taskStateIndex]);
		});
	},
	
}); 

$(function () {

	$('.completion a').live("click", function(e){
		$(this).toggleTaskState();
		return false;
	}); 
	
	$('#add').click(function(e) { 
		var taskItem = $('#tasks ul li:first').clone();
		taskItem.find('input[type="text"]').val("");
		$('#tasks ul').append(taskItem);
		taskItem.find('input[type="text"]:first').focus();
		return false;
	});
	
	$('#add').click().click();
	
	$('#tasks ul').sortable({handle:".handle"}).disableSelection();
	
	$('input[type="text"]:first').focus();
	
});