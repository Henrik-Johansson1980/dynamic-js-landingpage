// DOM Elements
const time = document.getElementById("time");
const greeting = document.getElementById("greeting");
const name = document.getElementById("name");
const focus = document.getElementById("focus");

// Show Time
const showTime = () => {
	const now = new Date();
	const hours = now.getHours();
	const minutes =
		now.getMinutes() < 10 ? `0${now.getMinutes()}` : now.getMinutes();
	const seconds =
		now.getSeconds() < 10 ? `0${now.getSeconds()}` : now.getSeconds();

	// AM OR PM
	//const amPm = hour >= 12 ? 'PM' : 'AM';

	//12 Hour format
	//hours = hours % 12 || 12;
	//Print to #time element
	time.innerHTML = `${hours}:${minutes}:${seconds}`;
	//Run once per second
	setTimeout(showTime, 1000);
};

// Set Background and Greeting BG-image is loaded in from unsplash.
const setBackgroundAndGreetBasedOnTime = () => {
	const now = new Date();
	hours = now.getHours();

	if (hours < 12) {
		document.body.style.background =
			"url('https://source.unsplash.com/featured/1600x900/?morning,nature,dawn') no-repeat center center/cover";
		greeting.innerHTML = "Good Morning ";
		return;
	} else if (hours < 18) {
		document.body.style.background =
			"url('https://source.unsplash.com/featured/1600x900/?afternoon') no-repeat center center/cover";
		greeting.innerHTML = "Good Afternoon ";
		return;
	} else {
		document.body.style.background =
			"url('https://source.unsplash.com/featured/1600x900/?evening,night') no-repeat center center/cover";
		greeting.innerHTML = "Good Evening ";
	}
};

// Get Name
const getName = () => {
	if (localStorage.getItem('name') === null) {
		name.textContent = '[Enter Name]';
	} else {
		name.textContent = localStorage.getItem('name');
	}
};

// Get Focus
const getFocus = () => {
	if (localStorage.getItem('focus') === null) {
		focus.textContent = '[Enter Focus]';
	} else {
		focus.textContent = localStorage.getItem('focus');
	}
};

// Run
showTime();
setBackgroundAndGreetBasedOnTime();
getName();
getFocus();
