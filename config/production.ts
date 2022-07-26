export default {
  port: 5000,
  dbUri: process.env.MONGO_URL || "mongodb://localhost:27017/url-shorterner",
  corsOrigin: process.env.CLIENT_IP || "http://localhost:3000",
};
