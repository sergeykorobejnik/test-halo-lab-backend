"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const mongoose_1 = __importDefault(require("mongoose"));
const config_1 = __importDefault(require("config"));
const products_route_1 = __importDefault(require("./routes/products.route"));
const PORT = process.env.PORT || config_1.default.get("port");
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use('/api/products', products_route_1.default);
async function runServer() {
    try {
        await mongoose_1.default.connect(config_1.default.get("mongoUri"));
        app.listen(PORT, () => console.log("SERVER RUNNING AT:" + PORT));
    }
    catch (e) {
        console.log(e.message);
    }
}
runServer();
//# sourceMappingURL=index.js.map