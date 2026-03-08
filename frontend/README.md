# Backend Developer Portfolio

A full-stack portfolio built with **Next.js**, **Node.js/Express**, and **MongoDB**.

## Project Structure

```
portfolio/
├── frontend/     # Next.js app
└── backend/      # Node.js + Express API
```

---

## Getting Started

### 1. Backend

```bash
cd backend
npm install
cp .env.example .env   # Edit MONGO_URI if needed
npm run dev            # Runs on http://localhost:5000
```

**Seed sample projects:**
```bash
curl -X POST http://localhost:5000/api/projects/seed
```

### 2. Frontend

```bash
cd frontend
npm install
npm run dev            # Runs on http://localhost:3000
```

---

## API Endpoints

| Method | Route                    | Description              |
|--------|--------------------------|--------------------------|
| GET    | /api/projects            | Get all projects         |
| POST   | /api/projects            | Add a new project        |
| POST   | /api/projects/seed       | Seed sample data         |
| POST   | /api/contact             | Submit contact message   |

---

## Customize

- **Your name** → `frontend/components/Hero.js` and `pages/index.js`
- **About text** → `frontend/components/About.js`
- **Skills** → `frontend/components/Skills.js`
- **Projects** → Add via API or edit `backend/routes/projects.js` seed data
- **Social links** → `frontend/components/Contact.js`
- **Colors / fonts** → `frontend/tailwind.config.js` and `styles/globals.css`

---

## Tech Stack

- **Frontend**: Next.js 13, TailwindCSS, Axios
- **Backend**: Node.js, Express.js
- **Database**: MongoDB + Mongoose
- **Design**: Dark minimal, JetBrains Mono + Syne fonts, custom cursor
