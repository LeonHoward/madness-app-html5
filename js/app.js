var app = app || {};

/*-- html5-template
====================================================== */
app.template = function(){};
/* loader */
app.template.loader = function(){};
app.template.loader.init= function(){
    // loader
    var getSource = function(){
        var res = [];
        res.push("img/loading/bg.png");
        res.push("img/loading/e-1.png");
        res.push("img/loading/e-2.png");
        res.push("img/loading/e-3.png");
        return res;
    }

    new mo.Loader(getSource(),{
        loadType : 1,
        minTime : 100,
        onLoading : function(count,total){
            //console.log('onloading:single loaded:',arguments)
            //$(".loader h1").html(' '+Math.round(count/total*100)+'%');
        },
        onComplete : function(time){
            console.log('oncomplete:all source loaded:',arguments);
            app.template.destory();
            app.template.loader.done_callback.call();
            app.template.loader.done_callback2.call();
        }
    });
    $(".audio-icon").hide();
};
app.template.loader.done_callback = function(){};
app.template.loader.done_callback2 = function(){};

app.template.destory = function(){
    $(".loader").remove();
};

/* Landscape */
app.template.Landscape = function(){};
app.template.Landscape.init= function(){
    var Landscape = new mo.Landscape({
        pic: 'js/motion/landscape.png',
        picZoom: 3,
        mode:'portrait',//portrait,landscape
        prefix:'Shine'
    });
};

/* pageslide swiper */
app.template.swiper = function(){};
app.template.swiper.mySwiper = {};
app.template.swiper.pageXY = [];
app.template.swiper.init = function(){
    app.template.loader.done_callback = this.bind;
};
app.template.swiper.bind = function(){
 $(".swiper-container").css("display", "block");
    app.template.swiper.mySwiper = new Swiper ('.swiper-container', {
        speed:500,
        lazyLoading : true,
        lazyLoadingInPrevNext : true,
         //nextButton: '.swiper-button-next',
         //prevButton: '.swiper-button-prev',
        //direction : 'vertical',
        onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
            swiperAnimateCache(swiper); //隐藏动画元素 
            swiperAnimate(swiper); //初始化完成开始动画 

            app.template.swiper.on_pageslideend(0);
        }, 
        onSlideChangeStart: function(swiper){
            swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
            if (swiper.activeIndex == 2) {
                setTimeout(function(){
                $(".p3 .e3-1").show();
                $(".p3 .e3-7").show();
                }, 1000);
            }else if (swiper.activeIndex == 1) {
                setTimeout(function(){
                $(".p2 .e2-8").show();
                }, 2000);
            }
            app.template.swiper.on_pageslideend(swiper.activeIndex);
            //app.template.swiper.mySwiper.lockSwipes();
        },
        onSliderMove: function(swiper, event){}
    });

    //app.template.swiper.lock();
};
app.template.swiper.lock = function(){
    app.template.swiper.mySwiper.lockSwipes();
};
app.template.swiper.on_pageslideend = function(index){};

app.template.swiper.next = function(){
    app.template.swiper.mySwiper.unlockSwipes();
    app.template.swiper.mySwiper.slideNext();
};

app.template.swiper.prev = function(){
    app.template.swiper.mySwiper.unlockSwipes();
    app.template.swiper.mySwiper.slidePrev();
};

app.template.swiper.to = function(index){
    app.template.swiper.mySwiper.unlockSwipes();
    app.template.swiper.mySwiper.slideTo(index);
};

app.template.touch = function(){};
app.template.touch.eventlistener_handler = function(e){

    //e.stopPropagation();  // 阻止事件传递
    e.preventDefault();     // 阻止浏览器默认动作(网页滚动)
};


app.template.touch.init = function(){

    // fastclick
    FastClick.attach(document.body);

    document.body.addEventListener("touchmove", function(e) {
        //e.stopPropagation();  // 阻止事件传递
        e.preventDefault();     // 阻止浏览器默认动作(网页滚动)
    });

    $("body").on("doubleTap longTap swipeLeft swipeRight", function(e){
        // e.stopPropagation();  // 阻止事件传递
        // e.preventDefault();   // 阻止浏览器默认动作(网页滚动)
        return false;
    });
};


app.template.data = {};
app.template.data.add = function(key, value){
    app.template.data[key] = value;
};
app.template.data.get = function(key){
    return app.template.data[key];
};

/*-- tools
====================================================== */
app.tools = function(){};
app.tools.random = function(n, m){
    var c = m-n+1;  
    return Math.floor(Math.random() * c + n);
};

app.tools.getpageurlwithoutparam = function(){
    var url = window.location.href;
    return url.substring(0, url.indexOf("?"));
};

app.tools.getbaseurl = function(){
    var url = window.location.href;
    return url.substring(0, url.lastIndexOf("/") + 1);
};

app.tools.gotourl = function(url){
    window.location.href = url;
};

app.tools.geturlparam = function(param){
    var reg = new RegExp("(^|&)" + param + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg); 
    if (r != null) 
        return unescape(r[2]);
    else
        return undefined;
};

app.tools.substr = function(str, len){
    if(str.length > len)
        str = str.substring(0, len) + "...";

    return str;
};

app.tools.platform = function(){};
app.tools.platform.os = "";
app.tools.platform.debug = ""; // 强制开始指定os模式
app.tools.platform.init = function(){
    var u = navigator.userAgent;

    app.debug.console("userAgent:" + u);

    if(u.indexOf('Android') > -1 || u.indexOf('Linux') > -1)
        app.tools.platform.os = "android";
    else if(!!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/))
        app.tools.platform.os = "ios";

    if(app.tools.platform.debug == "ios")
        app.tools.platform.os = "ios";
    else if(app.tools.platform.debug == "android")
        app.tools.platform.os = "android";
};

/*-- debug
====================================================== */
app.debug = function(){};
app.debug.enable = false;
app.debug.maxline = 5;
app.debug.linecount = 0;
app.debug.console = function(str){
    if(app.debug.enable)
    {
        app.debug.linecount ++;

        if($("#debug").length > 0)
        {
            if(app.debug.linecount > app.debug.maxline)
            {
                app.debug.linecount = 0;
                $("#debug").html("<br/> #" + str);
            }
            else
                $("#debug").append("<br/> #" + str);
        }else
        {
            $("body").append("<div id='debug' class='debug'></div>");
            $("#debug").append("<br/> #" + str);
        }
    }
};

/*-- loading
====================================================== */
app.loading = function(){};
app.loading.init = function(){
  this.show_animation();
};

app.loading.show_animation = function(){
  $(".loader").show();
}; 



/*-- p1
====================================================== */
app.p1 = function(){

};
app.p1.init = function(){
};


app.p1.bind_touch_event = function(){

  $(".p1 .e1-1").on("touchend", function(){
        app.template.swiper.next();
     });
};

app.p1.destory = function(){  
};

/*-- p2
====================================================== */
app.p2 = function(){};
app.p2.init = function(){
    $(".p2 .e2-1").on("touchend",function(){});
    
};

showMask = function(data){
	$("#mask").show();
	document.getElementById("jumpword").innerHTML = data;
}
    $("#mask").click(function(){
      $(this).hide();
      $(this).children().show();
      if(success == true){
        app.template.swiper.next();}
    });

    $(".p2 .e2-1").on("touchend",function(){
        var name = $("input[name=name]").val();
            email = $("input[name=email]").val();
            phone = $("input[name=phone]").val();
            who = $("#who").val();
            mevent = $("#mevent").val();
        if (name == '' || name == 'Name') {
            showMask('Please enter your name.');
            return false;
        }
        if (email == '' || email == 'Email') {
            showMask('Please enter your email');
            return false;
        }else{
            var patt = new RegExp(/\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/);
            if(!patt.test(email)){
                 showMask('Please enter the correct email address.');
                 return false;
             }
        }
        if (phone == '' || phone == 'Phone Number') {
            showMask('Please enter your phone number.');
            return false;
        }else{
             var patt = new RegExp(/^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/);
             if(!patt.test(phone)){
                 showMask('Please enter the correct 11 phone number.');
                 return false;
             }
        }
        if (mevent == '' || who == '') {
            showMask('Please complete the information.');
            return false;
        }
        
        $.post("db/adduser.php", {name: name,email: email,phone: phone,who: who,mevent: mevent},function(r){                
        showMask(r.mevevt);
        if(r.mevevt == "Send Success"){
        	success = true;
        }
        },'json');
  });
//};
var success = false;
app.p2.destory = function(){  
};
/*-- p3
====================================================== */
var arr = ['Q','W','E','R','T','Y','U','I','O','P','A','S','D','F','G','H','J','K','L','Z','X','C','V','B','N','M'];
app.p3 = function(){};
app.p3.init = function(){};
app.p3.destory = function(){
    $('#e-3-4').html("");   
 };

    $(".p3 .e3-2").on("touchend", function(){
        var str = "1"
        while(str.length<3){str='0'+str;};
        document.getElementById("e4-7").innerHTML = "W"+str+arr[Math.floor((Math.random()*arr.length))];
        $(".p4-1").show();
    	app.template.swiper.next();
    });
    $(".p3 .e3-3").on("touchend", function(){
        var str = "1"
        while(str.length<3){str='0'+str;};
        document.getElementById("e5-7").innerHTML = "P"+str+arr[Math.floor((Math.random()*arr.length))];
        
        $(".p5-1").show();
    	app.template.swiper.next();
    });
/*-- p4
====================================================== */
app.p4 = function(){};
app.p4.init = function(){};
app.p4.bind_touch_event = function(){
    $(".p4 .e4-8").on("touchend", function(){
        app.p4.show_layout1 ();
    });     
};
   
app.p4.show_layout1 = function(){
     window.overlay1 = new mo.Overlay({
        content: '<img src="img/p4/e-5.png" alt="" class="m-p1-3">', 
        width: 640,
        height: 1137

    });
    overlay1.on('open', function(){
        $(".m-p1-3").css({"top": "45px","left": "0px","position":"absolute"});
        $('.m-p1-3').on('touchend', function(){
            window.overlay1.close();
        });  
    });        
}  
/*-- p5
====================================================== */
app.p5 = function(){};
app.p5.init = function(){};
app.p5.bind_touch_event = function(){
    $(".p5 .e5-8").on("touchend", function(){
        app.p4.show_layout1 ();
    });     
}  


/*-- for android
====================================================== */
var fuckandroid = {};
fuckandroid.app = function(){};
fuckandroid.app.p1 = function(){};
fuckandroid.app.p1.bind_touch_event = function(){
};

/*-- page init
====================================================== */
(function(){
    // 检测OS
    app.tools.platform.init();

    // 兼容android(如果开启android模式则重写响应函数用来)
    if(app.tools.platform.debug == "android"
     || app.tools.platform.os == "android")
    {
    }

    // 框架
    app.template.touch.init();
    app.template.loader.init();
    app.template.swiper.init();
    app.template.Landscape.init();

    /* loading */
    app.loading.init();

    //app.audio.init();
    //tracking.pv_byfrom();
    
    /* page init */
    app.template.swiper.on_pageslideend = function(index){
        switch(index)
        {
            case 0:
                app.p1.init();
                break;
            case 1:
                app.p1.destory();
                app.p2.init();
                break;
            case 2:
                app.p2.destory();
                app.p3.init();
                break;
            case 3:
                app.p3.destory();
                app.p4.init();
                break;
            case 4:
                app.p5.init();
                break;
        }
    };
     app.p1.bind_touch_event();
     app.p4.bind_touch_event();
     app.p5.bind_touch_event();
     app.debug.enable = false;
})();

