import { Application } from "express";
import routes from "./routes";
import { Routes } from "./index.d";
import cors from "./cors";

import * as express from "express";

class App {
  protected app: Application;
  public port: number;
  public hostname: string;
  public isRun: boolean;

  constructor(port: number, hostname: string) {
    this.isRun = false;
    this.app = express();
    this.port = port;
    this.hostname = hostname;
    this.setConfig();
  }

  private setConfig(): void {
    //Basic config
    this.app.use(express.urlencoded({ extended: false }));
    this.app.use(express.json());
    this.app.set("port", this.port);
    this.app.set("hostname", this.hostname);
    //CORS
    this.app.use(cors);

    //Routes
    this.setRoutes(routes);
  }

  private setRoutes(routes: Routes[]): void {
    routes.forEach(route => {
      this.app.use(`/${route.name}`, route.routes);
    });
  }

  private listenCallback(done: Function) {
    return (error: any) => {
      if (error) {
        done(null, new Error(error));
      }
      done(true);
      this.isRun = true;
    };
  }

  public run(done: Function): void {
    this.app.listen(this.port, this.hostname, this.listenCallback(done));
  }
}

export default new App(7000, "0.0.0.0");
