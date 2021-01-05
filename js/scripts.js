var nav = document.querySelector('nav ul');

		function toggle() {
			nav.classList.toggle('slide');
		}

		window.onscroll = function(){
			stickyNav();
			homeHover();
			aboutHover();
			tradisionalHover();
			modernHover();
			kontakHover();
		}

		var navbar = document.querySelector('nav');
		var home =  document.querySelector('nav ul li.home');
		var aboutNav =  document.querySelector('nav ul li.aboutNav');
		var tradisional =  document.querySelector('nav ul li.tradisional');
		var modern =  document.querySelector('nav ul li.modern');
		var kontak =  document.querySelector('nav ul li.kontak');
		const sticky = navbar.offsetTop;

		function stickyNav() {
		    if (window.scrollY >= 257){
		        navbar.classList.add('sticky');
		    }else {
		        navbar.classList.remove('sticky');
		    }
		}

		function homeHover() {
			if (window.scrollY >= 257 && window.scrollY <= 700) {
				home.classList.add('scroll');
			}else {
				home.classList.remove('scroll');
			}
		}
		function aboutHover() {
			if (window.scrollY > 700 && window.scrollY <=1320) {
				aboutNav.classList.add('scroll');
			}else {
				aboutNav.classList.remove('scroll');
			}
		}
		function tradisionalHover() {
			if (window.scrollY > 1320 && window.scrollY <= 1700) {
				tradisional.classList.add('scroll');
			}else {
				tradisional.classList.remove('scroll');
			}
		}
		function modernHover() {
			if (window.scrollY > 1700 && window.scrollY <= 2080) {
				modern.classList.add('scroll');
			}else {
				modern.classList.remove('scroll');
			}
		}
		function kontakHover() {
			if (window.scrollY > 2080) {
				kontak.classList.add('scroll');
			}else {
				kontak.classList.remove('scroll');
			}
		}
