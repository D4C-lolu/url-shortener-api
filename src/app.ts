import express from "express";
import config from "config";
import routes from "./routes";
import bodyParser from "body-parser";
import db from "./db";
import cors from "cors";

const app = express();
app.use(
  // cors({
  //   origin: config.get("corsOrigin"),
  // })

  cors({
    origin: ["https://guileless-cajeta-89c9b1.netlify.app/"],
    methods: ["GET", "POST"],
    credentials: true,
  })
);
const port = config.get("port");

//parse application/json
app.use(bodyParser.json());

app.listen(port, () => {
  console.log("App is up");
  db();
  routes(app);
});
