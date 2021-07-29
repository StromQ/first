$(function(){
    $("section").on("click",".next",function(e){
        $(this).parent().parent().hide(500);
        $(this).parent().parent().next("section").show(500);
        let index = $(this).parents("section").index("section");
        $("li").eq(index+1).addClass('bgcColor');
        $("p").eq(index+1).addClass('color');
        e.preventDefault();
    });
    $("section").on('click',".forward",function(e){
        let num = $(this).parents('section').index('section');
        $("li").eq(num).removeClass('bgcColor');
        $("p").eq(num).removeClass('color');
        $(this).parents("section").hide(500);
        $(this).parents("section").prev("section").show(500);
        e.preventDefault();
    })
})

