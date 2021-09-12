$(document).ready(function(){
	const input = $('input','#input-wrapper')
	const inputBtn = $('button','#input-wrapper')

	// Check for "enter" keypress
	input.on('keydown', function(e) {
		let key = e.which
		if(key == '13') {
			alert("testing")
			// Check if text is empty
			if(input.val() != '') {
				createTask()
			} else {
				alert("Text field is empty...")
			}
		}
	})

	// Check for button click
	inputBtn.on('click tap', function() {
		alert("testing")
		// Check if text is empty
		if(input.val() != '') {
			createTask()
		} else {
			alert("Text field is empty...")
		}
	})

	// Create "new task" element
	function createTask() {
		let newTask = $('<div class="task"><input value="' + input.val() + '" type="text" disabled></div>')
		input.val('')

		// Create edit button
		let taskEdit = $('<button class="task-edit">Edit</button>').click(function() {
			// Toggle button text
			if($(this).text() == 'Edit') {
				$(this).text('Save')
			} else {
				// Check if text is empty
				if($('input',$(this).parent()).val() == ''){
					alert("Text field is empty...")
					return
				} else {
					$(this).text('Edit')
				}
			}
			//Toggle "diabled"
			$('input',$(this).parent()).prop('disabled', function(i, v) { return !v; })
		})

		// Create remove button
		let taskRemove = $('<button class="task-remove">Remove</button>').click(function() {
			$(this).parent().remove()
		})

		// Append buttons to "new task" element
		newTask.append(taskEdit,taskRemove)
		$('#tasks').append(newTask)
	}
})