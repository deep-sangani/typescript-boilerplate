"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Routes {
    constructor(app) {
        app.get('/', (req, res) => {
            res.json({ name: "deep" });
        });
    }
}
exports.default = Routes;
