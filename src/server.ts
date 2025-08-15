import * as http from "http";
import * as dotenv from "dotenv";
import {getFilterEpisodes, getListEpisodes} from "./controllers/podcasts-controller";
import { Routes } from "./routes/routes";
import { HttpMethod } from "./enums/http-methods";

const server = http.createServer( async (request: http.IncomingMessage,
    response: http.ServerResponse) => {

        const [baseUrl, queryString] = request.url?.split("?") ?? [","];

        if(request.method === HttpMethod.GET && baseUrl === Routes.LIST){
            await getListEpisodes(request, response);
        }

        if(request.method === HttpMethod.GET && baseUrl === Routes.EPISODE){
            await getFilterEpisodes(request, response);
            
         }
    }
);                                                              

dotenv.config();
const port = process.env.PORT;

server.listen(port, () =>{
    console.log(`Servidor iniciado na porta ${ port }`);
});

