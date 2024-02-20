
const SingleSell = ({ sells }) => {
    const { _id, image, brand, discount, isNew, name, rating, quantity, price } = sells;
    return (
        <div>
            <h2>{image}</h2>
            <h2>{brand}</h2>
            <h2>{name}</h2>
        </div>
    );
};

export default SingleSell;