import "./About.css";
import { useEffect, useState } from "react";

const About = () => {

    // фон
    useEffect(() => {
        document.body.style.background =
            "radial-gradient(circle at top, #111 0%, #000 70%)";

        return () => {
            document.body.style.background = "";
        };
    }, []);

    const [person, setPerson] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("https://api.themoviedb.org/3/person/1", {
            headers: {
                Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZjc1ODg3MjQ4OGUxODkwMDhkNWUxMzE3OTgwNjE3NCIsIm5iZiI6MTc0MzAxNTY4MC4zMTUsInN1YiI6IjY3ZTQ0ZjAwOTVhNzRhZmE1YzhlN2Y5NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.h52U0xYIcIVPuuMMqT0QSAG5w2Tp8BvVgKAhLP5NlIY",
                "Content-Type": "application/json"
            }
        })
            .then(res => {
                if (!res.ok) throw new Error("Failed to fetch");
                return res.json();
            })
            .then(data => setPerson(data))
            .catch(err => setError(err.message));
    }, []);

    if (error) return <h2>Error: {error}</h2>;
    if (!person) return <h2>Loading...</h2>;

    return (
        <div className="starwars-page" style={{ padding: "40px" }}>
            <div className="starwars-container">
                <h1>{person.name}</h1>

                {person.profile_path && (
                    <img
                        src={`https://image.tmdb.org/t/p/w500${person.profile_path}`}
                        alt={person.name}
                        style={{ width: "400px", margin: "20px 0" }}
                    />
                )}

                <p><strong>Birthday:</strong> {person.birthday}</p>
                <p><strong>Popularity:</strong> {person.popularity}</p>
                <p style={{ maxWidth: "700px", margin: "20px auto" }}>
                    {person.biography}
                </p>
            </div>
        </div>
    );
};

export default About;

