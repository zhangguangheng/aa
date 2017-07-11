window.onload=function(){
    var nM1=document.getElementById('nav_menu1');
    var nM2=document.getElementById('nav_menu2');
    var nM3=document.getElementById('nav_menu3');
    var nM4=document.getElementById('nav_menu4');
    var nM5=document.getElementById('nav3_menu_1');
    var nM6=document.getElementById('nav3_menu_2');
    var nM7=document.getElementById('nav3_menu_3');
    var nM8=document.getElementById('nav3_menu_4');
    var sS=document.getElementById('slideshow');

    var n1M=document.getElementById('nav1_menu');
    var n1M1=document.getElementById('nav1_menu1');
    var n1M2=document.getElementById('nav1_menu2');
    var n1M3=document.getElementById('nav1_menu3');

    n1M.onmouseover=function(){
        n1M1.style.display='block';
    }
    n1M.onmouseout=function(){
        n1M1.style.display='none';
    }
    n1M2.onmouseover=function(){
        n1M3.style.display='block';
    }
    n1M2.onmouseout=function(){
        n1M3.style.display='none';
    }

    nM1.onmouseover=function(){
        nM2.style.display='block';
        nM2.style.background='#fff';
        nM1.style.background='#fff';
        nM2.style.borderTop='none';
    }
    nM1.onmouseout=function(){
        nM2.style.display='none';
        nM1.style.background='none';
    }

    nM3.onmouseover=function(){
        nM4.style.display='block';
        nM4.style.background='#fff';
        nM3.style.background='#fff';
        nM4.style.borderTop='none';
    }
    nM3.onmouseout=function(){
        nM4.style.display='none';
        nM3.style.background='none';
    }

    nM5.onmouseover=function(){
        nM6.style.display='block';
        nM6.style.background='#DD4F50';
        nM5.style.background='#DD4F50';
        nM6.style.borderTop='none';
    }
    nM5.onmouseout=function(){
        nM6.style.display='none';
        nM5.style.background='none';
    }

    nM7.onmouseover=function(){
        nM8.style.display='block';
        nM8.style.background='#DD4F50';
        nM7.style.background='#DD4F50';
        nM8.style.borderTop='none';
    }
    nM7.onmouseout=function(){
        nM8.style.display='none';
        nM7.style.background='none';
    }

    var aImg=document.getElementById('module2_3_2_1');
    var aImg1=document.getElementById('module2_3_2_2');
    var aImg2=document.getElementById('module2_3_2_3');
    var aImg3=document.getElementById('module2_3_2_4');

    aImg.onmouseover=function(){
        this.style.left='-30px';
        aImg1.style.left='500px';
        aImg2.style.left='700px';
        aImg3.style.left='900px';
    }
    aImg1.onmouseover=function(){
        this.style.left='170px';
        aImg.style.left='-30px';
        aImg2.style.left='700px';
        aImg3.style.left='900px';
    }
    aImg2.onmouseover=function(){
        this.style.left='370px';
        aImg1.style.left='170px';
        aImg.style.left='-30px';
        aImg3.style.left='900px';
    }
    aImg3.onmouseover=function(){
        this.style.left='570px';
        aImg1.style.left='170px';
        aImg.style.left='-30px';
        aImg2.style.left='370px';
    }

    var btn=document.getElementById('middle_btn');
    var btn1=document.getElementById('middle_btn1');
    var mdO=document.getElementById('middle_option');
    var mdO1=document.getElementById('middle_option1');

    btn.onclick=function(){
        this.style.color='#DD4F50';
        btn1.style.color='#000';
        mdO.style.display='block';
        mdO1.style.display='none';
    }
    btn1.onclick=function(){
        this.style.color='#DD4F50';
        btn.style.color='#000';
        mdO1.style.display='block';
        mdO.style.display='none';
    }
 var oUl1=document.getElementsByClassName('ul1')[0];
            var oUl2=document.getElementsByClassName('ul2')[0];
            var aLi1=oUl1.getElementsByTagName('li');
            var aLi2=oUl2.getElementsByTagName('li');
            var dis=aLi1[0].offsetWidth;
            var time=null;
            var iNow=-1;



            oUl1.style.width=dis*aLi1.length+'px';
            //第一部分:页面刷新两个轮播图
            time=setInterval(move,3000);
            move();
            function move(){
                if(iNow==aLi1.length-1){
                    iNow=0;
                }else{
                    iNow++;
                }
                //图片轮播
                oUl1.style.left=-iNow*dis+'px';
                //焦点的轮播
                for(var i=0;i<aLi2.length;i++){
                    aLi2[i].id='';
                }
                aLi2[iNow].id='active';
            }

            //第二部分:鼠标经过焦点时 选项卡
            for(var j=0;j<aLi2.length;j++){
                aLi2[j].index=j;
                aLi2[j].onmouseenter=function(){
                    //停止计时器
                    clearInterval(time);
                    //更改当前的焦点
                    for(var x=0;x<aLi2.length;x++){
                        aLi2[x].id='';
                    }
                    this.id='active';
                    //把当前下标绑定给初始下标;让焦点按照当前下标开始计算
                    iNow=this.index;
                    //更改当前图片
                    oUl1.style.left=-iNow*dis+'px';
                }
                //第三部分:鼠标移出继续从当前下标轮播
                aLi2[j].onmouseleave=function(){
                    time=setInterval(move,3000);
                }
            }

    var iF=document.getElementById('input_focus');
    iF.onfocus=function(){
        this.placeholder='';
    }
    iF.onblur=function(){
        this.placeholder='请输入搜索关键词';
    }

    var bS1=document.getElementById('boxshow1');
    var bS2=document.getElementById('boxshow3');
    bS1.onmouseover=function(){
        this.style.background='#fff';
        this.style.borderRight='1px solid gray';
        bS2.style.display='block';
    }
    bS1.onmouseout=function(){
        bS2.style.display='none';
        this.style.background='#EFEFEF';
        this.style.borderRight='none';
    }

    var sO=document.getElementById('second-option');
    var sO1=document.getElementById('second-option1');
    var sO2=document.getElementById('second-option2');
    var sO3=document.getElementById('second-option3');
    var sO4=document.getElementById('second-option4');
    var sO5=document.getElementById('second-option5');

    sO.onmouseover=function(){
        sO1.style.display='block';
    }
    sO.onmouseout=function(){
        sO1.style.display='none';
    }
    sO2.onmouseover=function(){
        sO3.style.display='block';
    }
    sO2.onmouseout=function(){
        sO3.style.display='none';
    }
    sO4.onmouseover=function(){
        sO5.style.display='block';
    }
    sO4.onmouseout=function(){
        sO5.style.display='none';
    }


    var rollf=document.getElementById('rollf');
    rollf.innerHTML+=rollf.innerHTML;
    var timer=null;
    timer=setInterval(function(){
    rollf.style.top=rollf.offsetTop+1+'px';
    if(rollf.offsetTop>0){
        rollf.style.top=-rollf.offsetHeight+'px';
    }
    }, 20)

    var rolls=document.getElementById('rolls');
    rolls.innerHTML+=rolls.innerHTML;
    var timer1=null;
    timer1=setInterval(function(){
    rolls.style.top=rolls.offsetTop+1+'px';
    if(rolls.offsetTop>0){
        rolls.style.top=-rolls.offsetHeight+'px';
    }
    }, 20)

    var rollt=document.getElementById('rollt');
    rollt.innerHTML+=rollt.innerHTML;
    var timer2=null;
    timer2=setInterval(function(){
    rollt.style.top=rollt.offsetTop+1+'px';
    if(rollt.offsetTop>0){
        rollt.style.top=-rollt.offsetHeight+'px';
    }
    }, 20)

    var mUl=document.getElementById('module1_1_3_loop');
    var mLi=mUl.getElementsByTagName('li');
    var mUl1=document.getElementById('module1_1_4_loop');
    var mLi1=mUl1.getElementsByTagName('li');

    for(var i=0;i<mLi.length;i++){
    mLi[i].index=i;
    mLi[i].onmouseover=function(){
    for(var j=0;j<mLi.length;j++){
        mLi1[j].style.display='none';
        mLi[j].style.color='#000';
        mLi[j].style.borderLeft='1px solid #f1f1f1';
    }
    mLi1[this.index].style.display='block';
    this.style.color='#DD4F50';
    this.style.borderLeft='1px solid #DD4F50';
    }
    }


}