import {Router} from 'express'
import {getUser,signUp} from '../controllers/api'
const api = Router()


api.get('/user/:_id',getUser)
api.post('/user',signUp)

export default api