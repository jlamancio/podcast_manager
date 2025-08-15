import * as http from "http"
import * as dotenv from "dotenv";

import { app } from "./app"

const server = http.createServer(app);

dotenv.config();
const port = process.env.PORT;

server.listen(port, () =>{
    console.log(`Servidor iniciado na porta ${ port }`);
});

