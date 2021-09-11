// jQuery
$(function() {
// ハンバーガーメニュー
$('#js-hamburger').on('click', function() {
    $('body').toggleClass('is-drawerActive');
    $('#js-global-menu').toggleClass('open');
    if ($(this).attr('aria-expanded') == 'false') {
        $(this).attr('aria-expanded', 'true');
        $('#js-global-menu').css('visibility', 'visible');
        $('#js-global-menu').attr('area-hidden', 'false');
    } else {
        $(this).attr('aria-expanded', 'false');
        $('#js-global-menu').css('visibility', 'hidden');
        $('#js-global-menu').attr('area-hiden', 'true');
    }
});

$('.header-nav a').on('click', function() {
    if ($('#js-hamburger').attr('aria-expanded') == 'true') {
        $('#js-hamburger').attr('aria-expanded', 'false');
        $('#js-global-menu').removeClass('open');
    }
});


// アコーディオンメニュー
$('.answer').slice(1).hide();
$('.question').on('click', function() {
    $(this).next().slideToggle();
});


// スムーススクロール
const header = $('#header').height();
$('a[href^="#"]').click(function () {
    const href = $(this).attr("href");
    const target = $(href == "#" || href == "" ? 'html' : href);
    const position = target.offset().top - header;
    const speed = 500;
    $("html, body").animate({scrollTop: position}, speed, "swing");
    return false;
});


// フォーム必須
$('#form input, #form textarea').on('change', function() {
    if ($('#form input[type="text"]').val() !== "" &&
        $('#form input[type="email"]').val() !== "" &&
        $('#form input[type="checkbox"]').val() !== "" &&
        $('#form #privacyCheck').prop('checked') === true
        ) {
            $('#js-submit').prop('disabled', false);
        } else {
            $('#js-submit').prop('disabled', true);
        }
});


// グーグルフォーム
$('#form').submit(function(event) {
    const formData = $('#form').serialize();
    $.ajax( {
        url: "https://docs.google.com/forms/u/1/d/e/1FAIpQLSd4cRbICfx2TcNjFYO2JDUyHifn0s8fFXFhYnG4qu7Hvax7qw/formResponse",
        data: formData,
        type: "POST",
        dataType: "xml",
        statusCode: {
            0: function() {
                window.location.href = "thanks.html";
            },
        }
    });
    event.preventDefault();
});

});
// jquery終わり


// swiper
const swiper = new Swiper('.swiper-container', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // slidesPerView: 1.3,
    // slidesPerView: 4,
    loop: true,
    spaceBetween: 50,
    centeredSlides: true,
    loopAdditionalSlides: 1,
    slidesPerView: 'auto',

    autoplay: {
		delay: 5000,
		stopOnLastSlide: false,
		disableOnInteraction: false,
		reverseDirection: false,
	},

    breakpoints: {
        384: {
            spaceBetween: 30,
        }
    }

    // breakpoints: {
    //     424: {
    //         slidesPerView: 'auto'
    //     }
    // }
    // breakpoints: {
    //     500: {
    //     slidesPerView: 2,
    //     spaceBetween: 40,
    //     },
    //     830: {
    //     slidesPerView: 3,
    //     spaceBetween: 56,
    //     },
    //     1025: {
    //         slidesPerView: 4,
    //         spaceBetween: 56,
    //     },
    //     1550: {
    //         slidesPerView: 5,
    //         spaceBetween: 56,
    //     }
    // }
});


// AOS
AOS.init( {
    offset: 100,
    delay: 150,
    duration: 1000,
    easing: 'ease-out',
    once: false
});