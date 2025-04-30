# 🌱 EcoHub – Sustainable Shopping Made Simple

**EcoHub** is an eco-friendly eCommerce platform built with the MERN stack (MongoDB, Express.js, React.js, Node.js), designed to promote sustainable shopping. It connects eco-conscious consumers with verified green products while offering a sleek, modern shopping experience.

> 💡 Final Year Project – BS Information Technology  
> Govt. Graduate College for Women, Wahdat Colony, Lahore  
> Developed by: Maham Nasim Durani

---

## 🛠️ Tech Stack

- **Frontend:** React.js, Redux, Tailwind CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB + Mongoose
- **Authentication:** JWT
- **Payments:** Stripe API
- **Deployment:** Vercel (Frontend), Render/Heroku (Backend - optional)
- **Version Control:** Git & GitHub

---

## 🚀 Features

- 🔐 **User Authentication** with email/password & Google login
- 🛍️ **Eco-Friendly Product Marketplace** with listings & filtering
- 🛒 **Shopping Cart** with live price updates
- 💳 **Secure Checkout** with Stripe integration
- 📦 **Order Tracking** & Notifications
- 🧾 **Ratings & Reviews** for verified buyers
- 🧠 **Admin Dashboard** for managing users, orders & products
- 💬 **Real-Time Chat via WhatsApp** with Admin
- 🔔 **Email Notifications** for orders & updates

---

## 📸 Screenshots

> Add your UI screenshots here — Home Page, Product Detail, Cart, Checkout, Admin Dashboard, etc.

---

## 📁 Project Structure

```
EcoHub/
├── client/             # Frontend (React + Tailwind)
├── server/             # Backend (Express + MongoDB)
├── .env                # Environment variables
├── .gitignore
├── package.json
└── README.md
```

---

## 📦 Installation

1. **Clone the repo**
   ```bash
   git clone https://github.com/your-username/eco-hub.git
   cd eco-hub
   ```

2. **Install frontend & backend dependencies**
   ```bash
   cd client
   npm install
   cd ../server
   npm install
   ```

3. **Set up environment variables**

   Create a `.env` file inside the `server/` directory:

   ```
   MONGO_URI=your_mongo_connection_string
   JWT_SECRET=your_jwt_secret_key
   STRIPE_SECRET=your_stripe_secret
   ```

4. **Run the project locally**

   In two terminals:

   ```bash
   # Frontend
   cd client
   npm run dev

   # Backend
   cd server
   npm start
   ```

---

## 🔐 Environment Variables

Required in `server/.env`:

- `MONGO_URI` – your MongoDB connection string
- `JWT_SECRET` – secret key for JWT authentication
- `STRIPE_SECRET` – Stripe secret key for payments

---

## ✅ Project Goals

- Build a scalable eco-friendly e-commerce platform
- Ensure secure, intuitive user experience
- Promote transparency in sustainable product choices

---

## 🧪 Future Improvements

- AI-based personalized product recommendations
- Integration with shipping APIs for real-time delivery tracking
- Admin analytics dashboard
- Mobile app version

---

## 📄 License

This project is for academic use only. For inquiries, please contact the project authors.

---

## 🌐 Live Demo

> Coming soon on [Vercel](https://vercel.com) – stay tuned!

---
