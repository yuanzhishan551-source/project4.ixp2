/** ****************** * Color Mode Button * ****************** **/
document.addEventListener('DOMContentLoaded', function() {
	var colormodeTrigger = document.querySelector('.js-mode');
  
	if (colormodeTrigger) {
		colormodeTrigger.addEventListener('click', function() {
			document.body.classList.toggle('dark-mode');

		});
	}
});

document.addEventListener('DOMContentLoaded', function() {
	var menuTrigger = document.querySelector('.js-menu');
  
	if (menuTrigger) {
	  menuTrigger.addEventListener('click', function() {
		document.body.classList.toggle('show-menu');
	  });
	}
  });