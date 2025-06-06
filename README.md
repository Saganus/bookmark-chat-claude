# Bookmark Chat Claude

A bookmark management application with chat interface powered by Claude AI.

## Tech Stack

- **Frontend**: React with TypeScript
- **Backend**: Go
- **AI**: Claude API

## Project Structure

```
bookmark-chat-claude/
├── backend/          # Go backend server
├── frontend/         # React frontend application
├── docker-compose.yml
└── README.md
```

## Getting Started

### Prerequisites

- Node.js 18+
- Go 1.21+
- Docker (optional, for containerized development)

### Development

1. Clone the repository
2. Copy `.env.example` to `.env` and configure your environment variables
3. Start the backend: `cd backend && go run .`
4. Start the frontend: `cd frontend && npm install && npm start`

Or use Docker:
```bash
docker-compose up
```