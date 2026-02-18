import { useState } from "react";

const Footer = () => {

    const [status, setStatus] = useState("");

    const handleClick = async () => {

        const res = await fetch("https://formspree.io/f/mjgeogar", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                email: "site@auto-message.com",
                message: "User clicked Send me email button"
            })
        });

        if (res.ok) {
            setStatus("Message sent 🚀");
        } else {
            setStatus("Error sending message ❌");
        }
    };

    return (
        <footer>
            <div
                className="button footer-button"
                onClick={handleClick}
                style={{ cursor: "pointer" }}
            >
                Send me email
            </div>

            {status && (
                <p style={{ textAlign: "center", marginTop: "10px" }}>
                    {status}
                </p>
            )}
        </footer>
    );
};

export default Footer;
