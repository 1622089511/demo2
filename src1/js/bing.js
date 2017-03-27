
$(document).ready(function(){
	
		
			
		//登录点击显示隐藏框
		var oLogin = $('#hidenav').find('.login-hide');
		$('#login').on('click',function (event){
			oLogin.fadeToggle(300);
			 $('#toolHide').hide(300);
			 event.stopPropagation();
		});
		//显示隐藏列表
	    $("#toggleList").on('click',function (event){
	        $('#toolHide').slideToggle(300);
	        oLogin.hide(300);
	        event.stopPropagation();
	    })
	    
	    //隐藏列表点击切换header状态
	    var flag = true;	
	    $('.show-menu').on('click',function(event){  	
    		if(flag){
    			$('.show-control span').css('backgroundPosition', '0px 0px');
    			$('.navbar').css({'background':'none'});
    			$('.navbar-left').hide(300);
    			flag = false;
    			event.stopPropagation();
    		}else{
    			$('.show-control span').css('backgroundPosition', '0px -16px');
    			$('.navbar').css({'background':'#333'});
    			$('.navbar-left').show(300);
    			event.stopPropagation();
    			flag = true;	
    		}
	    });
	    //body点击隐藏页面
	    $('body').on('click',function(){
	    	 $('#toolHide').hide(300);
	    	  oLogin.hide(300);
	    	 $('#search-suggest').hide(500); 	 
	    })
	    
	    //input页面输入内容显示隐藏面板    
	    $('#search_input').on('keydown',function (){
	    	if($(this).val() !== ""){
	    		  $('#search-suggest').css({
                      top:$('#search-form').offset().top-3 +'px',
                     left:$('#search-form').offset().left,
                     position:'absolute'
                  }).show(300);
                 }else{
	    		 $('#search-suggest').hide(500);
	    	}
	    })
	      $('#search_input').on('focus',function (){
	         	 $('bg-wrap').addClass('mask');
	      });
	    //必应下面的icon           
		var icon = $('.share .left');
		var iconPanel = $('.fenxiang');
		function changeOpacity(obj){
			obj.hover(
				function (){
			    	$('.share .left').css('opacity',1)},
				function (){
			    	$('.share .left').css('opacity',0)}
			)}
		changeOpacity(iconPanel);
		changeOpacity(icon);
	             
	 
	   
	   
		
		
});
	
	
	
