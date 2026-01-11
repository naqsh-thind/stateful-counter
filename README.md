# Stateful Counter
A full-stack counter application to learn the basics of software development.

## Technologies
- Frontend: React
- Backend: Node.js with Express
- Database: MongoDB
- API: REST

## Current Status
- [x] Project setup
- [ ] Frontend development
- [ ] Backend development
- [ ] Local deployment
- [ ] AWS deployment

## How to Run
(Instructions coming soon)

# Stateful Counter

A full-stack counter application built to learn the fundamentals of software development.

## Project Goals

This project demonstrates:
- Full-stack development with React, Node.js, and MongoDB
- REST API architecture
- State management and data persistence
- Version control with Git
- Local and cloud deployment

## Technologies

### Frontend
- **React** - UI library
- **Vite** - Build tool and dev server
- **CSS3** - Styling

### Backend
- **Node.js** - JavaScript runtime
- **Express** - Web framework
- **Mongoose** - MongoDB ODM
- **CORS** - Cross-origin resource sharing

### Database
- **MongoDB** - NoSQL database (Atlas cloud or local)

## Features

- Increment counter
- Decrement counter
- Reset counter to 0
- Data persists in MongoDB
- Shared counter across all users
- Loading states for better UX

## Getting Started

### Prerequisites

Make sure you have these installed:
- [Node.js](https://nodejs.org/) (v14 or higher)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) account OR local MongoDB installation
- [Git](https://git-scm.com/)

### Installation

1. **Clone the repository**
```bash
   git clone https://github.com/YOUR-USERNAME/stateful-counter.git
   cd stateful-counter
```

2. **Install all dependencies**
```bash
   npm run install-all
```

3. **Set up environment variables**
   
   Create a `.env` file in the `backend` folder:
```bash
   cd backend
   touch .env  # Mac/Linux
   type nul > .env  # Windows
```
   
   Add the following to `backend/.env`:
```
   PORT=5001
   MONGODB_URI=your_mongodb_connection_string_here
```
   
   Replace `your_mongodb_connection_string_here` with your actual MongoDB connection string.

4. **Return to root folder**
```bash
   cd ..
```

### Running the Application

**Option 1: Run everything with one command (Recommended)**
```bash
npm run dev
```

This starts both frontend and backend servers simultaneously.

**Option 2: Run servers separately**

Terminal 1 (Backend):
```bash
npm run start-backend
```

Terminal 2 (Frontend):
```bash
npm run start-frontend
```

### Accessing the Application

- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:5001
- **API Endpoint**: http://localhost:5001/api/counter

## Project Structure
```
stateful-counter/
├── frontend/                 # React application
│   ├── src/
│   │   ├── services/
│   │   │   └── storageService.js  # API calls
│   │   ├── App.jsx          # Main component
│   │   ├── App.css          # Styles
│   │   └── main.jsx         # Entry point
│   ├── package.json
│   └── vite.config.js
│
├── backend/                  # Express server
│   ├── config/
│   │   └── db.js            # MongoDB connection
│   ├── models/
│   │   └── Counter.js       # Counter schema
│   ├── routes/
│   │   └── counterRoutes.js # API routes
│   ├── .env                 # Environment variables (not in Git)
│   ├── server.js            # Entry point
│   └── package.json
│
├── .gitignore
├── package.json             # Root package.json
└── README.md
```

## API Endpoints

### GET `/api/counter`
Retrieves the current counter value.

**Response:**
```json
{
  "value": 0
}
```

### PUT `/api/counter`
Updates the counter value.

**Request Body:**
```json
{
  "value": 42
}
```

**Response:**
```json
{
  "value": 42
}
```

## Testing the API

You can test the API using [Postman](https://www.postman.com/) or curl:

**GET request:**
```bash
curl http://localhost:5001/api/counter
```

**PUT request:**
```bash
curl -X PUT http://localhost:5001/api/counter \
  -H "Content-Type: application/json" \
  -d '{"value": 100}'
```

## Troubleshooting

### Port 5001 already in use
If you see an error about port 5001 being in use:
1. Change the PORT in `backend/.env` to another number (e.g., 5002)
2. Update `API_URL` in `frontend/src/services/storageService.js` to match

### MongoDB connection failed
- Verify your connection string in `backend/.env`
- Check that your IP is whitelisted in MongoDB Atlas (Network Access)
- Ensure your password doesn't contain unencoded special characters

### CORS errors
If you see CORS errors in the browser console:
- Verify `backend/server.js` has `app.use(cors())`
- Restart the backend server

### Frontend shows "Loading..." forever
- Check that the backend is running
- Open browser DevTools (F12) → Network tab to see if API requests are failing
- Verify the API_URL in `storageService.js` matches your backend port