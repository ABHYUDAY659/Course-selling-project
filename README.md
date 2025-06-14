# 🎓 Course Selling Platform API

A complete backend solution for a course-selling platform where:

- **Admins** can create and manage courses.
- **Users** can sign up, browse, and purchase those courses.

Built using Node.js, Express, MongoDB, and JWT authentication.

---

## 🚀 Features

### 👨‍🏫 Admin
- Signup & Signin with JWT
- Create new courses
- Update existing courses
- View all courses created by the admin

### 👩‍🎓 User
- Signup & Signin with JWT
- Browse all available courses
- Purchase any course
- View list of purchased courses

---

## 🛠️ Tech Stack

- **Node.js**
- **Express.js**
- **MongoDB** (via Mongoose)
- **JWT** (Authentication)


---

## 🔐 Authentication

- **JWT-based middleware** is used to protect routes.
- Admin and User have separate tokens.

---

## 📁 API Overview

### 🔑 Admin Routes

| Method | Endpoint              | Description               |
|--------|-----------------------|---------------------------|
| POST   | `/admin/signup`       | Admin registration        |
| POST   | `/admin/signin`       | Admin login (returns JWT) |
| POST   | `/admin/course`       | Create a course (auth)    |
| PUT    | `/admin/course`       | Update a course (auth)    |
| GET    | `/admin/course/bulk`  | Get all admin courses (auth) |

---

### 👤 User Routes

| Method | Endpoint             | Description                     |
|--------|----------------------|---------------------------------|
| POST   | `/user/signup`       | User registration               |
| POST   | `/user/signin`       | User login (returns JWT)        |
| GET    | `/course/preview`    | View all available courses      |
| POST   | `/course/purchase`   | Purchase a course (auth)        |
| POST   | `/user/purchases`    | View purchased courses (auth)   |

---



