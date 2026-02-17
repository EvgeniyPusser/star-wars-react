import React from 'react';

const Joke = () => {
    return (
        <div style={{
            minHeight: "100vh",
            padding: "60px 20px",
            background: "radial-gradient(circle at top, #222 0%, #000 80%)",
            color: "#eedb00",
            textAlign: "center"
        }}>
            <h1 style={{ fontSize: "3em" }}>Jedi Debugging Center</h1>

            <p style={{ fontSize: "1.4em", marginTop: "30px" }}>
                Why did Anakin Skywalker cross the road?
            </p>

            <p style={{
                fontSize: "1.8em",
                marginTop: "20px",
                fontWeight: "bold"
            }}>
                To get to the Dark Side.
            </p>

            <button
                onClick={() => alert("You have been recruited by the Empire.")}
                style={{
                    marginTop: "40px",
                    padding: "10px 20px",
                    borderRadius: "10px",
                    background: "#eedb00",
                    border: "none",
                    cursor: "pointer"
                }}
            >
                Click for a secret
            </button>


            <p style={{ marginTop: "50px", fontSize: "1.2em" }}>
                💻 There is no try… only console.log().
            </p>

            <p style={{ marginTop: "20px" }}>
                The bug is strong with this one.
            </p>
        </div>
    );
};

export default Joke;
