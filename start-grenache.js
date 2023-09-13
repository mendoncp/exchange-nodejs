import OrderController from "./order-controller.js";
import {startExpressServer} from "./server.js";
import {startGrapeClient}  from "./grape-client.js";
import {startGrapeServer} from "./grape-server.js";

const port = 1024 + Math.floor(Math.random() * 1000)
const orderController = new OrderController({ port })



const clientLink = startGrapeClient(orderController);

startGrapeServer(orderController)

startExpressServer();

process.on("uncaughtException", err => {
    console.log(err)
    clientLink.stop();
    process.exit(1)
});
