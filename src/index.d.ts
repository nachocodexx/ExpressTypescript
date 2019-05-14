import { Router } from "express";

export interface Routes {
  name: string;
  routes: Router;
}
