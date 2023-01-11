import loginUser from "../loginUser";

export const getPlaces = (params: string) => `*[_type == "places"]{_id, location, ${params}}`
export const getPlace = (slug:string) => `*[_type == "places" && slug.current == '${slug}'][0]`
export const getCountries = `*[_type == "countries"]{_id, title}`
export const getUsers = `*[_type == "users"]`
export const getUser = (params:string) => `*[_type == "users" && _id == '${loginUser._id}'][0]${params}`