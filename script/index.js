$(document).ready(function () {
    $("header nav ul.gnb>li").hover(()=>{
        //ul sub 전체를 보여줘야함 
        $("header nav ul.gnb>li>ul.sub").stop().slideDown();
    }, ()=>{
        $("header nav ul.gnb>li>ul.sub").stop().slideUp();
    });

    //eq인덱스 번호, siblings 형제들 css 메서드 사용(css 메서드는 오브젝트(객체) 형태로도 사용 가능 )
    $(".slide ul.slide_all>li").eq(0).siblings().css("left","1900px");
    // $(".slide ul.slide_all>li").eq(0).siblings().css({"top":"0"});
    let sliderI=0;
    //셋인터벌함수를 이용해서 3초에 한번 ++ 해줌
    setInterval(()=>{
        sliderI<2 ? sliderI++:sliderI=0;
        //eq는 위에서 세팅한 if로 sliderI 세팅됨 0.5동안 변경
        $(".slide ul.slide_all>li").eq(sliderI).siblings().animate({"left":"1900px"},500);
        $(".slide ul.slide_all>li").eq(sliderI).animate({"left":"0"},500);
        
        console.log(sliderI);
    },3000);
});//ready end

//https://ytube.io/3ZsS
// 23:59 까지 시청
// 움직이는 애들 
// 위쪽에서 포지션 relative
// 직접 움직이는 애들에
// 포지션 absovlie
