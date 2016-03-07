<!DOCTYPE html>
<html lang="en">
<!-- <html lang="en" manifest="app.appcache"> -->
<head>
    <meta charset="UTF-8">
    <title>Madness</title>

    <meta name="format-detection" content="telephone=no" />
    <meta name="viewport" content="width=640, user-scalable=no"/>
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-status-bar-style" content="black" />
    <meta name="format-detection" content="telephone=no">

    <link rel="stylesheet" href="css/app.css?v=a69bacdcec1841aea678078d318b4709">

    <link rel="stylesheet" href="js/swiper/swiper.min.css?v=a69bacdcec1841aea678078d318b4709">
    <link rel="stylesheet" href="js/swiper/animate.min.css?v=a69bacdcec1841aea678078d318b4709">
</head>
<body>
<!-- loading -->
<div class="loader">
    <img class="l-1" src="img/loading/bg.png">
    <img class="l-2 ani" src="img/loading/e-3.png" alt="">
    <img class="l-3 ani" src="img/loading/e-1.png" alt="">
    <img class="l-4 ani" src="img/loading/e-2.png" alt="">
</div>
<!-- pagelist-->
<div class="swiper-container">
	<div id="mask" class="mask"><!--  这个是准备做的遮罩层 -->
		    <span id="jumpword">Send Success</span>
	</div> 
    <div class="swiper-wrapper">
        <div class="swiper-slide p1">
            <img class="e1-bg" src="img/p1/bg.png" alt="">
            <img class="e1-1 ani" src="img/p1/e-1.png" swiper-animate-effect="bounceInUp " swiper-animate-duration="1s" alt="">
            <img class="e1-2 ani" src="img/p1/e-2.png" swiper-animate-effect="rubberBand infinite" swiper-animate-duration="0.6s" alt="">
            <img class="e1-3 ani" src="img/p1/e-3.png" swiper-animate-effect="zoomIn" swiper-animate-duration="1.5s" alt="">
            <img class="e1-4" src="img/p1/e-4.png" alt="">
            <img class="e1-5 ani" src="img/loading/e-1.png" swiper-animate-effect="flash infinite" swiper-animate-duration="3s" alt="">
            <img class="e1-6 ani" src="img/loading/e-2.png" swiper-animate-effect="flash infinite" swiper-animate-duration="3s" swiper-animate-delay="0.75s" alt="">
            <img class="e1-7" src="img/loading/e-3.png" alt="">
        </div>

        <div class="swiper-slide p2">
            <img class="e2-bg" src="img/p2/bg.png" alt="">
            <img class="e2-1" src="img/transparent.png" alt="">
            <img class="e2-2 ani" src="img/p2/e-1.png" swiper-animate-effect="zoomIn" swiper-animate-duration="1.5s" alt="">
            <div class="e2-3">
                <input name="name" type="text" class="in-1 e2-3-1" placeholder="">
            </div>
            <div class="e2-4">
                <input name="email" type="text" class="in-1 e2-3-2" placeholder="">
            </div>
            <div class="e2-5">
                <input name="phone" type="text" class="in-1 e2-3-3" placeholder="">
            </div>
            <select class="e2-6 in-1" id="who">
                <option value=""></option>
                <option value="1">Artist</option>
                <option value="2">Architect</option>
                <option value="3">Designer</option>
                <option value="4">Entrepreneur</option>
                <option value="5">Fashion Designer</option>
                <option value="5">Graphic Designerr</option>
                <option value="6">Musician</option>
                <option value="7">Photographer</option>
                <option value="8">Other</option>
            </select>
            
            <select class="e2-7 in-1" id="mevent">
                <option value=""></option>
                <option value="1">Find a creative agency</option>
                <option value="2">Find a creative job</option>
                <option value="3">Inspiring speakers</option>
                <option value="4">Just for fun</option>
                <option value="5">Other</option>
            </select>
            <img class="e2-8 ani" src="img/p3/e-1.png" swiper-animate-effect="bounce infinite" swiper-animate-duration="1s" alt="">

        </div>

        <div class="swiper-slide p3">
            <img class="e3-bg" src="img/p3/bg.png" alt="">
            <img class="e3-1 ani" src="img/p3/e-1.png" swiper-animate-effect="bounce infinite" swiper-animate-duration="1s" alt="">
            <img class="e3-2" src="img/transparent.png" alt="">
            <img class="e3-3" src="img/transparent.png" alt="">
            <img class="e3-4 ani" src="img/p1/e-3.png" swiper-animate-effect="zoomIn" swiper-animate-duration="1.5s" alt="">
            <img class="e3-5 ani" src="img/p3/e-2.png" swiper-animate-effect="flip infinite" swiper-animate-duration="3s" alt="">
            <img class="e3-6 ani" src="img/p3/e-2.png" swiper-animate-effect="flip infinite" swiper-animate-duration="3s" alt="">
            <img class="e3-7 ani" src="img/p3/e-1.png" swiper-animate-effect="bounce infinite" swiper-animate-duration="1s" alt="">


        </div>

        <div class="swiper-slide p4 p5">
            <div class="p4-1" style="display:none;">
            <img class="e4-bg" src="img/p4/bg.png" alt="">
            <img class="e4-1 ani" src="img/p4/e-2.png" swiper-animate-effect="zoomIn" swiper-animate-duration="1.5s" alt="">
            <img class="e4-4 ani" src="img/loading/e-1.png" swiper-animate-effect="flash infinite" swiper-animate-duration="3s" alt="">
            <img class="e4-5 ani" src="img/loading/e-2.png" swiper-animate-effect="flash infinite" swiper-animate-duration="3s" swiper-animate-delay="0.75s" alt="">
            <img class="e4-6 " src="img/p4/e-3.png" alt=""> 
            <span class="e4-7" id="e4-7">1</span>
            <img class="e4-8" src="img/transparent.png" alt="">    
            <img class="e4-9 ani" src="img/p3/e-2.png" swiper-animate-effect="flip infinite" swiper-animate-duration="3s" alt="">
            <img class="e4-10 ani" src="img/p3/e-2.png" swiper-animate-effect="flip infinite" swiper-animate-duration="3s" alt="">
            <img class="e4-11 ani" src="img/p3/e-1.png" swiper-animate-effect="bounce infinite" swiper-animate-duration="1s" alt="">
            </div>

            <div class="p5-1" style="display:none;">
            <img class="e5-bg" src="img/p4/bg.png" alt="">
            <img class="e5-1 ani" src="img/p5/e-1.png" swiper-animate-effect="zoomIn" swiper-animate-duration="1.5s" alt="">
            <img class="e5-4 ani" src="img/loading/e-1.png" swiper-animate-effect="flash infinite" swiper-animate-duration="3s" alt="">
            <img class="e5-5 ani" src="img/loading/e-2.png" swiper-animate-effect="flash infinite" swiper-animate-duration="3s" swiper-animate-delay="0.75s" alt="">
            <img class="e5-6" src="img/p4/e-3.png" alt="">  
            <span class="e5-7" id="e5-7">222</span>
            <img class="e5-8" src="img/transparent.png" alt="">
            <img class="e5-9 ani" src="img/p3/e-2.png" swiper-animate-effect="flip infinite" swiper-animate-duration="3s" alt="">
            <img class="e5-10 ani" src="img/p3/e-2.png" swiper-animate-effect="flip infinite" swiper-animate-duration="3s" alt="">
            <img class="e5-11 ani" src="img/p3/e-1.png" swiper-animate-effect="bounce infinite" swiper-animate-duration="1s" alt="">
            </div>

        </div>
    </div>

</div>


<!--Script
====================================================== -->
<script src="js/zepto/zepto.min.js"></script>
<script src="js/motion/loader.min.js"></script>
<script src="js/swiper/swiper.min.js"></script>
<script src="js/swiper/swiper.animate1.0.2.min.js"></script>
<script src="js/fastclick/fastclick.js"></script>
<script src="js/motion/landscape.min.js"></script>
<script src="js/motion/overlay.min.js"></script>
<script src="js/motion/film.min.js"></script>
<script src="js/app.js"></script>
<?php include_once 'weChat/weChatShareJS.php';?>
<script>
    var $OPENID = "<?php echo $_SESSION['openid'] ?>";
</script>
</body>
</html>