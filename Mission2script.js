console.log("Mission 2 is Connected 🕹️");

// Play BTN
$(document).ready(function(){
    $('#play').on('click',function(){
        $('#Video1')[0].src += "&autoplay=1";
    });
}); 

