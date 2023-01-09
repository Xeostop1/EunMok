$(document).ready(function () {
    $("header nav ul.gnb>li").hover(()=>{
        //ul sub 전체를 보여줘야함 
        $("header nav ul.gnb>li>ul.sub").stop().slideDown();
    }, ()=>{
        $("header nav ul.gnb>li>ul.sub").stop().slideUp();
    })
});//ready end

//https://www.youtube.com/watch?v=TvRLtpq5rCs&list=PLH1l_EbgfMi8Um8sPgGc0AsweBtTfLm6B
// 31:19 까지 시청