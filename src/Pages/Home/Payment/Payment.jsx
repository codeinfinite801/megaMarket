
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import { useLocation } from "react-router-dom";


const Payment = () => {
    const { state } = useLocation();
    const paymentFormInfo = state ? state.paymentFormInfo : null;
    const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GETWAY_KEY);
    return (
        <div className=" md:p-10 px-4 pt-8 pb-16">
            <Elements stripe={stripePromise}>
                <CheckoutForm paymentFormInfo={paymentFormInfo}></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;