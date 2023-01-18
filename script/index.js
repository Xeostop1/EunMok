$(document).ready(function () {

    //=========모달팝업 ======
    const modal=$(".modal");
    $("ul.notice li").eq(0).click(()=> {
        modal.fadeIn();
    });
    //=========모달close======
    $(".modal_inner button").click(()=>{
        modal.fadeOut();
    })


    //============탭 메뉴 공지사항 갤러리========
    //여기가 제대로 안된다
    //1. 애로우 펑션사용시 this가 사용이 안되었음 
    //2. js의 애로우 펑션과 this 관계때문에 그렇게 되는 것 
    //애로우 펑션내에의 this는 원도우 객체를 참조한다(잠깐 공부했던 내용 그래서 콘솔에 찍었을 때에도 document로 나옴)
    // 만약에 애로우 펑션으로 사용하고 싶으면 e.currentTarget을 써야 한데! e 파라미터를 받아서 사용
    //https://bityl.co/Gj2T 
    
    //정상작동 확인 this 값 사용하기 위해서는 
    //1. function 사용
    //2. 애로우펑션의 이벤트 객체 가기고 오기 

    $(".contents .notice_gal h3").click((e)=>{
        //먼저 모두 지운 후 시작
        $(".contents .notice_gal h3, .contents .notice_gal ul").removeClass("on");
        $(e.currentTarget).addClass("on");
        $(e.currentTarget).next("ul").addClass("on");
    });    



    // =====네비게이션 메뉴===========
    $("header nav ul.gnb>li").hover(()=>{
        //ul sub 전체를 보여줘야함 
        $("header nav ul.gnb>li>ul.sub").stop().slideDown();
    }, ()=>{
        $("header nav ul.gnb>li>ul.sub").stop().slideUp();
    });

    //======메인 슬라이드===========
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
