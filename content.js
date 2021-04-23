import { elementReady } from "es6-element-ready";

const changeWidth = () => {
	document.getElementById("javascriptEditor").style.width="100%";
	document.getElementById("javascriptEditor").parentNode.style.width="200%";
}
elementReady('#javascriptEditor').then(changeWidth());
