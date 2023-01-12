export interface ILocation {
    country: string
    city: string
}
export interface IPlace{
    _id: string
    slug: {current:string}
    location: ILocation
    imageLink: string
    description: string
    rating: 1 | 2 | 3 | 4 | 5
    duration: number
    subscribers: [type:string]
}

