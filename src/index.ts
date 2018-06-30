

import server from './server'
import {connect} from './db/'
import {waterfall,AsyncResultCallback} from 'async'


const tasks:Array<Function>=[
    (done:Function):void=>connect(done),
    (done:Function):void=>server.run(done)
],
callback:AsyncResultCallback<any,any>=(error,result)=>{
    if(error){
        console.error(error);
    }
    console.log(`Works!`);
    
} 


waterfall(tasks,callback)