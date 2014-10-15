// Set up context menu at install time
chrome.runtime.onInstalled.addListener(function(){
	var context = "selection";
	var title = "Add annotation";
	var id = chrome.contextMenus.create({
		"title": title,
		"contexts": [context],
		"id": "context" + context
	});
})

// Add click event
chrome.contextMenus.onClicked.addListener(function (info, tab){
	window.alert("it worked!");
});