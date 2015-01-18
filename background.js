// Set up context menu at install time.
chrome.runtime.onInstalled.addListener(function() {
    var context = "selection";
    var title = "Find on mapy.cz";
    var id = chrome.contextMenus.create({"title": title, "contexts":[context],
                                         "id": "context" + context});  
});

// add click event
chrome.contextMenus.onClicked.addListener(onClickHandler);

// The onClicked callback function.
function onClickHandler(info, tab) {
    var sText = info.selectionText;
    var mapyURL = "http://mapy.cz/?q=" + encodeURIComponent(sText);
    chrome.tabs.create({ url: mapyURL });
};
