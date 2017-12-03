/*
* @Author: Administrator
* @Date:   2017-11-09 00:34:13
* @Last Modified by:   Administrator
* @Last Modified time: 2017-11-13 08:47:57
*/
window.onload=function(){

	// 轮播图
	let bannerPic=document.getElementsByClassName('banner-pic')[0];
	let dong=bannerPic.getElementsByTagName('li');
	let yuan=document.getElementsByClassName('yuan');
	let banner=document.getElementsByClassName('banner')[0];
	// console.log(bannerPic,dong,yuan)
	let t;
	let num=0;
	t=setInterval(fn,2000);
	banner.onmouseover=function(){
		clearInterval(t);
	}
	banner.onmouseout=function(){
		t=setInterval(fn,2000);
	}


	  for(let i=0;i<yuan.length;i++){
		  yuan[i].onmouseover=function(){
		  	dong[i].className='banner-dong';
		  	dong[num].className='';
		  	yuan[i].style.background='red';
		  	yuan[num].style.background='#fff';
		  	num=i;
		  }
	  }
	function fn(){
		num++
		if(num==dong.length){
			num=0;
		}
		for(let i=0;i<dong.length;i++){
			dong[i].className='';
			yuan[i].style.background='#999'
		}
		dong[num].className='banner-dong'
		yuan[num].style.background='#fff'
	}


	let bannerBox=document.getElementsByClassName('banner-list-box')[0];
	let list=bannerBox.getElementsByTagName('li');
	let lunbo=document.getElementsByClassName('lunbo');
	// console.log(bannerBox,list)
	for(let i=0;i<list.length;i++){
		list[i].onmouseover=function(){
			lunbo[i].style.display='block';
		}
		list[i].onmouseout=function(){
			lunbo[i].style.display='none';
		}
		
	}


// 导航下拉
    let header_popup=document.getElementsByClassName("header_popup");
    let headercenter1=document.getElementsByClassName("headercenter-right_a");
    // let headercenter2=document.getElementsByClassName("headercenter-right_b");
    // console.log(headercenter2)
    // console.log(header_popup,headercenter1)
    for(let i=0;i<header_popup.length;i++){
        headercenter1[i].onmouseover=function(){
            header_popup[i].style.display="block";
        }
        headercenter1[i].onmouseout=function(){
            header_popup[i].style.display="none";
        }
        header_popup[i].onmouseover=function(){
            header_popup[i].style.display="block";
        }
        header_popup[i].onmouseout=function(){
            header_popup[i].style.display="none";
        }
        // headercenter2[i].onmouseover=function(){
        //     header_popupp[i].style.display="block";
        // }
        // headercenter2[i].onmouseout=function(){
        //     header_popupp[i].style.display="none";
        // }

    }

	// 楼城跳转

	let tiao=document.querySelector('.tiao');
	console.log(tiao)
	tiao.onclick=function () {
        animate(document.documentElement,{scrollTop:0},1000);
        animate(document.body,{scrollTop:0},1000);
    }
    let nav=document.querySelectorAll(".erba-left-box li");
    let ding=document.querySelector(".top-nav-yincang");
    let list1=document.querySelectorAll(".lou");

    let navs=document.querySelector(".erba-left-box");

    var save=0;
    var down=true;
    var up=false;

    var colors=["yellowgreen","black","pink","skyblue","yellowgreen","#F15453","skyblue","black",]
    window.onscroll=function () {
        let height=document.documentElement.scrollTop?document.documentElement.scrollTop:document.body.scrollTop;
        list1.forEach(function (value,index) {
            if(height>=value.offsetTop-400) {
                for(let i=0;i<list1.length;i++){
                    nav[i].style.background="";
                }
                nav[index].style.background=`${colors[index]}`;
                save=index;
            }
        })


        console.log(list1[0].offsetTop)
        if(height>list1[0].offsetTop-400){
            if(down){
                down=false;
                animate(ding,{top:0},function () {
                    up=true;
                });
                animate(navs,{width:36,height:369},200)
            }
        }
        else{
            if(up){
                up=false;
                animate(ding,{top:-150},function () {
                    down=true;
                });
                animate(navs,{width:0,height:0},200)
            }
        }
    }
    nav.forEach(function (value,index) {
        value.onclick=function () {
            animate(document.documentElement,{scrollTop:list1[index].offsetTop-100})
            save=index;
        }
        value.onmouseenter=function () {
            nav[index].style.background=`${colors[index]}`;
        }
        value.onmouseleave=function () {
            for(let i=0;i<list1.length;i++){
                nav[i].style.background="";
            }
            nav[save].style.background=`${colors[save]}`;
        }
    })
//    侧导航
    var asideLi=document.querySelectorAll('aside ul li');
    var zuoce=document.querySelectorAll('.zuocewenzi');
    var div8=document.querySelector('.divLi8');
    var er=document.querySelector('#er');
    let goTop=document.querySelector('#gotop');
    asideLi.forEach(function (valueL,indexL) {
        valueL.onmouseover=function(){
            animate(zuoce[indexL],{left:0,opacity:1},200);

        }
        valueL.onmouseout=function(){
            animate(zuoce[indexL],{left:-30,opacity:0},200);

        }
    });
    div8.onmouseover=function(){
        er.style.opacity=1;
        er.style.display='block'
    }
    div8.onmouseout=function(){
        er.style.opacity=0;
        er.style.display='none'
    }
    goTop.onclick=function(){
        animate(document.body,{scrollTop:0});
        animate(document.documentElement,{scrollTop:0});
    }

}