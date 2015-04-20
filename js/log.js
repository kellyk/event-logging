var userid = getCookie("userid");
var bucket = getCookie("placeholder_bucket");

function log(eventData) {
  display(eventData);

  $.ajax({
    url: "https://docs.google.com/forms/d/1Z82-YJBGGOGdWIM3i1XeetZc-9Q5LsS5_JAl6-1wdCU/formResponse",
    data: {
      "entry_1611674180" : userid,
      "entry_164936215" : bucket,
      "entry_1659896898" : eventData.element || "",
      "entry_87429884" : eventData.type || "",
      "entry_1864902988" : eventData.action || ""
      },
    type: "POST",
    dataType: "xml"
  });
}

function display(evt) {
  var newEvent = $("<li></li>");
  newEvent.html([evt.element, evt.type, evt.action].join(" : "));
  $('.display-events').append(newEvent);
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
    }
    return "";
}
