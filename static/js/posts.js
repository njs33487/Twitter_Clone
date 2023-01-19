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



// document.querySelector('.like-button').addEventListener('click', function(event) {
//     event.preventDefault();
//     var form = this.parentNode;
//     var request = new XMLHttpRequest();
//     request.open('POST', form.action);
//     request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
//     request.setRequestHeader('X-CSRFToken', form.querySelector('input[name=csrfmiddlewaretoken]').value);
//     request.onload = function() {
//         if (request.status === 200) {
//             var likeCount = form.querySelector('.like-count');
//             likeCount.textContent = parseInt(likeCount.textContent) + 1;
//             heartImg.src = likedSrc;
//         }
//     };
//     request.send(new FormData(form));
// });
