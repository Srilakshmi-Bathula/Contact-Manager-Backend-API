# 📌 Contact Manager Backend API

## 🚀 Project Overview
A backend REST API built using **Node.js** and **Express.js** that allows users to securely register, log in, and manage their personal contacts.  
This project was built as a learning-by-building exercise to understand core backend development concepts.

---

## 💡 Motivation
Before starting this project, I had **zero practical knowledge of backend development**.  
I chose to learn backend concepts by building a real application instead of only watching tutorials.  
This project helped me understand how server-side applications work in practice.

---

## ✨ Features
- User registration and login  
- JWT-based authentication  
- Protected routes  
- Create, read, update, and delete contacts  
- Each contact is linked to the authenticated user  
- REST API design following best practices  

---

## 🛠️ Tech Stack
- Node.js  
- Express.js  
- MongoDB  
- Mongoose  
- JWT (JSON Web Tokens)  
- REST API  

---

## 🔄 Application Workflow
1. User registers with email and password  
2. User logs in and receives a JWT token  
3. Token is required to access protected contact routes  
4. Authenticated users can manage their own contacts  
5. Server processes requests and returns JSON responses  

---

## 📁 Project Structure
```text
contact-manager-backend/
│
├── config/        → Database configuration
├── controllers/   → Business logic for users and contacts
├── middleware/    → Authentication and request handling
├── models/        → Database schemas
├── routes/        → API routes and endpoints
├── .env           → Environment variables
├── server.js      → Application entry point
└── README.md      → Project documentation
```
---

## 🔐 Authentication & Authorization
- Authentication is handled using **JWT (JSON Web Tokens)**
- A middleware verifies the token before allowing access to protected routes
- Users can only access, update, or delete their **own contacts**

---

## 📬 API Design (REST Convention)
The API follows REST principles to keep endpoints clean and predictable:

- **GET** → Fetch data  
- **POST** → Create data  
- **PUT** → Update data  
- **DELETE** → Remove data  

Each endpoint is designed to perform a single, clear responsibility.

---

## 🧪 API Testing
- APIs were tested using **Postman / Thunder Client**
- Tested both **successful responses** and **error scenarios**
- Verified authentication-protected routes using JWT tokens

---

## 📈 Learning Outcomes
- Understood backend request–response flow  
- Learned REST API design principles  
- Gained hands-on experience with authentication  
- Improved understanding of **Express.js** and **MongoDB**  
- Built confidence in backend development by building a real project  

---

## 🚧 Future Improvements
- Add input validation  
- Improve global error handling  
- Add pagination for contact lists  
- Implement role-based access control  

---

## 🙌 Acknowledgment
This project was built as part of my backend learning journey and helped me move from **zero backend knowledge** to building a complete REST API.

---

## 📄 License
This project is open-source and available for learning and educational purposes.

