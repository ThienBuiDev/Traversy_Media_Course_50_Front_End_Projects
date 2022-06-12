const sliderContainer = document.querySelector('.container')
const slideRight = document.querySelector('.right-slide')
const slideLeft = document.querySelector('.left-slide')
const upBtn = document.querySelector('.up-button')
const downBtn = document.querySelector('.down-button')
const slideLength = document.querySelectorAll('.right-slide div').length

let activeSlideIndex = 0
slideLeft.style.top = `-${(slideLength - 1) * 100}vh`

upBtn.addEventListener('click', () => changeSlide('up'))
downBtn.addEventListener('click', () => changeSlide('down'))
const changeSlide = (direction) => {
	const sliderHeight = sliderContainer.clientHeight
	if (direction === 'up') {
		activeSlideIndex = (activeSlideIndex + 1) % slideLength
	} else {
		activeSlideIndex = (activeSlideIndex - 1 + slideLength) % slideLength
	}
	slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`
	slideLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`
}
