

const Book = ({book}) => {
    const {image,author_name,discount,isNew,name,rating,quantity,price} = book;

    return (
        <div>
            <img src={image} alt="" />
        </div>
    );
};

export default Book;