let myList = document.getElementsByTagName("LI");
for (let i = 0; i < myList.length; i++) {
	let span = document.createElement("SPAN");
	let txt = document.createTextNode("delete");
	span.className = "close";
	span.appendChild(txt);
	myList[i].appendChild(span);
}

let close = document.getElementsByClassName("close");
for (let j = 0; j < close.length; j++) {
	close[j].onclick = function () {
		let li = this.parentElement;
		li.style.display = "none";
	}
}


let list = document.querySelector("ul");
list.addEventListener("click", function (ev){
	if (ev.target.tagName === "LI") {
		ev.target.classList.toggle("checked");
	}
});

function newElement() {
	let li = document.createElement("li");
	let inputValue = document.getElementById("myInput").value;
	let text = document.createTextNode(inputValue);
	li.appendChild(text);
	if (inputValue ==="") {
		alert("you have to type something!");
	} else {
		document.getElementById("myul").appendChild(li);
	}
	document.getElementById("myInput").value="";


	let span = document.createElement("SPAN");
	let txt = document.createTextNode("delete");
	span.className = "close";
	span.appendChild(txt);
	li.appendChild(span);


	let close = document.getElementsByClassName("close");
for (let j = 0; j < close.length; j++) {
	close[j].onclick = function () {
		let li = this.parentElement;
		li.style.display = "none";
	}
}


}