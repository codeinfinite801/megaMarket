import TeenCategoryBook from "../../teenCategoryBook/TeenCategoryBook";
import AuthorCategory from "./AuthorCategory/AuthorCategory";
import Banner from "./Banner/Banner";
import FiftyPercentBooks from "./Books/FiftyPercentOfferBook/FiftyPercentBooks";
import Category from "./Category/Category";
import ChildrenBook from "./ChildrenBook/ChildrenBook";
import NewBooks from "./NewPublisherBooks/NewBooks";
import OfferBanner from "./OfferBanner/OfferBanner";
import SuperStore from "./SuperStore/SuperStore";



const Home = () => {
    return (
        <div className="bg-[#cc00ff21]">
            <Banner></Banner>
            <div className="mx-5">
                <Category></Category>
                <SuperStore></SuperStore>
                <AuthorCategory></AuthorCategory>
                <ChildrenBook></ChildrenBook>
                <OfferBanner/>
                <NewBooks/>
                <FiftyPercentBooks/>
                <TeenCategoryBook></TeenCategoryBook>
            </div>
        </div>
    );
};

export default Home;