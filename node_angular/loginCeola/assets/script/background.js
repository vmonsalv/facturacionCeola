jQuery(function () {
    var arrImagenes = [
        'assets/img/places/centrolaser1.jpg',
        'assets/img/places/centrolaser10.jpg',
        'assets/img/places/centrolaser4.jpg',
        'assets/img/places/centrolaser9.jpg',
        'assets/img/places/centrolaser7.jpg',
    ];

    for(var index = 0; index < arrImagenes.length; index++){
        $("#backgroundDisplayNone").append("<img src='"+arrImagenes[index]+"' style='display:none;'>");
    }

    function changeBackground(selector, fondo, time) {
        var index = 1,
            timer = setInterval(function () {
                if (index === fondo.length) index = 0;
                $(selector).css("background-image", 'url(' + fondo[index] + ')');
                index++;
            }, time);
    }
    $(window).load(function () {
        changeBackground(".body-panelStyle", arrImagenes, 6000);
    });
});