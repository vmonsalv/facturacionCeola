$(document).ready(function () {

    function onlyNumbers(e) {
        var keynum;
        if (window.event) {
            keynum = e.keyCode;
        } else if (e.which) {
            keynum = e.which;
        }
        if (keynum === 8 || keynum === 9 || e.keyCode === 37 || e.keyCode === 39) {
            return true;
        }
        if (keynum >= 48 && keynum <= 57) {
            return true;
        } else {
            return false;
        }
    }

});    