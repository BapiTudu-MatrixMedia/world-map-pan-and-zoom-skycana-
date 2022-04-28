var _$ = document.querySelector.bind(document);

var zoomIn = _$('.zoom-in');
var zoomOut = _$('.zoom-out');
var zoomReset = _$('.zoom-reset');

// var upArrow = _$('.up-arrow');
// var rightArrow = _$('.right-arrow');
// var leftArrow = _$('.left-arrow');
// var downArrow = _$('.down-arrow');
var mainDiv = _$('.container');
var map = _$('#Map');
var initialScale = 0.3;
var currentScale = 0.3;
var endScale = 10.0;

window.addEventListener('DOMContentLoaded', function () {
    mainDiv.setAttribute("tabindex", 1);
    mainDiv.focus();
    mainDiv.scrollLeft = (map.getBoundingClientRect().width , mainDiv.getBoundingClientRect().width) / 2 ;
    mainDiv.scrollTop = (map.getBoundingClientRect().height , mainDiv.getBoundingClientRect().height) / 2 ;
    var {width} = document.body.getBoundingClientRect();
    if(width > 1365) {
        initialScale = 1.0;
        currentScale = 1.0;
    }
});
// mainDiv.on('ready', function () {
//     alert("hi")
// });
// window.onload = function () {
    
// };

zoomIn.addEventListener('click', function() {
    if(currentScale < endScale) {
        currentScale += 0.1;
    }
    map.style.transform = `scale(${currentScale})`;
    map.style.transformOrigin = "top left";
});

zoomOut.addEventListener('click', function() {
    if(currentScale > initialScale) {
        currentScale -= 0.1;
    }
    map.style.transform = `scale(${currentScale})`;
    map.style.transformOrigin = "center";
});

zoomReset.addEventListener('click', function () {
    currentScale = 1.0;
    map.style.transform = `scale(${initialScale})`;
    map.style.transformOrigin = "center";
});

/*document.body.addEventListener('keydown', function (e) {
    var amountMovedX = (100 * -1 / 2);
    var amountMovedY = (100 * -1 / 2);
    // console.log(amountMovedX, amountMovedY);
    switch(e.key) {
        case "ArrowUp": {
            console.log("up key pressed!", e);
            map.scrollTop = "20px";
            // map.style.backgroundPosition = amountMovedX + 'px ' + amountMovedY + 'px';
            break;
        }
        case "ArrowDown": {
            console.log("down key pressed!");
            break;
        }
        case "ArrowLeft": {
            console.log("left key pressed!");
            break;
        }
        case "ArrowRight": {
            console.log("right key pressed!");
            break;
        }
        default: {
            console.log("other key pressed!");
            break;
        }
    }
});*/