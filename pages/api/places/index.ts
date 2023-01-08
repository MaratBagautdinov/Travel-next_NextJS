import {IPlace} from "../../../types/place";
import tokyo from '../../../images/tokyo.jpg'
import moscow from '../../../images/moscow.jpg'
import franche from '../../../images/Paris.jpg'
import germany from '../../../images/berlin.jpg'
import kazan from '../../../images/kazan.jpg'
import {NextApiRequest, NextApiResponse} from "next";
export const places:IPlace[] = [
    {
        id: 0,
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
        id: 1,
        location: {city: 'Moscow', country: 'Russia'},
        description: "Russian Vodka",
        distance: 122,
        duration: 15,
        googleMapLink: "",
        imageLink: moscow.src,
        rating: 5,
        mapImage: ""
    },
    {
        id: 2,
        location: {city: 'Kazan', country: 'Russia'},
        description: "Capital of Tatarstan Republic",
        distance: 122,
        duration: 15,
        googleMapLink: "",
        imageLink: kazan.src,
        rating: 5,
        mapImage: ""
    },
    {
        id: 3,
        location: {city: 'Paris', country: "Franche"},
        description: "Vodka",
        distance: 4222,
        duration: 8,
        googleMapLink: "",
        imageLink: franche.src,
        rating: 4,
        mapImage: " "
    },
    {
        id: 4,
        location: {city: 'Berlin', country: "Germany"},
        description: "Beer",
        distance: 5222,
        duration: 5,
        googleMapLink: "",
        imageLink: germany.src,
        rating: 5,
        mapImage: ""
    }
]

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    res.status(200).json(places)
}