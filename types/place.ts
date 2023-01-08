export interface IPlace{
    id: number
    location: {
        country: string
        city: string
    }
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
