import Frame from "../components/Frame";
import Heroes from "../components/Heroes";
import Story from "../components/Story";
import Footer from "../components/Footer";
import Headers from "../components/Headers";


const Home = () => {
    return (
        <main>
            <Headers/>
            <Frame />
            <Heroes />
            <Story />
            <Footer />

        </main>
    );
};

export default Home;
