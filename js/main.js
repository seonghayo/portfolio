$(function () {
    var myFullpage = new fullpage('#fullpage', {
        anchors: ['home', 'about', 'webportfolio', 'design', 'contact'],
        navigation: true,
        showActiveTooltip: true,
        afterLoad: function (origin, destination, direction) {
            //section0 메인
            if (destination.index == 0) {
                document.querySelector('#section0').querySelector('.logo').style.left = 240 + 'px';
            
            }
            else if (origin && origin.index == 0) {
                document.querySelector('#section0').querySelector('.logo').style.left = -500 + 'px';
                
            }
            if (destination.index == 0) {
                document.querySelector('#section0').querySelector('h2').style.left =  240 + 'px';
            
            }
            else if (origin && origin.index == 0) {
                document.querySelector('#section0').querySelector('h2').style.left = -2000 + 'px';
                
            }
            if (destination.index == 0) {
                document.querySelector('#section0').querySelector('h3').style.left =  240 + 'px';
            
            }
            else if (origin && origin.index == 0) {
                document.querySelector('#section0').querySelector('h3').style.left = -3000 + 'px';
                
            }

            //section1 
            if (destination.index == 1) {
                document.querySelector('#section1').querySelector('.skill').style.scale = 1;
            
            }
            else if (origin && origin.index == 1) {
                document.querySelector('#section1').querySelector('.skill').style.scale = 0;
                
            }
            if (destination.index == 1) {
                document.querySelector('#section1').querySelector('.info').style.scale =  1;
            
            }
            else if (origin && origin.index == 1) {
                document.querySelector('#section1').querySelector('.info').style.scale = 0;
                
            }
            if (destination.index == 1) {
                document.querySelector('#section1').querySelector('.bot').style.right = 0 + 'px';
            
            }
            else if (origin && origin.index == 1) {
                document.querySelector('#section1').querySelector('.bot').style.right = -2000 + 'px';
                
            }
            //section1~5 h2
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
                document.querySelector('#section2').querySelector('h2').style.left = -700 + 'px';
                
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