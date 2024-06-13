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


### Project Development Process

#### Step 1: Getting ready and planning
- **Create project repository on GitHub.**
- **Configure local development environments on our computers.**
    - This includes setting up frameworks and dependencies for Laravel and Angular.
    - Ensure all team members use the same versions of the technologies (composer, php, nodejs...) during the development process. 
- **Define Project requirements and objectives:**
     - Develop a CRUD (Create, Read, Update, Delete) operation application utilizing Laravel and Angular.
     - Facilitate team collaborations throughout the Github kanban dashboard, by creating issues and handle them together. 
- **Define the tasks and create a project timeline.**
 
#### Step 2: Back-end Development
- Design the databse schema using drawio tool to define the structure and the attributes.
- Configure the database with help of Laravel. 
- Integrate user authentication and authorization functionalities.
 
#### Step 3: Front-end Development
- **Set up the design of the application using Angular with help of:**
    - Bootstrap and ng-bootstrap.
    - SCSS
    - Google FONTS (Lobster, Mulish)
    - Remixicon (open-source icon library)
 
#### Step 4: Testing
- Testing the CRUD operation APIs using POSTMAN.
- Implement unit tests.
- Fix any errors that may occur.

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
    cd back-end
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
3. Upload your photo with a title.

## Contribution Guide
 
1. Determine your current working branch:
    ```bash
    git branch
    ```
2. Fetch the latest updates from the main branch:
    ```bash
    git pull
    ```
3. Establish a new branch for your feature or fix:
    ```bash
    git checkout -b <branch-name>
    ```
4. Develop within your designated branch.
5. Prepare and commit your changes:
    ```bash
    git add .
    git commit -m "<commit-message>"
    ```
6. Push your changes/work to the remote repository:
    ```bash
    git push -u origin <branch-name>
    ```
7. Upon completion, initiate a pull request to merge your branch into the main branch.
