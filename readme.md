# CityPulse 


### Prerequisites
- Node.js
- npm (Node Package Manager)
- MongoDB

### Installation and Setup

1. **MongoDB Installation**: 
   Ensure MongoDB is installed and running on your machine. Follow the [MongoDB Installation Guide](https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-ubuntu/).

2. **Project Setup**:
   - Download or copy the project to your local machine.
   - Navigate to the project directory and install dependencies:
     ```bash
     npm install
     ```

3. **Environment Configuration**:
   - Create a `.env` file in the root directory and set up necessary environment variables
   ```
    PORT=<service-port>
    MONGO_URI=<mongo-db-uri>
   ```

4. **Starting the Server**:
   - Start the server with:
     ```bash
     npm start
     ```

### Components

- **Controllers (`src/controllers`)**: Controllers handle incoming HTTP requests and respond to the user's actions. They call services to process data and return responses.

- **Services (`src/services`)**: Services contain the core business logic. They interact with models to access and manipulate database records.

- **Models (`src/models`)**: Models define the schema of the database. They represent the structure of data stored in the database and are used by services to interact with the data.

- **Routes (`src/routes`)**: Routes define the endpoints of the API. They direct HTTP requests to the appropriate controller functions.

## Usage

### API Requests

1. **Get All Events**:
   - Endpoint: `GET /events`
   - Description: Retrieves a list of all events from the database.
   - Response: JSON list of events.

2. **Add/Update an Event**:
   - Endpoint: `POST /events`
   - Description: Adds a new event to the database or updates an existing event.
   - Data Required: JSON payload with event details.
   - Response: JSON object of the added/updated event.
