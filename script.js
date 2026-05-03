// ===============================
// Mapbox setup for capstone project
// ===============================

// Paste your working Mapbox token between the quotation marks below.
mapboxgl.accessToken = 'PASTE_YOUR_MAPBOX_TOKEN_HERE';

const schools = [
  { name: "Baylor University", city: "Waco, Texas", coordinates: [-97.1131, 31.5489] },
  { name: "Duke University", city: "Durham, North Carolina", coordinates: [-78.9382, 36.0014] },
  { name: "University of Georgia", city: "Athens, Georgia", coordinates: [-83.3773, 33.9480] },
  { name: "University of Michigan", city: "Ann Arbor, Michigan", coordinates: [-83.7382, 42.2780] },
  { name: "Northwestern University", city: "Evanston, Illinois", coordinates: [-87.6753, 42.0565] },
  { name: "University of Notre Dame", city: "Notre Dame, Indiana", coordinates: [-86.2389, 41.7056] },
  { name: "Southern Methodist University", city: "Dallas, Texas", coordinates: [-96.7845, 32.8412] },
  { name: "Texas Christian University", city: "Fort Worth, Texas", coordinates: [-97.3625, 32.7095] },
  { name: "University of Texas at Austin", city: "Austin, Texas", coordinates: [-97.7341, 30.2849] },
  { name: "Vanderbilt University", city: "Nashville, Tennessee", coordinates: [-86.8027, 36.1447] }
];

if (document.getElementById("map")) {
  const map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/light-v11",
    center: [-89.5, 36.8],
    zoom: 3.4
  });

  map.addControl(new mapboxgl.NavigationControl());

  schools.forEach((school) => {
    const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(
      `<h3>${school.name}</h3><p>${school.city}</p>`
    );

    new mapboxgl.Marker({ color: "#5c3fa3" })
      .setLngLat(school.coordinates)
      .setPopup(popup)
      .addTo(map);
  });
}
