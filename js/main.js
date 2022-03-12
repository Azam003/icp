$(document).ready(function () {
    $(".main_nav li a, .scrollBtn").on("click", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();
        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),
            //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;

        top = top - 60;

        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 500);

        $('.xs_menu').removeClass('active');
        $('body').css('overflow','auto');
    });

    $(function () {
        new WOW().init();

        // AOS.init({
        //     offset: 0
        // });
    });

    $(function () {
        $(window).scroll(function(){
            if ($(this).scrollTop() > 100) {
                $('.scrollup').addClass('active');
            } else {
                $('.scrollup').removeClass('active');
            }
        });

        $('.scrollup').click(function(){
            $("html, body").animate({ scrollTop: 0 }, 600);
            return false;
        });
    });

    $(function () {
        $('.o_xs_menu').click(function () {
            $('body').css('overflow','hidden');
            $('.xs_menu').addClass('active');
        });

        $('.c_xs_menu').click(function () {
            $('body').css('overflow','auto');
            $('.xs_menu').removeClass('active');
        });
    });

    $(function () {
        $('.cards_slider').owlCarousel({
            loop:true,
            nav:false,
            dots:true,
            items: 2,
            autoplay:false,
            // navText: [$('.prev_btn'),$('.next_btn')],
            // navText : ["<i class=\"fas fa-arrow-left fas_icon\"></i>","<i class=\"fas fa-arrow-right fas_icon\"></i>"],
            autoplayTimeout:3000,
            autoplayHoverPause:true,
            margin: 25,
            lazyLoad: true,
            responsive : {
                // breakpoint from 0 up
                0 : {
                    items: 1,
                    margin: 0
                },
                576 : {
                    items: 1,
                    margin: 0,
                },
                767 : {
                    items: 2,
                    margin: 15,
                },
                1200 : {
                    items: 2,
                    margin: 25,
                },
                1600 : {
                    items: 3,
                    margin: 25,
                }
            }
        });
    });

    $(function () {
        $('.accordion .accordion-item-title').click(function() {
            var $item = $(this).parent('.accordion-item');

            if($item.hasClass('active'))
            {
                $item.removeClass('active');
                $('.accordion-item-content').slideUp();
            } else
            {
                $item.toggleClass('active').siblings('.active').removeClass('active');
                $('.accordion-item-content').slideUp();

                $item.find('.accordion-item-content').slideToggle();
            }
        });
    });

    if((/iPhone|iPad|iPod|Android/i.test(navigator.userAgent) && $(document).width() < 991) || $(document).width() < 991)
    {
    }
});



window.onscroll = function() {myFunction()};

var header = document.getElementById("header");

var sticky = header.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }

    if (window.pageYOffset == 0) {
        header.classList.remove("sticky");
    }
}

