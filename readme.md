# Todo Task API

REST API with Express and MongoDB.

## 1. Project Tree

```bash
|- node_modules
|- src
|   |- db
|   |  |- database.js
|   |- routes
|   |  |- task.js
|   |- server.js
|- .env
|- .gitignore
|- package-lock.json
|- package.json
|- readme.md
```

## 2. Project Requirements

- Node.js (v18.12.1 was the version used to build this project).
- MongoDB database server.
- Postman.

## 3. Project Setup

In order to execute the application the following steps are necessary:

1. Install node.js dependencies. Make sure to execute this command in the project root directory.

   ```bash
   $ npm install
   ```

2. Environment variables setup. Create .env file in the root directory project and define the variables needed to connect to the MongoDB server.

   ```env
   DB_CONNECTION="database conexion string goes here"
   ```

3. Turn on MongoDB Server. [Documentation](https://www.mongodb.com/basics/get-started).
4. Run the project. Make sure to execute this command in the project root directoty.

   ```bash
   $ npm run start
   ```

Terminal output: App listening on port 4000.
