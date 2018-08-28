$(document).ready(function(){

    $('#list-switch-1').on('click', function (event){ 
        event.preventDefault();
        $('#photo-background').css('background-image', 'url(res/banner.jpg)');
    });

    $('#list-switch-2').on('click', function(event){
        event.preventDefault();
        $('#photo-background').css('background-image', 'url(res/bg.jpg)'); 
    });

    $('#list-switch-3').on('click', function(event){
        event.preventDefault();
        $('#photo-background').css('background-image', 'url(res/bear.jpg)');
    })

    $('#list-switch-4').on('click', function(event){
        event.preventDefault();
        $('#photo-background').css('background-image', 'url(res/bee.jpg)');
    })


});