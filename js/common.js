$(document).ready(function() {
    $(".nav-button").click(function(event) {
        $("nav.mobile").slideToggle(300)
    });
    $("nav ul a, .scroll-link").mPageScroll2id({
        offset: 100,
        highlightClass: "mPS2id-clicked"
    });
    $(".owl-carousel").owlCarousel({
        items: 1,
        loop: false,
        center: true,
        margin: 10,
        nav: true,
        URLhashListener: true,
        autoplayHoverPause: false,
        startPosition: "URLHash",
        onTranslate: callback
    });
    function callback(event) {
        var page = event.page.index;
        $(".repairs nav a").removeClass("active");
        $(".repairs nav a").eq(page).addClass("active")
    }
    $(".block.two ul li").click(function(event) {
        $('.block.two ul li').removeClass('active');
        $(this).addClass('active');
        var i = $(this).index() + 1;
        $(".block.two .img img").attr("src", "img/design/" + i + ".jpg")
    });
    $(".portfolio .bolshe").find("a.btn").click(function(event) {
        $(".portfolio .all-works").slideDown(500);
        $(".portfolio .bolshe").delay(500).hide(500)
    });
    $(".answers a.btn").click(function(event) {
        $(".hide-question").slideDown(300);
        $(this).delay(300).hide(300)
    });
    $(".question").click(function(event) {
        $(".answer-box").slideUp(300);
        if ($(".plus").hasClass("rotate")) {
            $(".plus").removeClass("rotate")
        }
        if (!$(this).hasClass("active")) {
            $(".question").removeClass("active");
            $(this).next(".answer-box").slideDown(300);
            $(this).addClass("active");
            $(this).find(".plus").addClass("rotate")
        } else {
            $(this).removeClass("active")
        }
    });
    $(".offer .form a.btn").click(function(event) {
        var rad_check = $(this).parents(".form").find('input[type=radio]:checked');
        if (rad_check.hasClass('alert')) {
            jQuery.magnificPopup.open({
                items: {
                    src: '#otkaz'
                },
                type: 'inline'
            })
        } else {
            $(this).parents(".form").fadeOut(300);
            $(this).parents(".form").next(".form").delay(300).fadeIn(300);
            $(".ellipse.active").last().next(".hr").addClass("active7").next(".ellipse").addClass("active");

        }
    });
    $('#otkaz').click(function(e) {
        $.magnificPopup.close()
    });
    $('.cena').click(function(e) {
        $('#otkaz p').html('К сожалению, мы беремся за заказы общей стоимостью работ от 20 тыс. руб. и выше.')
    });
    $('.drugoe').click(function(e) {
        $('#otkaz p').html(' К сожалению, мы работаем только по Туле и Области.')
    });
    var $menu = $(".navigation");
    var fn = $(".vniz").offset().top;
    $(window).scroll(function() {
        if ($(this).scrollTop() > fn) {
            $(".navigation.fixed").css("transform", "translateY(75px)")
        } else {
            $(".navigation.fixed").css("transform", "translateY(-75px)")
        }
    });
    $(".popup-with-form").magnificPopup({
      type: "inline",
      preloader: false,
      fixedContentPos: true,
      focus: "#name",

    // When elemened is focused, some mobile browsers in some cases zoom in
    // It looks not nice, so we disable it:
    callbacks: {
      beforeOpen: function () {
        if ($(window).width() < 700) {
          this.st.focus = false;
        } else {
          this.st.focus = "#name";
        }
      }
    }
  });
    $(".popup-with-politica").magnificPopup({
      type: "inline",
      preloader: false,
      fixedContentPos: true,
      mainClass: "politica-class",
    });
    $(".zakazat-zvonok").click(function(e) {
        var cel = "Заказать звонок";
        $("#test-form h3").html(cel);
        $("#test-form .cel").attr('value', cel)
    });
    $(".uznat-cenu").click(function(e) {
        var cel = "Узнать точную цену";
        $('#test-form h3').html('Узнать точную цену');
        $("#test-form .cel").attr('value', cel)
    });
    $(".uznat-podrobnee").click(function(e) {
        var cel = "Узнать подробнее";
        $("#test-form h3").html("Узнать подробнее");
        $("#test-form .cel").attr('value', cel)
    });
    $(".o-proekte").click(function(e) {
        var cel = "Подробнее о проекте";
        $("#test-form h3").html("Подробнее о проекте");
        $("#test-form .cel").attr('value', cel)
    });
    $(".zamershika").click(function(e) {
        var cel = "Вызвать замерщика";
        $("#test-form h3").html("Вызвать замерщика");
        $("#test-form .cel").attr('value', cel)
    });
    $(".phone").mask("+7(999) 999-99-99", {
        autoclear: true
    });
    $("form").submit(function() {
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "mail.php",
            data: th.serialize()
        }).done(function() {
            jQuery.magnificPopup.open({
                items: {
                    src: '#otpravleno'
                },
                type: 'inline'
            });
            $(".form").fadeOut(300);
            $('.form').eq(0).delay(300).fadeIn(300);
            $(".ellipse.active").removeClass('active').eq(0).addClass('active');
            $(".hr").removeClass('active7');
            setTimeout(function() {
                th.trigger("reset")
            }, 1000)
        });
        return false
    })
});
