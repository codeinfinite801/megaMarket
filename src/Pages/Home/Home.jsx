import BestSeller from "../../BestSeller/BestSeller";
import TeenCategoryBook from "../../teenCategoryBook/TeenCategoryBook";
import AuthorCategory from "./AuthorCategory/AuthorCategory";
import Banner from "./Banner/Banner";
import FiftyPercentBooks from "./Books/FiftyPercentOfferBook/FiftyPercentBooks";
import Category from "./Category/Category";
import ChildrenBook from "./ChildrenBook/ChildrenBook";
import KidsProduct from "./KidsProduct/KidsProduct";
import NewBooks from "./NewPublisherBooks/NewBooks";
import OfferBanner from "./OfferBanner/OfferBanner";
import SuperStore from "./SuperStore/SuperStore";
import MessengerCustomerChat from 'react-messenger-customer-chat';

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
                <TeenCategoryBook></TeenCategoryBook>
                <OfferBanner />
                <NewBooks />
                <FiftyPercentBooks />
                <BestSeller />
            </div>
            <MessengerCustomerChat
                pageId="116564461307986"
                appId="776261943865528"
                htmlRef="<REF_STRING>"
            />
        </div>
    );
};

export default Home;