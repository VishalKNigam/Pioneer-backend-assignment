# Project Name

Brief description of the project.

## Table of Contents

1. [Introduction](#introduction)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Endpoints](#endpoints)
   - [User Management](#user-management)
   - [Protected Routes](#protected-routes)
   - [Public API Data](#public-api-data)
5. [License](#license)

## Introduction

Provide a brief introduction about the project, its purpose, and key features.

## Installation

Provide instructions on how to install and set up the project locally.

## Usage

Explain how to use the project, including any configuration or environment setup required.

## Endpoints

### User Management

- **Register a New User**

  - Endpoint: `/users/register`
  - Method: POST
  - Description: Register a new user with name, email, and password.
  - Request Body:
    ```json
    {
      "name": "user_name",
      "email": "user_email@example.com",
      "password": "user_password"
    }
    ```
  - Response:
    - `200 OK`: New user registered successfully.
    - `400 Bad Request`: Invalid request body or missing fields.
    - `403 Forbidden`: User with the provided email already exists.

- **Login**

  - Endpoint: `/users/login`
  - Method: POST
  - Description: Log in with registered email and password.
  - Request Body:
    ```json
    {
      "email": "user_email@example.com",
      "password": "user_password"
    }
    ```
  - Response:
    - `200 OK`: Login successful. Returns JWT token.
    - `400 Bad Request`: Invalid email or password.
    - `404 Not Found`: User not found. Please register.
    - `500 Internal Server Error`: Server error during login.

- **Logout**
  - Endpoint: `/users/logout`
  - Method: GET
  - Description: Logout the user.
  - Response:
    - `200 OK`: Logout successful.
    - `400 Bad Request`: User not logged in.
    - `500 Internal Server Error`: Server error during logout.

### Protected Routes

- **Access Protected Route**
  - Endpoint: `/protected/`
  - Method: GET
  - Description: Access a protected route requiring authentication.
  - Response:
    - `200 OK`: User authenticated.
    - `401 Unauthorized`: Unauthorized or invalid token.

### Public API Data

- **Get List of Public APIs**
  - Endpoint: `/api/data`
  - Method: GET
  - Description: Retrieve a list of public APIs.
  - Query Parameters:
    - `category`: Filter APIs by category.
    - `page`: Page number for pagination.
    - `limit`: Number of items per page.
  - Response:
    - `200 OK`: Successful response with list of APIs.
    - `400 Bad Request`: Invalid query parameters.
    - `500 Internal Server Error`: Server error during data retrieval.

## API Documentation

   Explore the API documentation using Swagger UI:

- [Swagger Documentation](http://localhost:8080/docs)
