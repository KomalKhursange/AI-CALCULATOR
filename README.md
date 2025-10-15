
# AI_CALCY

A feature-rich AI-powered calculator built using React.js, Tailwind CSS, FastAPI for the backend, and Gemini API for AI-powered calculations. Inspired by Apple's Math Notes.

## Features

- Drag-and-drop UI for interactive calculations
- AI-powered mathematical problem solving
- Styled with Tailwind CSS for responsiveness
- FastAPI for backend API management
- Supports MathJax for rendering mathematical expressions

## Tech Stack

### Frontend
- React.js
- Tailwind CSS
- Axios (for API requests)
- Mantine UI
- Drag-and-drop support (`react-dnd`, `react-draggable`)

### Backend
- FastAPI
- Uvicorn (for ASGI server)
- Pydantic (for data validation)
- Pillow (for image processing)
- Google GenerativeAI SDK (Gemini API)

## Installation & Setup

### Prerequisites
- [Node.js](https://nodejs.org/) (for frontend)
- [Python 3.10+](https://www.python.org/) (for backend)

### Clone Repository
```sh
git clone https://github.com/ANJALISAHU2004/AI_CALCY.git
cd AI_CALCY
```

### Frontend Setup
```sh
cd CALCY
npm install
npm run dev
```

### Backend Setup
```sh
cd CALCY_BE
python -m venv venv
 `venv\Scripts\activate`
poetry install
pip install uvicorn fastapi postcss
```

## Configuration

### .env File (Backend)
Create a `.env` file inside the backend directory:
```
GEMINI_API_KEY=your-gemini-api-key
```

## Running the Project
1. Start the backend using FastAPI:  
   ```sh
   poetry run dev
   ```
2. Start the frontend using React:  
   ```sh
   npm run dev
   ```
3. Open `http://localhost:3000` to interact with the AI Calculator.

## Contributing
Feel free to fork this project, submit issues, or contribute improvements!



