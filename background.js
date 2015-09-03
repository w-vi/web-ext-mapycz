// Set up context menu at install time.
chrome.runtime.onInstalled.addListener(function() {
    var context = "selection";
    var title = chrome.i18n.getMessage("title");
    var id = chrome.contextMenus.create({"title": title, "contexts":[context],
                                         "id": "context" + context});
});

// add click event
chrome.contextMenus.onClicked.addListener(onClickHandler);

// The onClicked callback function.
function onClickHandler(info, tab) {
    var sText = info.selectionText;
    var mapyURL = "http://www.mapy.cz/zakladni?x=15.6252330&y=49.8022514&z=8&q=" + encodeURIComponent(sText);
    chrome.tabs.create({ url: mapyURL });
};
