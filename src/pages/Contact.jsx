import "./Contact.css"
import { useState } from "react";
import "./Contact.css";

const Contact = () => {
    const [caught, setCaught] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();   // ❗ чтобы страница не перезагружалась
        setCaught(true);
    };

    return (
        <div className="contact-page">
            <div className="contact-card">
                <h2>Contact</h2>

                <p>
                    If you want to join the Rebel Alliance,
                    leave your message below.
                </p>

                <form className="contact-form" onSubmit={handleSubmit}>
                    <input type="text" placeholder="Your Name" />
                    <input type="email" placeholder="Your Email" />
                    <textarea placeholder="Your Message" rows="4"></textarea>
                    <button type="submit">Send</button>
                </form>

                {caught && (
                    <div className="caught-message">
                        😈 Ты попался!
                    </div>
                )}
            </div>
        </div>
    );
};

export default Contact;


