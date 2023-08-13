const BASE_URL = "https://pokeapi.co/api/v2/pokemon/"

const fetchAll = async () => {
    const response = await axios.get(BASE_URL) 
    const results = response.data.results
    let details = []
    for(const result of results){        
        let detailsResponse = await axios.get(result.url)
        details.push(detailsResponse.data)
    }
    return details
}

export {fetchAll}