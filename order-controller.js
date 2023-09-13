
class OrderController {

     orderBook = {
        buy: {},
        sell: {},
        ordersCompleted: []
      }
      clientPeer = null
      serverPeer = null
      clientLink = null
      serverLink = null
    
      constructor({ port }) {
        this.port = port
      }
    
      setClientPeer(clientPeer) {
        this.clientPeer = clientPeer
      }
    
      setServerPeer(serverPeer) {
        this.serverPeer = serverPeer
      }

      setClientLink(clientLink) {
        this.clientLink = clientLink
      }

      setServerLink(setServerLink) {
        this.serverLink = this.serverLink
      }
    
      async createOrder(req,res) {
        const { type = null, id = null } = data
        if (!this.orderBook[type] || this.orderBook[type][id]) return { success: false }
        this.orderBook[type][id] = data;
        await this.sendMessage(OrderAction.CREATE_ORDER, data)
        return { success: true, data }
      }

      async getOrders(req,res) {
            if (!this.orderBook[type] || !this.orderBook[type][id])
              return { success: false }
            return { success: true, data: this.orderBook}
      }
      


      async requestHandler(payload, reply) {
        switch (payload.action) {
          case OrderAction.CREATE_ORDER:
            this.newOrder(payload, reply)
            break;
          case OrderAction.GET_ORDERS:
            this.getOrderBook(payload, reply)
            break;
          case OrderAction.CANCEL_ORDER:
            this.deleteOrder(payload, reply)
            break;
          default:
            console.log(`${port} :: Invalid requestH`, payload.action);
        }
      }
    }

    export default OrderController;