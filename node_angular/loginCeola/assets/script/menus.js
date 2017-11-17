$(document).ready(function () {
  var trigger = $('.hamburger'),
    overlay = $('.overlay'),
    isClosed = false,
    isEnganchado = false,
    alto_browser = window.innerHeight / 3;

  trigger.click(function () {
    hamburger_cross();
  });

  window.onresize = function (event) {
    alto_browser = (event.srcElement || event.currentTarget).innerHeight / 3;
    if ((event.srcElement || event.currentTarget).innerWidth <= 480) {
      if (isEnganchado == true) {
        document.getElementById('buttonAnclaje').click();
        document.getElementById('hamburgerL').click();
      }
    }
  };

  function hamburger_cross() {
    if (isEnganchado == false) {
      if (isClosed == true) {
        overlay.hide();
        trigger.removeClass('is-open');
        trigger.addClass('is-closed');
        $("#hamburgerL").css('margin-left', '0px');
        $("#iconHamburgerL").addClass('fa-list');
        $("#iconHamburgerL").removeClass('fa-arrow-left');
        isClosed = false;
      } else {
        overlay.show();
        trigger.removeClass('is-closed');
        trigger.addClass('is-open');
        $("#hamburgerL").css('margin-left', '220px');
        $("#iconHamburgerL").removeClass('fa-list');
        $("#iconHamburgerL").addClass('fa-arrow-left');
        isClosed = true;
      }
    }
  }

  window.onscroll = function (e) {
    var x = alto_browser + (alto_browser * 0.1);
    if (x < $('html').scrollTop()) {
      $('#hamburgerR3').removeClass('hide_button');
      $('#hamburgerR3').addClass('bounce');
    } else {
      $('#hamburgerR3').addClass('hide_button');
      $('#hamburgerR3').removeClass('bounce');
    }
  }

  $('#hamburgerR3').on('click', function () {
    $('html,body').animate({ scrollTop: 0 }, 'slow');
    return false;
  });

  $('#botonCuenta').on('click', function () {
    $('#sidebar-wrapper-right').toggleClass('toggled');
    $('#hamburgerR').toggleClass('toggled');
  });

  $('#botonContacto').on('click', function () {
    $('#sidebar-wrapper-right2').toggleClass('toggled');
    $('#hamburgerR2').toggleClass('toggled');
  });

  $('#linkLeft').on("click", function () {
    if (isEnganchado == false) {
      hamburger_cross();
      $('#sidebar-wrapper').toggleClass('toggled');
    }
  })

  $('#sendMessageButton').click(function () {
    $('#sidebar-wrapper-right2').toggleClass('toggled');
    $('#hamburgerR2').toggleClass('toggled');
  });

  $('[data-toggle="offcanvasL"]').click(function () {
    if (isEnganchado == false) {
      $('#sidebar-wrapper').toggleClass('toggled');
    }
  });

  $('[data-toggle="offcanvasR"]').click(function () {
    if ($('#hamburgerR2').hasClass('toggled')) {
      $('#sidebar-wrapper-right2').toggleClass('toggled');
      $('#hamburgerR2').toggleClass('toggled');
    }
    $('#sidebar-wrapper-right').toggleClass('toggled');
    $('#hamburgerR').toggleClass('toggled');
  });

  $('[data-toggle="offcanvasR2"]').click(function () {
    if ($('#hamburgerR').hasClass('toggled')) {
      $('#sidebar-wrapper-right').toggleClass('toggled');
      $('#hamburgerR').toggleClass('toggled');
    }
    $('#sidebar-wrapper-right2').toggleClass('toggled');
    $('#hamburgerR2').toggleClass('toggled');
  });

  $('#buttonAnclaje').click(function () {
    $("#hamburgerL").addClass('notransition');
    if (isEnganchado == true) {
      $("#logoUVheader").css("display", "initial");
      $("#hamburgerL").removeClass('hideButtonMenu');
      $("#hamburgerL").css('margin-left', '220px');
      $("#wrapper").removeClass('enganchado');
      $("#footer").removeClass('enganchado');
      isEnganchado = false;
    } else {
      $("#logoUVheader").css("display", "none");
      $("#hamburgerL").addClass('hideButtonMenu');
      $("#hamburgerL").css('margin-left', '0px');
      $("#wrapper").addClass('enganchado');
      $("#footer").addClass('enganchado');
      isEnganchado = true;
    }
    $("#hamburgerL")[0].offsetHeight;
    $("#hamburgerL").removeClass('notransition');
  });

});