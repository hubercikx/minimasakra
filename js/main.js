const nav = document.querySelector('.nav');
const navBtn = document.querySelector('.burger-btn');
const allNavItems = document.querySelectorAll('.nav-items');
const navBtnBars = document.querySelector('.burger-btn__bars');
//
const handleNav = () => {
	nav.classList.toggle('nav-active');
	allNavItems.forEach((item) => {
		item.addEventListener('click', () => {
			nav.classList.remove('nav-active');
		});
	});
	handleNavItemsAnimation();
};

const handleNavItemsAnimation = () => {
	let delayTime = 0;
	allNavItems.forEach((item) => {
		item.classList.toggle('nav-items-animation');
		item.style.animationDelay = '.' + delayTime + 's';
		delayTime++;
	});
};

// const createSnow = () => {
// 	const snowflake = document.createElement('i');
// 	snowflake.classList.add('snowflake');
// 	snowflake.textContent = '❄';

// 	snowflake.style.left = Math.random() * window.innerWidth + 'px';
// 	snowflake.style.animationDuration = Math.random() * 5 + 3 + 's';
// 	document.body.append(snowflake);

// 	setTimeout(() => {
// 		snowflake.remove();
// 	}, 8000);
// };

// setInterval(createSnow, 50);

// navBtn.addEventListener('click', handleNav);
