
import CheckOut from "./CheckOut";
import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { useNavigate } from "react-router-dom";


const Order = () => {
    const { user } = useContext(AuthContext)
    const [selectedLocation, setSelectedLocation] = useState(null);
    const [selectedPayment, setSelectedPayment] = useState('');
    const navigate = useNavigate();
    console.log(selectedPayment);

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const phone = form.phone.value;
        const alternative_Phone = form.alternative_Phone.value;
        const country = form.country.value;
        const address = form.address.value;
        const paymentFormInfo = {
            phone,
            alternative_Phone,
            country,
            address,
            location: selectedLocation,
            selectedPayment : selectedPayment
        };

        // Navigate to the payment page with form data
        navigate("/payment", {
            state: { paymentFormInfo },
        });
    };

    const handleRadioChange = (location) => {
        setSelectedLocation(location);
    };


    const handlePaymentChange = (paymentMethod) => {
        setSelectedPayment(paymentMethod);
    };
    return (
        <div>
            <div className="flex gap-5 bg-[#c6d0da] px-10">
                <div className="w-8/12 mb-5 mt-5">

                    <form onSubmit={handleSubmit}>
                        <div className="bg-white border-2 border-sky-300 rounded-md">
                            <div className="card-body">
                                <h2 className="text-xl font-semibold">Shipping Address <span className="text-sm text-gray-700">(Please Fill Out Your Information)</span></h2>
                                <hr className="mt-3 mb-3" />
                                <div className="flex">
                                    <h2 className="mr-10">Pick Up Your Parcel From:</h2>
                                    <div className="flex gap-5">
                                        <button className="flex justify-center items-center gap-2">
                                            <input
                                                type="radio"
                                                name="location"
                                                className="radio radio-info"
                                                required
                                                onChange={() => handleRadioChange('Home')}
                                            />
                                            <span>Home</span>
                                        </button>
                                        <button className="flex justify-center items-center gap-2">
                                            <input
                                                type="radio"
                                                name="location"
                                                className="radio radio-info"
                                                required
                                                onChange={() => handleRadioChange('Office')}
                                            />
                                            <span>Office</span>
                                        </button>
                                    </div>
                                </div>
                                {/* name */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" value={user?.displayName} className="input input-bordered" required />
                                </div>
                                {/* phone no */}
                                <div className="flex gap-5">
                                    <div className="form-control flex-1">
                                        <label className="label">
                                            <span className="label-text">Phone No:</span>
                                        </label>
                                        <input type="number" name="phone" placeholder="Phone No:" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control flex-1">
                                        <label className="label">
                                            <span className="label-text">Alternative Phone No:</span>
                                        </label>
                                        <input type="number" name="alternative_Phone" placeholder="Alternative Phone No" className="input input-bordered" required />
                                    </div>
                                </div>
                                {/* place */}
                                <div className="flex gap-5 mt-5">
                                    <div className="form-control flex-1">
                                        <input type="text" name="country" defaultValue={'Bangladesh'} className="input input-bordered" required />
                                    </div>
                                    <div className="form-control flex-1">
                                        <input type="text" value={user?.email} className="input input-bordered" required />
                                    </div>
                                </div>
                                {/* text-area */}
                                <div>
                                    <textarea name="address" className="textarea w-full textarea-bordered h-24" placeholder="Street Address, P.O Box, City"></textarea>
                                </div>

                            </div>
                        </div>


                        {/* ----------- */}
                        <div className="flex gap-5 mt-5">
                            <div className="bg-white flex-1 py-4 rounded-md px-8 border-2 border-sky-300">
                                <div className="flex justify-start items-center gap-2">
                                    <img src="https://www.rokomari.com/static/200/images/happy-return-new.png" alt="" />
                                    <h2 className="text-xl font-semibold">7 Days Happy Return</h2>
                                </div>
                            </div>
                            <div className="bg-white flex-1 py-4 rounded-md  px-8 border-2 border-sky-300">
                                <div className="flex justify-start items-center gap-2">
                                    <img src="https://www.rokomari.com/static/200/images/earn-points.png" alt="" />
                                    <h2 className="text-xl font-semibold">Purchase and Earn Point</h2>
                                </div>
                            </div>
                        </div>
                        {/* payment part */}
                        <div className="border-2 bg-white border-sky-300 mt-5">
                            <div className="py-4 border-b-2 border-gray-400 px-8">
                                <h2 className="text-xl font-semibold">Payment Method <span className="text-sm text-gray-700">(Please select only one! payment method)</span></h2>
                            </div>
                            {/* payment image box */}
                            <div className="grid grid-cols-2 gap-5 px-6 bg-white">
                                {/* 1st div */}
                                <div className="flex rounded-md py-3 px-3 bg-[hsl(206,10%,86%)] mt-5">
                                    <div className="w-3/12 flex justify-center items-center">
                                        <input
                                            type="radio"
                                            name="payment-method"
                                            className="radio radio-accent"
                                            onChange={() => handlePaymentChange('Cash on delivery')}
                                        />
                                    </div>
                                    <div className="text-md">
                                        <div className="flex justify-start items-center gap-2">
                                            <img src="https://www.rokomari.com/static/200/images/cod.png" alt="" />
                                            <h2>Cash on delivery</h2>
                                        </div>
                                        <h2 className="mt-2">Pay the delivery man when receive order</h2>
                                    </div>
                                </div>
                                {/* 2nd div */}
                                <div className="flex rounded-md py-3 px-3 bg-[hsl(206,10%,86%)] mt-5">
                                    <div className="w-3/12 flex justify-center items-center">
                                        <input
                                            type="radio"
                                            name="payment-method"
                                            className="radio radio-accent"
                                            onChange={() => handlePaymentChange('bKash')}
                                        />
                                    </div>
                                    <div className="text-md">
                                        <img className="h-[35px]" src="https://www.rokomari.com/static/200/images/bkash.png" alt="" />
                                        <h2 className="mt-2">Pay from your bKash account</h2>
                                    </div>
                                </div>
                                {/* 3rd div */}
                                <div className="flex rounded-md py-3 px-3 bg-[hsl(206,10%,86%)] mt-5">
                                    <div className="w-3/12 flex justify-center items-center">
                                        <input
                                            type="radio"
                                            name="payment-method"
                                            className="radio radio-accent"
                                            onChange={() => handlePaymentChange('nagad')}
                                        />
                                    </div>
                                    <div className="text-md">
                                        <img className="h-[35px]" src="https://www.rokomari.com/static/200/images/Nagad-Logo.png" alt="" />
                                        <h2 className="mt-2">Pay from your nagad account</h2>
                                    </div>
                                </div>
                                {/* 4rth div */}
                                <div className="flex rounded-md py-3 px-3 bg-[hsl(206,10%,86%)] mt-5">
                                    <div className="w-3/12 flex justify-center items-center">
                                        <input
                                            type="radio"
                                            name="payment-method"
                                            className="radio radio-accent"
                                            defaultChecked
                                            onChange={() => handlePaymentChange('card')}
                                        />
                                    </div>
                                    <div className="text-md">
                                        <img className="h-[35px]" src="https://www.rokomari.com/static/200/images/icons/rok-ssl-card-icon.png" alt="" />
                                        <h2 className="mt-2">Pay from your Card account</h2>
                                    </div>
                                </div>
                                {/* 5th div */}
                                <div className="flex rounded-md py-3 px-3 bg-[hsl(206,10%,86%)] mt-5">
                                    <div className="w-3/12 flex justify-center items-center">
                                        <input
                                            type="radio"
                                            name="payment-method"
                                            className="radio radio-accent"
                                            onChange={() => handlePaymentChange('rocket')}
                                        />
                                    </div>
                                    <div className="text-md">
                                        <img className="h-[35px]" src="	https://www.rokomari.com/static/200/images/rocket.png" alt="" />
                                        <h2 className="mt-2">Pay from your Rocket account</h2>
                                    </div>
                                </div>
                            </div>
                            {/* condition */}
                            <div className="mt-5 px-6">
                                <h2>গ্রাহকদের সর্বোচ্চ সেবা নিশ্চিত করতে রকমারিতে রয়েছে সুবিশাল ইনভেন্টরি। স্টকে না থাকা প্রোডাক্টগুলো সাপ্লায়ারের নিকট থেকে সংগ্রহ করতে হয় -</h2>
                                <h2 className="mt-3">1. আপনার অর্ডারের প্রোডাক্টগুলো সাপ্লায়ারের কাছে না থাকলে সেগুলো ব্যাতিত অবশিষ্ট প্রোডাক্টগুলো পাঠিয়ে দেয়া হবে। এসব ক্ষেত্রে আপনাকে ইমেইল/এসএমএস/হোয়াটসঅ্যাপ/ফোন এর মাধ্যমে জানিয়ে দেয়া হবে।</h2>
                                <h2 className="mt-3">2. আপনার পেইড অর্ডারের প্রোডাক্ট NA হলে অথবা ক্যান্সেল হলে পেইড এমাউন্ট ৭ -১০ কর্মদিবসের মাঝে রিফান্ড করা হবে ইনশাআল্লাহ।
                                </h2>
                                <h2 className="mt-3">3. সাপ্লায়ারের পক্ষ থেকে প্রোডাক্টের মূল্য পরিবর্তন হতে পারে। এসব ক্ষেত্রে আপনাকে ইমেইল/এসএমএস/হোয়াটসঅ্যাপ/ফোন এর মাধ্যমে জানিয়ে দেয়া হবে।</h2>
                            </div>
                            <div className="flex justify-start items-center gap-2 px-6 mt-3 pb-4">
                                <input type="checkbox" name="condition" className="checkbox checkbox-accent" required />
                                <h2>এই শর্তগুলো মেনে অর্ডার প্রদান করছি।</h2>
                            </div>
                            {/* button */}
                            <div className="py-10 bg-[hsl(206,10%,86%)]">
                                <div className="flex justify-end items-center px-6">
                                    <button
                                        type="submit"
                                        className="btn btn-warning text-white text-xl font-medium"
                                    >
                                        Confirm Order
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="w-4/12 mb-5 mt-5">
                    <CheckOut></CheckOut>
                </div>
            </div>
        </div>
    );
};

export default Order;