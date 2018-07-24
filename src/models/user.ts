import {Schema,model, SchemaOptions} from 'mongoose'
import {IUserDocument} from './interfaces/user'


const options:SchemaOptions={
    toJSON:{virtuals:true},
    toObject:{virtuals:true}
}

const UserSchema:Schema=new Schema({
    firstName:{type:String,required:true},
    lastName:{type:String,required:true},
    age:{type:Number,required:true}

},options)

UserSchema.virtual('fullname').get(function(){
    return `${this.firstName} ${this.lastName}`
})


UserSchema.pre('save',function(next:Function){    
    next()
})


export default model<IUserDocument>('User',UserSchema)
