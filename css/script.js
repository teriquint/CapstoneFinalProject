// ===============================
// Mapbox setup for capstone project
// ===============================

// Paste your working Mapbox token between the quotation marks below.
mapboxgl.accessToken = 'pk.eyJ1IjoidGVyaXF1aW50IiwiYSI6ImNtbzlsbTg2MzAydWcycW9pOXNnaXF4Z2MifQ.GK89Mdx9htHuRHk9OGMjkw';

const schools = [

  {name: "Baylor University",
    businessSchool: "Hankamer School of Business",
    city: "Waco, Texas",
    color: "#154734",
    coordinates: [-97.1131, 31.5489]
  },
  {
    name: "Duke University",
    businessSchool: "Fuqua School of Business",
    city: "Durham, North Carolina",
    color: "#00539B",
    coordinates: [-78.9382, 36.0014]
  },
  {
    name: "University of Georgia",
    businessSchool: "Terry College of Business",
    city: "Athens, Georgia",
    color: "#BA0C2F",
    coordinates: [-83.3773, 33.9480]
  },
  {
    name: "University of Michigan",
    businessSchool: "Ross School of Business",
    city: "Ann Arbor, Michigan",
    color: "#00274C",
    coordinates: [-83.7382, 42.2780]
  },
  {
    name: "Northwestern University",
    businessSchool: "Kellogg School of Management",
    city: "Evanston, Illinois",
    color: "#4E2A84",
    coordinates: [-87.6753, 42.0565]
  },
  {
    name: "University of Notre Dame",
    businessSchool: "Mendoza College of Business",
    city: "Notre Dame, Indiana",
    color: "#0C2340",
    coordinates: [-86.2389, 41.7056]
  },
  {
    name: "Southern Methodist University",
    businessSchool: "Cox School of Business",
    city: "Dallas, Texas",
    color: "#0033A0",
    coordinates: [-96.7845, 32.8412]
  },
  {
    name: "Texas Christian University",
    businessSchool: "Neeley School of Business",
    city: "Fort Worth, Texas",
    color: "#4D1979",
    coordinates: [-97.3625, 32.7095]
  },
  {
    name: "University of Texas at Austin",
    businessSchool: "McCombs School of Business",
    city: "Austin, Texas",
    color: "#BF5700",
    coordinates: [-97.7341, 30.2849]
  },
  {
    name: "Vanderbilt University",
    businessSchool: "Owen Graduate School of Management",
    city: "Nashville, Tennessee",
    color: "#866D4B",
    coordinates: [-86.8027, 36.1447]
  }
];

if (document.getElementById("map")) {
  const map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/light-v11",
    center: [-89.5, 36.8],
    zoom: 3.2
  });

  map.addControl(new mapboxgl.NavigationControl(), "top-right");

  schools.forEach((school) => {
    const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(
  `<h3>${school.name}</h3>
   <p><strong>${school.businessSchool}</strong></p>
   <p>${school.city}</p>`
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