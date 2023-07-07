$(function() {
  let stars = $('.rating_wrap .star');
  let starsCurrent = $('.stars_current');
  let message = $('.rating_message');
  stars.on('click', function () {
      let currentStar = $(this);
      if (currentStar.data('current_width') === 20) {
          starsCurrent.css("width",currentStar.data('current_width') + '%');
          starsCurrent.attr('data-rating',currentStar.data('rating_value'));
          starsCurrent.data('rating',currentStar.data('rating_value'));
          message.text(currentStar.data('message'));
      } else if (currentStar.data('current_width') === 40) {
          starsCurrent.css("width",currentStar.data('current_width') + '%');
          starsCurrent.attr('data-rating',currentStar.data('rating_value'));
          starsCurrent.data('rating',currentStar.data('rating_value'));
          message.text(currentStar.data('message'));
      } else if (currentStar.data('current_width') === 60) {
          starsCurrent.css("width",currentStar.data('current_width') + '%');
          starsCurrent.attr('data-rating',currentStar.data('rating_value'));
          starsCurrent.data('rating',currentStar.data('rating_value'));
          message.text(currentStar.data('message'));
      } else if (currentStar.data('current_width') === 80) {
          starsCurrent.css("width",currentStar.data('current_width') + '%');
          starsCurrent.attr('data-rating',currentStar.data('rating_value'));
          starsCurrent.data('rating',currentStar.data('rating_value'));
          message.text(currentStar.data('message'));
      } else if (currentStar.data('current_width') === 100) {
          starsCurrent.css("width",currentStar.data('current_width') + '%');
          starsCurrent.attr('data-rating',currentStar.data('rating_value'));
          starsCurrent.data('rating',currentStar.data('rating_value'));
          message.text(currentStar.data('message'));
      }
  });
  stars.on('mouseover', function () {
      let currentStar = $(this);
      if (currentStar.data('current_width') === 20) {
          starsCurrent.css("width",currentStar.data('current_width') + '%');
          message.text(currentStar.data('message'));
      } else if (currentStar.data('current_width') === 40) {
          starsCurrent.css("width",currentStar.data('current_width') + '%');
          message.text(currentStar.data('message'));      } else if (currentStar.data('current_width') === 60) {
          starsCurrent.css("width",currentStar.data('current_width') + '%');
          message.text(currentStar.data('message'));
      } else if (currentStar.data('current_width') === 80) {
          starsCurrent.css("width",currentStar.data('current_width') + '%');
          message.text(currentStar.data('message'));
      } else if (currentStar.data('current_width') === 100) {
          starsCurrent.css("width",currentStar.data('current_width') + '%');
          message.text(currentStar.data('message'));
      }
  });

  stars.on('mouseout', function () {
      if (starsCurrent.data('rating') === 0) {
          starsCurrent.css("width",0);
          message.text('Без оценки');
      } else {
          let width = stars.filter('[data-rating_value='+starsCurrent.data('rating')+']').data('current_width');
          let messageVal = stars.filter('[data-rating_value='+starsCurrent.data('rating')+']').data('message');
          starsCurrent.css("width",width+'%');
          message.text(messageVal);
      }
  });
});



// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
     change.target.classList.add('element-show');``
    }
  });
}

let options = {
  threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.element-animation');

for (let elm of elements) {
  observer.observe(elm);
}

var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});

function goBack() {
  window.history.back();
}

function goBack() {
  window.history.back();
}

$(document).ready(function(){
	$('.slider').slick({
		arrows:true,
		dots:false,
		slidesToShow:1,

    responsive: [
      {
          breakpoint: 768,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
          }
      }
  ]
	});
});


function removeClassOnSmallScreen() {
  var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  var element = document.getElementById('title-btn');
  
  if (screenWidth <= 425) {
    element.classList.remove('element-show');
  } else {
    element.classList.add('element-show');
  }
}

window.addEventListener('DOMContentLoaded', removeClassOnSmallScreen);
window.addEventListener('resize', removeClassOnSmallScreen);