window.onload=Drag;
//获取class
function getByClass(cls,parent){
	var oParent= parent ? document.getElementById(parent) : document,
		eles =[],
		elements = oParent.getElementsByTagName('*');
		
	for (var i=0;i<elements.length;i++){
		if (elements[i].className == cls){
			eles.push(elements[i]);
		}	
	}
	return eles;
}
//事件
function getStyle(obj,attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	}else{
		return obj.getComputedStyle(obj,false)[attr];
		
	}
}
function Drag(){
	var oTitle=getByClass('login_logo_webqq','loginPanel')[0];
		oTitle.onmousedown=fnDown;
	//关闭按钮
	document.getElementById('ui_boxyClose').onclick=function(ev){		
		document.getElementById('loginPanel').style.display = 'none';
	}
	//小抽奖游戏
	var play  = document.getElementById('play'),
		stop = document.getElementById('stop');	
	play.onclick=playFun;
	stop.onclick=stopFun;
	document.onkeyup=function(ev){
		event = ev || window.event;
		if(event.keyCode == 0){
			if(flag==0){
				playFun();
				flag = 1;
			}else{
				stopFun();
				flag = 0;
			}
		}
	}
	
	// 切换状态
	var oState = document.getElementById('login2qq_state_txt'),  //存放状态文本
		oLoginPanel = document.getElementById('loginStatePanel'),
		lis = oLoginPanel.getElementsByTagName('li'),
		oShow = document.getElementById('loginStateShow'),
		oLoginState = document.getElementById('loginState'); 
	oLoginState.onclick=function(ev){
		var oEvent = ev || event;
			if(oEvent.stopPropagation){
				oEvent.stopPropagation();
			}else{
				oEvent.cancelBubble = true;
			}
		oLoginPanel.style.display = 'block';		
	}		
	//鼠标滑过，离开和点击状态栏
	for(var i=0,l=lis.length;i<lis.length;i++){
		lis[i].onmouseover=function(){
			this.style.background='#567';
		}
		lis[i].onmouseout=function(){
			this.style.background='#fff';
		}
		lis[i].onclick=function(ev){
			//取消冒泡
			var oEvent = ev || event;
			if(oEvent.stopPropagation){
				oEvent.stopPropagation();
			}else{
				oEvent.cancelBubble = true;
			}			
			var id = this.id;
			oLoginPanel.style.display='none';
			oState.innerHTML = getByClass('stateSelect_text',id)[0].innerHTML;
			oShow.className = '',		//先清空再添加
			oShow.className = 'login-state-show ' + id;		 //选择先加固定默有的类 然后加当前的id;		
		}
	}
	//全局点击关掉下方列状态
	document.onclick=function(){
		oLoginPanel.style.display='none';
		}
	}

function fnDown(ev){
	var	oEvent = ev || event,
	 	oPanel = document.getElementById('loginPanel'),
		disX = oEvent.clientX - oPanel.offsetLeft,
		disY = oEvent.clientY - oPanel.offsetTop;
	document.onmousemove=function(ev){
	var oEvent = ev || event,
		oPanel = document.getElementById('loginPanel'),
		l = oEvent.clientX - disX,
		t = oEvent.clientY - disY,
		
		winW = document.documentElement.clientWidth || document.body.clientWidth,
		winH = document.documentElement.clientHeight || document.body.clientHeight,
		maxW = winW - oPanel.offsetWidth - 10,
		maxH = winH - oPanel.offsetHeight;
		//判定
		if (l >maxW){
			l =maxW;
		}else if(l < 0){
			l=0;
		}
		if(t < 0){
			t=0;
		}else if(t > maxH){
			t=maxH;
		}		
		oPanel.style.left = l + 'px';
		oPanel.style.top = t + 'px';	
	}
	document.onmouseup=function(){
		document.onmousemove = document.onmouseup = null;
	} 
	return false;
}

//小游戏
var data=['Phone5','Ipad','三星笔记本','佳能相机','惠普打印机','谢谢参与','50元充值卡','1000元超市购物券'],
    timer=null,
    flag=0;
function playFun(){
	var	title =document.getElementById('title');
	var play =document.getElementById('play');
	clearInterval(timer);
	timer=setInterval(function(){
		var random = Math.floor(Math.random() * data.length);	
		title.innerHTML = data[random];
	},100);
	play.style.background = '#999';
}
function stopFun(){
	clearInterval(timer);
	var play =document.getElementById('play');
	play.style.background = '#036';
}

