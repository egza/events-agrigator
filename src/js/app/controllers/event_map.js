function GMapInit() {
    var map = new GMap2(document.getElementById("GMapContainer"));
    map.setCenter(new GLatLng(50.005765, 36.229121), 14);
    map.addControl(new GLargeMapControl());
    map.addControl(new GMapTypeControl());
    map.enableScrollWheelZoom();
    }
