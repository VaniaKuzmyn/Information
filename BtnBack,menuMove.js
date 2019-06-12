//animate button back

    $(function (f) {
        var element = f('#back-top');
        f(window).scroll(function () {
            element['fade' + (f(this).scrollTop() > 500 ? 'In' : 'Out')](500);
        });
    });

    $("#back-top").on('click', function () {
        $('body,html').animate({ scrollTop: 0 }, 1000);
    });

//-----------------------------------------------

//animate menu

 $(".menu").click(function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top }, 1500);
    });

/*
body {
  scroll-behavior: smooth;
}
*/