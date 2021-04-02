import  * as db from '../../dbs/api_db'

const resolver = {
    Query : {
        movies: (_, {limit, minimum_rating}) => db.getMovies(limit, minimum_rating)
    }
}

export default resolver