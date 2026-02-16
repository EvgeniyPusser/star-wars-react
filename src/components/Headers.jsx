const items = [
    { label: "Home", onClick: () => console.log("Home clicked") },
    { label: "About me", onClick: () => alert("About me page") },
    { label: "Star Wars", onClick: () => console.log("Star Wars") },
    { label: "Contact", onClick: () => console.log("Contact") }
];


const Headers = () => {
    return (
        <header>
            <nav>
                <ul>
                    {items.map((item, index) => (
                    <li
                        key = {index}
                        className = "button"
                        onClick={item.onClick}>
                        {item.label}
                    </li>
                        ))}
                </ul>
            </nav>

        </header>
    )
}

export default Headers
