# Location Mapper

![location-mapper-ss](https://github.com/kobrak1/gps-application/assets/114083611/5849c3fe-f99a-4e66-8e01-927a60a0acbe)

Location Mapper is a web application developed using React and Leaflet to visualize and mark locations on a map based on latitude and longitude coordinates.
You can access the deployed web application here: [https://location-mapper.onrender.com/](https://location-mapper.onrender.com/)

## Features

- **Map Visualization**: Utilizes Leaflet to display an interactive map where users can navigate and explore different locations.
- **Marker Placement**: Users can mark specific locations on the map by specifying latitude and longitude coordinates.
- **Save and Remove Markers**: Provides functionality to save markers on the map and remove them as needed.
- **Download Marker Data**: Allows users to download marker data as a JSON file for further analysis or sharing.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/kobrak1/gps-application.git

2. Navigate to the project directory:
   ```bash
   cd gps-application

3. Split the terminal and install dependencies for both client and api:
   ```bash
   cd client; npm install
   ```
   ```bash
   cd api; npm install
   ```
4. Create a .env file in the server directory and add the following environment variables:

    ```bash
    MONGO_URI=your_mongodb_uri
    PORT=3001

## Usage

1. Start the development server for both client and API. Run this command in each terminal seperately:
   ```bash
   npm run dev
   ```

2. Open your web browser and navigate to `http://localhost:5173` to access the application's client.
   To access the api navigate to `http://localhost:3001`

3. Use the map interface to explore different locations, add markers, and remove markers as needed.

4. Click the "Download JSON" button to download marker data as a JSON file.

## Technologies Used

- React.js
- Leaflet.js
- react-leaflet
- MaterialUI (for UI components)
- Ant Design (for UI components)
- Node.js
- Express.js
- MongoDB
- npm (Node Package Manager)
- Git (for version control)

## Contributing

Contributions are welcome! If you find any bugs or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
