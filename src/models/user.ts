import * as mongoose from 'mongoose'
import {IUserDocument} from './interfaces/user'



const UserSchema:mongoose.Schema=new mongoose.Schema({
    firstName:{type:String,required:true},
    lastName:{type:String,required:true},
    age:{type:Number,required:true}

})

UserSchema.methods.fullName=function():string{
    return `${this.firstName} ${this.lastName}`
}

UserSchema.pre('save',function(next:Function){
    console.log("FAKE SAVED!");
    
    next()

})


export const User:mongoose.Model<IUserDocument>= mongoose.model<IUserDocument>('User',UserSchema)
