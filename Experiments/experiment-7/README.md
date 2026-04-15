# 🔐 Experiment 7 – Role-Based Authorization (RBAC) using Spring Boot

## 📌 Objective

To implement Role-Based Authorization (RBAC) in a Spring Boot backend using Spring Security, ensuring secure access to APIs based on user roles.

---

## 🛠️ Technologies Used

* Spring Boot
* Spring Security
* Spring Data JPA
* H2 Database
* Postman (for API testing)

---

## 🔑 Features Implemented

* User registration with encrypted passwords
* Authentication using Spring Security (Basic Auth)
* Role-based access control (USER and ADMIN)
* Protected REST APIs based on roles
* Proper HTTP responses (200, 401, 403)

---

## 👥 Roles

* **ROLE_USER** → Can access `/user` endpoint
* **ROLE_ADMIN** → Can access `/admin` endpoint

---

## 🔗 API Endpoints

* `POST /auth/register` → Register new user
* `GET /user` → Accessible by USER
* `GET /admin` → Accessible by ADMIN

---

## 🧪 Testing (Postman)

The application was tested using Postman:

* USER successfully accessed `/user` (200 OK)
* USER denied access to `/admin` (403 Forbidden)
* ADMIN successfully accessed `/admin` (200 OK)
* Requests without authentication returned (401 Unauthorized)

---

## 📸 Screenshots

Screenshots demonstrating authentication and authorization are included in the `screenshots` folder:

* User registration request
* Successful USER access
* Forbidden access (USER → ADMIN)
* Unauthorized request (no login)

---

## 📁 Project Structure

The project follows a clean layered architecture:

* `entity` → Database models
* `repository` → Data access layer
* `service` → Business logic
* `controller` → API endpoints
* `config` → Security configuration

---

## ✅ Conclusion
This experiment successfully demonstrates the implementation of RBAC using Spring Boot and Spring Security. It ensures secure API access by restricting endpoints based on user roles and properly handling unauthorized and forbidden requests.

This experiment successfully demonstrates the implementation of RBAC using Spring Boot and Spring Security. It ensures secure API access by restricting endpoints based on user roles and properly handling unauthorized and forbidden requests.
