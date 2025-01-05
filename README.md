

---

# Crime Reporting App

This project is a web application that displays real-time crime data on a table and map. The application scrapes active crime dispatch data and provides a user-friendly interface to visualize incidents.

## Features

- **Real-Time Data Scraping**: Scrapes data from an external source to update the crime records dynamically.
- **Interactive Map**: Displays the locations of incidents on a map using the Google Maps API.
- **Responsive Table**: Lists details of each incident, including type, time, location, and more.

## Technologies Used

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js (Express.js for server)
- **Web Scraping**: Puppeteer
- **Mapping**: Google Maps API
- **Data Storage**: JSON file (`crimeData.json`)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) installed
- [Git](https://git-scm.com/) installed
- A Google Maps API key

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/crime-reporting-app.git
   cd crime-reporting-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory:
   ```plaintext
   GOOGLE_MAPS_API_KEY=your-google-maps-api-key
   ```

4. Start the server:
   ```bash
   node server.js
   ```

5. Open your browser and go to:
   ```
   http://localhost:3000
   ```

### Directory Structure

```
crime-reporting-app/
│
├── server/
│   ├── scraper.js    # Scrapes data and saves it to crimeData.json
│   ├── server.js     # Runs the Express server
│   └── crimeData.json # Stores scraped data
│
├── public/
│   ├── index.html    # Main web page
│   ├── style.css     # Styling for the app
│   └── script.js     # Client-side JavaScript
│
└── .env              # Stores sensitive API keys (not pushed to GitHub)
```

## Usage

1. The backend scrapes crime data periodically using Puppeteer.
2. The frontend displays this data on a table and map.
3. Users can interact with the table to view details or use the map to locate incidents geographically.

## Future Improvements

- **Add Search and Filtering**: Allow users to search or filter data by location, time, or type of crime.
- **Automated Updates**: Schedule the scraper to fetch new data periodically.
- **Advanced Mapping**: Include clustering or heatmaps for better visualization.

## Contributing

Contributions are welcome! Feel free to fork this repository, make your changes, and submit a pull request.

## License

This project is licensed under the MIT License.

---

Feel free to tweak this template according to your preferences or add more sections as needed! Let me know if you’d like help with the `.env` file setup or deployment instructions.
