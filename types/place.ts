type TLocation = {
    country: string
    city: string
}

export interface IPlace{
    slug: string
    location: TLocation
    imageLink: string
    description: string
    rating: 1 | 2 | 3 | 4 | 5
    duration: number
    distance: number
    googleMapLink: string
    mapImage: string
}
export interface ICountries{
    id:number
    location: string
}