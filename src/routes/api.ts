import { Router } from "express";
import { getUser, signUp, getUsers } from "../controllers/api";
const api = Router();

api.get("/users", getUsers);
api.get("/user/:_id", getUser);
api.post("/user", signUp);

export default api;
