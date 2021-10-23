import { createServer } from "http";

import app from "./api/app";
import { PORT } from "./config";

(async () => {
    const server = createServer(app);

    server.listen(PORT, () => {
        console.log(`server is on port ${PORT}` );
    });
})();
