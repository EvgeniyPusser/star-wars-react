import { useEffect, useState } from "react";

const StarWars = () => {
    const [movie, setMovie] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {


        fetch("https://api.themoviedb.org/3/movie/11", {
            headers: {
                Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZjc1ODg3MjQ4OGUxODkwMDhkNWUxMzE3OTgwNjE3NCIsIm5iZiI6MTc0MzAxNTY4MC4zMTUsInN1YiI6IjY3ZTQ0ZjAwOTVhNzRhZmE1YzhlN2Y5NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.h52U0xYIcIVPuuMMqT0QSAG5w2Tp8BvVgKAhLP5NlIY",
                "Content-Type": "application/json"
            }
        })
            .then(res => res.json())
            .then(data => setMovie(data))
            .catch(err => console.error(err));
    }, []);


    if (error) return <h2>Error: {error}</h2>;
    if (!movie) return <h2>Loading...</h2>;

    return (
        <div style={{padding: "40px"}}>
            <h1>{movie.title}</h1>

            <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                style={{width: "300px", margin: "20px 0"}}
            />

            <p><strong>Release date:</strong> {movie.release_date}</p>
            <p><strong>Rating:</strong> {movie.vote_average}</p>
            <p style={{maxWidth: "700px", margin: "20px auto"}}>
                {movie.overview}
            </p>
        </div>
    );

};
export default StarWars;

