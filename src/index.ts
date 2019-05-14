import app from "./app";
import { connect } from "./db";
import { waterfall, AsyncResultCallback } from "async";

const tasks: Function[] = [
    //1th connect mongodb
    (done: Function): void => connect(done),
    //2d Run Express.js server
    (done: Function): void => app.run(done)
  ],
  callback: AsyncResultCallback<any, any> = (error, result) => {
    if (error) {
      console.error(error);
    }
    console.log(`Server ready at http://localhost:${app.port}/ 🚀`);
  };

waterfall(tasks, callback);
