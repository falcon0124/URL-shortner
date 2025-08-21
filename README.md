# URL Shortener with JWT Authentication

A full-stack Node.js application for shortening URLs with user authentication using JWT. Users can sign up, log in, and generate short URLs. The app tracks analytics for each short URL and supports role-based access (NORMAL, ADMIN).

## Features
- User registration and login (with JWT-based authentication)
- URL shortening for authenticated users
- Analytics for each short URL (click count, visit history)
- Role-based access (NORMAL, ADMIN)
- EJS templating for frontend views
- MongoDB for data storage

## Folder Structure
```
connection.js           # MongoDB connection logic
index.js                # Main server file
package.json            # Project dependencies and scripts
controllers/            # Route controller logic
  url.js                # URL creation and analytics
  user.js               # User signup and login
middleware/             # Express middleware
  auth.js               # JWT authentication and role restriction
models/                 # Mongoose models
  url.js                # URL schema
  user.js               # User schema
routes/                 # Express routers
  staticRouter.js       # Static and home routes
  url.js                # URL-related routes
  user.js               # User-related routes
service/                # Service logic
  auth.js               # JWT token set/get helpers
views/                  # EJS templates
  home.ejs              # Home page (URL form, analytics)
  login.ejs             # Login page
  signup.ejs            # Signup page
```

## How It Works

### 1. User Authentication
- Users sign up and log in via `/user` and `/user/login` routes.
- JWT tokens are set as cookies for session management.
- Middleware (`middleware/auth.js`) checks and restricts access based on user roles.

### 2. URL Shortening
- Authenticated users can submit a URL on the home page.
- The app generates a unique short ID using `nanoid` and stores the mapping in MongoDB.
- Each visit to a short URL increments its analytics (visit history).

### 3. Analytics
- Users can view their own URLs and analytics (click count, visit history).
- Admins can view all URLs in the system.

## Main Dependencies
- express
- mongoose
- ejs
- jsonwebtoken
- nanoid
- cookie-parser

## Running the App
1. Install dependencies:
   ```sh
   npm install
   ```
2. Start MongoDB locally (default URI: `mongodb://127.0.0.1:27017/short-urlAWT`)
3. Start the server:
   ```sh
   npm start
   ```
4. Visit [http://localhost:8000](http://localhost:8000) in your browser.

## API Endpoints
- `POST /user` — Sign up
- `POST /user/login` — Log in
- `POST /url` — Create a new short URL (authenticated)
- `GET /:shortId` — Redirect to original URL
- `GET /url/analytics/:shortId` — Get analytics for a short URL


