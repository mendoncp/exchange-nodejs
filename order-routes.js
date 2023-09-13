import { Router } from "express";
import orderController from "./order-controller.js";


export const router = Router();

 router.get('/order/orderBook', async function(req, res){
    const result = await orderController.getOrderBook({ from: req.port })
    if (!result.success) throw new AppError("Error getting orders")
    res.status(200).send({ success: true, data: result })

 });

router.post('/order/createOrder', async function(req,res){
    const result = await orderController.createOrder(new Order({ price: req.body.price, qty: req.body.qty, type: req.body.type }));
    if (!result.success) throw new AppError("Error creating the order")
    res.status(200).send({ success: true, data: result.data })
      
    });
    
router.get('/order/viewOrders', async function(req,res){
    const result = await orderController.getOrders();
    if (!result.success) throw new AppError("Error gettting the orders")
    res.status(200).send({ success: true, data: result.data })
    });
    
router.get('/order/orderStatus', function(req,res){
        res.send('HELLO WORLD')
    });

    




