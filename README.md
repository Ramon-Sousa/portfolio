# My Personal Portfolio

This is my personal portfolio, a project developed to present my work and experiences in an interactive and visually appealing way. The website includes a project section where you can view detailed case studies, a section about me, and contact information.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **Next.js**: React framework for server-side rendering and static site generation.
- **Tailwind CSS**: CSS framework for fast and responsive styling.
- **Lucide Icons**: Icon library for React.
- **Node.js**: JavaScript runtime environment on the server-side.
- **Webpack**: Module bundler for the application.

## Project Structure

```
portfolio/
├── public/
│   ├── cases/              # JSON files of the case studies
│   └── assets/             # Images and icons used in the portfolio
├── src/
│   ├── app/                # Application components
│   │   ├── _components/    # Reusable components (Navbar, Footer)
│   │   ├── projects/       # Individual project pages
│   │   └── [slug]/         # Dynamic pages based on slug
│   ├── components/         # UI components (Breadcrumb, etc.)
│   ├── styles/             # Global styles
│   └── utils/              # Utility functions
├── package.json            # Dependencies and scripts for the project
└── next.config.js          # Next.js configurations
```

## How to Install

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/portfolio.git
   cd portfolio

2. **Install the dependencies:**

   You need Node.js installed. If you don’t have it, you can download and install it here. (https://nodejs.org/).

   ```bash
   npm install
   ```

3. **Start the development server:**

   ```bash
   npm run dev
   ```

   The website will be available at [http://localhost:3000](http://localhost:3000).


