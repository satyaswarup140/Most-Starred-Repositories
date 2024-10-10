# GitHub Repository Viewer

This web application is designed to list the most-starred GitHub repositories created in the last 30 days. Users can drill down into each repository to view detailed statistics like total commits, additions, deletions, and contributions made by users. The project is built using **React** and **Redux Toolkit** for state management.

## Features

- List of most-starred repositories created in the last 30 days.
- View detailed activity statistics for each repository:
  - Total commits.
  - Code additions and deletions.
  - Contributions by different users.
- Logo display for each repository (owner's GitHub avatar).
- Drill-down into the repository commit activity.
- QR code generation for sharing repository details (optional feature).
- Responsive design for a better user experience on different devices.

## Tech Stack

- **Frontend:**
  - React (JavaScript framework for building the user interface)
  - Redux Toolkit (for state management)
  - React-Bootstrap (for UI styling)
  
- **Backend (API):**
  - GitHub REST API (for fetching repository data and activity)

## Installation

Follow these steps to run the project locally:

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/most-starred-repos.git

2. Navigate to the project directory:
   
   cd most-starred-repos

3. Install the dependencies:
   
   npm install

4. Run the application:
   
   npm start

5. Open your browser and navigate to:
   
   http://localhost:3000

# API Usage:
The application uses the GitHub REST API to fetch repository data, including the following endpoints:

/search/repositories: To fetch the most-starred repositories.
/repos/{owner}/{repo}/stats/commit_activity: To fetch commit statistics for each repository.

# Future Improvements
  . Add filtering and sorting options for the repositories list (e.g., filter by language, sort by stars).
  . Add more detailed visualizations for commit activity and contributions.
  . Implement user authentication with GitHub OAuth for personalized data.

# License
  This project is licensed under the MIT License - see the LICENSE file for details.

### Notes:
1. Replace `your-username` with your actual GitHub username.
2. Add any additional sections (e.g., acknowledgments, FAQs) if necessary.

This README provides an overview of the project, installation steps, the structure of the project, and details about API usage, making it helpful for anyone who wants to set up or contribute to the project.
