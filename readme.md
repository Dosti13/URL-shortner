# URL Shortener

A simple URL shortener application built with **Node.js**, **Express.js**, and **EJS** for templating.

## Features
- User authentication using **cookies** and **UUID generator**.
- Only logged-in users can generate short URLs.
- Users can only see the URLs they have generated and their visit history.
- Submit a long URL to generate a short URL.
- View a list of generated URLs.
- Track visit history length.
- Simple and clean UI using **CSS**.

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/Dosti13/url-shortener.git
   cd url-shortener
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Run the server:
   ```sh
   node server.js
   ```
   or, if using nodemon:
   ```sh
   nodemon server.js
   ```

4. Open the browser and visit:
   ```
   http://localhost:4000
   ```

## Project Structure
```
url-shortener/
s   # CSS for styling the app
│-- views/
│   ├── index.ejs   # Main EJS template
│-- routes/
│   ├── urlRoutes.js # Routes for handling URL requests
│   ├── staticRoutes.js # Routes for serving static files
│   ├── userRoutes.js # Routes for user authentication
│-- controllers/
│   ├── urlController.js # Logic for handling requests
│   ├── authController.js # User authentication logic
│   ├── userController.js # User-related logic
│-- models/
│   ├── urlModel.js # Database schema and model
│   ├── userModel.js # User authentication schema and model
│-- db/
│   ├── db.js # Database connection setup
│-- middleware/
│   ├── authMiddleware.js # Authentication middleware using cookies and UUID
│-- services/
│   ├── auth.js # Authentication service logic
│-- server.js       # Express server
│-- package.json    # Project dependencies
│-- README.md       # Project documentation
```

## Authentication
- Users are assigned a **UUID** upon login, stored in a cookie.
- Only authenticated users can generate and view their own URLs.
- Users can only track their own visit history.

## Usage
1. **Login** (UUID is generated and stored in a cookie).
2. Enter a long URL in the input field and click "Submit".
3. A shortened URL will be generated.
4. Users can only see the list of URLs they have created and their visit history.

## Technologies Used
- **Node.js**
- **Express.js**
- **EJS** (Embedded JavaScript)
- **CSS** (for styling)
- **MongoDB** (for database storage)
- **Cookies & UUID** for authentication

## License
This project is open-source and available under the **MIT License**.

