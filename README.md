# Suhairi Subhi's Portfolio Website

Welcome to the technical documentation of my portfolio website, hosted at [suhairisubhi.github.io](https://suhairisubhi.github.io). This readme provides an overview of the technologies, tools, and methodologies used in developing and maintaining this website.

## Table of Contents

- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Development Workflow](#development-workflow)
- [Deployment](#deployment)
- [Future Enhancements](#future-enhancements)
- [Contact](#contact)

## Technologies Used

### Frontend

- **HTML5**: For structuring the content on the web pages.
- **CSS3**: For styling and layout design to create a responsive and visually appealing interface.
- **JavaScript**: For adding interactivity and dynamic features to the website.
- **React**: Utilized for building the user interface components and managing the state of the application.
- **Bootstrap**: Used for responsive design and prebuilt UI components to speed up development.

### Backend

- **GitHub Pages**: The website is hosted on GitHub Pages, leveraging its capabilities for static site hosting.

### Tools and Libraries

- **Git**: Used for version control to track changes and collaborate on the project.
- **Webpack**: A module bundler used to compile JavaScript modules and manage dependencies.
- **Babel**: A JavaScript compiler that allows the use of next-generation JavaScript, transforming it into a backwards-compatible version.
- **ESLint**: A static code analysis tool for identifying problematic patterns in JavaScript code.
- **Prettier**: A code formatter to maintain a consistent style across the codebase.
- **npm**: Node Package Manager used for managing project dependencies.

## Project Structure

The project structure is organized as follows:

```
/portfolio-website
├── public
│ ├── index.html
│ └── assets
│ ├── images
│ └── styles
├── src
│ ├── components
│ │ ├── Header.js
│ │ ├── Footer.js
│ │ ├── Projects.js
│ │ └── About.js
│ ├── App.js
│ ├── index.js
│ └── styles
│ ├── App.css
│ └── components
├── .gitignore
├── package.json
├── README.md
└── webpack.config.js
```

## Development Workflow

1. **Clone the Repository**: Clone the repository to your local machine using Git.

   ```sh
   git clone https://github.com/suhairisubhi/portfolio-website.git
   ```

2. **Install Dependencies**: Navigate to the project directory and install the necessary dependencies using npm.
   ```sh
   cd portfolio-website
   npm install
   ```
3. **Run Development Server**: Start the development server to view the website locally.
   ```sh
   npm run build
   ```

## Deployment

The website is deployed using GitHub Pages. The deployment process involves the following steps:

1. **Build the Project**: Ensure the project is built for production.

   ```sh
   npm run build
   ```

2. **Deploy to GitHub Pages**: Use the gh-pages branch for deployment.
   ```sh
   npm run deploy
   ```

## Future Enhancements

- **Accessibility Improvements**: Enhance the website's accessibility to ensure it is usable by people with various disabilities.
- **Performance Optimization**: Optimize the loading times and performance of the website.
- **New Features**: Continuously add new features and projects to showcase my latest work.

## Contact

Feel free to reach out to me for any inquiries or collaboration opportunities:

- **Email**: suhairi.subhi@gmail.com
- **LinkedIn**: [linkedin.com/in/suhairisubhi](https://linkedin.com/in/suhairi-subhi)
- **GitHub**: [github.com/suhairisubhi](https://github.com/suhairisubhi)

Thank you for visiting my portfolio!
