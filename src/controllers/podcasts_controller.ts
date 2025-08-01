import { IncomingMessage, ServerResponse } from 'http';


export const getListEpisodes = async (
    req: IncomingMessage, 
    res: ServerResponse
) => {
    res.writeHead(200, {'content-type': 'application/json'});
    res.end(
        JSON.stringify([
        {
            podcastName: "Flow",
            episodeName: "Lucia Helena Galvão - Flow #467",
            videoId: "TECEWo71Qjc",
            coverImage: "https://i.ytimg.com/vi/TECEWo71Qjc/maxresdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAy-SnhfOi22wWCi77e7xh3tdYLew",
            linkName: "https://www.youtube.com/watch?v=TECEWo71Qjc&t=21s",
            categories: ["saúde", "bodybuilder"]
        },
         {
            podcastName: "Flow",
            episodeName: "Renan Santos - Flow #472",
            videoId: "K4IxPBLZKoI",
            coverImage: "https://i.ytimg.com/vi/K4IxPBLZKoI/maxresdefault.jpg?sqp=-oaymwEnCPYBEIoBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCKXQrFbMPSCCwy6NIUQseP6-mrXg",
            linkName: "https://www.youtube.com/watch?v=K4IxPBLZKoI",
            categories: ["política"]
        }
    ]
)
)};
