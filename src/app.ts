import {Application} from 'express'
import routes from './routes/'
import {Routes} from './interfaces/'

 

import * as express from 'express'


class App {
    protected app:Application
    protected port:number
    protected hostname:string
    
    
    constructor(port:number,hostname:string){
        this.app=express()
        this.port=port
        this.hostname=hostname
        this.setConfig()
    }

    private setConfig():void{
        //Basic config
        this.app.use(express.json())
        this.app.use(express.urlencoded({extended:true}))
        this.app.set('port',this.port)
        this.app.set('hostname',this.hostname)

        //Routes
        this.setRoutes(routes)
    }

    private setRoutes(routes:Array<Routes>):void{
        routes.forEach(route=>{
            this.app.use(`/${route.name}`,route.routes)
        })
    }

    public run(done:Function):void{
        this.app.listen(this.port,this.hostname,(e:any):void=>{
            if(e){
                console.error(`ERROOOR! ${e}`);
            }
            console.log(`Server running on port ${this.port}`);
            done()
        })
    }


}

export default new App(7000,'0.0.0.0')