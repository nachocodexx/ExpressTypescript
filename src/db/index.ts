import { URI, MONGO_CONFIG } from "../config";
import * as mongoose from "mongoose";

export function connect(done: Function): void {
  mongoose
    .connect(URI, MONGO_CONFIG)
    .then((): void => done())
    .catch((e: any): void => done(e));
}
