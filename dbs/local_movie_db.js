let movies = [
    {
        id: 1,
        name: 'man in black',
        author: 'idk',
        score: 1
    }
]

export const getMovies = () => movies

export const getMovieById = (movie_id) => movies.filter(movie => movie.id === movie_id)[0]

export const deleteMovie = (movie_id) => {
    const afterMovies = movies.filter(movie => movie.id !== movie_id)
    if(movies.length === afterMovies.length) {
        return false
    }else {
        movies = afterMovies
        return true
    }
}

export const addMovie = (name, score) => {
    const newMovie = {
        id: movies.length + 1,
        name: name,
        author: '',
        score: score
    }
    movies = movies.concat(newMovie)
    return newMovie
}