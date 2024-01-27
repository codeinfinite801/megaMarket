
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import { useLocation } from "react-router-dom";


const Payment = () => {
    const { state } = useLocation();
    const paymentFormInfo = state ? state.paymentFormInfo : null;
    const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GETWAY_KEY);
    console.log(paymentFormInfo);
    return (
            <div className="bg-[#c6d0da] p-10">
                <Elements stripe={stripePromise}>
                    <CheckoutForm paymentFormInfo={paymentFormInfo}></CheckoutForm>
                </Elements>
            </div>
    );
};

export default Payment;