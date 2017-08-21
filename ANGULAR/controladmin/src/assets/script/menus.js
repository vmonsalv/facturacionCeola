$(document).ready(function () {
  var trigger = $('.hamburger'),
    overlay = $('.overlay'),
    isClosed = false,
    isEnganchado = false;

  window.onresize = function (event) {
    if ((event.srcElement || event.currentTarget).innerWidth <= 480) {
      if (isEnganchado == true) {
        document.getElementById('buttonAnclaje').click();
      }
      if (isClosed == true) {
        document.getElementById('hamburgerL').click();
      }
    }
  };

  trigger.click(function () {
    hamburger_cross();
  });

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

  $('#tituloCuenta').on("click", function () {
    $('#sidebar-wrapper-right').toggleClass('toggled');
    $('#hamburgerR').toggleClass('toggled');
  });

  $('#tituloContacto').on("click", function () {
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