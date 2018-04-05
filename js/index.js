// banner效果
// {
//     let imgs=document.querySelectorAll(".banner_imgBox_item");
//     let pagers=document.querySelectorAll(".banner_pager");
//     let banner=document.querySelector("#banner");
//     let arr=["#F4C15B","#F9D1DC","#E8E8E8","#E8E8E8","#E8E8E8"];
//     // console.log(banner);
//     pagers.forEach(function(ele,index){
//         ele.onmouseenter=function(){
//             for(let i=0;i<imgs.length;i++){
//                 imgs[i].classList.remove("active");
//                 pagers[i].classList.remove("active");
//             }
//             this.classList.add("active");
//             imgs[index].classList.add("active");
//             n=index;
//         }
//     })
//     let n=0;
//     let t=setInterval(move,3000);
//     function move(){
//         n++;
//         if(n===imgs.length){
//             n=0;
//         }
//
//         if(n<0){
//             n=imgs.length-1;
//         }
//         for(let i=0;i<imgs.length;i++){
//             //移除类名
//             imgs[i].classList.remove("active");
//             //移除类名
//             pagers[i].classList.remove("active");
//         }
//         //添加类名
//         imgs[n].classList.add("active");
//         //添加类名
//         pagers[n].classList.add("active");
//     }
//     banner.onmouseenter=function(){
//         clearInterval(t);
//     }
//     banner.onmouseleave=function(){
//         t=setInterval(move,3000);
//     }
//     let flag=true;
//     imgs.forEach(function(ele){
//         ele.addEventListener("transitionend",function(){
//             flag=true;
//         })
//     })
// }
{
    let lunbotu=$(".banner_imgBox_item");
    let lunbodian=$(".banner_pager");
    let banner=$("#banner");
    let n=0;
    let arr=["#F4C15B","#F9D1DC","#E8E8E8","#E8E8E8","#E8E8E8"];
    lunbodian.mouseenter(function(){
        let index=lunbodian.index(this);
        banner.css("background",arr[index]);
        lunbotu.css({"opacity":0}).eq(index).css({"opacity":1,"transition":"all 0.1s linear"})
        lunbodian.css("background","#000").eq(index).css("background","#ccc");
        n=index;
    })
    function move(){
        n++;
        if(n==5){
            n=0;
        }
        lunbotu.css({"opacity":0}).eq(n).css({"opacity":1,"transition":"all 0.3s linear"})
        banner.css("background",arr[n]);
        lunbodian.css("background","#000").eq(n).css("background","#ccc")
    }
    let t=setInterval(move,2000);
    banner.mouseenter(function(){
        clearInterval(t);
    })
    banner.mouseleave(function(){
        t=setInterval(move,2000);
    })
}
//楼层跳转、返回顶部
{
    $(".right_nav_top").click(function(){
        $("html,body").animate({scrollTop:0});
    })
    $(".leftBar_toTop").click(function(){
        $("html,body").animate({scrollTop:0});
    })
    $(window).scroll(function(){
        var st=$(window).scrollTop()-60;//通过scrollTop()获取滚动高度
        if(st>700){
            $("#topBar").show();//显示
        }else{
            $("#topBar").hide();//隐藏
        }
        if(st>765){
            $("#leftBar").show();
        }else{
            $("#leftBar").hide();
        }
    })

    $(".leftBar_item").click(function(){
        // var index=$(this).index;//同辈元素中的索引
        var index=$(this).index(".leftBar_item");
        var ot=$(".super").eq(index).offset().top-60;
        $("html,body").animate({scrollTop:ot},200);
    })

    $(window).scroll(function(){
        var st=$(window).scrollTop();
        $(".super").each(function(index,ele){//ele和this一样，指的是container
            let arr=["#64C333","#ff0036","#EA5F8D","#0AA6E8","#64C333","#F15453","#19C8A9","#ff0036"];
            if(st>=$(this).offset().top-60){
                $(".leftBar_item").css("background","rgba(0,0,0,0.8)").eq(index).css("background",arr[index]);
                $(".leftBar_item").removeClass("active").eq(index).addClass("active");
            }
        })
    })
}
//天猫超市今日疯抢、量贩装
{
    $(".super_acty_title_item").mouseenter(function () {
        $(".super_acty_title_item.active").removeClass("active").parent().find(this).addClass("active");
        var index=$(this).index();
        $(".super_acty_detail").removeClass("active").eq(index).addClass("active");
    })
}
//banner侧导航效果
{
    let lis=$(".banner_nav_item");
    let cons=$(".banner_nav_list");
    let arr1=["#e54077","#427def","#6347ed","#e54077","#6347ed","#427def","#fa5c5c","#f7a831","#f7a831","#427def","#427def","#fa5c5c","#f7a831","#e54077","#427def","#6347ed"];
    lis.mouseenter(function () {
        let index=lis.index(this);
        $(this).css({"background":"#fff","color":arr1[index]});
        cons.eq(index).css("display","block");
    })
    lis.mouseleave(function () {
        cons.css("display","none");
        lis.css({"background":"rgba(0,0,0,0.6)","color":"#fff"});
    })
}
//头部效果
{
    $(".head_mytao").mouseenter(function () {
        $(".head_mytao_tan").css("display","block");
    })
    $(".head_mytao").mouseleave(function () {
        $(".head_mytao_tan").css("display","none");
    })

    $(".head_shoucang").mouseenter(function () {
        $(".head_shoucang_tan").css("display","block");
    })
    $(".head_shoucang").mouseleave(function () {
        $(".head_shoucang_tan").css("display","none");
    })

    $(".head_shouji").mouseenter(function () {
        $(".head_shouji_ma").css("display","block");
    })
    $(".head_shouji").mouseleave(function () {
        $(".head_shouji_ma").css("display","none");
    })

    $(".head_shangjia").mouseenter(function () {
        $(".head_shangjia em").css("display","block");
    })
    $(".head_shangjia").mouseleave(function () {
        $(".head_shangjia em").css("display","none");
    })

    $(".head_nav").mouseenter(function () {
        $(".menu_nav").css("display","block");
    })
    $(".head_nav").mouseleave(function () {
        $(".menu_nav").css("display","none");
    })
}
//rightBar
{
    $(".right_nav_item").mouseenter(function(){
        $(this).find(".right_nav_tan").show().animate({right:"35"},300);
        $(this).find(".right_erweima").show().animate({left:"-154"},300);
    })
    $(".right_nav_item").mouseleave(function(){
        $(this).find(".right_nav_tan").hide().animate({right:"70"},300);
    })
}



