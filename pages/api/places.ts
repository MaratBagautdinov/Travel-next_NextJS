import {IPlace} from "../../components/types/place";
import {NextApiRequest, NextApiResponse} from "next";

const Places:IPlace[] = [
    {
        slug: "Tokyo",
        location: "string",
        imageLink: "string",
        description: "drift",
        rating: 1,
        duration: "string",
        distance: 3243,
        googleMapLink: "string",
        mapImage: "string"
    },
    {
        slug: "Russia",
        description: "vodka",
        distance: 122,
        duration: "string",
        googleMapLink: "",
        imageLink: "",
        rating: 5,
        location: "string",
        mapImage: ""
    }
]
export default function handler(req: NextApiRequest, res: NextApiResponse){
    res.status(200).json(Places)
}