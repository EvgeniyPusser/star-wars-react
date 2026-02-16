const Contact = () => {
    return (
        <div style={{ padding: "40px" }}>
            <h2>Contact</h2>

            <p>
                If you want to join the Rebel Alliance,
                leave your message below.
            </p>

            <form style={{ display: "flex", flexDirection: "column", gap: "10px", maxWidth: "400px" }}>
                <input type="text" placeholder="Your Name" />
                <input type="email" placeholder="Your Email" />
                <textarea placeholder="Your Message" rows="4"></textarea>
                <button type="submit">Send</button>
            </form>
        </div>
    );
};

export default Contact;
