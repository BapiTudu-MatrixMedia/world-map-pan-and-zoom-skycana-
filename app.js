var _$ = document.querySelector.bind(document);

var zoomIn = _$('.zoom-in');
var zoomOut = _$('.zoom-out');
var zoomReset = _$('.zoom-reset');
var data = {
    "request-date": "[request datettime]",
    "language": "es",
    "city-code": "sdq",
    "city-name": "Santo Domingo",
    "Temp": "32",
    "Locations": [
      {
        "id": "sdq",
        "name": "Santo Domingo",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "x": 700,
        "y": 330,
        "picts": [
          "http://host/pict11.jpg",
          "http://host/pict12.jpg"
        ]
      },
      {
        "id": "mia",
        "name": "Miami",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "x": 680,
        "y": 130,
        "picts": [
          "http://host/pict21.jpg",
          "http://host/pict22.jpg"
        ]
      },
      {
        "id": "cub",
        "name": "Cuba",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "x": 1030,
        "y": 360,
        "picts": [
          "http://host/pict21.jpg",
          "http://host/pict22.jpg"
        ]
      },
      {
        "id": "mex",
        "name": "Mexico",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "x": 444,
        "y": 236,
        "picts": [
          "http://host/pict21.jpg",
          "http://host/pict22.jpg"
        ]
      },
      {
        "id": "nic",
        "name": "Nicaragua",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "x": 890,
        "y": 551,
        "picts": [
          "http://host/pict21.jpg",
          "http://host/pict22.jpg"
        ]
      },
      {
        "id": "col",
        "name": "Colombia",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "x": 870,
        "y": 441,
        "picts": [
          "http://host/pict21.jpg",
          "http://host/pict22.jpg"
        ]
      }
    ],
    "planes": [
      {
        "id": "9H-AMD",
        "name": "Plane1",
        "label": "Visible label name",
        "img-url": "http://host/img1.jpg",
        "video-url": "http://host/video1",
        "from": "mia",
        "to": "sdq",
        "total-time": 5,
        "fligh-time": 2,
        "seating": "220 asientos",
        "flights-range": "Rango de vuelo de 5 horas",
        "capacity": "21,000 kg de capacidad",
        "size": "37,57 metros de largo"
      },
      {
        "id": "9H-AME",
        "name": "Plane2",
        "label": "Visible label name2",
        "img-url": "http://host/img2.jpg",
        "video-url": "http://host/video2",
        "from": "mex",
        "to": "bgt",
        "total-time": 8,
        "fligh-time": 5,
        "seating": "320 asientos",
        "flights-range": "Rango de vuelo de 10 horas",
        "capacity": "42,000 kg de capacidad",
        "size": "40,57 metros de largo"
      }
    ],
    "image_urls": [
      {
        "image": "https://wallpapers.com/images/high/hd-river-in-the-mountains-kgb9wrcm1wmrfa5m.jpg"
      },
      {
        "image": "https://wallpapers.com/images/high/hd-vacation-house-in-the-beach-j4jasqgcc5ismew8.jpg"
      },
      {
        "image": "https://wallpapers.com/images/high/hd-beach-dock-44r3w5nyqr38tq16.jpg"
      }
    ]
  };
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
    setTimeout(autoZoom, 1000);
});
// mainDiv.on('ready', function () {
//     alert("hi")
// });
// window.onload = function () {
    
// };

function autoZoom() {    
    var timeline = gsap.timeline({delay: 1});
    timeline.to('.location-point, .location-point__city-name', {opacity: 1, duration: 1});
    
    map.style.transform = `scale(2.0)`;
    map.style.transformOrigin = "130px 860px";
}

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

function LocationPoint(x, y, id, cityName) {
    this.x = x;
    this.y = y;
    this.id = id;
    this.cityName = cityName;

    //   render on dom
    this.render = function () {
      var parentDiv = document.createElement("div");
      parentDiv.classList.add("location-point-parent");
  
      var div = document.createElement("div");
      div.classList.add("location-point");
      div.setAttribute("onclick", "takeOff(event)");
  
      var p = document.createElement("p");
      var text = document.createTextNode(this.cityName);
      p.classList.add("location-point__city-name");
      p.appendChild(text);
  
      parentDiv.appendChild(p);
  
      div.id = id;
      div.style.left = this.x - 10 + "px";
      div.style.top = this.y - 10 + "px";
  
      p.id = id;
      p.style.left = this.x + 20 + "px";
      p.style.top = this.y - 10 + "px";
  
      parentDiv.appendChild(div);
      document.querySelector(".container").appendChild(parentDiv);
    };
  }

  data.Locations.forEach((_l) => {
    const location_point = new LocationPoint(_l.x, _l.y, _l.id, _l.name);
    location_point.render();
  });
