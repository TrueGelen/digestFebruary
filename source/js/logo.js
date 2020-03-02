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
		console.log('logo.js')
		let clientHeight = window.innerHeight
		let wrapperHeight = parseInt(getPropertyOfElement(wrapper, 'height'))
		let bottom = window.innerWidth > 1050 ?
			((clientHeight - wrapperHeight) / 2) + (wrapperHeight / 100 * 4) :
			((clientHeight - wrapperHeight) / 2) + (wrapperHeight / 100 * 3)
		logo.style.bottom = `${bottom}px`
		console.log(clientHeight, wrapperHeight, bottom)
	}

	buildLogo()

	window.addEventListener('resize', () => {
		buildLogo()
	})

})