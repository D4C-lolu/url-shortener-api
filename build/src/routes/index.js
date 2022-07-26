"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var shortUrl_controller_1 = require("../controllers/shortUrl.controller");
var validateResource_1 = __importDefault(require("../middleware/validateResource"));
var createShortUrl_schema_1 = __importDefault(require("../schemas/createShortUrl.schema"));
function routes(app) {
    app.get("/health-check", function (req, res) {
        return res.send("Don't you forget about me");
    });
    app.post("/api/url", (0, validateResource_1.default)(createShortUrl_schema_1.default), shortUrl_controller_1.createShortUrl);
    app.get("/:shortId", shortUrl_controller_1.handleRedirect);
    app.get("/api/analytics", shortUrl_controller_1.getAnalytics);
    app.get("/api/url/:shortId", shortUrl_controller_1.getShortUrl);
}
exports.default = routes;
