import { useNavigate } from "react-router-dom";

const items = [
    { label: "Home", path: "/" },
    { label: "About", path: "/About" },
    { label: "Star Wars", path: "/StarWars" },
    { label: "Contact", path: "/Contact" }
];

const Headers = () => {
    const navigate = useNavigate();

    return (
        <header>
            <nav>
                <ul>
                    {items.map((item, index) => (
                        <li
                            key={index}
                            className="button"
                            onClick={() => navigate(item.path)}
                            style={{ cursor: "pointer" }}
                        >
                            {item.label}
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

export default Headers;

