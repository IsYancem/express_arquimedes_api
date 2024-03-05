"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const explicacionRoutes_1 = __importDefault(require("./routes/explicacionRoutes"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const roleRoutes_1 = __importDefault(require("./routes/roleRoutes"));
const temaRoutes_1 = __importDefault(require("./routes/temaRoutes"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use('/api', temaRoutes_1.default);
app.use('/api', roleRoutes_1.default);
app.use('/api', userRoutes_1.default);
app.use('/api', explicacionRoutes_1.default);
exports.default = app;
