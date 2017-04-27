$(function () {

    //fullpage
    $('#root').fullpage({
        anchors:['indexPage', 'company-profile', 'strategy-development', 'theoretical-direction', 'core-strengths', 'brand-service', 'cultural-philosophy', 'contact-us', 'join-us'],
        // verticalCentered:false, //垂直居中
        scrollingSpeed:600, //滚屏速度.
        // sectionsColor: ['red', '#4BBFC3', '#7BAABE', 'whitesmoke', '#000'],
        bigSectionsDestination:top,
        // autoScrolling:false,
        // fitToSection: false,
        // normalScrollElements:'#profile',
        scrollOverflow:true,
        scrollOverflowOptions: { mouseWheelSpeed:10, scrollX:false },
        // paddingTop:'50px',
        afterLoad: function(anchorLink, index){
            var loadedSection = $(this);
            $('.normal-navbar a').removeClass('navbar-active');
            $(".normal-navbar a[href='#"+anchorLink+"']").addClass('navbar-active');
            // alert(anchorLink);
            //using index
            if(index == 1){
                // $('.normal-navbar').attr('hidden',true);
                // alert("Section 3 ended loading");
            }else {
                // $('.normal-navbar').attr('hidden',null);
            }
        },
        onLeave: function(index, nextIndex, direction){
            var leavingSection = $(this);
            if(nextIndex==1) {
                $('.normal-navbar').attr('hidden',true);
            }else {
                $('.normal-navbar').attr('hidden',null);
            }
            $.fn.fullpage.reBuild();
        },
    });

    //flickity
    var $carousel = $('.main-carousel').flickity({
        // options
        initialIndex: 0,
        cellAlign: 'center',
        contain: true,
        imagesLoaded: true,
        wrapAround: true,
        autoPlay: 3000,
        selectedAttraction: 0.05,
        friction: 0.8,
        prevNextButtons: false,
        pageDots: false,
        pauseAutoPlayOnHover: true,
        draggable: false
    });
    $carousel.flickity('playPlayer');
    //图片高度
    var imgHeight = ($(window).height()-82)/3;
    $('#philosophy img').height(imgHeight+'px');
    //联系我们图片显示问题
    $('#contact, #direction, #advantage').height($(window).height()+'px');
    //浏览器比例重置
    $(window).resize(function () {
        window.location.reload();
    });
    //联系我们点击事件
    $(document).on('click','#contact a',function () {
        $(this).removeClass('contact-notactive').addClass('contact-active');
        var city = $(this).parent()[0].className;
        if(city=='hz') {
            $('.background-sh').removeClass('background-sh').addClass('background-hz');
            $('#contact .font-logo').text('HZ');
            $('#contact .location-name').text('杭州');
            $('#contact .english-name').text('HangZhou');
            $('.sh a').removeClass('contact-active').addClass('contact-notactive');
        }else {
            $('.background-hz').removeClass('background-hz').addClass('background-sh');
            $('#contact .font-logo').text('SH');
            $('#contact .location-name').text('上海');
            $('#contact .english-name').text('ShangHai');
            $('.hz a').removeClass('contact-active').addClass('contact-notactive');
        }
    });
    //理论指导点击事件
    $(document).on('click', '#direction a', function () {
        if($(this).hasClass('dsyy')) {
            $('.text-ds, .text-yw').removeClass('animated bounceInLeft bounceOutRight');
            $('.text-yw').addClass('hidden');
            $('.text-ds').removeClass('hidden').addClass('animated bounceInLeft');
            $('.ywrw').removeClass('link-active').addClass('link');
            $('.dsyy').removeClass('link').addClass('link-active');
        }else {
            $('.text-ds, .text-yw').removeClass('animated bounceInLeft bounceOutRight');
            $('.text-ds').addClass('hidden');
            $('.text-yw').removeClass('hidden').addClass('animated bounceInLeft');
            $('.dsyy').removeClass('link-active').addClass('link');
            $('.ywrw').removeClass('link').addClass('link-active');
        }
    });
});