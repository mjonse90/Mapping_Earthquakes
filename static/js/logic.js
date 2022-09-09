// Add console.log to check to see if our code is working.
console.log("working");

let mapAttribution = 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>'

// let navDay  = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/navigation-day-v1/tiles/{z}/{x}/{y}?access_token={accessToken}'     ,
// {
//     attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom:     18,
//     id:          'mapbox/streets-v11',  // ...
//     tileSize:    512,
//     zoomOffset:  -1,
//     accessToken: API_KEY                // mapbox api
// });

// let navNight = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/navigation-night-v1/tiles/{z}/{x}/{y}?access_token={accessToken}',
// {
//     attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     accessToken: API_KEY
// });

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: mapAttribution,
    maxZoom: 18,
    accessToken: API_KEY
});

let satelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}' ,
{
    attribution: mapAttribution,
    maxZoom: 18,
    accessToken: API_KEY
});

// // We create the dark view tile layer that will be an option for our map.
// let dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
// attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     accessToken: API_KEY
// });

// Create a base layer that holds both maps.
let baseMaps = {
       "Streets": streets,
       "Satellite Streets": satelliteStreets,
     };

// Create the map object with a center and zoom level.
let map = L.map("mapid",
                {
              // center: [37.5, -122.5],  // SFO
              // center: [30.0,   30.0],  // World
              // center: [40.7,  -94.5],  // US world
                 center: [43.7,  -79.3],  // Toronto
                //  layers: [navNight],
                 zoom:  11,
                 layers: [satelliteStreets]
                });

//Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);


  
// // Then we add our 'streets' tile layer to the map.
// streets.addTo(map);

// // Accessing the airport GeoJSON URL
// let airportData = "https://raw.githubusercontent.com/mjonse90/Mapping_Earthquakes/main/majorAirports.json";

// // Accessing the Toronto airline routes GeoJSON URL.
// let torontoData = "https://raw.githubusercontent.com/mjonse90/Mapping_Earthquakes/main/torontoRoutes.json";

// Accessing the Toronto neighborhoods GeoJSON URL.
let torontoHoods = "https://raw.githubusercontent.com/mjonse90/Mapping_Earthquakes/main/torontoNeighborhoods.json";

// // Create a style for the lines.
// let myStyle = {
//     color: "#ffffa1",
//     weight: 2
// }

// Grabbing our GeoJSON data.
d3.json(torontoHoods).then(function(data) {
    console.log(data);
// Creating a GeoJSON layer with the retrieved data.
L.geoJSON(data).addTo(map)

});
