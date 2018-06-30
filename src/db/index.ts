import {promisifyAll} from 'bluebird'
import {default as config} from '../config'
const mongoose = promisifyAll(require('mongoose'))

export function connect(done:Function):void{
    mongoose.connect(config.URI,config.MONGO_CONFIG)
        .then(():void=>done())
        .catch((e:any):void=>done(e))
}