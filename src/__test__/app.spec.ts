import request from 'supertest';
import app from '../app'

describe('Run app',()=>{
    it('should test app is running',(done)=>{
        app.run(()=>{
            expect(app.isRun).toBeTruthy()       
            done()
        })
    })


})