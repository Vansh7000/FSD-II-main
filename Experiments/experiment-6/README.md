**Experiment 6: JWT Authentication Implementation**

1 : In this experiment a backend authentication system was implemented using **Node.js and Express.js** with **JWT (JSON Web Token)** for secure user authentication and 
session management. The main objective was to allow users to log in, generate a JWT token upon successful authentication, and use that token to access protected routes.

2 : A proper project structure was followed to organize the application. The root folder **experiment6** contains the main configuration files such as `package.json`, `.env`
,and the `src` directory. Inside the `src` folder, different components of the application were separated into folders such as **controller**, **middleware**, **routes**, 
and **models** to maintain a modular and maintainable codebase.

3 : The **controller** folder contains the authentication logic that handles login requests and generates a JWT token using the `jsonwebtoken` library. The **middleware**
folder contains a token verification middleware that checks whether the provided JWT token is valid before granting access to protected routes. The **routes** folder defines
the API endpoints such as `/login` and `/protected`. The **models** folder contains a simple user model used for authentication. The `server.js` file initializes the Express
server and connects all routes and middleware.

4 : The application was tested using **Postman**. First, a login request was sent with valid credentials to receive a JWT token. Then the token was added in the **Authorization
header using Bearer Token format** to access a protected API route. If the token was missing or invalid, the system returned an error response such as **403 Forbidden or 401
Unauthorized**, demonstrating proper token validation.

**Folder Structure:**

experiment6
│
├── src
│   ├── controller
│   │   └── authController.js
│   ├── middleware
│   │   └── authMiddleware.js
│   ├── routes
│   │   └── authRoutes.js
│   ├── models
│   │   └── userModel.js
│   └── server.js
│
├── .env
├── package.json
└── README.md

This experiment helped in understanding how **JWT-based authentication works, how tokens are generated and verified, and how protected routes are secured in backend applications**.
