import { v4 } from 'uuid';

class Order {

    constructor({ price, qty, type, name }) {
        this.id = v4();
        this.price = price;
        this.qty = qty;
        this.type = type;
        this.name = name;
        this.status = status.ACTIVE;
}
}

const status = {
    ACTIVE: "active",
    COMPLETE: "complete",
};

const OrderAction  = {
    CREATE_ORDER: "create-order",
    CANCEL_ORDER: "cancel-order",
    GET_ORDERS: "get-orders",
}

export default {
Order,
status
}