import { Router, Request, Response } from "express";

const packageObj = require("../../package.json");

export default () => {
  let api = Router();

  // perhaps expose some API metadata at the root
  api.get("/", (req: Request, res: Response) => {
    res.json({ version: packageObj.version });
  });

  return api;
};
