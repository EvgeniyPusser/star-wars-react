const items = [
    {label: "Home"},
    {label: "About me"},
    {label: "Star Wars"},
    {label: "Contact"}
]

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
