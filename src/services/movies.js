const baseUrl = 'https://api.themoviedb.org/3/search/movie?api_key='
const apiKey = 'b7d4916d0799dfce932437fe9f242f2c'


export default class API{
    getMovies(title, year){
        return new Promise((resolve, reject)=>{
            fetch(baseUrl + apiKey + '&language=en-US&query=' + title + '&page=1&include_adult=false', {
                method: 'GET'
            })
                .then(response => response.json())
                .then(result => {
                    let resultArray = result.results
                    if(year){
                        let filterDate = new Date(year + '-12-31')
                        resultArray = result.results?.filter((movie)=>{
                            let movieDate = new Date(movie.release_date)
                            return (filterDate > movieDate)
                        })
                    }
                    console.log(resultArray)
                    resolve(resultArray)
                })
                .catch((error)=>{reject(new Error(error.message))})
        })
    }
}

// b7d4916d0799dfce932437fe9f242f2c
// REVIEW: Esta es la API key de movie database
// ENDPOINTS: https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=en-US&query=<<titulo>>&page=1&include_adult=false
// DOCUMENTACIÓN: https://developers.themoviedb.org/3/search/search-movies
// TODO: Implementar llamada a la API usando fetch
