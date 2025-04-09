# 💸 Expense Tracker MERN Backend

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)

> This is a powerful and secure backend for an Expense Tracker application built using **Node.js**, **Express**, and **MongoDB**. It includes full authentication, file upload support, and API routes for managing incomes and expenses.

## 🚀 Features

- User authentication with **JWT**
- Password hashing using **bcryptjs**
- RESTful APIs for income and expense management
- File uploads with **Multer**
- XLSX file export support
- Secure and efficient MongoDB integration using **Mongoose**
- Environment variable support using **dotenv**
- CORS enabled for frontend integration
- Tested with **Postman**

## 🛠️ Tech Stack

- **Node.js**
- **Express.js**
- **MongoDB** + **Mongoose**
- **JWT** (jsonwebtoken)
- **bcryptjs**
- **multer**
- **xlsx**
- **dotenv**
- **CORS**
- **Nodemon** (for development)

## 📁 Project Structure

```
Expense-Tracker-MERN-Backend/
├── config/
├── controllers/
├── models/
├── routes/
├── middleware/
├── uploads/
├── .env
├── server.js
├── package.json
└── README.md
```

## ⚙️ Installation

```bash
git clone https://github.com/itz-Hiru/Expense-Tracker-MERN-Backend.git
cd Expense-Tracker-MERN-Backend
npm install
```

## 📄 Environment Variables

Create a `.env` file in the root and add the following:

```env
PORT=3000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```

## 🧪 Running the Server

```bash
# Development mode
npm run dev
```

## 🧾 API Endpoints

### 🔐 Authentication
- `POST /v1/auth/register` – Register a new user
- `POST /v1/auth/login` – Login existing user
- `GET /v1/auth/get/user` – Get user details

### 🖼 Image Uploading Routes
- `POST /v1/auth/uploads/image` – Upload a new profile picture

### 💰 Income Routes
- `POST /income/add` – Add income
- `GET /income/get` – Get all incomes
- `DELETE /income/delete/:id` – Delete an income
- `GET /income/get/download` – Download income data in excel sheet

### 💸 Expense Routes
- `POST /expense/add` – Add expense
- `GET /expense/get` – Get all expenses
- `DELETE /expense/delete/:id` – Delete an expense
- `GET /expense/get/download` – Download expense data in excel sheet

### 📊 Reports
- `GET /dashboard/stats` – Get income/expense stats

> ✅ All protected routes require a valid JWT token in the `Authorization` header.

## 📦 File Uploads

> File uploads (like profile images) are handled via **Multer** and stored in the `/uploads` folder.

## 📬 Postman Collection

> You can test all endpoints using Postman.

## 🔐 Security

- Passwords are hashed before saving
- Routes are protected using JWT
- Environment variables are used for secrets

## 🧑‍💻 Author

- **Hirumitha Kuladewa**
- [itz-Hiru](https://github.com/itz-Hiru)

## 📄 License

This project is licensed under the MIT License.

