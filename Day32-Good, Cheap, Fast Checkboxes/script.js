const checkboxes = document.querySelectorAll('input[type=checkbox]')
let checkboxArr = []
checkboxes.forEach((checkbox) => checkbox.addEventListener('change', () => updateCheckBoxes(checkbox)))

let updateCheckBoxes = (checkbox) => {
	if (checkbox.checked) {
		if (checkboxArr.length == 2) {
			checkboxArr.shift()
		}
		checkboxArr.push(checkbox)
	} else {
		checkboxArr = checkboxArr.filter((element) => element != checkbox)
	}

	checkboxes.forEach((checkbox) => (checkbox.checked = false))
	checkboxArr.forEach((checkbox) => (checkbox.checked = true))
	console.log(checkboxArr)
}
