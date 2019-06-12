var stars;
var num;
$(".star-i").on('mouseover', function (event) {
    stars = $(this).parent().children('.star-i');
    var that = this;
    stars.each(function (index, item) {
        if (item == that) {
            $(item).addClass('star-i-hover');
            num = index;
            return false;
        }
        else {
           $(item).addClass('star-i-hover');
        }
    })
}).mouseout(function () {
    $(stars).removeClass('star-i-hover');
})
$(".star-i").on('click', function (e) {
    var that = this;
    stars.each(function (index, item) {
        if (item == that) {
            $(item).removeClass('star-i-hover');
            $(item).addClass('star-i-selected');
            return false;
        }
        else {
            $(item).removeClass('star-i-hover');
            $(item).addClass('star-i-selected');
        }
    })
    $(this).parent().children('.star-i').unbind();

    var posX = e.clientX;
    var posY = e.clientY;
    var descText = $(this).parent().parent().attr('data-name');
    

    $(this).parent().children('.stars-desc').css('left', posX - 130);
    $(this).parent().children('.stars-desc').css('top', posY + 30);
    $(this).parent().children('.stars-desc').css('display', 'block');

    $(this).parent().children('.stars-desc').html(`Name: ${descText},<br /> stars: ${num + 1}`);
    $(this).parent().children('.stars-desc').fadeOut(2000);

})