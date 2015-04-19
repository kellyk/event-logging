var logPageVisit = function() {
	var event = {
		element: "page",
		action: "visit"
	};

	log(event);
};

var logInteractions = function() {
	$('[data-log]').on('click', function(e){
		var event = {
			element: e.target.nodeName.toLowerCase(),
			type: $(e.target).data('log'),
			action: e.type,
		};

		log(event);
	});
};

$(document).ready(function() {
	logPageVisit();
	logInteractions();
});
