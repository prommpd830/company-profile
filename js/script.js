
M.AutoInit();

// Sidebar
var elems = document.querySelectorAll('.sidenav');
M.Sidenav.init(elems);

// Slider
var elems = document.querySelectorAll('.slider');
M.Slider.init(elems, {
	indicators: false,
	height: 640,
	duration: 600,
	interval: 5000
});

// Scrollspy
var elems = document.querySelectorAll('.scrollspy');
M.ScrollSpy.init(elems, {
	scrollOffset: 50
});

// Form Order
$(document).on('submit','.send_form', function(e){
    e.preventDefault();
    var input_blanter = document.getElementById('icon_email');

    /* Whatsapp Settings */
    var walink = 'https://web.whatsapp.com/send',
        phone = '6285524569631',
        walink2 = 'Hello There!';

    /* Smartphone Support */
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        var walink = 'whatsapp://send';
    }

    if("" != input_blanter.value){

         /* Call Input Form */

        var input_name1 = $("#icon_prefix").val(),
            input_email1 = $("#icon_email").val(),
            input_number1 = $("#icon_telephone").val(),
            input_textarea1 = $("#icon_message").val();

        /* Final Whatsapp URL */
        var blanter_whatsapp = walink + '?phone=' + phone + '&text=' + walink2 + '%0A%0A' +
            '*Name* : ' + input_name1 + '%0A' +
            '*Email Address* : ' + input_email1 + '%0A' +
            '*Phone* : ' + input_number1 + '%0A' +
            '*Message* : ' + input_textarea1 + '%0A';

        /* Whatsapp Window Open */
        window.open(blanter_whatsapp,'_blank');
            alert('The Form has been submitted succesfully!');
    }
});