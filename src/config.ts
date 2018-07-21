export default {
    PORT:process.env.PORT || 7000,
    URI: process.env.MONGODB_URI || 'mongodb://localhost:27017/doalldb',
    MONGO_CONFIG:{
        user:'admin',
        pass:'123456',
        auth:{authdb:'admin'}
    },
    SALT_FACTOR:10,
    SECRET_TOKEN:'secret'


}



