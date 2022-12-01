$(function(){
    // Modificamos el fondo.
    $(".demo1").css({"background-color": "red"});


    // Modificamos el fondo con un click.
    $("#MyButton").click(function(){
        $(".demo2").css({"background-color": "blue"});
    });

    $(".b2").click(function(){
        $(".demo3").fadeOut();
    });

    $(".btn-show").click(function(){
        $(".demo3").show();
    });


});