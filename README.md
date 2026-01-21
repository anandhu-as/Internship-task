,
Typen.io — CRUD App with Authentication
Overview

Typen.io is a React-based CRUD application where users can create, view, edit, and delete posts. The app uses Firebase for authentication and Firestore as a backend database.

It demonstrates modern frontend development with protected routes, responsive UI, and secure user actions.

Features
Authentication

Users can log in using Google authentication.

Only authenticated users can create, edit, or delete posts.

User sessions are managed securely by Firebase.

CRUD Operations

Create Post: Authenticated users can create a post with a title and content.

Read Posts: All users (logged in or not) can view all posts.

Update Post: Authenticated users can edit only their own posts.

Delete Post: Authenticated users can delete only their own posts.

Dashboard

Protected routes ensure that post management features are accessible only after login.

Smooth inline editing directly on the Home page.

Responsive UI built with TailwindCSS.

Tech Stack

Frontend: React.js, TailwindCSS

Authentication: Firebase Google Auth

Database: Firebase Firestore

Routing: React Router
