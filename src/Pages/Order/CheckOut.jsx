import { useContext, useEffect, useState } from "react";
import useCarts from "../../Hooks/useCarts";
import { AuthContext } from "../../provider/AuthProvider";


const CheckOut = () => {
    const [cart] = useCarts()
    const { user } = useContext(AuthContext)
    const [promoCodeError, setPromoCodeError] = useState('')
    const totalPrice = cart?.reduce((previousPrice, current) => previousPrice + (current?.price * current?.count), 0)
    const totalDiscount = cart?.reduce((previousPrice, current) => previousPrice + current?.discount, 0)
    const totalPriceWithDiscount = parseFloat((totalPrice - (totalPrice * totalDiscount) / 100).toFixed(2))
    const promoCodeDiscount = parseInt(totalDiscount / 4)


    
    const [codeDiscountPrice, setCodeDiscountPrice] = useState(0)
    const totalPriceSave = ((totalPrice - totalPriceWithDiscount) + codeDiscountPrice)

    useEffect(() => {
        if (user && totalPriceWithDiscount < 1000) {
            localStorage.setItem('discountedPrice', '0');
            setCodeDiscountPrice(0);
        }
    }, [])

    const handlePromoCode = async (e) => {
        e.preventDefault();
        const code = e.target.code.value;
        if (code === 'CodeInfinite6') {
            if (totalPriceWithDiscount > 1000) {
                const promoCodeDiscountPercentage = parseInt((totalDiscount / 4));
                const promoCodeDiscountAmount = parseFloat((totalPriceWithDiscount * promoCodeDiscountPercentage / 100).toFixed(2));
                setCodeDiscountPrice(promoCodeDiscountAmount);

                if (user) {
                    localStorage.setItem('discountedPrice', promoCodeDiscountAmount.toString());
                }

            }
        } else {
            localStorage.setItem('discountedPrice', '0');
            setCodeDiscountPrice(0);
            setPromoCodeError('Invalid promo code. Please try again!');
        }
        e.target.reset();
    };

    const retrieveDiscountedPriceFromLocalStorage = () => {
        if (user) {
            const storedDiscountedPrice = localStorage.getItem('discountedPrice');
            if (storedDiscountedPrice) {
                const discountedPrice = parseFloat(storedDiscountedPrice);
                setCodeDiscountPrice(discountedPrice);
            } 
        }
    }

    useEffect(() => {
        if (user) {
            retrieveDiscountedPriceFromLocalStorage();
        }
    }, [user]);
    const totalPayablePrice = parseFloat(((totalPriceWithDiscount - codeDiscountPrice).toFixed(2)))

    const handleInputChange = () => {
        setPromoCodeError('');
    };
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
                <h2 className="text-lg font-semibold">{totalPayablePrice} tk</h2>
            </div>

            <hr className="mt-5 mb-5" />
            <div>
                {
                    totalPriceWithDiscount > 1000 && <div>
                        <h2 className="text-xl font-semibold mt-5 mb-3">Add Promo code or voucher</h2>
                        <p className="text-[18px] mb-2 font-medium">Promo code : <span className="bg-sky-300 px-2 py-1 rounded-lg text-xl font-bold ">CodeInfinite6</span></p>
                        <p className="mb-2">More Discount for Promo Code : {promoCodeDiscount}%</p>
                        {codeDiscountPrice > 1 && (
                            <p className="mb-2">Discounted Price: {codeDiscountPrice} tk</p>
                        )}
                        <form onSubmit={handlePromoCode} className="w-full flex justify-start items-center">
                            <input
                                className="px-2 py-2 border border-gray-500 md:w-full w-3/4"
                                name="code"
                                type="text"
                                required
                                onChange={handleInputChange}
                            />
                            <button type="submit" className="bg-sky-400 text-lg px-2 py-2">
                                Apply
                            </button>
                        </form>
                        {promoCodeError && <p className="text-red-400 text-sm">{promoCodeError}</p>}
                    </div>
                }
            </div>
            <hr className="mt-5 mb-5" />
            <div>
                {
                    totalPriceWithDiscount > 1000 ? <p className="text-xl font-semibold text-sky-500 text-center mb-3">You are saving <span className="font-bold text-[22px] underline"> {totalPriceSave} </span> tk</p> : <p className="text-xl font-semibold text-sky-500 text-center mb-3">You are saving <span className="font-bold text-[22px] underline"> {totalPrice - totalPriceWithDiscount} </span> tk</p>
                }
            </div>
        </div>
    );
};

export default CheckOut;