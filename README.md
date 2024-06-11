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