
import express, { json } from 'express'
const orderRoutes = require('./order-routes')


class AppError extends Error { }

export function startExpressServer() {

const app = express()

const port = 1024 + Math.floor(Math.random() * 1000)
app.use(json());

app.use((req, res, next) => {
    console.log(`\n🔵 ${port} :: ${req.method.toUpperCase()} ${req.originalUrl}`)
    next();
  });

  app.use("/order", orderRoutes);

  app.use("*", (req, res) => {
    res.status(404).send({ success: false, message: "Invalid route" })
  });

  app.use((error, req, res, next) => {
    console.log(`${port} :: ${error}`)
    if (error.name == "AppError") {
      res.status(400).send({ success: false, message: error.message })
    }
    else {
      res.status(500).send({ success: false, message: error.message })
    }
  });

  app.listen(port, () => {
    console.log(`\n🔵 ${port} :: API service is running...`)
  })
}



