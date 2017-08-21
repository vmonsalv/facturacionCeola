$(document).ready(function () {

  $('#tituloCuenta').on("click", function () {
    $('#sidebar-wrapper-right').toggleClass('toggled');
    $('#hamburgerR').toggleClass('toggled');
  });

  $('#tituloContacto').on("click", function () {
    $('#sidebar-wrapper-right2').toggleClass('toggled');
    $('#hamburgerR2').toggleClass('toggled');
  });

  $('#sendMessageButton').click(function () {
    $('#sidebar-wrapper-right2').toggleClass('toggled');
    $('#hamburgerR2').toggleClass('toggled');
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

});