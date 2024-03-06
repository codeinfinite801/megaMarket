import HomeOnline from "../../OnlineBook/HomeOnline";
import BestSeller from "../../BestSeller/BestSeller";
import TeenCategoryBook from "../../teenCategoryBook/TeenCategoryBook";
import DealsOfTheWeek from "../dealOfWeek/DealsOfWeek";
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
            <div className="mx-2">
                <Category></Category>
                <SuperStore></SuperStore>
                <AuthorCategory></AuthorCategory>
                <HomeOnline></HomeOnline>
                <ChildrenBook></ChildrenBook>
                <KidsProduct></KidsProduct>
                <TeenCategoryBook></TeenCategoryBook>
                <OfferBanner />
                <NewBooks />
                <FiftyPercentBooks />
                <BestSeller />
                <DealsOfTheWeek />
            </div>
            <MessengerCustomerChat
                pageId="248828441646086"
                appId="262374086807254"
            />
        </div>
    );
};

export default Home;