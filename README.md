# 🎮 Game Idea Voting Platform

A modern, responsive web application built with React and Tailwind CSS that allows users to submit, vote on, and manage game ideas. Users can upvote or downvote ideas, search through submissions, and sort by popularity.

## ✨ Features

- **📝 Idea Submission**: Submit new game ideas with detailed descriptions
- **👍👎 Voting System**: Upvote or downvote ideas with intuitive thumbs up/down icons
- **🔍 Search & Filter**: Search through ideas by text content
- **📊 Sorting Options**: Sort ideas by newest, most upvoted, or most downvoted
- **💾 Local Storage**: All data persists in browser's local storage
- **📱 Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **🎨 Modern UI**: Beautiful interface built with Tailwind CSS
- **🔢 Numbered Ideas**: Each idea is numbered for easy reference

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (version 14.0 or higher)
- **npm** (version 6.0 or higher)

You can check your versions by running:

```bash
node --version
npm --version
```

## 🔧 Installation & Setup

### 1. Download the Project

Download or extract the project files to your local machine.

### 2. Navigate to Project Directory

```bash
cd game-vote-platform
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start the Development Server

```bash
npm start
```

The application will open in your browser at `http://localhost:3000`

## 📁 Project Structure

```
game-vote-platform/
├── public/
│   ├── index.html
│   ├── favicon.ico
│   └── manifest.json
├── src/
│   ├── components/
│   │   ├── App.js              # Main application component
│   │   ├── MainView.js         # Main view container
│   │   ├── IdeaCard.js         # Individual idea card component
│   │   ├── IdeaForm.js         # Form for submitting new ideas
│   │   └── SearchAndSort.js    # Search and sorting controls
│   ├── utils/
│   │   ├── storage.js          # Local storage utilities
│   │   └── constants.js        # Application constants
│   ├── styles/
│   │   ├── App.css            # Custom CSS (minimal)
│   │   └── index.css          # Tailwind CSS imports
│   └── index.js               # Application entry point
├── package.json
└── README.md
```

## 🎯 How to Use

### Submitting Ideas

1. Scroll to the top of the page
2. Enter your game idea in the text area
3. Click "Submit Idea" to add it to the platform

### Voting on Ideas

1. Browse through the numbered list of ideas
2. Click "Upvote 👍" to show approval
3. Click "Downvote 👎" to show disapproval
4. Click the same button again to remove your vote

### Searching Ideas

1. Use the search box to filter ideas by text content
2. The list updates in real-time as you type

### Sorting Ideas

1. Use the "Sort By" dropdown to change the order:
   - **Default (Newest)**: Shows newest ideas first
   - **Upvotes (Highest)**: Shows most popular ideas first
   - **Downvotes (Highest)**: Shows most controversial ideas first

---

**Thanks for your attention ❤️**
