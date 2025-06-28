# 🏠 HouseHunt – House Rent App (MERN)

*HouseHunt* is a full-stack rental property web application built using the MERN (MongoDB, Express.js, React, Node.js) stack. It empowers **renters**, **property owners**, and **admins** with robust tools to manage listings, bookings, and user verification—making real estate transactions efficient and transparent.

- **Demo Video**: [Watch Here](https://drive.google.com/file/d/1f1BBHRYQVZ-jrV5SnkTRqG8XMmhBvIuU/view?usp=sharing)  
- **Codebase**: [GitHub Repo](https://github.com/adarshmane146/APSCHE-HouseRent.git)  
- **Documentation**: [Google Drive](https://docs.google.com/document/d/1DodrC8Prv6yLmyhvcMUDVQ-urdn0e3dk/edit?usp=sharing&ouid=100801760646947143760&rtpof=true&sd=true)

---

## ⚙️ Features

### 🧑‍💼 User Roles

- **Renter**:  
  - Browse all listed properties  
  - View detailed property info and owner contact  
  - Submit booking requests  
  - View booking history and status

- **Owner**:  
  - Requires admin approval to become active  
  - Add, update, and delete property listings  
  - Change availability and booking status of properties

- **Admin**:  
  - Approves owner accounts  
  - Oversees all users and properties  
  - Enforces platform policies

#### 🔐 Authentication & Security

- JWT-based login/signup  
- Role-based access (Renter / Owner / Admin)  
- Bcrypt for password hashing  
- Environment-based secret management using `.env`

#### 🏘 Property Features

- Advanced property search with filters  
- Image & video support  
- Virtual tours and floor plans  
- Neighborhood insights and market trends  
- Property alerts for new listings or price drops

---

## ☁️ Tech Stack

### Frontend

- **React.js**
- **Ant Design**, **Bootstrap**, **Material UI**
- **Axios** for HTTP requests
- **Moment.js** for date/time formatting
- **React Router**, **React-Bootstrap**, **MDB UI Kit**

### Backend

- **Node.js**, **Express.js**
- **MongoDB** with **Mongoose**
- **Multer** for media handling
- **JWT**, **Bcrypt**, **dotenv**
- **Cors**, **Morgan**, **Cookie-parser**

---

## 📦 Project Structure

```bash
APSCHE-HouseRent/
    └── backend/    # Express REST API
    └── frontend/   # React client app
    └── README.md
```

- **frontend/**: UI components, pages, API integration, routing
- **backend/**: Express routes, auth logic, controllers, MongoDB models

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/awdhesh-student/house-rent.git
cd house-rent
```

### 2. Backend Setup

```bash
cd backend
npm install

cp .env.sample .env
# Add:
# MONGO_URI, JWT_SECRET

npm start
```

### 3. Frontend Setup

```bash
cd ../frontend
npm install

cp .env.sample .env
# Set REACT_APP_API_URL=http://localhost:3000 (or your backend)

npm start
```

### 4. Access in Browser

Open: [http://localhost:3000](http://localhost:3000)

---

## 📚 Usage Guide

- **Renter:** Register, browse properties, send booking requests

- **Owner:** Request admin approval, post/edit/delete listings

- **Admin:** Approve owners, monitor activity, manage the platform

---

## 🛠 Prerequisites

[Node.js & npm](https://nodejs.org/en/download/)

[MongoDB](https://www.mongodb.com/try/download/community)

[React.js](https://reactjs.org/)

[Git](https://git-scm.com/downloads)

---

## ✨ Milestones

| Milestone  | Description |
| ------------- | ------------- |
| Milestone 1  | Project setup, library installation, folder structure  |
| Milestone 2  | Backend development: Express server, MongoDB schemas, auth middleware  |
| Milestone 3  | Database design: renter, owner, booking schemas  |
| Milestone 4  | Frontend development: React app, Ant Design, routing, state management  |
| Milestone 5  | Integration: API connection, property UI, booking dashboard  |

---

## 🤝 Contribution Guide

We welcome contributions!

- Improve UI and accessibility

- Add property filters, booking history, or notifications

- Extend admin dashboard or integrate maps

- Add unit tests and CI/CD

Please fork the repo and submit a pull request, or open an issue for feature discussions.

---

## 📄 License & Maintainer

- License: MIT

- Maintainer: Awdhesh

- Contact: [See Drive Docs](https://drive.google.com/drive/folders/1kwxxRrI5wgcQRtwyOBilhcP6h2L56YSb?usp=sharing)

---

## 🔮 Future Scope

- 🔎 Search with maps & geolocation

- 📊 Analytics for owners/admins

- 💬 Real-time chat between renters and owners

- 📅 Booking calendar view

- 🧠 AI-driven property recommendations

- 🏆 Gamification and leaderboard for top renters or properties

---

## ✅ Summary

HouseHunt simplifies renting homes with a modern full-stack approach:

- Scalable and real-time MERN architecture

- Practical feature set for real-world real estate use

- Modular design with scope for extension

- Ideal for personal portfolios, hackathons, or launching an MVP

---
