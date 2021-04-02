import axios from 'axios'

const API_URL = 'https://yts.mx/api/v2/list_movies.json'

export const getMovies = async(limit = 10, minimum_rating = 0) => {
    return await axios.get(`${API_URL}?limit=${limit}&minimum_rating=${minimum_rating}`)
        .then(res => res.data.data.movies)
}