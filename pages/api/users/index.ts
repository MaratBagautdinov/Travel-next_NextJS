import {NextApiRequest, NextApiResponse} from "next";
import {IFavoritePlaces, IUsers} from "@/types/users";
import marat from '../../../public/users/marat.jpg'
import stepan from '../../../public/users/stepan.jpg'
export const users:IUsers[] = [
    {
        id: 0,
        login:'Marat',
        password: '0000',
        name: 'Marat',
        logo: marat.src,
        favoritePlaces: [0,1]
    },
    {
        id: 1,
        login:'Stepan',
        password: '1111',
        name: 'Stepan',
        logo: stepan.src,
        favoritePlaces:[2,1],
    },
]

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    res.status(200).json(users)
}