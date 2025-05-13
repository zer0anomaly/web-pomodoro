let overalltime = prompt("Time for Countdown:");
let noticetime = prompt("Want to add notice time:")

alert(overalltime)
alert(noticetime)

let coundown = setInterval (() => {
	overalltime--
	document.getElementById("result").innerHTMl = overalltime

})
