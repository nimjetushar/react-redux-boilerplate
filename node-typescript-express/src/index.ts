import http from "http";
import express from "express";
import cors from "cors";
import morgan from "morgan";
import bodyParser from "body-parser";
import { AddressInfo } from "net";
import compression from "compression";
import helmet from "helmet";

import { config } from "./config";

import initializeDb from "./db";
import api from "./controllers";

let app = express();
const server = http.createServer(app);

// logger
app.use(morgan("dev"));

// 3rd party middleware
app.use(
  cors({
    exposedHeaders: config.corsHeaders
  })
);

app.use(
  bodyParser.json({
    limit: config.bodyLimit
  })
);

app.use(compression());
app.use(helmet());

// connect to db
initializeDb(config).then(db => {
  // api router
  app.use("/api", api());

  server.listen(config.port, () => {
    const serverDetail = server.address() as AddressInfo;
    console.log(`Started on port ${serverDetail.port}`);
  });
});

export default app;
export const appServer = server;
