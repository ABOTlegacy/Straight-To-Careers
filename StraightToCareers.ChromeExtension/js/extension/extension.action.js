$(document).ready(function() {
	$("#btnSubmit").click(function() {
		chrome.tabs.getSelected(null, function (tab) {
			chrome.tabs.update(tab.id, {url: "http://www.google.com/search?ie=UTF-8&oe=UTF-8&sourceid=navclient&btnI=1&q=" + escape($("#companyName").val()) + "%20careers"});
		});
	});
});