const start = document.getElementById('start')
const settingbtn = document.getElementById('settingbtn')
const settings = document.getElementById('settings')
const reset = document.getElementById('reset')
const workDuration = document.getElementById('workDuration')
const breakDuration = document.getElementById('breakDuration')


settingbtn.addEventListener('click', () => {
	if (settings.style.display === 'none' || settings.style.display === ''){
		settings.style.display = 'block'
	}else {
		settings.style.display = 'none'
	}
})

start.addEventListener('click', () => {

})
