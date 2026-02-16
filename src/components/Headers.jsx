const items = [
    { label: "Home" },
    { label: "About" },
    { label: "Star Wars" },
    { label: "Contact" }
];


const actions = {
    Home: () => console.log("Open Home"),
    About: () => console.log("Open About"),
    "Star Wars": () => console.log("Open Star Wars"),
    Contact: () => console.log("Open Contact"),
};

const handleClick = (name) => {
    actions[name]?.();
};



const Headers = () => {
    return (
        <header>
            <nav>
                <ul>
                    {items.map((item, index) => (
                    <li
                        key = {index}
                        className = "button"
                        onClick={() => handleClick(item.label)}>
                        {item.label}
                    </li>
                        ))}
                </ul>
            </nav>

        </header>
    )
}

export default Headers
