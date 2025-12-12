# Project Setup Guide

Follow these steps to set up the project on a new machine after cloning.

## Prerequisites
- PHP >= 8.2
- Composer
- Node.js & NPM
- MySQL (or SQLite)

## Installation Steps

1.  **Clone the repository**
    ```bash
    git clone <your-repo-url>
    cd delight
    ```

2.  **Install Backend Dependencies**
    ```bash
    composer install
    ```

3.  **Install Frontend Dependencies**
    ```bash
    npm install
    ```

4.  **Environment Setup**
    - Copy the example environment file:
      ```bash
      cp .env.example .env
      ```
      *(On Windows cmd: `copy .env.example .env`)*
    - Open `.env` and configure your database settings:
      ```ini
      DB_CONNECTION=mysql
      DB_HOST=127.0.0.1
      DB_PORT=3306
      DB_DATABASE=delight
      DB_USERNAME=root
      DB_PASSWORD=
      ```

5.  **Generate Application Key**
    ```bash
    php artisan key:generate
    ```

6.  **Run Database Migrations**
    ```bash
    php artisan migrate
    ```

7.  **Link Storage** (Critical for viewing images)
    ```bash
    php artisan storage:link
    ```

8.  **Build Frontend Assets**
    ```bash
    npm run build
    ```

## Running the Project
-   **Method 1 (Laragon/XAMPP)**: Just make sure the server is running and visit `http://delight.test` (or whatever hostname you configured).
-   **Method 2 (Manual)**:
    ```bash
    php artisan serve
    ```
    Then visit `http://localhost:8000`.

## Development
If you are making changes to React/CSS, keep this running:
```bash
npm run dev
```
