// Log creation status
function onCreated() {
  if (chrome.runtime.lastError) {
    console.log(`Error: ${chrome.runtime.lastError}`);
  } else {
    console.log("Menu item mapycz-selection created.");
  }
}

// Log all errors
function onError(error) {
  console.log(`Error: ${error}`);
}

// Create the context menu item.
chrome.contextMenus.create({
  id: "mapycz-selection",
  title: chrome.i18n.getMessage("title"),
  contexts: ["selection"]
}, onCreated);

// Add click event
chrome.contextMenus.onClicked.addListener((info, tab) => {
    var sText = info.selectionText;
    var mapyURL = "https://mapy.cz/?q=" + encodeURIComponent(sText);
    chrome.tabs.create({ url: mapyURL });
});
