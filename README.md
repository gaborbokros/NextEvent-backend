# 📌 NextEvent

**🚧 This application is under development 🚧**

## ✒️ About the project

This is the backend side of an event management application. In this app, users will be able to create their own accounts, organize events, subscribe to events, and view past events they have attended or created. Additionally, they will be able to write reviews about the events, which will help increase the organizers’ reputation. It’s a perfect application for hosting house parties, organizing spontaneous gatherings, and even selling concert tickets.

## 🪲 Error Handler

This is an `Express.js`-based error handler. In the `next()` function, a new `AppError` class must be defined, which optionally expects 3 parameters: `message`, `statusCode`, and `data`.

```js
next(new AppError(message, statusCode, data));
```

## 🛠️ Tech Stack

- **Backend:**
  - **Node.js** – JavaScript runtime environment
  - **Express.js** – Web application framework for Node.js
- **Database:**
  - **MongoDB** – NoSQL database for storing application data
  - **Mongoose** – ODM library for MongoDB
- **Utilities:**
  - **Dotenv** – Loads environment variables from a .env file
  - **Cors** – Enables Cross-Origin Resource Sharing for API access
- **Dev Dependencies:**
  - **Nodemon** - Monitors files and restarts the server on changes
