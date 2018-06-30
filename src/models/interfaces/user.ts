import * as mongoose from 'mongoose'

export  interface IUserModel{
    firstName:string,
    lastName:string,
    age:number,
    fullName?:string
}

export type IUserDocument = IUserModel & mongoose.Document

