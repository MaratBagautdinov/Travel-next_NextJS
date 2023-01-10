import {users} from "../../pages/api/users";
import {number} from "prop-types";


export interface IFavoritePlaces{
    [index:number]: number
}
export interface IUsers{
    id: number
    login: string
    password: string
    name: string
    logo: string
    favoritePlaces: IFavoritePlaces
}