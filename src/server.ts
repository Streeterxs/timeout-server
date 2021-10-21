import { createServer } from "http";

import app from "./api/app";

(async () => {
    const server = createServer(app);

    server.listen('3233', () => {
        console.log('server is on');
    });
})();
