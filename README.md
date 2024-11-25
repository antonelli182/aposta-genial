# Aposta Genial

Aposta Genial is a web application designed to provide intelligent sports betting analysis. This project is built using Next.js and React, with a focus on providing a seamless user experience through a modern and responsive design.

## Features

- **Hero Section**: The landing page features a hero section that introduces the application to users.
- **Latest News**: Displays the latest posts and updates related to sports betting.
- **Team Section**: Showcases the team behind Aposta Genial.

## Code Structure

### Pages

- **Home Page (`app/page.tsx`)**: 
  - Imports components such as `HeroSection`, `LatestNews`, and `TeamSection`.
  - Fetches all posts using the `getAllPosts` function and passes them to the `LatestNews` component.
  - Renders the main layout of the home page.

### Layout

- **Root Layout (`app/layout.tsx`)**:
  - Sets up the global styles and fonts.
  - Provides a theme using `ThemeProvider` with a default dark theme.
  - Includes a `Navbar`, `Footer`, and a `Toaster` for notifications.

### Components

- **Vote Buttons (`components/vote-buttons.tsx`)**:
  - Provides interactive buttons for upvoting and downvoting posts.
  - Displays the current vote count and total votes.
  - Optionally shows the number of comments and allows users to scroll to the comments section.

## Configuration

- **TypeScript Configuration (`tsconfig.json`)**:
  - Configures TypeScript to target ES5 and includes libraries such as DOM and ESNext.
  - Enables strict type checking and module resolution.

- **Dependencies (`package-lock.json`)**:
  - Lists all the dependencies and their versions used in the project.
  - Includes libraries such as `next`, `react`, `tailwindcss`, and various Radix UI components.

## Development

To start developing with Aposta Genial, clone the repository and install the dependencies using npm or yarn. Then, run the development server:

```bash
npm install
npm run dev
```

Visit `http://localhost:3000` to view the application in your browser.
