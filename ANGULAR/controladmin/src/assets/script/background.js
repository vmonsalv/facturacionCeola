jQuery(function () {
    var arrImagenes = [
        'assets/img/places/ciencias.jpg',
        'assets/img/places/medicina.jpg',
        'assets/img/places/cienciasmar.jpg',
        'assets/img/places/derecho.jpg',
        'assets/img/places/arquitectura.jpg',
        'assets/img/places/eico.jpg',
        'assets/img/places/teatro.jpg',
        'assets/img/places/facea.jpg',
        'assets/img/places/hucke.jpg',
        'assets/img/places/facing.jpg',
        'assets/img/places/humanidades.jpg',
        'assets/img/places/santiago.jpg',
        'assets/img/places/sanfelipe.jpg',
        'assets/img/places/farmacia.jpg',
        'assets/img/places/trabajosocial.jpg',
        'assets/img/places/defider.jpg'
    ];
    function changeBackground(selector, fondo, time) {
        var index = 1,
            timer = setInterval(function () {
                if (index === fondo.length) index = 0;
                $(selector).css("background-image", 'url(' + fondo[index] + ')');
                index++;
            }, time);
    }
    $(window).load(function () {
        //changeBackground(".body-panelStyle", arrImagenes, 4000);
    });
});