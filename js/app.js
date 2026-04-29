
let map = L.map('map').setView([32.8, -97.0], 7);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
.addTo(map);

function addHeat() {
  const lat = 32 + Math.random()*3;
  const lng = -98 + Math.random()*3;

  let circle = L.circle([lat, lng], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.3,
    radius: 20000
  }).addTo(map);

  setTimeout(()=>map.removeLayer(circle), 6000);
}

setInterval(addHeat, 1200);

async function loadData(){
  const res = await fetch("/api/data");
  const data = await res.json();

  document.getElementById("count").innerText =
    data.count + " ACTIVE SIGHTINGS";

  const feed = document.getElementById("feed");
  feed.innerHTML = "";

  data.feed.forEach(item => {
    let p = document.createElement("p");
    p.innerText = `📍 ${item.minutes} min ago — ${item.city}`;
    feed.appendChild(p);
  });
}

setInterval(loadData, 5000);
loadData();
