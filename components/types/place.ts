export interface ILocation {
    country: string
    city: string
    coordinates: [number, number]
}
export interface IPlace{
    id: number
    location: ILocation
    imageLink: string
    description: string
    rating: 1 | 2 | 3 | 4 | 5
    duration: number
}
export interface ICountries{
    id:number
    location: string
}
