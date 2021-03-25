var form1 = document.getElementById("form1")
var form2 = document.getElementById("form2")
var form3 = document.getElementById("form3")
var form4 = document.getElementById("form4")

var next1 = document.getElementById("next1")
var next2 = document.getElementById("next2")
var next3 = document.getElementById("next3")

var back1 = document.getElementById("back1")
var back2 = document.getElementById("back2")
var back3 = document.getElementById("back3")

var progress = document.getElementById("progress")

next1.onclick = function () {
	var fname = document.getElementsByName("fname")[0].value;
	var lname = document.getElementsByName("lname")[0].value;
	var dob_month = document.getElementsByName("dob_month")[0].value;
	var dob_day = document.getElementsByName("dob_day")[0].value;
	var dob_year = document.getElementsByName("dob_year")[0].value;

	if (!!fname && !!lname && !!dob_month && !!dob_day && !!dob_year) {
		form1.style.left = "-600px";
		form2.style.left = "40px";
		progress.style.width = "240px";
		document.getElementById("errorMessage1").innerHTML = '';
	}else{
		document.getElementById("errorMessage1").innerHTML = "All fields must be filled out.";
	}
}

next2.onclick = function () {
	var username = document.getElementsByName("username")[0].value;
	var email = document.getElementsByName("email")[0].value;
	var password = document.getElementsByName("password")[0].value;
	var conf_password = document.getElementsByName("conf_password")[0].value;

	if (!!username && !!email && !!password && !!conf_password) {
		form2.style.left = "-600px";
		form3.style.left = "40px";
		progress.style.width = "360px";
		document.getElementById("errorMessage2").innerHTML = '';
	}else{
		document.getElementById("errorMessage2").innerHTML = "All fields must be filled out.";
	}
}

next3.onclick = function () {
	var security_question = document.getElementsByName("security_question")[0].value;
	var answer = document.getElementsByName("answer")[0].value;
	
	if (!!security_question && !!answer) {
		form3.style.left = "-600px";
		form4.style.left = "40px";
		progress.style.width = "480px";
		document.getElementById("errorMessage3").innerHTML = '';
	}else{
		document.getElementById("errorMessage3").innerHTML = "All fields must be filled out.";
	}
}

back1.onclick = function () {
	form1.style.left = "40px";
	form2.style.left = "600px";
	progress.style.width = "120px";
}
back2.onclick = function () {
	form2.style.left = "40px";
	form3.style.left = "600px";
	progress.style.width = "240px";
}
back3.onclick = function () {
	form3.style.left = "40px";
	form4.style.left = "600px";
	progress.style.width = "360px";
}