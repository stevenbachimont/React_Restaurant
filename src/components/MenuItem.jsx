
import { useState } from "react";

function MenuItem({ itemName, description, foodImage, price, isFavorite }) {
    const [favorite, setFavorite] = useState(isFavorite);

    const toggleFavorite = () => {
        setFavorite(!favorite);
    };

    return (
        <section className="itemContainer">
            <figure className="imgContainer">
                <img src={foodImage} alt="Food from the restaurant" />
                <figcaption>
                    <h2>{itemName}</h2>
                    <p>{description}</p>
                </figcaption>
            </figure>
            <span>{price} EUR</span>
            <button onClick={toggleFavorite}>
                {favorite ? "🖤": "❤️"}
            </button>
        </section>
    );
}

export default MenuItem;
