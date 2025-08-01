import * as http from "http";
import * as dotenv from "dotenv";
import {getListEpisodes} from "./controllers/podcasts_controller";

const server = http.createServer( async (req: http.IncomingMessage,
    res: http.ServerResponse) => {
        if(req.method === 'GET'){
            await getListEpisodes(req, res);
        }
    }
);

dotenv.config();
const port = process.env.PORT;

server.listen(port, () =>{
    console.log(`Servidor iniciado na porta ${port}`);
});

