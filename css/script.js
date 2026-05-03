// ===============================
// Mapbox setup for capstone project
// ===============================

// Paste your working Mapbox token between the quotation marks below.
mapboxgl.accessToken = 'pk.eyJ1IjoidGVyaXF1aW50IiwiYSI6ImNtbzlsbTg2MzAydWcycW9pOXNnaXF4Z2MifQ.GK89Mdx9htHuRHk9OGMjkw';

const schools = [
  {
    name: "Baylor University",
    city: "Waco, Texas",
    color: "#154734",
    coordinates: [-97.1131, 31.5489]
  },
  {
    name: "Duke University",
    city: "Durham, North Carolina",
    color: "#00539B",
    coordinates: [-78.9382, 36.0014]
  },
  {
    name: "University of Georgia",
    city: "Athens, Georgia",
    color: "#BA0C2F",
    coordinates: [-83.3773, 33.9480]
  },
  {
    name: "University of Michigan",
    city: "Ann Arbor, Michigan",
    color: "#00274C",
    coordinates: [-83.7382, 42.2780]
  },
  {
    name: "Northwestern University",
    city: "Evanston, Illinois",
    color: "#4E2A84",
    coordinates: [-87.6753, 42.0565]
  },
  {
    name: "University of Notre Dame",
    city: "Notre Dame, Indiana",
    color: "#0C2340",
    coordinates: [-86.2389, 41.7056]
  },
  {
    name: "Southern Methodist University",
    city: "Dallas, Texas",
    color: "#0033A0",
    coordinates: [-96.7845, 32.8412]
  },
  {
    name: "Texas Christian University",
    city: "Fort Worth, Texas",
    color: "#4D1979",
    coordinates: [-97.3625, 32.7095]
  },
  {
    name: "University of Texas at Austin",
    city: "Austin, Texas",
    color: "#BF5700",
    coordinates: [-97.7341, 30.2849]
  },
  {
    name: "Vanderbilt University",
    city: "Nashville, Tennessee",
    color: "#866D4B",
    coordinates: [-86.8027, 36.1447]
  }
];

if (document.getElementById("map")) {
  const map = new mapboxgl.Map({
    container: "map",
    style: "style: "mapbox://styles/mapbox/outdoors-v12",",
    center: [-89.5, 36.8],
    zoom: 3.2
  });

  map.addControl(new mapboxgl.NavigationControl(), "top-right");

  schools.forEach((school) => {
    const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(
      `<h3>${school.name}</h3><p>${school.city}</p>`
    );

    new mapboxgl.Marker({ color: school.color })
      .setLngLat(school.coordinates)
      .setPopup(popup)
      .addTo(map);
  });

  const bounds = new mapboxgl.LngLatBounds();

  schools.forEach((school) => {
    bounds.extend(school.coordinates);
  });

  map.fitBounds(bounds, {
    padding: 80,
    maxZoom: 4.6,
    duration: 1200
  });
}