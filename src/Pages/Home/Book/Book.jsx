

const Book = ({book}) => {
    const {image,author_name,discount,isNew,name,rating,quantity,price} = book;
    const discountedPrice = price - (price * discount) / 100;

    return (
        <div>
            <img className="w-[140px] h-[200px]" src={image} alt="" />
            <h2>{name}</h2>
            <h3>{author_name}</h3>
            <p>{rating}</p>
            <div>
                <p>TK.<span className="line-through">{price}</span></p>
                <p>{discount}</p>
                <p>{discountedPrice}</p>
            </div>
        </div>
    );
};

export default Book;