let g = document.querySelector("#gender");
let s = document.querySelector("#submit") ;
let a = document.createElement("input") ;
s.addEventListener("click" , () =>
{
     if(g.value == "Female" || g.value == "female" || g.value == "FEMALE")
          {
               g.appendChild(a);
          }
})
let map = document.querySelector("#map");
const API_KEY = "88a4d4161a5b4d428e714586976fa37d";
document.getElementById('getLocationBtn').addEventListener('click', () => {
  fetch(`https://api.ipgeolocation.io/ipgeo?apiKey=${API_KEY}`)
    .then(response => response.json())
    .then(data => {
      document.getElementById("city").value = data.city;
      document.getElementById("state").value = data.state_prov;

      const lat = parseFloat(data.latitude);
      const lon = parseFloat(data.longitude);

      const map = L.map('map').setView([lat, lon], 12);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
      }).addTo(map);

      L.marker([lat, lon])
        .addTo(map)
        .bindPopup(`<b>You are here</b><br>${data.city}, ${data.state_prov}`)
        .openPopup();


    })
    .catch(err => {
      alert("Failed to fetch location.");
      console.error(err);
    });
    map.style.visibility = "visible" ;
    map.style.height = "200px" ;
});
