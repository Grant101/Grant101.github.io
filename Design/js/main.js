
$(document).ready(function() {

	//E-mail Ajax Send
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "/mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
    });
		return false;
  });

  $('.burger-menu').click(function(event){
    $('.burger-menu, .header-wrapper').toggleClass('active');
    $('body').toggleClass('lock');
});

});


const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  slidesPerView: 1,
  direction: 'horizontal',
  loop: true,

  autoplay: {
    delay: 3000,
  },
  
  speed: 900,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});