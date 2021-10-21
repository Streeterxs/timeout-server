import { createServer } from "http";

import app from "./app";

(async () => {
    const server = createServer(app.callback());

    server.listen('3233', () => {
        console.log('server is on');
    });
})();
