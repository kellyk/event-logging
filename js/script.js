$(document).ready(function() {
	logPageVisit();
	addListeners();
});

var logPageVisit = function() {
	var event = {
		element: "page",
		type: "home",
		action: "visit"
	};

	log(event);
};

var addListeners = function() {
	$('#tweet-compose, #tweet-submit').on('click', function(e) {
		var event = {
			element: e.target.nodeName.toLowerCase(),
			type: this.id,
			action: e.type,
		};

		log(event);
	});
};
