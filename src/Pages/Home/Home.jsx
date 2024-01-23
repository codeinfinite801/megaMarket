import AuthorCategory from "./AuthorCategory/AuthorCategory";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import ChildrenBook from "./ChildrenBook/ChildrenBook";
import KidsProduct from "./KidsProduct/KidsProduct";
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
                <KidsProduct></KidsProduct>
            </div>
        </div>
    );
};

export default Home;