import { Request, Response } from "express";
import shortUrl from "../models/shortUrl.model";

import analytics from "../models/analytics.model";

export async function createShortUrl(req: Request, res: Response) {
  const { destination } = req.body;

  const shortURL = await shortUrl.create({ destination });

  return res.send(shortURL);
}

export async function handleRedirect(req: Request, res: Response) {
  const { shortId } = req.params;
  const short = await shortUrl.findOne({ shortId: shortId }).lean();
  if (!short) {
    return res.status(404);
  }

  analytics.create({ shortUrl: short._id });
  return res.redirect(short.destination);
}

export async function getAnalytics(req: Request, res: Response) {
  const data = await analytics.find({}).lean();

  return res.send(data);
}

export async function getShortUrl(req: Request, res: Response) {
  const { shortId } = req.params;
  const short = await shortUrl.findOne({ shortId }).lean();

  if (!short) {
    return res.status(404);
  }

  return res.json(short);
}
