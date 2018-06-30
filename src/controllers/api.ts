import {Request,Response} from 'express'
import {createUser} from '../db/user_helpers'
import { IUserDocument } from '../models/interfaces/user';

export function getUser(req:Request,res:Response):Response{

    return res.status(200).json({
        firstName:'Nacho',
        lastName:'Castillo',
        age:20
    })
}


export  async function signUp(req:Request,res:Response):Promise<any>{
    
    try {
        const user:IUserDocument=await createUser(req.body)
        console.log(user);
        return res.status(200).json(user)

    } catch (error) {
        
    }
    
    
    // const user=new User(data)
    // console.log(data);
    // console.log(user);
    
    
    

}