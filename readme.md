
# 🚀 Node.js CRUD API with MongoDB & Express

This is a simple **CRUD (Create, Read, Update, Delete) API** built using **Node.js, Express, and MongoDB** with **Mongoose**.

---

## 📂 Project Structure

/nodeCrud │── /models │ ├── user.model.js │── /controllers │ ├── user.controller.js │── /routes │ ├── user.routes.js │── /config │ ├── db.js │── package.json │── .gitignore │── .env │── server.js (or app.js) │── README.md

yaml
Copy
Edit

---

## 🚀 Getting Started

### 1️⃣ Clone the repository
```sh
git clone <your-repo-url>
cd nodeCrud
2️⃣ Install Dependencies
sh
Copy
Edit
npm install
3️⃣ Set Up Environment Variables
Create a .env file and add:

plaintext
Copy
Edit
PORT=3000
MONGO_URI=mongodb://localhost:27017/mydatabase
4️⃣ Start the Server
sh
Copy
Edit
npm start
or

sh
Copy
Edit
node app.js
📌 API Endpoints
Method	Endpoint	Description
GET	/api/users	Get all users
GET	/api/users/:id	Get a user by ID
POST	/api/users	Add a new user
PUT	/api/users/:id	Update a user by ID
DELETE	/api/users/:id	Delete a user by ID
📦 Technologies Used
Node.js
Express.js
MongoDB & Mongoose
Dotenv (for environment variables)
Nodemon (for development)
📌 Author
Daniel Abera

📜 License
This project is MIT licensed.

markdown
Copy
Edit

---
### 🔹 **How to Use It**  
- Add your **MongoDB connection URI** inside `.env`.  
- Use **Postman** or **Thunder Client** to test API requests.  
- Run `npm start` to start the server.  

Let me know if you want any modifications! 🚀






