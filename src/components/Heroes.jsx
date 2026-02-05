import heroes from '../data/heroes.js';

const Heroes = () => {
    return (
        <section className="right">
            <h2>Dream team</h2>

            {heroes.map((img, i) => (
                <img
                    key={i}
                    src={img}
                    alt="Friend"
                    className={
                        i === 6 ? 'rounded-bottom-left'
                            : i === 8 ? 'rounded-bottom-right'
                                : ''
                    }
                />
            ))}
        </section>
    )
}

export default Heroes;
