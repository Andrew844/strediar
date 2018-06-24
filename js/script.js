  $(document).ready(function () {

  	var btnName;

  $(".block_name_1").on("click", function() {
    $('.block_click').val('ПРОФЕССИОНАЛЬНЫЙ РЕМОНТ');
    $('.tab').val('---');
    btnName = $(this).text();
    $('.button_name').val(btnName);
  });

  $(".block_name_2_1").on("click", function() {
    $('.block_click').val('РЕМОНТ И ДИЗАЙН В ОДНОЙ КОМПАНИИ');
     $('.tab').val('КОМПЛЕКСНЫЙ РЕМОНТ');
    btnName = $(this).text();
    $('.button_name').val(btnName);
  });

  $(".block_name_2_2").on("click", function() {
    $('.block_click').val('РЕМОНТ И ДИЗАЙН В ОДНОЙ КОМПАНИИ');
    $('.tab').val('Дизайнерский ремонт');
    btnName = $(this).text();
    $('.button_name').val(btnName);
  });

  $(".block_name_2_3").on("click", function() {
    $('.block_click').val('РЕМОНТ И ДИЗАЙН В ОДНОЙ КОМПАНИИ');
    $('.tab').val('Частичный ремонт');
    btnName = $(this).text();
    $('.button_name').val(btnName);
  });

  $(".block_name_3").on("click", function() {
    $('.block_click').val('НАШИ ЦЕНЫ порадуют Вас');
    $('.tab').val('---');
    btnName = $(this).text();
    $('.button_name').val(btnName);
  });

  $(".block_name_4").on("click", function() {
    $('.block_click').val('ПОРТФОЛИО с примерами работ');
    $('.tab').val('---');
    btnName = $(this).text();
    $('.button_name').val(btnName);
  });

  $(".block_name_5_1").on("click", function() {
    $('.block_click').val('НАШИ ОТВЕТЫ на частые вопросы');
    $('.tab').val('Сколько будет стоить и длиться ремонт?');
    btnName = $(this).text();
    $('.button_name').val(btnName);
  });

  $(".block_name_5_2").on("click", function() {
    $('.block_click').val('НАШИ ОТВЕТЫ на частые вопросы');
    $('.tab').val('Когда можно начать выполнение работ?');
    btnName = $(this).text();
    $('.button_name').val(btnName);
  });

  $(".block_name_5_3").on("click", function() {
    $('.block_click').val('НАШИ ОТВЕТЫ на частые вопросы');
    $('.tab').val('Как все будет происходить? Что необходимо для начала работ?');
    btnName = $(this).text();
    $('.button_name').val(btnName);
  });

  $(".block_name_5_4").on("click", function() {
    $('.block_click').val('НАШИ ОТВЕТЫ на частые вопросы');
    $('.tab').val('Качественно ли все будет? Кто выполняет работы?');
    btnName = $(this).text();
    $('.button_name').val(btnName);
  });

  $(".block_name_5_5").on("click", function() {
    $('.block_click').val('НАШИ ОТВЕТЫ на частые вопросы');
    $('.tab').val('Как будет происходить контроль за выполнением работ? ');
    btnName = $(this).text();
    $('.button_name').val(btnName);
  });

  $(".block_name_5_6").on("click", function() {
    $('.block_click').val('НАШИ ОТВЕТЫ на частые вопросы');
    $('.tab').val('Можно сделать частичный ремонт или работать по готовому дизайн-проекту?');
    btnName = $(this).text();
    $('.button_name').val(btnName);
  });

  $(".block_name_5_7").on("click", function() {
    $('.block_click').val('НАШИ ОТВЕТЫ на частые вопросы');
    $('.tab').val('Действительно-ли у вас пожизненное сервисное обслуживание?');
    btnName = $(this).text();
    $('.button_name').val(btnName);
  });

  $(".block_name_5_8").on("click", function() {
    $('.block_click').val('НАШИ ОТВЕТЫ на частые вопросы');
    $('.tab').val('Помогаете-ли вы получить разрешение на перепланировку?');
    btnName = $(this).text();
    $('.button_name').val(btnName);
  });

  $(".block_name_6").on("click", function() {
    $('.block_click').val('КОНТАКТЫ нашей компании');
    $('.tab').val('---');
    btnName = $(this).text();
    $('.button_name').val(btnName);
  });

  $(".block_name_7").on("click", function() {
    $('.block_click').val('Подвал сайта');
    $('.tab').val('---');
    btnName = $(this).text();
    $('.button_name').val(btnName);
  });

  $(".block_name_gift").on("click", function() {
    $('.block_click').val('Специальное предложение получите прямо сейчас');
    $('.tab').val('---');
    btnName = "Ответить";
    $('.button_name').val(btnName);
  });

  $(".block_name_message").on("click", function() {
    $('.block_click').val('контакты нашей компании');
    $('.tab').val('---');
    btnName = "Отправить сообщение";
    $('.button_name').val(btnName);
  });






  // $(".message2").on("keyup", function() {
  //   var keyLength = $(".message2").val().length;
  //   if(keyLength >= 45){
  //     $(".message2").css({
  //         'height' : "auto"
  //     });
  //   }else{
  //     $(".message2").css({
  //         'height' : "32px"
  //     });      
  //   }
  // });



    
//   window.onload = function(){

//     document.getElementById("message2").onkeyup = function(){

//         var getText = this.value;

//         var getRegs = getText.match(/^.*(\r\n|\n|$)/gim);

//         var setText = false;

//         for(var i = 0; i < getRegs.length; i++){

//             getText = getRegs[i].replace(/\r|\n/g, "");

//             setText += getText.length ? Math.ceil(getText.length / 50) : 1;

//         }

//         this.rows = setText;

//     };

// };



//target attr
   function externalLinks() {
    links = document.getElementsByTagName("a");
    for (i=0; i<links.length; i++) {
      link = links[i];
      if (link.getAttribute("href") && link.getAttribute("rel") == "external")
      link.target = "_blank";
    }
   }
   window.onload = externalLinks;












  $(function() {
    var txt = $('#message2'),
      hiddenDiv = $(document.createElement('div')),
      content = null;

    txt.addClass('txtstuff');
    hiddenDiv.addClass('hiddendiv common');

    $('body').append(hiddenDiv);

    txt.on('keyup', function () {

      $(this).css('overflow', 'hidden');
        console.log(hiddenDiv.height());
        content = $(this).val();

        content = content.replace(/\n/g, '<br>');
        hiddenDiv.html(content + '<br class="lbr">');

      $(this).css('height', hiddenDiv.height());

      if( hiddenDiv.height() >= 75){
        $('.message2').css({
          'overflow' : 'visible',
          'height' : '75px'
        });

      }



    });
  });

var scroll_body_var;
  function scroll_body () {
    console.log('scroll_body : ' + $(window).scrollTop());
    return $(window).scrollTop();
  } 
// $(window).on('scroll', function () {
//   scroll_body = $(window).scrollTop();
// });
  function noScroll (){
    // $('html').css('overflow', 'hidden');
    // $('body').css('overflow', 'hidden');
    $('body').css('position', 'static');
    $('body').css('top', 'auto');
    $('body').css('top', -scroll_body());
    scroll_body_var = scroll_body();
    $('body').css('position', 'fixed');
    console.log('noScroll : ' + scroll_body());
  }

  function okScroll() {
    // $('html').css('overflow', 'visible');
    // $('body').css('overflow', 'visible');
    $('body').css('position', 'static');
    $('body').css('top', 'auto');
    $(window).scrollTop(scroll_body_var);
    console.log('okScroll : ' + scroll_body());
  }


  $(".popup-with-form").on('click', function() {
    $('.mfp-container').css('position', 'fixed');
    noScroll();


    $('.mfp-container').on('click', function() {
      if($(event.target).attr('class') == 'mfp-container mfp-inline-holder'){
        okScroll();
      }
    });

    $('.mfp-close').on('click', function(){
      okScroll();
    });
    console.log('popup-with-form : ' + scroll_body());
  });

  $(".popup-with-politica").on('click', function() {
    var ifParent = $(this).closest("form").attr('class');
    console.log('----------------' + ifParent);
    if(ifParent == 'white-popup-block mfp-hide') {
      okScroll();
      console.log('----------------' + ifParent);
    }
    $('.mfp-container').css('position', 'absolute');
    noScroll();
    $('.mfp-container').on('click', function() {
      if($(event.target).attr('class') == 'mfp-container mfp-inline-holder'){
        okScroll();
      }
    });

    $('.mfp-close-btn-in').on('click', function() {
      okScroll();
    });
    console.log('popup-with-politica : ' + scroll_body());
  });


$('.nav-button').on('click', function() {

  if( $('.nav-button').attr('class') == 'nav-button' ){
    $('.nav-button').addClass('menu_active');
    $('.fixed .nav-button').removeClass('black_line');
    $('.dsp_none').css('display', 'none');
    $('.fixed').css('background-color', '#000');
    $('.fixed .nav-button').css('opacity', '0');
    noScroll();


  }else{
    $('.nav-button').removeClass('menu_active');
    $('.fixed .nav-button').addClass('black_line');
    $('.dsp_none').css('display', 'block');
    $('.fixed').css('background-color', '#fff');
    $('.fixed .nav-button').css('opacity', '1');
    okScroll();
  }

});



$('.mobile ul a').on('click', function () {
  $('.nav-button').removeClass('menu_active');
  $('.mobile').css('display', 'none');
  $('.fixed .nav-button').addClass('black_line');
  $('.dsp_none').css('display', 'block');
  $('.fixed').css('background-color', '#fff');
  $('.fixed .nav-button').css('opacity', '1');
  okScroll();

});



$('.textinput').on('ckick', function() {
  var valInput = $(this).focus();
  
});

$('.zakazat-zvonok').on('click', function() {
  $('.default .menu_active').click();
});

  $('.owl-nav .owl-prev').text('');
  $('.owl-nav .owl-next').text('');

  $('<span></span>', { class: 'owl_line owl_line_prev'}).appendTo('.owl-nav .owl-prev');
  $('<span></span>', { class: 'owl_line owl_line_prev2'}).appendTo('.owl-nav .owl-prev');

  $('<span></span>', { class: 'owl_line owl_line_next'}).appendTo('.owl-nav .owl-next');
  $('<span></span>', { class: 'owl_line owl_line_next2'}).appendTo('.owl-nav .owl-next');






});