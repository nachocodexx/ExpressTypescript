import { Request, Response } from "express";
import { userHelpers } from "../helpers/user.helpers";

export function getUser(req: Request, res: Response): Response {
  return res.status(201).json({
    firstName: "Nacho",
    lastName: "Castillo",
    age: 20
  });
}

export async function signUp(req: Request, res: Response): Promise<any> {
  try {
    console.log(req.body);
    const user = await userHelpers.create(req.body);
    return res.status(201).json(user);
  } catch (error) {
    return res.status(201).send(error);
  }
}

export async function getUsers(req: Request, res: Response) {
  return res.status(201).json(await userHelpers.getAllUsers());
}
