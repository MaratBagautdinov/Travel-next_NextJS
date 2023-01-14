export const getPlaces = (params: string) => `*[_type == "places"]{_id, location, ${params}}`
export const getPlace = (slug:string) => `*[_type == "places" && slug.current == '${slug}'][0]`

const setPlaceFav = (placeID:string, subscribers) => {
    const mutations = [{
        "patch": {
            "id": `${placeID}`,
            "set": {
                "subscribers": [...subscribers]
            },
        }
    }]

    fetch(`https://6n813327.api.sanity.io/v2021-06-07/data/mutate/production`, {
        method: 'post',
        headers: {
            'Content-type': 'application/json',
            Authorization: `Bearer skUl6egNczkA3O5h1krBAJnnY3yEYrO3f9mqFymTo8zVcPNRjgt77mlvFHGCPAEItAphQbnplLEifkzMx2MPPvXnQ3Tf9I1JQyVYr5AwyFbWlAyFKoMoX3DeUmYEU3Q5fcPb9Pq3SgLTWmxO5K1kSq85WVQGd1sEO1DqPXpIgBOZwgrNNQlK`
        },
        body: JSON.stringify({mutations})
    })
        .then(response => response.json())
}
export const addPlace = (placeID:string, userLogin:string, initSubscribers:[type:string]) =>{
    setPlaceFav(placeID, [...initSubscribers, userLogin])
}

export const delPlace = (placeID:string, userLogin:string, initSubscribers:[type:string]) =>{
    setPlaceFav(placeID, initSubscribers.filter(login => login !== userLogin))
}
