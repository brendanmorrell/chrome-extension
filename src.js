
let yourLat;
let yourLon;

init();

async function init() {
   const location = await currentPosition();
   console.log(yourLat);
   console.log(yourLon); 

   var mymap = L.map('mapid').setView([51.505, -0.09], 13);

   L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiZXJpa2d1bnRuZXIiLCJhIjoiY2oyNW5zZ2o1MDAydjMybTV0ZTEwaWJuaSJ9.VXWevkFfyJd_0SnGKa1PSw', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: 'mapbox.streets',
      accessToken: 'your.mapbox.access.token'
   }).addTo(mymap);
}

async function getBreweries() {
   try {
     const response = await fetch(URL);
     const json = await response.json();
     return json;
   } catch {
     console.error('error');
   }
 }


async function currentPosition() {
   await navigator.geolocation.getCurrentPosition(function(pos) {
      yourLat = pos.coords.latitude;
      yourLon = pos.coords.longitude;        
   }, function(err) {
      console.log('it failed');
      console.log(err);
   });
}

