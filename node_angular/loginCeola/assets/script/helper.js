jQuery(function () {
    
        var tourSubmitFunc = function (e, v, m, f) {
            if (v === -1) {
                $.prompt.prevState();
                return false;
            }
            else if (v === 1) {
                $.prompt.nextState();
                return false;
            }
        }, tourStates = [
            {
                title: 'Bienvenido',
                html: '¿Desea una vista guiada?',
                buttons: { "No": 2, "Si": 1 },
                focus: 1,
                position: { width: 200 },
                submit: tourSubmitFunc
            },
            {
                title: 'Menús',
                html: 'Navega entre las funciones que ofrece el sistema',
                buttons: { "X": 2, ">": 1 },
                focus: 1,
                position: { container: '#hamburgerL', x: 8, y: 50, width: 300, arrow: 'tl' },
                submit: tourSubmitFunc
            },
            {
                title: "Cuenta de usuario y Contacto",
                html: 'Puedes ver tus datos de usuario y comunicarte directamente a desarrollo.disico@uv.cl.',
                buttons: { "X": 2, "<": -1, ">": 1 },
                focus: 2,
                position: { container: '#hamburgerR', x: -270, y: 80, width: 300, arrow: 'tr' },
                submit: tourSubmitFunc
            },
            {
                title: 'Módulos',
                html: 'En esta sección aparecerán los diversos módulos a los cuales tienes acceso.',
                buttons: { "X": 2, "<": -1, ">": 1 },
                focus: 2,
                position: { container: '#appBoxe', x: -100, y: 20, width: 300, arrow: $(document).height() > 940 ? 'tr' : 'tc' },
                submit: tourSubmitFunc
            },
            {
                title: 'Funciones',
                html: 'Accede a las diversas tareas de la aplicación.',
                buttons: $(document).height() > 940 ? { "X": 2, "<": -1, ">": 1 } : { "X": 2, "<": -1 },
                focus: $(document).height() > 940 ? 2 : 0,
                position: { container: '#menu1', x: 50, y: 180, width: 300, arrow: 'tc' },
                submit: tourSubmitFunc
            },
            {
                title: 'Redes Sociales UV',
                html: 'Visita nuestras Redes Sociales haciendo click en ellas.',
                buttons: { "X": 2, "<": -1 },
                focus: 0,
                position: { container: '#rrhh', x: 80, y: -150, width: 300, arrow: 'br' },
                submit: tourSubmitFunc
            }
        ];
    
        $.prompt(tourStates);
    
    });