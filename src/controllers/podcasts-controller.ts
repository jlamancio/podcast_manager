import { IncomingMessage, ServerResponse } from "http";
import { serviceListEpisodes } from "../services/list-episodes-services";
import { serviceFilterEpisodes } from "../services/filter-episodes-services";
import { StatusCode } from "../enums/status-codes";
import { ContentType } from "../enums/content-type";


export const getListEpisodes = async (req: IncomingMessage,res: ServerResponse) => {

    const content = await serviceListEpisodes();
    
    res.writeHead(StatusCode.OK, {'content-type': ContentType.JSON});
    res.end(
        JSON.stringify(content));
};

export const getFilterEpisodes = async(req: IncomingMessage, res: ServerResponse) => {

    const content  = await serviceFilterEpisodes(req.url);

    res.writeHead(StatusCode.OK, {'content-type': ContentType.JSON});
    res.end(
        JSON.stringify(content));
};

