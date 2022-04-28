var _$ = document.querySelector.bind(document);

var zoomIn = _$('.zoom-in');
var zoomOut = _$('.zoom-out');
var zoomReset = _$('.zoom-reset');

// var upArrow = _$('.up-arrow');
// var rightArrow = _$('.right-arrow');
// var leftArrow = _$('.left-arrow');
var mainDiv = _$('.container');
var map = _$('#Map');
var initialScale = 1.0;
var currentScale = 1.0;
var endScale = 10.0;

window.onload = function () {
    console.log()
    mainDiv.scrollLeft = (map.getBoundingClientRect().width , mainDiv.getBoundingClientRect().width) / 2 ;
    mainDiv.scrollTop = (map.getBoundingClientRect().height , mainDiv.getBoundingClientRect().height) / 2 ;
};

zoomIn.addEventListener('click', function() {
    if(currentScale < endScale) {
        currentScale += 0.1;
    }
    map.style.transform = `scale(${currentScale})`;
});

zoomOut.addEventListener('click', function() {
    if(currentScale > initialScale) {
        currentScale -= 0.1;
    }
    map.style.transform = `scale(${currentScale})`;
});

zoomReset.addEventListener('click', function () {
    currentScale = 1.0;
    map.style.transform = `scale(${initialScale})`;
});