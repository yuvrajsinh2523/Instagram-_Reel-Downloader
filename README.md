# Instagram Reel Downloader

A simple web application to download Instagram reels using a reel URL.  
Users can paste an Instagram reel link and get a downloadable video instantly.

## Features

- Download Instagram reels using URL
- Simple and clean user interface
- Video preview support
- Fast response
- Error handling for invalid links

## Tech Stack

- Node.js
- Express.js
- EJS
- CSS
- instagram-url-direct package

## Project Structure

```bash
project-folder
│
├── public
│   └── style.css
│
├── views
│   └── index.ejs
│
├── app.js
├── package.json
└── README.md
```

## Installation

Clone the repository:

```bash
git clone your-repository-link
```

Go to the project folder:

```bash
cd your-project-name
```

Install dependencies:

```bash
npm install
```

Start the server:

```bash
node app.js
```

Open browser:

```bash
http://localhost:8080
```

## How It Works

1. Paste Instagram reel URL
2. Click on **Get**
3. The app fetches the reel video
4. Preview and download the reel

## Challenges Faced

While building this project, one challenge was handling Instagram reel URLs and rendering the video properly on the frontend. Some videos may not preview because of browser restrictions, but downloading still works.

## Future Improvements

- Better UI design
- Mobile responsive layout
- Download history
- Reel thumbnail support
- Dark mode

## Author

**Yuvrajsinh Jadeja**

BCA Graduate | MCA Student | MERN & Java Learner
