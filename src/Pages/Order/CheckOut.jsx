

const CheckOut = () => {
    return (
        <div className="bg-[#fff] px-5 py-3 border-2 border-sky-300 rounded-md">
            <h2 className="text-xl font-semibold">Checkout Summary</h2>
            <hr className="mt-5 mb-5" />
            <div className="flex justify-between">
                <p>Subtotal</p>
                <h2>300 tk</h2>
            </div>
            <hr className="mt-5 mb-5" />
            <div className="flex justify-between">
                <p>Shipping <span className="text-sm">(Changeable)</span></p>
                <h2>300 tk</h2>
            </div>
            <hr className="mt-5 mb-5" />
            <div className="flex justify-between">
                <p>Total</p>
                <h2>300 tk</h2>
            </div>
            <hr className="mt-5 mb-5" />
            <div className="flex justify-between">
                <p className="text-lg font-semibold">Payable Total</p>
                <h2 className="text-lg font-semibold">300 tk</h2>
            </div>
            <hr className="mt-5 mb-5" />
            <div>
                <h2 className="text-xl font-semibold mt-5 mb-5">Add Promo code or voucher</h2>
                <div className="w-full flex justify-start items-center">
                    <input className="px-2 py-2 border border-gray-500" type="text" />
                    <button className="bg-sky-400 text-lg px-2 py-2">Apply</button>
                </div>
            </div>
            <hr className="mt-5 mb-5" />
            <div>
                <p className="text-xl font-semibold text-sky-500 text-center mb-3">You are saving 0%</p>
            </div>
        </div>
    );
};

export default CheckOut;