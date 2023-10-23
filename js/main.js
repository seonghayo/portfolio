$(function () {
    var myFullpage = new fullpage('#fullpage', {
        anchors: ['home', 'about', 'publishing', 'design', 'contact'],
        navigation: true,
        showActiveTooltip: true,
        afterLoad: function (origin, destination, direction) {
            if (destination.index == 1) {
                document.querySelector('#section1').querySelector('h2').style.left = 240 + 'px';
            
            }
            else if (origin && origin.index == 1) {
                document.querySelector('#section1').querySelector('h2').style.left = -500 + 'px';
                
            }
            if (destination.index == 2) {
                document.querySelector('#section2').querySelector('h2').style.left = 240 + 'px';
            
            }
            else if (origin && origin.index == 2) {
                document.querySelector('#section2').querySelector('h2').style.left = -500 + 'px';
                
            }
            if (destination.index == 3) {
                document.querySelector('#section3').querySelector('h2').style.left = 240 + 'px';
            
            }
            else if (origin && origin.index == 3) {
                document.querySelector('#section3').querySelector('h2').style.left = -500 + 'px';
                
            }
            if (destination.index == 4) {
                document.querySelector('#section4').querySelector('h2').style.left = 240 + 'px';
            
            }
            else if (origin && origin.index == 4) {
                document.querySelector('#section4').querySelector('h2').style.left = -500 + 'px';
                
            }
            //section2 모니터
            if (destination.index == 2) {
                document.querySelector('#section2').querySelector('.monitor').style.bottom = -10 + 'px';
            
            }
            else if (origin && origin.index == 2) {
                document.querySelector('#section2').querySelector('.monitor').style.bottom = -1000 + 'px';
                
            }
        }
    });
    var swiper = new Swiper(".mySwiper", {
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            type: "fraction",
        },
    });
    var swiper = new Swiper(".design_list", {
        slidesPerView: 4,
        spaceBetween: 5,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
    });
})//jquery end