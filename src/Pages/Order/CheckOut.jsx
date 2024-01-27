import useCarts from "../../Hooks/useCarts";


const CheckOut = () => {
    const [cart, refetch] = useCarts()
    const totalPriceWithDiscount = cart?.reduce((previousPrice, current) => previousPrice + current?.priceWithDiscount, 0)
    const totalDiscount = cart?.reduce((previousPrice, current) => previousPrice + current?.discount, 0)

    const totalPrice = cart?.reduce((previousPrice, current) => previousPrice + (current?.price * current?.count) , 0)
    return (
        <div className="bg-[#fff] px-5 py-3 border-2 border-sky-300 rounded-md">
            <h2 className="text-xl font-semibold">Checkout Summary</h2>
            <hr className="mt-5 mb-5" />
            <div className="flex justify-between">
                <p>Subtotal</p>
                <h2>{totalPriceWithDiscount} tk</h2>
            </div>
            <hr className="mt-5 mb-5" />
            <div className="flex justify-between">
                <p>Total</p>
                <h2>{totalPrice} tk</h2>
            </div>
            <hr className="mt-5 mb-5" />
            <div className="flex justify-between">
                <p>Discount</p>
                <h2>{totalDiscount}%</h2>
            </div>
            <hr className="mt-5 mb-5" />
            <div className="flex justify-between">
                <p className="text-lg font-semibold">Payable Total</p>
                <h2 className="text-lg font-semibold">{totalPriceWithDiscount} tk</h2>
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
                <p className="text-xl font-semibold text-sky-500 text-center mb-3">You are saving <span className="font-bold text-[22px] underline">{totalPrice - totalPriceWithDiscount}</span> tk</p>
            </div>
        </div>
    );
};

export default CheckOut;