import Luke from '../assets/Images/main.jpg'

const Frame = () => {
    return (
        <>
        {/*<h1>Luke Skywalker</h1>*/}
            <h1>
                <span className="left-part">Sky</span>
                <span className="right-part">walker</span>
            </h1>

            <section className="left">
            <img src={Luke} alt="Luke Skywalker" />
        </section>
        </>
    )
}

export default Frame

