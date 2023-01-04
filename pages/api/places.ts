import {IPlace} from "../../types/place";
import {NextApiRequest, NextApiResponse} from "next";
import tokyo from '../../images/tokyo.jpg'
import moscow from '../../images/moscow.jpg'
import franche from '../../images/franche.jpg'
const Places:IPlace[] = [
    {
        slug: "Tokyo",
        location: {city: 'Tokyo',country:'Japan'},
        imageLink: tokyo.src,
        description: "Drift",
        rating: 3,
        duration: 10,
        distance: 3243,
        googleMapLink: "string",
        mapImage: "string"
    },
    {
        slug: "Moscow",
        location: {city: 'Moscow', country: 'Russia'},
        description: "Vodka",
        distance: 122,
        duration: 15,
        googleMapLink: "",
        imageLink: moscow.src,
        rating: 5,
        mapImage: ""
    },
    {
        slug: "Paris",
        location: {city: 'Paris', country: "Franche"},
        description: "Vodka",
        distance: 4222,
        duration: 8,
        googleMapLink: "",
        imageLink: franche.src,
        rating: 4,
        mapImage: ""
    }
]
export default function handler(req: NextApiRequest, res: NextApiResponse){
    res.status(200).json(Places)
}