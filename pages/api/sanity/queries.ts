import loginUser from "@api/loginUser";

export const getPlaces = (params: string) => `*[_type == "places"]{_id, location, ${params}}`
export const getPlace = (slug:string) => `*[_type == "places" && slug.current == '${slug}'][0]`
export const getCountries = `*[_type == "countries"]`
export const getUsers = `*[_type == "users"]`
export const getUser = `*[_type == "users" && _id == '${loginUser}'][0]`