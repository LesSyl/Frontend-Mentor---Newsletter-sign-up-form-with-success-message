const inputEmail = document.querySelector('#email')
const subscribeBtn = document.querySelector('.subscribe')
const popupBtn = document.querySelector('.popup__button')
const popup = document.querySelector('.popup')
const error = document.querySelector('.error')
const formBoxInput = document.querySelector('.form-box__input')
const card = document.querySelector('.card')

const clearError = () => {
	error.classList.add('hidden')
	formBoxInput.classList.remove('input-error')
}

const showError = () => {
	error.classList.remove('hidden')
	formBoxInput.classList.add('input-error')
}

const showUserEmail = () => {
	const userEmail = document.querySelector('.popup__text-userEmail')

	userEmail.textContent = formBoxInput.value
}

const checkMail = email => {
	const re =
		/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/

	if (re.test(inputEmail.value)) {
		clearError()
		showPopup()
		showUserEmail()
	} else {
		showError()
	}
}

const showPopup = () => {
	popup.classList.add('popup-active')
	card.style.visibility = 'hidden'
}
const closePopup = () => {
	popup.classList.remove('popup-active')
	card.style.visibility = 'visible'
}
subscribeBtn.addEventListener('click', e => {
	e.preventDefault()
	checkMail(email)
})
popupBtn.addEventListener('click', closePopup)
