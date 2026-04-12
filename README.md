# Portfolio

A professional portfolio website for a software engineer, built with React and Node.js. This project features a modern, responsive design with smooth animations, 3D model integration, and a full-stack contact form with email notifications.

## Features

- **Modern UI/UX**: Clean, responsive design with smooth scrolling and hover effects.
- **3D Model Integration**: Features a 3D animated character using Three.js and React Three Fiber.
- **Full-Stack Contact Form**:
  - Frontend form submission.
  - Backend API with Nodemailer for email notifications.
  - MongoDB integration for message storage.
- **Project Showcase**: Detailed project pages with descriptions and images.
- **Theme Support**: Light and dark mode toggle.
- **File Downloads**: Direct download links for resume (PDF and DOCX).

## Tech Stack

### Frontend
- **React**: UI library for building the user interface.
- **Three.js & React Three Fiber**: For 3D graphics and animations.
- **React Router**: For client-side routing.
- **CSS Modules**: For component-scoped styling.

### Backend
- **Node.js**: Server-side JavaScript runtime.
- **Express**: Web framework for building the API.
- **MongoDB**: NoSQL database for storing messages.
- **Nodemailer**: For sending email notifications.
- **dotenv**: Environment variable management.

## Project Structure

```
Portfolio/
├── client/          # React frontend application
│   ├── src/
│   │   ├── components/  # Reusable UI components
│   │   ├── pages/       # Page components (Home, Projects, Contact)
│   │   ├── assets/      # Static assets and 3D models
│   │   └── ...
│   └── package.json
├── server/          # Node.js backend application
│   ├── routes/      # API routes (contact, download)
│   ├── models/      # Mongoose models (Message)
│   ├── index.js     # Express server entry point
│   └── package.json
├── .gitignore       # Git ignore file
└── README.md        # Project documentation
```

## Installation

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (running locally or cloud instance)

### Backend Setup

1. Navigate to the server directory:
   ```bash
   cd server
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the `server` directory with the following variables:
   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   EMAIL_USER=your_email
   EMAIL_PASS=your_email_password
   ```

4. Start the server:
   ```bash
   npm run dev
   ```

### Frontend Setup

1. Navigate to the client directory:
   ```bash
   cd client
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

## Usage

- **Development**: The frontend runs on `http://localhost:5173` and the backend on `http://localhost:5000`.
- **Production**: Build the frontend with `npm run build` and serve the `dist` folder with your backend server.

## License

ISC