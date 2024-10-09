# To-Do List Application (MEAN Stack)

This is a simple To-Do List application built using the **MEAN (MongoDB, Express, Angular, Node.js)** stack for the backend. The application allows users to perform CRUD (Create, Read, Update, Delete) operations on tasks, with fields such as assigned users, status, due date, priority, and comments.

## Features

- **Create, Read, Update, Delete (CRUD)** operations for tasks.
- Task model with fields like `AssignedTo`, `Status`, `DueDate`, `Priority`, and `Comments`.
- Server-side validation using Mongoose.
- Modular structure with separate routes, controllers, models, and database configuration.
- Global error handling middleware for catching exceptions.

## Project Structure

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14+)
- [MongoDB](https://www.mongodb.com/) (either locally or using a cloud solution like MongoDB Atlas)

## Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/todo-app.git
   cd todo-app
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Set up MongoDB**:

   - You can either run MongoDB locally or use MongoDB Atlas.
   - If using MongoDB locally, make sure it’s running on `mongodb://localhost:27017/todo`.

4. **Start the server**:

   ```bash
   node server.js
   ```

5. The server will be running on `http://localhost:5000`. You can interact with the API using Postman or other API testing tools.

## API Endpoints

- **GET /api/tasks** - Get all tasks
- **POST /api/tasks** - Create a new task
- **PUT /api/tasks/:id** - Update an existing task by ID
- **DELETE /api/tasks/:id** - Delete a task by ID

### Sample Request

**POST /api/tasks**

```json
{
  "assignedTo": "User 1",
  "status": "In Progress",
  "dueDate": "2024-12-10",
  "priority": "Low",
  "comments": "This task is good"
}
```

### Sample Response

```json
{
  "_id": "5f8f8f8f8f8f8f8f8f8f8f8",
  "assignedTo": "User 1",
  "status": "In Progress",
  "dueDate": "2024-12-10T00:00:00.000Z",
  "priority": "Low",
  "comments": "This task is good",
  "createdAt": "2024-10-01T12:34:56.789Z",
  "updatedAt": "2024-10-01T12:34:56.789Z",
  "__v": 0
}
```

## Project Structure Explanation

- **`server.js`**: The entry point of the application, handles middleware, routing, and error handling.
- **`config/db.js`**: Configures and connects to the MongoDB database.
- **`models/Task.js`**: Defines the Mongoose schema for the `Task` object.
- **`controllers/taskController.js`**: Contains the logic for handling the CRUD operations for tasks.
- **`routes/taskRoutes.js`**: Defines the API routes and maps them to the corresponding controller functions.
- **`middlewares/errorHandler.js`**: Middleware for handling application-wide errors.

## Error Handling

All errors are caught and handled gracefully using the global error handler located in `middlewares/errorHandler.js`. The error handler returns a standard error response with a 500 status code and a descriptive message.

## Future Improvements

- **Frontend**: Integrate with Angular for a complete MEAN stack.
- **Authentication**: Add user authentication and authorization using JWT.
- **Search and Filter**: Add search and filter capabilities for tasks.
- **Pagination**: Implement pagination for large sets of tasks.

## Contributing

Feel free to fork the repository, make updates, and create pull requests if you want to contribute to this project.

## License

This project is open-source and available under the [MIT License](LICENSE).

---

This `README.md` will help anyone setting up the project and provide a clear overview of the application structure and API details. You can customize this further based on additional features you add to the project.
