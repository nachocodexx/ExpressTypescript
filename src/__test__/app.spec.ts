import request from 'supertest';
import app from '../app'
import {connect} from '../db/'

describe('Run app',()=>{
    
    // beforeAll(()=>{
    //     connect(()=>{
    //         console.log("A HUEVO!");
    //         app.run(()=>{
    //             console.log("RUNNING!");
                
    //         })
            
    //     })
    // })

    it('should test app is running',(done)=>{
        return app.run((x)=>{
            console.log(`OLAAA ${x}`);
            
            expect(x).toBeTruthy() 
            done()
        })
        


    })


})