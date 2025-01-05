document.addEventListener("DOMContentLoaded", async () => {
  // Fetch the crime data
  const response = await fetch("crimeData.json");
  const data = await response.json();

  // Populate the table
  const tableBody = document.querySelector("#crime-table tbody");
  tableBody.innerHTML = ""; // Clear existing rows, if any

  data.forEach((crime) => {
      const [code, type, dateTime, address, area, dispatchTime] = crime;

      const row = document.createElement("tr");
      row.innerHTML = `
          <td>${code}</td>
          <td>${type}</td>
          <td>${dateTime}</td>
          <td>${address}</td>
          <td>${area}</td>
          <td>${dispatchTime}</td>
      `;
      tableBody.appendChild(row);
  });

  // Initialize the map with Nashville's coordinates
  const map = L.map("map").setView([36.1627, -86.7816], 12); // Nashville's latitude and longitude

  // Add OpenStreetMap tiles
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  // Helper function for geocoding
  const geocodeAddress = async (address) => {
      const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`;
      try {
          const response = await fetch(url);
          const locations = await response.json();
          return locations.length > 0 ? locations[0] : null;
      } catch (error) {
          console.error("Geocoding error:", error);
          return null;
      }
  };

  // Loop through the crime data and add markers
  for (const crime of data) {
      const [code, type, dateTime, address, area, dispatchTime] = crime;

      // Geocode the address
      const location = await geocodeAddress(address);

      if (location) {
          const { lat, lon } = location;

          // Add a marker to the map
          L.marker([lat, lon])
              .addTo(map)
              .bindPopup(`<strong>${type}</strong><br>${address}<br>${dateTime}`);
      } else {
          console.warn(`Geocoding failed for address: ${address}`);
      }
  }
});
