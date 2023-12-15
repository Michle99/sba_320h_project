<div align="center">
  <h1>SBA 320: Google Books Search React Application</h1>
</div>

<div align="center">
  
  [![Google_Books_Search_CI](https://github.com/Michle99/sba_320h_project/actions/workflows/main.yml/badge.svg)](https://github.com/Michle99/sba_320h_project/actions/workflows/main.yml)
  
</div>

## Overview
A React application that allows users to search for books using the Google Books API. Users can view a list of search results and click on a book to see more details.

## Features

- **Search Page:** Enter a search term to get a list of books matching the query.
- **Book Details:** Click on a book to view detailed information.

## Technologies Used

- React
- React Router
- Vite (instead of Create React App)
- Tailwind CSS
- Axios for API requests
- Feather Icons for UI icons

## Getting Started

### Prerequisites

- Node.js and npm installed
- Google Books API Key (Add your key in the `.env` file)

### Installation

1. Clone the repository:

```bash
   git clone https://github.com/Michle99/sba_320h_project.git
```

2. Navigate to the project folder:

```bash
  cd sba_320h_project
```
3. Install dependencies:

```bash
  npm install
```

4. Create a `.env` file in the project root and add your Google Books API Key:

```bash
  VITE_REACT_APP_API_KEY=your-api-key
```

### Usage

1. Start the development server:

```bash
  npm run dev
```

2. Open your browser and visit  http://localhost:5173/.




### Contributing
Contributions are welcome! Feel free to open issues and pull requests.

### License
This project is licensed under the [MIT License](https://opensource.org/license/mit/) - see the LICENSE file for details.
