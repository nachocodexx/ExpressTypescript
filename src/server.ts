import  App from './app'


class Server extends App{
    constructor(port:number,hostname:string='localhost'){
       super(port,hostname) 
       
    }
}


export default new Server(7000,'0.0.0.0')



