export interface favoritePlaces{
    [index:number]: number
}
export interface IUsers{
    id: number
    login: string
    password: string
    name: string
    logo: string
    favoritePlaces
}