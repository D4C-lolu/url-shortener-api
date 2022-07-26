import { Express, Request, Response } from "express";
import {
  createShortUrl,
  handleRedirect,
  getAnalytics,
  getShortUrl,
} from "../controllers/shortUrl.controller";
import validateResource from "../middleware/validateResource";
import shortUrlSchema from "../schemas/createShortUrl.schema";

export default function routes(app: Express) {
  app.get("/health-check", (req: Request, res: Response) => {
    return res.send("Don't you forget about me");
  });

  app.post("/api/url", validateResource(shortUrlSchema), createShortUrl);

  app.get("/:shortId", handleRedirect);

  app.get("/api/analytics", getAnalytics);

  app.get("/api/url/:shortId", getShortUrl);
}
