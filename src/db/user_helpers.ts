import {User} from '../models/user'
import { IUserModel,IUserDocument} from '../models/interfaces/user';

export function createUser(data:IUserModel):Promise<IUserDocument>{
    
    const user:IUserDocument=new User(data)

    return user.save().then(res=>res)   
}
