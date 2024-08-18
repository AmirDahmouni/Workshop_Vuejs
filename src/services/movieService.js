import axios from "axios"

export async function fetchMovies() {
  try {
    const result = await axios.get(
      "https://my-json-server.typicode.com/horizon-code-academy/fake-movies-api/movies"
    )
    return result.data.map((movie, index) => ({
      ...movie,
      id: index + 1,
      title: movie.Title,
      description: movie.Year,
    }))
  }
  catch (ex) {
    return []
  }
}