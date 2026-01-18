📌 Project Title:

Contact Manager Backend API

🚀 Project Overview:

A backend REST API built using Node.js and Express.js that allows users to securely register, log in, and manage their personal contacts.
This project was built as a learning-by-building exercise to understand core backend development concepts.

💡 Motivation:

Before starting this project, I had zero practical knowledge of backend development.
I chose to learn backend concepts by building a real application instead of only watching tutorials.
This project helped me understand how server-side applications work in practice.


✨ Features


User registration and login


JWT-based authentication


Protected routes


Create, read, update, and delete contacts


Each contact is linked to the authenticated user


REST API design following best practices




🛠️ Tech Stack


Node.js


Express.js


MongoDB


Mongoose


JWT (JSON Web Tokens)


REST API




🔄 Application Workflow


User registers with email and password


User logs in and receives a JWT token


Token is required to access protected contact routes


Authenticated users can manage their own contacts


Server processes requests and returns JSON responses




📁 Project Structure

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




🔐 Authentication & Authorization


Authentication is handled using JWT


Middleware verifies tokens before accessing protected routes


Users can access and modify only their own contacts




📬 API Design (REST Convention)
The API follows REST principles:


GET → Fetch data


POST → Create data


PUT → Update data


DELETE → Remove data




🧪 API Testing


APIs were tested using tools like Postman / Thunder Client


Tested both success and error scenarios




📈 Learning Outcomes


Understood backend request–response flow


Learned REST API design


Gained hands-on experience with authentication


Improved understanding of MongoDB and Express




🚧 Future Improvements


Add input validation


Improve error handling


Add pagination for contacts


Add role-based access control



🙌 Acknowledgment
This project was built as part of my backend learning journey and helped me gain confidence in server-side development.

📄 License
This project is open-source and available for learning purposes.

