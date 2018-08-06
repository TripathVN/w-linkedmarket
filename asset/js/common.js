$(document).ready(function() {
    $('.phoneSlider').bxSlider({
        auto: true,
        pager: true,
        autoControlsSelector :true,	
        pause: 3000
    });
    /*scroll top*/
    $("div.btnTop").fadeOut("slow");
    
    $(window).scroll(function(){
        setTimeout(scroll_top, 500);
    });
    
    $(".btnTop").hover(function(){
    }, function(){
        scroll_top();
    });
    $(".btnTop").click(function(){
        $("html, body").animate({ scrollTop: 0 }, 500);
        return false;
    });
    function scroll_top(){
        if($(window).scrollTop()<=1) {
            $(".btnTop").fadeOut("slow");
        }
        else {
            $(".btnTop").fadeIn("slow");
        }
    }


  $(function() {
        function swing() {

           $('#noti').animate({'right':'4rem','width':'34.7rem'},2000).delay(4000).animate({'width':'0'},2000, swing);
        }
        swing();
    });

    var sec1H, sec2H, sec3H, sec4H;
    $(window).scroll(function(){
        sec1H = $('#sec1').offset().top;
        sec2H = $('#sec2').offset().top;
        sec3H = $('#sec3').offset().top;
            if($(window).scrollTop() >= 0 && $(window).scrollTop() < sec1H) {
                $('.menu1').removeClass('active');
           
            }else if
                ($(window).scrollTop() >= sec2H && $(window).scrollTop() < sec2H){     
            }else if(
                $(window).scrollTop() >= sec3H && $(window).scrollTop() < sec3H){
            }
    });

    $('a.menu').each(function(){
        $(this).click(function () {
            var target = $(this.getAttribute('href'));
            $('a.menu').removeClass('active');
            $('.menu1').addClass('active');
            if (target.length) {
                event.preventDefault();
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
            }
        });
    });

   
    setInterval(function(){
    $('.iconVendor').animate({'opacity':'1'}, 1500).queue(function() {
        $('.inonArrow1').animate({'opacity':'1'}, 1500).queue(function() {
            $('.iconCounsellor').animate({'opacity':'1'}, 1500).queue(function(){
                $('.iconBox').animate({'opacity':'1'}, 1000).queue(function() {
                    $('.inonArrow2').animate({'opacity':'1'}, 1500).queue(function() {	
                        $('.iconCustomer').animate({'opacity':'1'}, 1500).queue(function() {
                        });
                    });
                });
            });
        });
    });
    },1000);

});


/*window.onload = function () {
    $(".mainHeader").each(function () {
        // 개별적으로 Wheel 이벤트 적용
        $(this).on("mousewheel DOMMouseScroll", function (e) {
            e.preventDefault();
            var delta = 0;
            if (!event) event = window.event;
            if (event.wheelDelta) {
                delta = event.wheelDelta / 120;
                if (window.opera) delta = -delta;
            } else if (event.detail) delta = -event.detail / 3;
            var moveTop = null;
            // 마우스휠을 위에서 아래로
            if (delta < 0) {
                if ($(this).next() != undefined) {
                    moveTop = $(this).next().offset().top;
                }
            // 마우스휠을 아래에서 위로
            } else {
                if ($(this).prev() != undefined) {
                    moveTop = $(this).prev().offset().top;
                }
            }
            $("html,body").stop().animate({
                scrollTop: moveTop + 'px'
            }, {
                duration: 1000, complete: function () {
                }
            });
        });
        return false;
    });
}*/