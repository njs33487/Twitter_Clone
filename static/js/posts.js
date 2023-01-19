///////////////////////////////////////
// JavaScript post page !!
/////////////////////////////////////////

// var heartImg = document.querySelector('.heart-img');
// var initialSrc = "{% static 'img/heart.png' %}";
// var likedSrc = "{% static 'img\fill_heart.png' %}";

$(function() {
    $('.js-menu-icon').click(function(){
        // s(this): refers to self div.js-menu-icon
        // next():refers to div.menu
        // toggle(): show / hide
        $(this).next().toggle();
   
    })

})
