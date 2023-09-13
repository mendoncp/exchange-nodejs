import { PeerRPCClient } from 'grenache-nodejs-http';
import Link from 'grenache-nodejs-link';

export  function startGrapeClient(orderController) {
    const link = new Link({
        grape: 'http://127.0.0.1:30001'
      })
      link.start()
    
      const peer = new PeerRPCClient(link, {})
      orderController.setClientPeer(peer)
      orderController.setClientLink(link)
      peer.init()
      return link;
 }   

