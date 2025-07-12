# 🎥 Streaming App Backend

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4DB33D?style=for-the-badge&logo=mongodb&logoColor=white)
![Cloudinary](https://img.shields.io/badge/Cloudinary-3448C5?style=for-the-badge&logo=cloudinary&logoColor=white)

This is the backend for a full-stack video streaming platform. It provides RESTful APIs for user authentication, video uploading, and content interaction. Built with Express.js, MongoDB, and integrated with Cloudinary for media storage.

---

## 🚀 Features

- ✅ User Registration & Login (JWT Auth)
- 🔐 Protected Routes using middleware
- ☁️ Upload videos/images to Cloudinary via Multer
- 📦 MongoDB data storage with Mongoose
- 🔄 Paginated responses using aggregate pagination
- 🍪 Cookie support for session management
- 🧱 Scalable code structure (MVC)

---

## 🛠 Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB (Mongoose)
- **Authentication**: JWT, bcrypt
- **File Uploads**: Multer, Cloudinary
- **Dev Tools**: Nodemon, dotenv, Prettier

---

## 📁 Project Structure

```
streaming-app/
├── package.json                # Project metadata and dependencies
├── package-lock.json
├── Readme.md
├── public/
│   └── temp/
│       ├── portrait-lion-ai-generated_268835-4278.avif
│       └── ramaba.jpg
├── src/
│   ├── app.js                  # Express app initialization
│   ├── constants.js            # Constant values
│   ├── controllers/            # Route controllers
│   │   ├── comment.controller.js
│   │   └── user.controller.js
│   ├── db/
│   │   └── index.js            # MongoDB connection
│   ├── index.js                # Main entry point
│   ├── middlewares/           # Auth, file handling
│   │   ├── auth.middleware.js
│   │   └── multer.middleware.js
│   ├── models/                # Mongoose schemas
│   │   ├── comment.model.js
│   │   ├── like.model.js
│   │   ├── playlist.model.js
│   │   ├── subscriptions.models.js
│   │   ├── tweet.model.js
│   │   ├── user.model.js
│   │   └── video.model.js
│   ├── routes/
│   │   └── user.routes.js      # User-related endpoints
│   └── utils/                 # Utility functions
│       ├── ApiError.js
│       ├── Apiresponse.js
│       ├── asyncHandler.js
│       └── cloudinary.js
```

---

## 📦 Installation

1. **Clone the repo**
   ```bash
   git clone https://github.com/vkp000/streaming-app.git
   cd streaming-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Create `.env` file**
   ```env
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   CLOUDINARY_CLOUD_NAME=your_cloudinary_name
   CLOUDINARY_API_KEY=your_api_key
   CLOUDINARY_API_SECRET=your_api_secret
   ```

4. **Run the project**
   ```bash
   npm run dev
   ```

---

## 🧪 API Overview (Examples)

> Base URL: `http://localhost:5000/api/`

- `POST /auth/register` – Create new user  
- `POST /auth/login` – Authenticate user  
- `POST /videos/upload` – Upload new video (protected)  
- `GET /videos` – Get all videos (paginated)  
- `GET /videos/:id` – Get video by ID  

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork this repo  
2. Create a new branch (`git checkout -b feature-name`)  
3. Make your changes and commit (`git commit -m 'Add feature'`)  
4. Push to your branch (`git push origin feature-name`)  
5. Open a Pull Request  

---

## 🧑‍💻 Author

**Vivek Prajapat**  
[GitHub Profile](https://github.com/vkp000)

---

## 📄 License

Licensed under [ISC License](https://opensource.org/licenses/ISC)
