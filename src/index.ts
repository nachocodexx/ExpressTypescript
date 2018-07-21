

import server from './server'
import {connect} from './db/'
import {waterfall,AsyncResultCallback} from 'async'


const tasks:Function[]=[
    //1th connect mongodb 
    (done:Function):void=>connect(done),
    //2d Run Express.js server 
    (done:Function):void=>server.run(done)
],
callback:AsyncResultCallback<any,any>=(error,result)=>{
    if(error){
        console.error(error);
    }
    console.log(`Works!`);
    
} 


waterfall(tasks,callback)