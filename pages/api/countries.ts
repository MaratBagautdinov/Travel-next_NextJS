import {NextApiRequest, NextApiResponse} from "next";
import {ICountries} from "@/types/place";

const Countries:ICountries[] = [
    {
        id:1,
        location:'Germany'
    },
    {
        id:2,
        location:'franche'
    },
    {
        id:3,
        location:'Russia'
    },
    {
        id:4,
        location:'Japan'
    }
]
export default function handlerCountries(req: NextApiRequest, res: NextApiResponse){
    res.status(200).json(Countries)
}