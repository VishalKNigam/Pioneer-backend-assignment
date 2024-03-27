# Project Description

Pioneer Backend Project

## Table of Contents

1. [Introduction](#introduction)
2. [Deployed Link](#installation)
3. [Installation](#installation)
4. [Usage](#usage)
5. [Endpoints](#endpoints)
   - [User Management](#user-management)
   - [Protected Routes](#protected-routes)
   - [Public API Data](#public-api-data)

## Introduction

Welcome to Pioneer Backend Project, a comprehensive API project designed to provide seamless user management, access to public API data, and protected routes with authentication. This project aims to simplify user registration, authentication, and access to public API data through a user-friendly API interface.

## Deployed Link

- [Deployed Link](https://pioneer-backend-assignment-jmzv.onrender.com/)

## Installation

- Clone the Repo - https://github.com/VishalKNigam/Pioneer-backend-assignment
- Install the dependencies - npm install
- Run the command in terminal - npm run server
- Open it in browser - http://localhost:8080
- Swagger docs available at -  http://localhost:8080/docs

## Usage

Create a .env file and enter following details:-
- PORT
- MongoURL
- JWT_SECRET

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

- [Swagger Documentation](https://pioneer-backend-assignment-jmzv.onrender.com/docs/)
