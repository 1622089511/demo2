/**
 * Created by Administrator on 2016/9/17 0017.
 */
$(function () {
    //搜索区切换和光标
    (function () {
        var aLi=$('#menu li');
        var oText=$('#search').find('.text');
        var arrText=['例如:荷塘鱼坊烧鱼或者日本料理' ,
            '例如: 荷塘鱼坊烧鱼或者日本料理2' ,
            '例如: 荷塘鱼坊烧鱼或者日本料理3' ,
            '例如: 荷塘鱼坊烧鱼或者日本料理4' ,
            '例如: 荷塘鱼坊烧鱼或者日本料理5'
        ];
        var iNow=0;
        oText.val(arrText[iNow]);
        aLi.each(function (index) {
            $(this).click(function () {
                                                                        //console.log(index);
                aLi.attr('class','gradient');
                $(this).attr('class','active');
                iNow=index;
                oText.val(arrText[index]);
            });
        })

        oText.focus(function () {
            if($(this).val()==arrText[iNow])
            {
                $(this).val('');
            }
        });
        oText.blur(function () {
            if($(this).val()=='')
            {
                oText.val(arrText[iNow]);
            }
        });
    })();

    //update文字滚动
    (function () {
        var oDiv=$('.update');
        var oUl= $('.update ul');
        var iH=oUl.find('li').height();
        var oBtn1=$('#updateU');
        var oBtn2=$('#updateD');
        var iNow=0;
        var timer=null;
        //console.log(iH);=30
        var arrData=[{'name':'萱萱','time':5,'title':'那些灿烂华美的瞬间','url':'baidu.com'},
            {'name':'畅畅','time':7,'title':'那些灿烂华美的瞬间','url':'baidu.com'},
            {'name':'等等','time':8,'title':'那些灿烂华美的瞬间','url':'baidu.com'},
            {'name':'22','time':9,'title':'那些灿烂华美的瞬间','url':'baidu.com'},
            {'name':'萱萱','time':10,'title':'那些灿烂华美的瞬间','url':'baidu.com'},
            {'name':'畅畅','time':11,'title':'那些灿烂华美的瞬间','url':'baidu.com'},
            {'name':'等等','time':12,'title':'那些灿烂华美的瞬间','url':'baidu.com'},
            {'name':'22','time':13,'title':'那些灿烂华美的瞬间','url':'baidu.com'},
            {'name':'萱萱','time':15,'title':'那些灿烂华美的瞬间','url':'baidu.com'},
            {'name':'畅畅','time':17,'title':'那些灿烂华美的瞬间','url':'baidu.com'},
            {'name':'等等','time':18,'title':'那些灿烂华美的瞬间','url':'baidu.com'},
            {'name':'22','time':25,'title':'那些灿烂华美的瞬间','url':'baidu.com'},
            {'name':'飒飒','time':30,'title':'那些灿烂华美的瞬间','url':'baidu.com'}
        ];

        var str='';
        for(var i=0;i<arrData.length;i++){
            str+='<li><a href=" '+arrData[i].url+'  " ><strong>'+arrData[i].name+'</strong><span>'+ arrData[i].time+'分钟前 </span>写了一篇新文章： '+arrData[i].title+' </a> </li>';
        }
        oUl.html(str); //将所有li添加到ul里
        // console.log(str); 取得str大串字符串

        //按钮点击事件，控制上下箭头和ul的TOP值移动
        function doMove(num) {
            iNow +=num; //必须设置一个值使变量递增或者递减
            if( Math.abs(iNow) >arrData.length-1) {
                iNow=0;
            }
            if(iNow>0){
                iNow=-(arrData.length-1) ;
            }
            oUl.stop().animate({'top': iH * iNow },400)
        }
        oBtn1.click(function () {
            doMove(-1);
        });
        oBtn2.click(function () {
            doMove(1);
        });
        //自动上走效果
        function autoPlay(){
            timer=setInterval(function () {
                doMove(-1);
            },4000);
        }
        autoPlay();
        //hover下侧区域
        oDiv.hover(function () {
            clearInterval(timer);
        },function () {
            autoPlay();
        })
    })();

    //选项卡
    (function () {
        fnTab($('.tabNav1') , $('.tabCon1'));
        fnTab($('.tabNav2') , $('.tabCon2'));
        function fnTab(oNav,aCon) {
            var aElem=oNav.children();
            aCon.hide().eq(0).show();
            aElem.each(function (index) {

                $(this).click(function () {
                    aElem.removeClass('active').addClass('gradient');
                    $(this).removeClass('gradient').addClass('active');
                    aElem.find('a').attr('class','triangle_gray');
                    $(this).find('a').attr('class','triangle_down')
                    aCon.hide().eq(index).show();
                });

            });
        }
    })();

    //自动播放的焦点图
    (function () {
        var oDiv=$('#fade');
        var aUlli=oDiv.find('ul li');
        var aOlli=oDiv.find('ol li');
        var oP=oDiv.find('p');
        var arr=['爸爸去哪儿了','人像摄影中的光影感','娇柔妩媚，美艳大方'];
        var iNow=0;
        var timer=null;

        fnFade();
        autoPlay();

        oDiv.hover(function () {
            clearInterval(timer);
        },function () {
            autoPlay();
        });

        aOlli.click(function () {
            iNow = $(this).index();
            fnFade();
        });

        function fnFade(){
            aUlli.each(function (i) {
                if(i !=iNow){
                    aUlli.eq(i).fadeOut(1000).css('zIndex',1);
                    aOlli.eq(i).removeClass('active');
                }else{
                    aUlli.eq(i).fadeIn(1000).css('zIndex',2);
                    aOlli.eq(i).addClass('active');
                }
                oP.text(arr[iNow]);
            })
        }
        function autoPlay() {
            timer=setInterval(function () {
                iNow++;
                iNow%=arr.length;
                fnFade();
            },2000)
        }
    })();

    //日历效果
    (function () {
        var aSpan=$('.calender h3 span');
        var aImg=$('.calender .img');
        var oTod=$('.today_transform');
        var oImg=oTod.find('img');
        var oStrong=oTod.find('strong');

        aImg.hover(function () {
            var iTop=$(this).parent().position().top-40;
            var iLeft=$(this).parent().position().left+45;
            var index=$(this).parent().index() %7;

            // console.log($(this).parent().index() %7);
            oImg.attr('src' , $(this).attr('src') );
            oTod.show().css({'left':iLeft,'top':iTop});
            oStrong.text(aSpan.eq(index).text());

        },function () {
            oTod.hide();
        });
    })();

    //BBS论坛高亮显示
    (function () {
        var aLi=$('.bbs ol li');
        aLi.mouseover(function () {
            aLi.attr('class',' ');
            $(this).attr('class','active');
        })
    })();

    //热区鼠标提示
    (function () {
        var arr=['','用户名1<br/>人气1','用户名：喵喵 <br/>人气1213','用户名2<br/>人气2','用户名3<br/>人气3','用户名4<br/>人气5','用户名5<br/>人气12','用户名6<br/>人气12','用户名7<br/>人气55','用户名8<br/>人气100','用户名9<br/>人气111'];
        $('.hot_area li').stop().mousemove(function () {
            if($(this).index()==0)return;
            var iWidth=$(this).width()-12;
            var top=$(this).height()-12;
            $('.hot_area li p').remove();
            $(this).append('<p style="width:'+ iWidth+'px;  height:'+top+'px; ">'+ arr[$(this).index()] +'<p>');
        });
    })();
});
