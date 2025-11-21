# Portfolio Frontend (React + Vite)

## Getting Started
```bash
cd Frontend/myportfolio
npm install
npm run dev
```

## Environment Variables
Copy `env.example` to `.env` if you need to override defaults:
```
VITE_API_BASE_URL=http://localhost:8000
```

## Development Notes
- Project data and contact form now integrate with the FastAPI backend.
- Static data in `src/data/projects.js` is still used as a fallback while the API loads.
- Update `src/services/api.js` if your backend host/port changes.
