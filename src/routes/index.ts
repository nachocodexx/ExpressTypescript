import { Routes } from "../index.d";
import ApiRouter from "./api";

const routes: Routes[] = [{ name: "api", routes: ApiRouter }];

export default routes;
