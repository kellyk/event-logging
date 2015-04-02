var log = function(data) {
	console.log(data);
};

var init = function() {

	$('[data-log]').on('click', function(e){
		var event = {
			element: e.target.nodeName.toLowerCase(),
			id: $(e.target).data('log'),
			action: e.type,
		};

		log(event);
	});
};

$(document).ready(init);