# Kodbank Full-Stack Application

This repository contains the complete Kodbank application with a Spring Boot backend and React frontend.

## Prerequisites
- Java 17
- Node.js & npm
- MySQL Server
- Maven

## Database Setup
1. Ensure MySQL is running on port 3306.
2. Run the provided `schema.sql` file in your MySQL environment to create the database and tables:
   ```bash
   mysql -u root -p < schema.sql
   ```
3. Update `backend/src/main/resources/application.properties` with your MySQL root password if it's not `root`.

## Backend Setup
1. Navigate to the `backend` directory:
   ```bash
   cd backend
   ```
2. Run the application using Maven:
   ```bash
   mvn spring-boot:run
   ```
   The backend will start on `http://localhost:8080`.

## Frontend Setup
1. Navigate to the `frontend` directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
   The frontend will start on `http://localhost:5173`.

## `.env` Configuration Guide
Currently, the application is self-contained without a dedicated `.env` file since defaults are used in local properties. However, for a production environment, you should externalize these properties. 

Create an `.env` file in the backend root with the following:
```
DB_URL=jdbc:mysql://localhost:3306/kodbank_db
DB_USERNAME=your_username
DB_PASSWORD=your_secure_password
JWT_SECRET=your_base64_encoded_secure_secret_key_needs_to_be_long
JWT_EXPIRATION=86400000
FRONTEND_URL=https://your-frontend-domain.com
```
Then, update `application.properties` to read these values (e.g., `spring.datasource.password=${DB_PASSWORD}`).

## API Documentation
The Spring Boot backend uses SpringDoc OpenAPI for API documentation.

Once the backend is running, access the Swagger UI at:
`http://localhost:8080/swagger-ui.html`

The following REST APIs are available:

### Auth Controller (`/api/auth`)
- `POST /register`: Register a new user (`username`, `email`, `password`, `phone`). Role defaults to `CUSTOMER`, balance to `100000.00`.
- `POST /login`: Authenticate a user (`username`, `password`) and receive an HTTP-only JWT cookie.
- `POST /logout`: Clear the JWT cookie to sign out.

### User Controller (`/api`)
- `GET /balance`: Retrieves the authenticated user's available balance. Requires JWT cookie.
