import mongoose from "mongoose";
import config from "config";

async function db() {
  const dbUri = config.get("dbUri") as string;
  try {
    await mongoose.connect(dbUri).then(() => {
      console.log("DB is connected .");
    });
  } catch (e) {
    console.error(e);
  }
}

export default db;
