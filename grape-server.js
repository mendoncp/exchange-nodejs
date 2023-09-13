import { PeerRPCServer } from 'grenache-nodejs-http';
import Link from 'grenache-nodejs-link';

export function startGrapeServer(orderController){

    const link = new Link({
        grape: 'http://127.0.0.1:30001'
      })
      link.start()
    
      const peer = new PeerRPCServer(link, { timeout: 300000 })
      orderController.setServerPeer(peer)
      orderController.setServerLink(link)
      peer.init()

      const service = peer.transport('server')
      service.listen(orderController.port)
      console.log(`${orderController.port} :: EXHANGE HAS STARTED`)
    
      setInterval(function () {
        link.announce("exchange", service.port, {})
        console.log('the Exchange Port is:', service.port);
      }, 1000)
    
      service.on('request', async (rid, key, payload, handler) => {  
        console.log(rid, key, payload,  handler);
        await orderController.requestHandler(payload, handler.reply)
      })
    }
