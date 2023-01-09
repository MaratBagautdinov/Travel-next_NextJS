import {IPlace} from "@/types/place";
import tokyo from '../../../public/places/tokyo.jpg'
import moscow from '../../../public/places/moscow.jpg'
import franche from '../../../public/places/Paris.jpg'
import germany from '../../../public/places/berlin.jpg'
import kazan from '../../../public/places/kazan.jpg'
import {NextApiRequest, NextApiResponse} from "next";
export const places:IPlace[] = [
    {
        id: 0,
        location: {
            city: 'Tokyo',
            country:'Japan',
            coordinates: [0,1]
        },
        imageLink: tokyo.src,
        description: "Drift",
        rating: 3,
        duration: 10
    },
    {
        id: 1,
        location: {
            city: 'Moscow',
            country: 'Russia',
            coordinates: [0,1]
        },
        description: "Russian Vodka",
        duration: 15,
        imageLink: moscow.src,
        rating: 5,
    },
    {
        id: 2,
        location: {
            city: 'Kazan',
            country: 'Russia',
            coordinates: [0,1]
        },
        description: "Capital of Tatarstan Republic",
        duration: 15,
        imageLink: kazan.src,
        rating: 5,
    },
    {
        id: 3,
        location: {
            city: 'Paris',
            country: "France",
            coordinates: [0,1]
        },
        description: "Vodka",
        duration: 8,
        imageLink: franche.src,
        rating: 4,
    },
    {
        id: 4,
        location: {
            city: 'Berlin',
            country: "Germany",
            coordinates: [0,1]
        },
        description: "Beer",
        duration: 5,
        imageLink: germany.src,
        rating: 5
    }
]

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    res.status(200).json(places)
}