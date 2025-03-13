# Express CRUD API

## Overview
This is a simple **CRUD (Create, Read, Update, Delete) API** built using **Node.js, Express, and MongoDB**. It allows users to perform basic operations on a database.

## Features
- **Create** a new user
- **Read** all users or a specific user
- **Update** user details
- **Delete** a user
- Uses **MongoDB** as the database
- Follows **MVC architecture**

## Tech Stack
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (Mongoose ODM)
- **Version Control:** Git & GitHub

## Project Structure
```
/express-crud
│── /src
│   ├── /constants  # HTTP Status Codes
│   ├── /controllers # Business logic
│   ├── /models  # Mongoose models
│   ├── /routes  # API routes
│   ├── /config  # Database connection
│   ├── app.js  # Main Express App
│   ├── server.js  # Server setup
│── .gitignore
│── README.md
│── package.json
│── package-lock.json
```

## Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/dani-dina/express-crud.git
   ```
2. Navigate to the project directory:
   ```sh
   cd express-crud
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Create a **.env** file and add your MongoDB connection string:
   ```env
   MONGO_URI=your_mongodb_connection_string
   PORT=3000
   ```

## Usage
### Run the development server
```sh
npm start
```

## API Endpoints
| Method | Endpoint          | Description               |
|--------|------------------|---------------------------|
| GET    | /api/users       | Get all users             |
| GET    | /api/users/:id   | Get a specific user by ID |
| POST   | /api/users       | Add a new user            |
| PUT    | /api/users/:id   | Update user details       |
| DELETE | /api/users/:id   | Delete a user             |

## Contributing
Feel free to contribute by forking the repository and submitting a pull request.

## License
This project is licensed under the MIT License.

---

Happy coding! 🚀

