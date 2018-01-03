;(function (doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function () {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            if (clientWidth >= 640) {
                docEl.style.fontSize = '100px';
            } else {
                docEl.style.fontSize = 100 * (clientWidth / 640) + 'px';
            }
        };
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    recalc();
})(document, window);

(function () {
    // 轮播js start
    // var $carousel = $('.carousel'),
    // $carouselBox = $('.carousel-box'),
    // $carouselPoint = $('.carousel-point'),
    // childW,
    // len = $carouselBox.find('li').length;
    // iNow = 0,
    // start = 0,
    // end = 0,
    // timer = null,
    // activeClass = "active";

    // $carouselBox.css({width: $carousel.width() * len + 'px'});
    // $carouselBox.find('li').css({width: $carousel.width() + 'px'});
    // childW = $carouselBox.find('li').width();

    // autoPlay();

    // function autoPlay() {
    //     clearInterval(timer);
    //     timer = setInterval(function(){
    //         change();
    //     },1500);
    // }

    // $carousel.hover(
    //     function(){
    //         clearInterval(timer);
    //     },autoPlay
    // );

    // function change() {
    //     iNow++;
    //     if(iNow == len) {
    //         iNow = 0;
    //     }
    //     if(iNow < 0) {
    //         iNow = len - 1;
    //     }
    //     $carouselBox.animate({left: -iNow * childW + 'px'}, 400);
    //     $carouselPoint.find("span").removeClass(activeClass).eq(iNow).addClass(activeClass);
    // }
    // 轮播js end

    // 校园风采轮播
    if($('#imgCarousel').find('a').length > 3) {
        var $imgCarousel = $('#imgCarousel'),
            imgLen =  $('#imgCarousel').find('a').length,
            imgChildW = $('#imgCarousel').find('a').width(),
            imgNow = 0,
            imgStart = 0,
            imgEnd = 0,
            imgTimer = null,
            marginLeft = $('#imgCarousel').find('a').css('margin-left'),
            marginV = Number(marginLeft.substring(0, marginLeft.length - 2));
    
        $imgCarousel.find('.imglist').css({width: (imgChildW + marginV) * imgLen + "px"});
    
        autoPlayImg();
    
        function autoPlayImg() {
            clearInterval(imgTimer);
            imgTimer = setInterval(function(){
                imgChange();
            },1500);
        }
    
        $imgCarousel.hover(
            function(){
                clearInterval(imgTimer);
            },autoPlayImg
        );
    
        function imgChange() {
            imgNow++;
            if(imgNow == imgLen - 2) {
                imgNow = 0;
            }
            $imgCarousel.find('.imglist').animate({left: -imgNow * (imgChildW + marginV) + 'px'}, 200);
        }
    }
}());