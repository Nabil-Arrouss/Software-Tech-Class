<<<<<<< HEAD
# I Love Pécs Museum

Welcome to the documentation for the I Love Pécs museum project.

## Project Overview

This project is created to immortalize memories of trips around the beautiful city of Pécs. The goal is to provide a virtual space where individuals can upload and store their cherished memories. Through their pictures, users can express their love for the city, creating a museum of personal experiences and adventures in Pécs.

## Team Members

- Nabil
- Karim
- Chidinma
- Lina

## Features

- **Upload Photos**: Users can upload photos from their trips to Pécs.
- **Gallery**: A gallery displaying all uploaded photos, forming a virtual museum.
- **User Accounts**: Users can create accounts to manage their photo uploads.

## Technologies Used

### Frontend

- **Framework**: Angular
- **Language**: TypeScript

### Backend

- **Framework**: Laravel
- **Language**: PHP

## Setup and Installation

### Prerequisites

- Node.js and npm
- PHP and Composer
- MySQL or another database system

### Frontend

1. Clone the repository:
    ```bash
    git clone https://github.com/Nabil-Arrouss/Software-Tech-Class.git
    ```
2. Navigate to the frontend directory:
    ```bash
    cd frontend
    ```
3. Install dependencies:
    ```bash
    npm install
    ```
4. Run the development server:
    ```bash
    ng serve
    ```
   Open the resulting localhost to view it in the browser.

### Backend

1. Navigate to the backend directory:
    ```bash
    cd backend
    ```
2. Install dependencies:
    ```bash
    composer install
    ```
3. Set up the environment file:
    ```bash
    cp .env.example .env
    ```
   Configure your `.env` file with your database credentials and other settings.

4. Generate the application key:
    ```bash
    php artisan key:generate
    ```
5. Run database migrations:
    ```bash
    php artisan migrate
    ```
6. Start the Laravel development server:
    ```bash
    php artisan serve
    ```
   Open the corresponding localhost to view it in the browser.

## Usage

1. Sign up for an account.
2. Log in to your account.
3. Upload your photos and add descriptions.

## Contributing

We welcome contributions to this project. If you would like to contribute, please fork the repository and create a pull request with your changes.
=======
# Software-Tech-Class Project
 
Welcome to our Software Technologies Class Project! We're excited to collaborate and build something remarkable that will impress our peers and instructors. Let's dive into the details:
 
## Project Development Process
 
### Sprint 1: Planning and Setup
- Set up project repository on GitHub.
- Set up local development environments for team members.
- Define project requirements and objectives.
- Determine project scope and limitations.
- Create a project timeline and milestones.
 
### Sprint 2: Design and Front-end Development
- Design the interface of the project using tools like moqups.com or similar.
- Design and implement UI/UX using Angular and CSS.
- Implement responsive design for mobile devices (additional feature).
 
### Sprint 3: Back-end Development
- Design and implement database schema using tools like drawsql.app or similar.
- Implement user authentication and authorization.
 
### Sprint 4: Testing
- Implement unit testing.
- Fix and catch any errors or bugs.
 
## Getting Started
 
These instructions will help you set up the project on your local machine:
 
### Installation
1. Navigate to your project workspace directory:
    ```bash
    cd xampp/htdocs
    ```
2. Clone the repository to your local machine:
    ```bash
    git clone https://github.com/Software-Tech-Class/Software-Tech-Class.git
    ```
3. Navigate to the project directory:
    ```bash
    cd Software-Tech-Class
    ```
4. Install the necessary dependencies:
    - For Frontend: Navigate to the `Front_end` directory and run:
        ```bash
        npm install
        ```
    - For Backend: Navigate to the `Back_end` directory and run:
        ```bash
        composer install
        ```
 
## Authors
- Lina
- Nabil
- Kareem
- Igwe
 
## License
This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.
 
## Contribution Guide
 
1. Check which branch you are working on:
    ```bash
    git branch
    ```
2. Pull the latest changes from the main branch:
    ```bash
    git pull
    ```
3. Create a new branch for your feature or fix:
    ```bash
    git checkout -b <branch-name>
    ```
4. Work on your branch.
5. Stage and commit your changes:
    ```bash
    git add .
    git commit -m "<commit-message>"
    ```
6. Push your changes to the remote repository:
    ```bash
    git push -u origin <branch-name>
    ```
7. Once your work is done, create a pull request to merge your branch into the main branch.
>>>>>>> a4511f2be0252445f35fd1e62355c4ded475d689
