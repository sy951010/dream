var imgs=["img/img1/red_bg.png","img/img1/lanbanjiao.png",
"img/img1/yellow_bg.png","img/img1/blue-sec.png","img/img1/green.png","img/img1/silver-left.png"
,"img/img1/silver-right.png","img/img1/blue-D.png","img/img1/white-D.png","img/img1/RM.png",
"img/img1/red-D.png","img/img1/E.png","img/img1/maker.png","img/img1/red-star.png",
"img/img1/blue-star.png","img/img1/start1.png","img/img1/start2.png","img/img1/start3.png",
"img//jiantou.png","img/diqiu/1.jpg",
"img/diqiu/2.jpg",
"img/diqiu/3.jpg",
"img/diqiu/4.jpg",
"img/diqiu/5.jpg",
"img/diqiu/6.jpg",
"img/diqiu/7.jpg",
"img/diqiu/8.jpg",
"img/diqiu/9.jpg",
"img/diqiu/10.jpg",
"img/diqiu/11.jpg",
"img/diqiu/12.jpg",
"img/diqiu/13.jpg",
"img/diqiu/14.jpg",
"img/diqiu/15.jpg",
"img/diqiu/16.jpg",
"img/diqiu/17.jpg",
"img/diqiu/18.jpg",
"img/diqiu/19.jpg",
"img/diqiu/20.jpg",
"img/diqiu/21.jpg",
"img/diqiu/22.jpg",
"img/diqiu/23.jpg",
"img/diqiu/24.jpg",
"img/diqiu/25.jpg",
"img/diqiu/26.jpg",
"img/diqiu/27.jpg",
"img/diqiu/28.jpg",
"img/diqiu/29.jpg",
"img/diqiu/30.jpg",
"img/diqiu/31.jpg",
"img/diqiu/32.jpg",
"img/diqiu/33.jpg",
"img/diqiu/34.jpg",
"img/diqiu/35.jpg",
"img/diqiu/36.jpg",
"img/diqiu/37.jpg",
"img/diqiu/38.jpg",
"img/diqiu/39.jpg",
"img/diqiu/40.jpg",
"img/diqiu/41.jpg",
"img/diqiu/42.jpg",
"img/diqiu/43.jpg",
"img/diqiu/44.jpg",
"img/diqiu/45.jpg",
"img/diqiu/46.jpg",
"img/diqiu/47.jpg","img/2/Dareto.png","img/2/dream.png","img/2/maker.png",
"img/2/changetheWorld.png","img/img3/组1.png",
"img/img3/组2.png",
"img/img3/组3.png",
"img/img3/组7.png",
"img/img3/组8.png","img/img3/图层3.png",
"img/img3/图层4.png",
"img/img3/图层5.png","img/4/circle/光斑.png",
"img/4/line/1.png",
"img/4/line/2.png",
"img/4/line/3.png",
"img/4/line/4.png",
"img/4/line/5.png",
"img/4/line/6.png",
"img/4/line/7.png",
"img/4/line/8.png",
"img/4/line/9.png","img/4/line/10.png",
"img/4/line/11.png",
"img/4/line/12.png",
"img/4/line/13.png",
"img/4/line/14.png",
"img/4/line/15.png",
"img/4/line/16.png",
"img/4/line/17.png",
"img/4/line/18.png",
"img/4/line/19.png",
"img/4/line/20.png",
"img/4/line/21.png",
"img/4/line/22.png",
"img/4/line/23.png",
"img/4/line/24.png",
"img/4/line/25.png",
"img/4/line/26.png","img/4/renwu/刘勇.png",
"img/4/renwu/吴启刚 .png","img/4/renwu/沈黎晖.png",
"img/4/renwu/王壮.png","img/4/renwu/王晓峰.png","img/4/renwu/花间堂-张蓓.png"
,"img/4/renwu/阿诺.png","img/btn.png","img/4/hand.png","img/5/周2.png","img/icon-bg.png","img/5/slide5-more.png",
"img/6/组1.png",
"img/6/组2.png",
"img/6/组3.png",
"img/6/组4.png",
"img/6/组5.png",
"img/6/组6.png",
"img/6/组7.png",
"img/6/组8.png","img/6/高臻.png","img/6/涂鸿川.png","img/6/蒋德.png","img/6/华平.png",
"img/6/沈博阳.png","img/6/王屏.png","img/6/组8.png",
"img/6/组1.png",
"img/6/组3.png",
"img/6/组4.png","img/7/s.png","img/6/组1.png",
"img/6/组2.png",
"img/6/组3.png",
"img/6/组4.png",
"img/6/组5.png",
"img/6/组6.png","img/8/1.png","img/8/2.png","img/8/36kr.png","img/8/硅谷银行.png","img/8/爱奇艺.png", ],count=0,time=null;
var leng = imgs.length;
var n1 =0;
for(var i=0; i<leng; i++){
  var img=new Image();
  img.src = imgs[i];
  
   img.onload =  function() {
     n1++;

    $('#mengceng>span').html(parseInt(n1/leng*100)+'%');
    // console.log(parseInt(n/leng*100)+'%');
    console.log(n1);
    if (n1>leng-1) {
      // alert(n);

      $('#mengceng').hide();
      ani();
      $('#icon>img:eq(4)').animate({left: '2.055rem', top: 0}, 1000)
        $('#icon>img:eq(5)').animate({left: '1.13rem', top: '1.13rem'}, 1000)
        $('#icon>img:eq(6)').animate({left: '2.75rem', top: '0rem'}, 1000)
        $('#icon>img:eq(7)').animate({left: '0rem', top: '1.81rem'}, 1000)
        $('#icon>img:eq(10)').animate({left: '1.35rem', top: '2.05rem'}, 1000,function(){
          $('#icon>img:eq(8)').animate({width:'0.63rem',left: '0.23rem', top: '2.05rem'}, 1000);
          $('#icon>img:eq(12)').animate({width:'3.74rem',right: '0rem', bottom: '-0.3rem'}, 2000,function(){
            $('#icon').css('overflow', 'hidden');
          });
        })
    } 
  };
}
// $(imgs).each(function(index, val) {
//   var img=new Image();
//   $(img).attr({
//         src: val
//       });
//    console.log(img.src)
//    $(img).on('load', function() {
//     $('#mengceng>span').html(parseInt(index/imgs.length*100)+'%');
//     console.log(parseInt(index/imgs.length*100)+'%')
//     if (index>=imgs.length-1) {
//       $('#mengceng').hide();
//       ani();
//       $('#icon>img:eq(4)').animate({left: '2.055rem', top: 0}, 1000)
//         $('#icon>img:eq(5)').animate({left: '1.13rem', top: '1.13rem'}, 1000)
//         $('#icon>img:eq(6)').animate({left: '2.75rem', top: '0rem'}, 1000)
//         $('#icon>img:eq(7)').animate({left: '0rem', top: '1.81rem'}, 1000)
//         $('#icon>img:eq(10)').animate({left: '1.35rem', top: '2.05rem'}, 1000,function(){
//           $('#icon>img:eq(8)').animate({width:'0.63rem',left: '0.23rem', top: '2.05rem'}, 1000);
//           $('#icon>img:eq(12)').animate({width:'3.74rem',right: '0rem', bottom: '-0.3rem'}, 2000,function(){
//             $('#icon').css('overflow', 'hidden');
//           });
//         })
//     } 
//   });
// });
function rand(min,max){
  return (Math.random()*(max-min+1)+min);
}
 $.fn.extend({
    add_ani:function(effect,duration,delay){
        $(this).addClass('ani');
        if (effect) {
            $(this).attr('swiper-animate-effect', effect);
        }
       if (duration) {
            $(this).attr('swiper-animate-duration', duration);
       }
        if ( delay) {
            $(this).attr('swiper-animate-delay', delay);
        }   
    },
    page3:function(){
      var x=rand(1,3),y=rand(1,3);
      var maxX=$(window).width()-$(this).width();
      var maxY=$(window).height()-$(this).height();
      var _this=$(this);
      function move() {
        
        if (_this.offset().left>maxX) {
          _this.offset().left=maxX;
          x*=-1;
        }
        if (_this.offset().left<0) {
          _this.offset().left=0;
          x*=-1;
        }
        if (_this.offset().top>maxY) {
          _this.offset().top=maxY;
          y*=-1;
        }
        if (_this.offset().top<0) {
          _this.offset().top=0;
          y*=-1;
        }
        nowLeft= (_this.offset().left+x)/50;
        nowTop= (_this.offset().top+y)/50;
        _this.css('left', nowLeft+'rem');
        _this.css('top', nowTop+'rem');
      }
      time=setInterval(move, 100);
      // console.log($(this).offset().left)
    },
    page4:function (x,y,w) {
      $(this).css({
        left: x+'rem',
        top: y+'rem',
      });
      $(this).find('img').css({
        width:w+'rem'
      });
    },
    page5_ani:function () {
      var _this=$(this);
      $(this).show().css('animation', 'slide5-1 2s');
      setTimeout(function () {
        _this.siblings().show();
        _this.animate({left: '0.3rem', top: '-0.1rem'}, 500);
      }, 2000)
    },
    page5_close:function () {
      var _this=$(this)
      setTimeout(function(){_this.hide()},1000);
    },
    page6_set :function(w,l,t){
      $(this).css({
        width: w+'rem',
        left: l+'rem',
        top:t+'rem'
      });
    },
    Tab:function(x,y,w,h){
    $_this=$(this);
    $_this.css({
      left:x,
      top:y,
      width:w,
      height:h,
    });
    $_this.find("img").css({
//      left:x,
//      top:y,
      width:w,
      height:h,
    });
  },
 });
 $(".page8 p").eq(0).Tab("2.13rem","1.36rem","2.72rem","2.48rem");
$(".page8 p").eq(1).Tab("7.16rem","1.33rem","0.34rem","0.83rem");
$(".page8 p").eq(2).Tab("6.87rem","4.01rem","0.63rem","0.55rem");
$(".page8 p").eq(3).Tab("0.44rem","1.56rem","2.73rem","2.22rem");
$(".page8 p").eq(4).Tab("0rem","1.5rem","0.48rem","1.06rem");
$(".page8 p").eq(5).Tab("3.97rem","1.45rem","2.95rem","2.09rem");
 
 var n=0;
 function movecar(){
        if (n>46) {
            n=0;
        }
        $("#box img").eq(n).show().siblings().hide();
        n++;
 }
 setInterval(movecar, 50);
function touchcar(){
    var startX,endX,a=0,b=0;
    $(document).on("touchstart",function(e){
        startX = e.originalEvent.touches[0].pageX;
    });
    
    $(document).on("touchmove",function(e){
        endX = e.originalEvent.touches[0].pageX;
        a = parseInt((endX - startX)/10);
        
        if(a > b){
        n--;
        if(n < 0){
            n = 71;
        }
        }else if(a == b){
        n = n;  
        }else{
            n++;
            if(n > 71){
                n = 0;
            }
        }
        b = a;
        $("#box img").eq(n).show().siblings().hide();
    })
}
function page1(){
        $('.slide1 p').add_ani('zoomIn','1s','2s')
        $('.slide1>img:eq(0)').add_ani('fadeIn','1s','3s')
        $('.slide1>img:eq(1)').add_ani('fadeInUp','1s','3s')
        $('#icon>img:eq(0)').add_ani('fadeInLeft','1s','0s')
        $('#icon>img:eq(1)').add_ani('fadeInRight','1s','0s')
        $('#icon>img:eq(2)').add_ani('fadeInUp','1s','0s')
        $('#icon>img:eq(3)').add_ani('fadeInRight','1s','0s')
        $('#icon>img:eq(9)').add_ani('zoomInUp','2s','1s')
        
}
page1();
function set_line() {
  $('.slide4>div:eq(0)').page4(4,4.5,1.85);
  $('.slide4>div:eq(1)').page4(3.8,4.6,0.43);
  $('.slide4>div:eq(2)').page4(4,5.8,1.50);
  $('.slide4>div:eq(3)').page4(-0.1,6.5,3.73);
  $('.slide4>div:eq(4)').page4(3.8,1.9,2.52);
  $('.slide4>div:eq(5)').page4(3.9,6.6,0.43);
  $('.slide4>div:eq(6)').page4(3.2,4.6,0.56);
  $('.slide4>div:eq(7)').page4(2.9,6.5,0.87);
  $('.slide4>div:eq(8)').page4(1.6,4.6,2.03);
  $('.slide4>div:eq(9)').page4(3.9,6.5,3.17);
  $('.slide4>div:eq(10)').page4(0.6,1,2.99);
  $('.slide4>div:eq(11)').page4(4,6.6,1.45);
  $('.slide4>div:eq(12)').page4(4,5.8,1.30);
  $('.slide4>div:eq(13)').page4(0,5.6,3.63);
  $('.slide4>div:eq(14)').page4(2,4.4,1.68);
  $('.slide4>div:eq(15)').page4(3.9,6.5,2.88);
  $('.slide4>div:eq(16)').page4(4,6.5,1.21);
  $('.slide4>div:eq(17)').page4(4,6.6,3.75);
  $('.slide4>div:eq(18)').page4(2.6,5.6,1.03);
  $('.slide4>div:eq(19)').page4(1.8,5.7,1.83);
  $('.slide4>div:eq(20)').page4(4,6.6,1.52);
  $('.slide4>div:eq(21)').page4(4,5.7,3.75);
  $('.slide4>div:eq(22)').page4(0.5,6.3,3.13);
  $('.slide4>div:eq(23)').page4(1.9,6.5,1.77);
  $('.slide4>div:eq(24)').page4(3,6.6,0.62);
  $('.slide4>div:eq(25)').page4(3.8,6.5,0.18);
}
set_line()
function sunimg(){
    $('.show:eq(0),.show:eq(1)').add_ani('bounceInRight','1s','0s');
    $('.show:eq(2),.show:eq(3)').add_ani('bounceInLeft','1s','1.2s');
    swiperAnimate(swiper);
}
 function ani(){var mySwiper = new Swiper ('#father', {
     direction: 'vertical',
     onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
         page_pos();
         $('.dear').add_ani('bounceInRight','1s','0s')
         $('.maker').add_ani('bounceInLeft','1s','0s')
         $('.slide4>p:eq(0)').add_ani('bounceInLeft','2s','0s')
         $('.slide4>p:eq(1)').add_ani('fadeIn','2s','2s')
         $('.slide6>img:lt(4)').add_ani('bounceInLeft','1s','0s')
         $('.slide6>img:gt(3)').add_ani('bounceInRight','1s','0s')
         swiperAnimateCache(swiper); //隐藏动画元素 
         swiperAnimate(swiper); //初始化完成开始动画
     },
     onSlideChangeEnd: function(swiper){
       page_pos();
       if (swiper.activeIndex==0) {
          page1()
       }
       if (swiper.activeIndex==2) {
        for (var i = 0; i < 8; i++) {
          $('.slide3 img').eq(i).css('animation', 'slide3-1 '+(2+i)+'s linear infinite alternate');
        }
        
       }
       if (swiper.activeIndex==3) {
         setTimeout(function () {
           $('.slide4>img:eq(0)').addClass('slide4-ani').show();
           $('.slide4>div:lt(28)').addClass('slide4-ani').show();
           setTimeout(function () {
             $('#hand').fadeIn(1000).addClass('slide-hand');
           },2000) 
         },2000)
             
         }else{
           $('.slide4>img:eq(0)').removeClass('slide4-ani').hide();
           $('.slide4>div:lt(28)').removeClass('slide4-ani').hide();
           $('#hand').removeClass('slide-hand').hide();
         }
         if (swiper.activeIndex==4) {
           time5=setInterval(function () {
             if (a<0) {
               a=6;
               clearInterval(time5)
             }
             $('.slide5>div:lt(6)').eq(a).show().find('div').page5_ani();
             a--;
           }, 500)
         }else{
           $('.slide5>div').hide();
           $('.slide5>div>div').hide().css({
             left: '0.5rem',
             top: '0.2rem'
           });;
         }
         if (swiper.activeIndex==5) {
           page_pos();
           $('.slide6 h2').fadeIn(2000)
           $('.slide6>div>img:eq(5)').fadeIn(2000,function(){
             $('.slide6 p').fadeIn(2000);
             $('.slide6>div>img:eq(2)').fadeIn(2000,function(){
               $('.slide6>div>img:eq(0),.slide6>div>img:eq(4)').fadeIn(1000,function(){
                 $('.slide6>div>img:eq(1),.slide6>div>img:eq(3)').fadeIn(1000);
               })
             })
           })
         }else {
           $('.slide6>h2,.slide6>p,.slide6>div>img').fadeOut();
         }
         if(swiper.activeIndex!=6){
             $(".s7-img").css({
             height:0
           });
         }
       if(swiper.activeIndex==6){
       $(".s7-img").css({
           height:0
         }).animate({
           height:"8.34rem"
         },1500);
 
       }
         if(swiper.activeIndex==7){
             setTimeout(function(){
               $(".zhu").fadeIn(300,function(){
               $(".lian").fadeIn(500);
               })
             },2000)
         }else{
           $(".zhu").fadeOut(10);
           $(".lian").fadeOut(500);
        }
 
         swiperAnimate(swiper); //初始化完成开始动画
         console.log(swiper.activeIndex)  
     }
   })}
 var index=1;
  $('#renwu img').on('click', function() {
    $('#renwu img,#hand,.slide4>p').hide();
    $('#renwu').removeClass('slide4-ani').addClass('slide4-close')
    $('.slide4>div:lt(28)').removeClass('slide4-ani')
    $('#son').addClass('slide4-ani').show();
    index=$(this).index();
    var mySwiper2 = new Swiper ('#son', {
    direction: 'horizontal',
    initialSlide:index,
    // 如果需要前进后退按钮
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
  })
  }); 
  $('#close').on('click', function() {
    $('#renwu img,#hand,.slide4>p').show();
    $('#renwu').addClass('slide4-ani')
    $('.slide4>div:lt(28)').addClass('slide4-ani');
    $('#son').removeClass('block').hide();
  });
  var time5=null,a=6;
  
  $('.touxiang').on('click', function() {
    //根据点击头像，替换详情页内容
    // $('#slide-more img:eq(0)').attr('src', $(this).find('div img').attr('src'));
    var x=parseInt($(this).offset().left*100/375)+'%'; 
    var y=parseInt($(this).offset().top*100/667)+'%';
     $('#slide-more').css('transformOrigin',x+' '+y); 
    $('#slide-more').removeClass('slide5-close').show().addClass('slide5-more');
  });
  $('#slide5-close').on('click', function() {
    $(this).parent().removeClass('slide5-more').addClass('slide5-close').page5_close();
  });
 function page_pos(){
  $('.slide6>img').eq(0).page6_set(2.72,2.2,1.2)
  $('.slide6>img').eq(1).page6_set(0.34,7.16,1.28)
  $('.slide6>img').eq(2).page6_set(0.63,1.3,4.6)
  $('.slide6>img').eq(3).page6_set(2.73,0.44,1.3)
  $('.slide6>img').eq(4).page6_set(0.48,0,1.5)
  $('.slide6>img').eq(5).page6_set(2.95,4.2,1.5)
  $('.slide6>img').eq(6).page6_set(0.31,6.9,4.1)
  $('.slide6>img').eq(7).page6_set(0.63,6.1,5)
  $('.slide6>div>img').eq(0).page6_set(2.10,0.5,0.8)
  $('.slide6>div>img').eq(1).page6_set(2.50,0,3.6)
  $('.slide6>div>img').eq(2).page6_set(1.70,0.5,6)
  $('.slide6>div>img').eq(3).page6_set(1.70,3,0.5)
  $('.slide6>div>img').eq(4).page6_set(2.10,3,2.8)
  $('.slide6>div>img').eq(5).page6_set(1.80,3,5.7)
 }
  page_pos();