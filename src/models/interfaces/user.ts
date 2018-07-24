import {Document} from 'mongoose'

export  interface IUserModel{
    firstName:string,
    lastName:string,
    age:number,
    fullName?:string
}
export interface IUserDocument extends Document,IUserModel{
    fullname?:string
}

