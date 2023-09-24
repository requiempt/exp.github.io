const menuBtn = document.querySelector('.menu__btn');
const menuMobile = document.querySelector('.menu__list');
const menuStBtn = document.querySelector('.sticky-btn');
const menuStMobile = document.querySelector('.sticky-list');

const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');


form.addEventListener('submit', e => {
    e.preventDefault();
    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
   

    if(usernameValue === '') {
        setError(username, 'Username is required');
    } else {
        setSuccess(username);
    }

    if(emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }


};



// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 150;
var navbarHeight = $('header').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();
    
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st < lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('.sticky-nav').addClass('sticky-on');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('.sticky-nav').removeClass('sticky-on');
        }
    }
    
    lastScrollTop = st;
}




$(document).on('click', '.menu__btn', function(){
 menuBtn.classList.toggle('menu--cross');
});

$(document).on('click', '.menu__btn', function(){
 menuMobile.classList.toggle('menu--open');
});

$(document).on('click', '.sticky-btn', function(){
 menuStBtn.classList.toggle('menu--cross');
});

$(document).on('click', '.sticky-btn', function(){
 menuStMobile.classList.toggle('menu--open');
});


const swiperOne = new Swiper('.swiper__container', {
  loop: true,
  speed:2200,
  autoplay: {
        delay: 2500,
        disableOnInteraction: true,
      },

});



