const COORDS = 'coords';
const API_KEY = "36a68fa74d802e27de1fb967add4dd3d";

function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}


function handleGeoSuccess(position){
    console.log(position);
    const latitude = position.coords.latitude;
    const longtitude = position.coords.longtitude;
    const coordsObj = {
        latitude: latitude,
        longtitude: longtitude
    }
    saveCoords(coordsObj);
}

function handleGeoError() {
    console.log("can't access geo location");
}


function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS);
    if (loadedCoords === null){
        askForCoords();
    }else{

    }
}   



function init(){
    loadCoords();
}

init();