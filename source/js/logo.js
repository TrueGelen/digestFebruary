window.addEventListener('load', () => {
	const logo = document.querySelector('.fixedLogo')
	const wrapper = document.querySelector('#wrapper')

	function getPropertyOfElement(element, property) {
		if (element.style[property] === '') {
			return element.currentStyle ? element.currentStyle[property] : getComputedStyle(element, null)[property]
		} else {
			return element.style[property]
		}
	}

	function buildLogo() {
		let clientHeight = window.innerHeight
		let wrapperHeight = parseInt(getPropertyOfElement(wrapper, 'height'))
		let top = window.innerWidth > 1050 ?
			((clientHeight - wrapperHeight) / 2) + (wrapperHeight / 100 * 8) :
			((clientHeight - wrapperHeight) / 2) + (wrapperHeight / 100 * 7)
		logo.style.top = `${top}px`
	}

	buildLogo()

	window.addEventListener('resize', () => {
		buildLogo()
	})

})