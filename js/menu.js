    function toggleVisible(btnClass, elementClass) {
    	const btns = document.querySelectorAll(btnClass);
    	for (let btn of btns) {
    		btn.addEventListener('click', function() {
    			this.parentElement.querySelector(elementClass).classList.toggle('visible');
    			removeVisible(btnClass, elementClass);
    			console.log("a");
    		});
    	}
    }

    function removeVisible(btnClass, elementClass) {
    	window.addEventListener('click', function(e) {
    		// Si ce n'est pas le btn
    		if (!(e.target.matches(btnClass) || e.target.closest(btnClass))) {
    			document.querySelector(elementClass).classList.remove('visible');
    			console.log("b");
    		}
    	});
    }

    // Toggle .visible sur le .menu-dropdown-menu
    toggleVisible('.menu-dropdown-btn', '.menu-dropdown-menu');
    // Toggle .visible sur le .menu-slider-menu
    toggleVisible('.menu-slider-btn', '.menu-slider-menu');
