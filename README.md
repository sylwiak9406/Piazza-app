# Piazza 

## Overview

This project implements a backend API for managing user authentication, post creation, reactions (likes/dislikes), and comments on posts. It is designed to provide the server-side functionality for a social media platform where users can interact with posts through various actions such as creating posts, reacting to posts, and adding comments.

## Table of Contents

- [Authentication](#authentication)
- [Create Post](#create-post)
- [Get All Posts by Query](#get-all-posts-by-query)
- [Update Post](#update-post)
- [Delete Post](#delete-post)
- [Get Post by ID](#get-post-by-id)
- [Create Reaction](#create-reaction)
- [Get All Reactions](#get-all-reactions)
- [Create Comment](#create-comment)
- [Update Comment](#update-comment)
- [Delete Comment](#delete-comment)
- [Get All Comments](#get-all-comments)

## Authentication

### Auth Endpoint

This endpoint initiates the OAuth2 authorization process for Google authentication. It returns the authorization URL that the client application should redirect the user to for authentication.

- **Method:** POST
- **Endpoint:** `/api/auth/`
- **Usage:** When a user intends to log in via Google, make a POST request to this endpoint from the client application.

## Create Post

### Create Post

This endpoint is responsible for creating a new post. It requires authentication, and the newly created post is associated with the authenticated user.

- **Method:** POST
- **Endpoint:** `/api/post`
- **Request Headers:**
  - Content-Type: application/json
  - Authorization: Bearer `<access_token>` (Include a valid access token obtained during user authentication)

## Get All Posts by Query

### Get All Post by Query

This endpoint retrieves all posts related to a specific topic. The topic is extracted from the request query parameters.

- **Method:** GET
- **Endpoint:** `/api/post/`
- **Request Parameters:**
  - Query Parameters:
    - topic (string): The topic for which posts are to be retrieved.

## Update Post

### Update Post

This endpoint allows the owner of a post to update its details. The post ID is extracted from the request parameters.

- **Method:** PUT
- **Endpoint:** `/api/post/:id`
- **Request Parameters:**
  - Path Parameters:
    - :id (string): The ID of the post to be updated.

## Delete Post

### Delete Post

This endpoint allows the owner of a post to delete it. The post ID is extracted from the request parameters.

- **Method:** DELETE
- **Endpoint:** `/api/post/:id`
- **Request Parameters:**
  - Path Parameters:
    - :id (string): The ID of the post to be deleted.

## Get Post by ID

### Get Post by id

This endpoint retrieves the details of a specific post based on the provided post ID. The post ID is extracted from the request parameters.

- **Method:** GET
- **Endpoint:** `/api/post/:id`
- **Request Parameters:**
  - Path Parameters:
    - :id (string): The ID of the post to be retrieved.

## Create Reaction

### Create Reaction

This endpoint allows users to create, update, or remove reactions (likes/dislikes) on a specific post. The post ID is extracted from the request parameters, and the type of reaction is obtained from the request body.

- **Method:** POST
- **Endpoint:** `/api/post/:id`
- **Request Parameters:**
  - Path Parameters:
    - :id (string): The ID of the post to be reacted to.
- **Request Body:**
  - type (string): The type of reaction, either 'like' or 'dislike'.

## Get All Reactions

### Get All Reactions

This endpoint retrieves the list of reactions (likes/dislikes) associated with a specific post. The post ID is extracted from the request parameters.

- **Method:** GET
- **Endpoint:** `/api/post/list/:id`
- **Request Parameters:**
  - Path Parameters:
    - :id (string): The ID of the post to retrieve reactions for.

## Create Comment

### Create Comment

This endpoint allows users to create comments on a specific post. The post ID is extracted from the request parameters, and the comment body is obtained from the request body.

- **Method:** POST
- **Endpoint:** `/api/post/:id`
- **Request Parameters:**
  - Path Parameters:
    - :id (string): The ID of the post to comment on.
- **Request Body:**
  - body (string): The content of the comment.

## Update Comment

### Update Comment

This endpoint allows users to update a specific comment on a post. The post ID and comment ID are extracted from the request parameters.

- **Method:** PUT
- **Endpoint:** `/api/post/comment/:id/:commentId`
- **Request Parameters:**
  - Path Parameters:
    - :id (string): The ID of the post containing the comment.
    - :commentId (string): The ID of the comment to be updated.
- **Request Body:**
  - body (string): The new content of the comment.

## Delete Comment

### Delete Comment

This endpoint allows users to delete a specific comment on a post. The post ID and comment ID are extracted from the request parameters.

- **Method:** DELETE
- **Endpoint:** `/api/post/comment/:id/:commentId`
- **Request Parameters:**
  - Path Parameters:
    - :id (string): The ID of the post containing the comment.
    - :commentId (string): The ID of the comment to be deleted.

## Get All Comments

### Get All Comments

This endpoint retrieves all comments for a specific post. The post ID is extracted from the request parameters.

- **Method:** GET
- **Endpoint:** `/api/post/list/:id`
- **Request Parameters:**
  - Path Parameters:
    - :id (string): The ID of the post for which comments are to be retrieved.

