function log(eventData) {
  user = getCookie("userid") || "anonymous";

  $.ajax({
    url: "https://docs.google.com/forms/d/1Z82-YJBGGOGdWIM3i1XeetZc-9Q5LsS5_JAl6-1wdCU/formResponse",
    data: {
      "entry_1113866268" : user,
      "entry_1659896898" : eventData.element || "",
      "entry_87429884": eventData.type || "",
      "entry_1864902988" : eventData.action || ""
      },
    type: "POST",
    dataType: "xml"
  });
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
