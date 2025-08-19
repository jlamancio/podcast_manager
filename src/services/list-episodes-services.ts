import { StatusCode } from "../enums/status-codes";
import { PodcastTransferModel } from "../models/filter-podcast-model";
import { repositoryPodcast } from "../repositories/podcasts-repository";

    
export const serviceListEpisodes = async (): Promise<PodcastTransferModel> => {
 
     let responseFormat: PodcastTransferModel = {
        statusCode: 0,
        body: [],
    }
    
    const data = await repositoryPodcast();
    
    responseFormat.statusCode = data.length !== 0 ? StatusCode.OK : StatusCode.NOCONTENT;
    
    responseFormat.body = data;

    return responseFormat

};

