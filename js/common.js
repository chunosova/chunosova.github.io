$(function () {
    $('#datetimepicker').datetimepicker({
		format: "DD MMM YYYY",       
		defaultDate: new Date(),
	});
});


$(document).ready(function(){
	$(".owl-carousel").owlCarousel({
		autoplay: true,
		loop: true,
		items: 3,
		stopOnHover : true,
		smartSpeed:2000,
		autoplayTimeout:4000,
		margin: 76,
		navText : ["<div class='left-arrow'></div>","<div class='right-arrow'></div>"],
		responsive :{
				0 : {
						items: 1,
				},
				992 : {
						items: 2,
				},
				1200 : {
						items: 3,
				}
		}
	});
});


var slider = new Slider('#ex1', {
	formatter: function(value) {
		return 'Current value: ' + value;
	}
});

slider.on('change', function() {
	var value = slider.getValue();
	if(value<=25) {
		$('.container-cyan img').attr("src", "img/xs.png");
	}

	if(value>25 && value<=50) {
		$('.container-cyan img').attr("src", "img/old.png");
	}

	if(value>50 && value<=75) {
		$('.container-cyan img').attr("src", "img/md.png");
	}

	if(value>75 && value<=100) {
		$('.container-cyan img').attr("src", "img/xs.png");
	}
});
