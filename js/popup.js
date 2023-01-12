// /js/popup.js
// This is the popup.js file. It is used to save the data to Google extension sync and localStorage


import {
	Spinner
} from '/js/spin.js';

var opts = {
	lines: 9, // The number of lines to draw
	length: 0, // The length of each line
	width: 9, // The line thickness
	radius: 13, // The radius of the inner circle
	scale: 1, // Scales overall size of the spinner
	corners: 1, // Corner roundness (0..1)
	speed: 0.7, // Rounds per second
	rotate: 0, // The rotation offset
	animation: 'spinner-line-fade-more', // The CSS animation name for the lines
	direction: 1, // 1: clockwise, -1: counterclockwise
	color: '#ffffff', // CSS color or array of colors
	fadeColor: 'transparent', // CSS color or array of colors
	top: '92%', // Top position relative to parent
	left: '91%', // Left position relative to parent
	shadow: '0 0 1px transparent', // Box-shadow for the lines
	zIndex: 2000000000, // The z-index (defaults to 2e9)
	className: 'spinner', // The CSS class to assign to the spinner
	position: 'absolute', // Element positioning
};

var target = document.getElementById('spinner');
var spinner = new Spinner(opts).spin(target);


if (localStorage.getItem("notepad_data")) {
	try {
		data = chrome.runtime.sync.get("notepad_data");
		console.info("Loaded data from Chrome extension sync");
	} catch (e) {
		try {
			data = localStorage.getItem("notepad_data");
			console.info("Loaded data from localStorage");
		} catch (e) {
			console.error("Error loading data from localStorage and Google extension sync");
			console.error(e);
		}
	};

	document.querySelector("body").innerHTML = data;
} else {
	var data = "<br>Start typing!";
	document.querySelector("body").innerHTML = data;
}

document.querySelector("body").addEventListener("input", function () {
	data = document.querySelector("body").innerHTML;
	if (data.includes("<br>Start typing!")) {
		data.replace("<br>Start typing!", "");
	}
	localStorage.setItem("notepad_data", data);

	if (data.includes("/reset") || data.includes("/clear")) {
		resetNotepad();
	}
	if (data.includes("/save")) {
		save();
	}
	if (data.includes("/print")) {
		data.replace("/print", "");
		window.print();
	}
});

document.setTimeout(() => {
	localStorage.setItem("notepad_data", data);
	saveData(data);
}, 1000);

document.addEventListener('beforeunload', function (e) {
	localStorage.clear();
	localStorage.setItem("notepad_data", data);
	saveData(data);
});


var isCtrl = false;
document.addEventListener('load', function () {
	document.body.addEventListener('keydown', function (e) {
		if (e.keyCode == 17) {
			e.preventDefault();
			isCtrl = true;
		}
		if (e.keyCode == 83 && isCtrl) {
			e.preventDefault();
			data.replace("/save", "");
			data.replace("/reset", "");
			data.replace("/print", "");
			data.replace("/clear", "");
			save(data, type, name);
		}
	});

	document.body.addEventListener('keyup', function (e) {
		e.preventDefault();
		isCtrl = false;
	});
});



var type = "text/html";
var name = "index.html";


function save(data, type, name) {
	var blob = new Blob([data], {
		type
	});
	var url = document.URL.createObjectURL(blob);
	downloadURI(url, name);
	document.URL.revokeObjectURL(url);
}

function downloadURI(uri, name) {
	var link = document.createElement("a");
	console.info("Downloading HTML content");
	link.download = name;
	link.href = uri;
	link.click();
}

function resetNotepad() {
	console.info("Resetting notepad");
	localStorage.clear();
	document.body.innerHTML = "";
}


chrome.storage.onChanged.addListener((changes, namespace) => {
	spinner.stop();
});

function saveData(data) {
	chrome.runtime.sync.set({
		"notepad_data": data
	}, function () {
		console.info("Saved data to Google extension sync");
		spinner.spin();
		localStorage.setItem("notepad_data", data);
	});

}