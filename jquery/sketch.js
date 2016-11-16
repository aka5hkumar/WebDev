var $colorBack = $(window),
    w = 0,h = 0,
    rgb = [],
    getWidth = function() {
        x = $colorBack.width();
        y = $colorBack.height();
    };

$colorBack.resize(getWidth).mousemove(function(e) {
    finalColor = [Math.round(e.pageX/x * 255), 123, Math.round(e.pageY/y * 255)];
    $(document.body).css('background','rgb('+finalColor.join(',')+')');
    
}).resize();
