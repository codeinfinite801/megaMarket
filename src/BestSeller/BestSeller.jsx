// import { useEffect, useState } from "react";
// import SingleSell from "./SingleSell";
// import Popular from "../Pages/PlaceOrder/Popular";

import { useState } from "react";
import Popular from "../Pages/PlaceOrder/Popular";


const BestSeller = () => {
    // const [bestSell, setBestSell] = useState([]);

    // useEffect(() => {
    //     fetch('https://maga-market-server-eta.vercel.app/kidsZone')
    //         .then(res => res.json())
    //         .then(data => setBestSell(data))
    // }, [])

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
                                className={`inline-block p-4 border-b-2 text-3xl rounded-t-lg ${activeTab === '#styled-profile' ? 'text-purple-600 hover:text-purple-600 dark:text-purple-500 dark:hover:text-purple-500 border-purple-600 dark:border-purple-500' : 'text-gray-500 hover:text-gray-600 dark:text-gray-400 border-gray-100 hover:border-gray-300 dark:border-gray-700 dark:hover:text-gray-300 text-3xl'}`}
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
                                className={`inline-block p-4 border-b-2 text-3xl rounded-t-lg ${activeTab === '#styled-dashboard' ? 'text-purple-600 hover:text-purple-600 dark:text-purple-500 dark:hover:text-purple-500 border-purple-600 dark:border-purple-500' : 'hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 text-3xl'}`}
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
                            <p className="text-sm text-gray-500 dark:text-gray-400">This is some placeholder content the <strong className="font-medium text-gray-800 dark:text-white">Dashboard tab's associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.</p>
                        </div>
                        <div
                            className={`p-4 rounded-lg bg-gray-50 dark:bg-gray-800 ${activeTab === '#styled-settings' ? '' : 'hidden'}`}
                            id="styled-settings"
                            role="tabpanel"
                            aria-labelledby="settings-tab"
                        >
                            <p className="text-sm text-gray-500 dark:text-gray-400">This is some placeholder content the <strong className="font-medium text-gray-800 dark:text-white">Settings tab's associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.</p>
                        </div>
                        <div
                            className={`p-4 rounded-lg bg-gray-50 dark:bg-gray-800 ${activeTab === '#styled-contacts' ? '' : 'hidden'}`}
                            id="styled-contacts"
                            role="tabpanel"
                            aria-labelledby="contacts-tab"
                        >
                            <p className="text-sm text-gray-500 dark:text-gray-400">This is some placeholder content the <strong className="font-medium text-gray-800 dark:text-white">Contacts tab's associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.</p>
                        </div>
                    </div>
                </div>

            </div>


            {/* <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2  gap-3">
                {
                    bestSell?.slice(5, 10)?.map(sells => <SingleSell key={sells?._id} sells={sells}></SingleSell>)
                }
            </div> */}
        </div>
    );
}

export default BestSeller;