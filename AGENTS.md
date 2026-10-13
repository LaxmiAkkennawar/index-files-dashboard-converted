# AI Agent Instructions

## Project
This is an existing full-stack Agent Dashboard application.

Frontend:
- React with TypeScript
- Bootstrap 5
- Custom CSS

Backend:
- Go
- WebSocket communication

## Important Rules

1. Work with the existing project.
2. Do not recreate the frontend or backend.
3. Do not delete existing files.
4. Preserve existing functionality.
5. Use reusable React components.
6. Use Bootstrap 5 and custom CSS.
7. Keep the website responsive.
8. Fix TypeScript and React errors.
9. Preserve existing backend API connections.
10. Explain any changes before making major modifications.

## Frontend

Location: frontend/src/

- components/: Reusable React components
- pages/: Dashboard and Agent Management pages
- services/: Backend API communication
- types/: TypeScript interfaces
- App.tsx: Main application
- App.css: Application styling

Use existing components whenever possible.

## Backend

Location: backend/

The backend is written in Go.

Do not change API endpoints or WebSocket
communication without checking the frontend.

## Agent Tasks

When asked to create or modify a feature:

1. Examine the existing code.
2. Identify the relevant files.
3. Implement the requested changes.
4. Use Bootstrap and custom CSS.
5. Maintain the existing design.
6. Check imports and TypeScript errors.
7. Test the application.
8. Summarize the completed changes.

## Development

Frontend:
cd frontend
npm install
npm run dev

Backend:
cd backend
go run .

## Restrictions

- Do not overwrite existing project files unnecessarily.
- Do not install packages unless required.
- Do not change the project structure without permission.
- Never expose API keys or passwords.