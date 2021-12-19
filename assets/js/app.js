window.addEventListener('DOMContentLoaded', () => {
	let lid = document.getElementById('lid');
	let gift = document.getElementById('container-box');
	let countdown = document.getElementById('count-down');
	let isOpen = false;
	let numberCountDown = 3;
	gift.addEventListener('click', () => {
		isOpen = !isOpen;
		if (isOpen) {
			lid.style.animation = 'push 1s';
			countdown.classList.add('count-down');
			countdown.style.transform = 'translateY(180%)';
			lid.style.transform = 'rotate(145deg) translate(-70%, -200px)';
			const countDown = setInterval(() => {
				numberCountDown--;
				if (numberCountDown === 0) {
					countdown.classList.add('text-5xl');
					countdown.innerText = 'Happy Birthday !';
					clearInterval(countDown);
				} else {
					countdown.innerText = numberCountDown;
				}
			}, 1000);
			if (numberCountDown <= 0) {
				console.log(numberCountDown);
				return clearInterval(countDown);
			}
		} else {
			lid.style.animation = '';
			countdown.classList.remove('count-down');
			countdown.style.transform = 'translateY(280%)';
			lid.style.transform = 'rotate(0deg) translate(0%, 0)';
			numberCountDown = 3;
			countdown.innerText = numberCountDown;
			countdown.classList.remove('text-5xl');
		}

		console.log(isOpen);
	});
});
