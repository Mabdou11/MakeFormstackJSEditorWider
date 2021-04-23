chrome.browserAction.onClicked.addListener(changeWidth) 

function changeWidth(){
	try{

	document.getElementById("javascriptEditor").style.width="100%";
	document.getElementById("javascriptEditor").parentNode.style.width="200%";
	}catch(e){

		console.log("could not find the editor on the current page");
		console.log(e);
	}
}

