/**
 * Created by lenovo on 2018/3/7.
 */
$(document).ready(function(){


    /*ÂÖ²¥*/
    $(".main_visual").hover(function(){
        $("#btn_prev,#btn_next").fadeIn()
    },function(){
        $("#btn_prev,#btn_next").fadeOut()
    });

    $dragBln = false;

    $(".main_image").touchSlider({
        flexible : true,
        speed : 200,
        btn_prev : $("#btn_prev"),
        btn_next : $("#btn_next"),
        paging : $(".flicking_con a"),
        counter : function (e){
            $(".flicking_con a").removeClass("on").eq(e.current-1).addClass("on");
        }
    });

    $(".main_image").bind("mousedown", function() {
        $dragBln = false;
    });

    $(".main_image").bind("dragstart", function() {
        $dragBln = true;
    });

    $(".main_image a").click(function(){
        if($dragBln) {
            return false;
        }
    });

    timer = setInterval(function(){
        $("#btn_next").click();
    }, 5000);

    $(".main_visual").hover(function(){
        clearInterval(timer);
    },function(){
        timer = setInterval(function(){
            $("#btn_next").click();
        },5000);
    });

    $(".main_image").bind("touchstart",function(){
        clearInterval(timer);
    }).bind("touchend", function(){
        timer = setInterval(function(){
            $("#btn_next").click();
        }, 5000);
    });




    var hei=document.documentElement.clientHeight ||document.body.clientHeight;
    $('.m-start').height(hei);


    /* $('.btn_skip').click(function(){
     $('.m-start').css({'display':'none'});
     })*/
    $('.icon-yingyong').bind('click',function(){

        $('.layout').css({'display':'none'});
        $('.channel').css({'display':'block'})
    });

    $('.icon-xiaoyuhao').bind('click',function(){

        $('.layout').css({'display':'block'});
        $('.channel').css({'display':'none'})
    });

    $('.up_b').bind('click',function(event){
        event.preventDefault();
        $('.m-content').css({'display':'block'})
    });

    $('.icon-fork-first').bind('click',function(event){
        event.preventDefault();
        $('.m-content').css({'display':'none'})
    });

    $('.m-start').bind('touchmove',function(event){
        event.preventDefault();
    });

    $('.btn_skip').bind('click',function(event){
        event.preventDefault();
        $('.m-start').css({'display':'none'});
    });

    var oBtn=document.getElementById('up_a');

    $(window).scroll(function(){
        if($(window).scrollTop()>=300){
            $('.up_a1').css({'opacity':'1'})

        }else{
            $('.up_a1').css({'opacity':'0'})
        }
    });


    oBtn.onclick=function(){
        var timer=null;
        timer=setInterval(function(){
            scrollBy(0,-100);
            if((document.documentElement.scrollTop||document.body.scrollTop)<=0){
                clearInterval(timer);
            }
        },10);
    };

    var pag=0;
    $('.problem ul li').bind('click',function(event){
        event.preventDefault();
        pag=$(this).index();
        $('.problem ul li').css({'background':''});
        $('.problem ul li').eq(pag).css({'background':'#EF534E'});
        $('.submit').css({'background':'#EF534E'})
    })
});

