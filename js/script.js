
M.AutoInit();

// Sidebar
var elems = document.querySelectorAll('.sidenav');
M.Sidenav.init(elems);

// Slider
var elems = document.querySelectorAll('.slider');
M.Slider.init(elems, {
	indicators: false,
	height: 635,
	duration: 600,
	interval: 5000
});

// Scrollspy
var elems = document.querySelectorAll('.scrollspy');
M.ScrollSpy.init(elems, {
	scrollOffset: 50
});
