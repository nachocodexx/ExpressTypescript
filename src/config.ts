export const PORT: number = parseInt(process.env.PORT) || 7000,
  URI: string = process.env.MONGODB_URI || "mongodb://localhost:27017/doalldb",
  MONGO_CONFIG: any = {
    user: "root",
    pass: "123456",
    auth: { authdb: "admin" }
  },
  SALT_FACTOR: number = 10,
  SECRET_TOKEN: string = "secret";
