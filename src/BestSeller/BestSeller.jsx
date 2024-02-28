import { useState } from "react";
import Popular from "../Pages/PlaceOrder/Popular";
import NewBooks from "../Pages/Home/NewPublisherBooks/NewBooks";
import FeatureProduct from "./FeatureProduct";

const BestSeller = () => {

    const [activeTab, setActiveTab] = useState('#styled-profile');

    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
    };

    return (
        <div className="py-20 bg-white">
            <div>
                <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
                    <ul className="flex flex-wrap -mb-px text-sm font-medium text-center justify-center" id="default-styled-tab" role="tablist">
                        <li className="me-2" role="presentation">
                            <button
                                className={`inline-block p-4 border-b-2 text-3xl rounded-t-lg ${activeTab === '#styled-profile' ? 'text-[#ef4444] hover:text-[#ef4444]dark:text-[#ef4444] dark:hover:text-[#ef4444] border-[#ef4444] dark:border-[#ef4444]' : 'text-gray-500 hover:text-gray-600 dark:text-gray-400 border-gray-100 hover:border-gray-300 dark:border-gray-700 dark:hover:text-gray-300 text-3xl'}`}
                                id="profile-styled-tab"
                                onClick={() => handleTabClick('#styled-profile')}
                                type="button"
                                role="tab"
                                aria-controls="profile"
                                aria-selected={activeTab === '#styled-profile'}
                            >
                                Best Sellers
                            </button>
                        </li>
                        <li className="me-2" role="presentation">
                            <button
                                className={`inline-block p-4 border-b-2 text-3xl rounded-t-lg ${activeTab === '#styled-dashboard' ? 'text-[#ef4444] hover:text-[#ef4444] dark:text-[#ef4444] dark:hover:text-[#ef4444] border-[#ef4444] dark:border-[#ef4444]' : 'hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 text-3xl'}`}
                                id="dashboard-styled-tab"
                                onClick={() => handleTabClick('#styled-dashboard')}
                                type="button"
                                role="tab"
                                aria-controls="dashboard"
                                aria-selected={activeTab === '#styled-dashboard'}
                            >
                                Featured Products
                            </button>
                        </li>

                    </ul>
                    <div id="default-styled-tab-content">
                        <div
                            className={`p-4 rounded-lg bg-gray-50 dark:bg-gray-800 ${activeTab === '#styled-profile' ? '' : 'hidden'}`}
                            id="styled-profile"
                            role="tabpanel"
                            aria-labelledby="profile-tab"
                        >
                            <Popular></Popular>
                        </div>
                        <div
                            className={`p-4 rounded-lg bg-gray-50 dark:bg-gray-800 ${activeTab === '#styled-dashboard' ? '' : 'hidden'}`}
                            id="styled-dashboard"
                            role="tabpanel"
                            aria-labelledby="dashboard-tab"
                        >
                            <p><FeatureProduct></FeatureProduct></p>
                            {/* <p><NewBooks></NewBooks></p> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BestSeller;