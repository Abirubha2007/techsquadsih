# TeamPortfolio-Techsquadsih


A clean, responsive, and professional team portfolio webpage designed to showcase team members, their roles, and their social links. Originally built with vanilla HTML/CSS/JS, this project is now powered by **Vite** for a modern, lightning-fast development experience.

## Features
- **Responsive 3x2 Grid Layout:** Adapts beautifully to desktop, tablet, and mobile screens.
- **Prominent Profile Photos:** Clean, large circular profile images that highlight each team member.
- **Dynamic Content Injection:** Team data is managed cleanly via JavaScript, making it easy to add or modify members.
- **Lucide Icons:** Crisp, scalable SVG icons for social media links (LinkedIn, GitHub) and UI elements.
- **Vite Integration:** Instant server start and blazing-fast hot module replacement (HMR).

## Prerequisites
Ensure you have [Node.js](https://nodejs.org/) installed on your machine.

## Getting Started

### 1. Install Dependencies
Run the following command in your terminal to install Vite and the Lucide icon library:
```bash
npm install
```

### 2. Start the Development Server
Launch the local development server by running:
```bash
npm run dev
```
Open your browser and navigate to the Local URL provided in the terminal (usually `http://localhost:5173/`).

## Project Structure
```text
Team Portfolio/
├── images/            # Directory containing team member profile photos
├── index.html         # Main HTML document and layout scaffolding
├── package.json       # Project configuration and npm dependencies
├── script.js          # JavaScript logic, team data array, and Lucide icon initialization
└── style.css          # Core styles, responsive design, and CSS variables
```

## How to Customize

To update the team members, open `script.js` and edit the `teamMembers` array:
```javascript
{
    name: "Member Name",
    role: "Job Title",
    photoUrl: "/images/your-photo.jpg", 
    description: "Brief description about the team member.",
    linkedinUrl: "https://linkedin.com/in/...",
    githubUrl: "https://github.com/..."
}
```
*Note: Make sure to drop your actual profile photos into the `images/` folder and match the filenames exactly in the `photoUrl` field.*

## Deployment
To build the project for production, run:
```bash
npm run build
```
This will generate an optimized, minified bundle in the `dist` folder, ready to be deployed to any static hosting service like GitHub Pages, Vercel, or Netlify.
