import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import useCarts from "../../../Hooks/useCarts";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { AuthContext } from "../../../provider/AuthProvider";
import { useNavigate } from "react-router-dom";


const CheckoutForm = ({paymentFormInfo}) => {
    const {phone,alternative_Phone,country,address,location,selectedPayment } = paymentFormInfo;
    const [error, setError] = useState('')
    const [transactionId, setTransactionId] = useState('')
    const [clientSecret, setClientSecret] = useState('')
    const stripe = useStripe();
    const elements = useElements();
    const navigate = useNavigate();
    const { user } = useContext(AuthContext)
    const [cart, refetch] = useCarts()
    const totalPriceWithDiscount = cart?.reduce((previousPrice, current) => previousPrice + current?.priceWithDiscount, 0)

    const formattedDate = new Date().toLocaleString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
      });

    useEffect(() => {
        if (totalPriceWithDiscount > 0) {
            axios.post('https://maga-market-server-eta.vercel.app/create-payment-intent', { price: totalPriceWithDiscount })
                .then(res => {
                    console.log(res.data.clientSecret);
                    setClientSecret(res.data.clientSecret)
                })
        }
    }, [totalPriceWithDiscount])

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log('payment error', error);
            setError(error.message);
        } else {
            console.log('PaymentMethod', paymentMethod);
            setError('')
        }
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: user?.displayName || 'anonymous',
                        email: user?.email || 'anonymous'
                    },
                },
            },
        );

        if (confirmError) {
            setError(confirmError.message)
        }
        if (paymentIntent) {
            console.log(paymentIntent);
            if (paymentIntent.status === 'succeeded') {
                setTransactionId(paymentIntent.id)
                const paymentInfo = {
                    name: user?.displayName,
                    email: user?.email,
                    transactionId: paymentIntent.id,
                    cartIds: cart?.map(item => item?._id),
                    productIds: cart?.map(item => item?.productId),
                    price: totalPriceWithDiscount,
                    date: formattedDate,
                    phone,alternative_Phone,country,address,location,paymentMethod : selectedPayment,
                    status: "pending"
                }
                const res = await axios.post('https://maga-market-server-eta.vercel.app/payments', paymentInfo)
                if (res.data?.paymentResult?.insertedId && res.data?.deleteResult?.deletedCount > 0) {
                    Swal.fire({
                        title: "Payment Successful",
                        text: "Do you want to visit the payment history page?",
                        icon: "success",
                        showCancelButton: true,
                        confirmButtonColor: "#3085d6",
                        cancelButtonColor: "#d33",
                        confirmButtonText: "Yes, Sure"
                    }).then((result) => {
                        if (result.isConfirmed) {
                            navigate('/paymentHistory')
                        }
                    });
                    refetch();

                }
            }
        }




    };


    return (
        <div>
            <h2 className="md:text-4xl text-2xl font-bold relative text-center mb-16"> Please
                <span className="text-color"> Pay {totalPriceWithDiscount}tk </span>
            </h2>
            <div className="md:p-16 bg-white border-2 border-sky-300 rounded-lg shadow-lg">

                <form onSubmit={handleSubmit}>
                    <CardElement
                        options={{
                            style: {
                                base: {
                                    fontSize: '18px',
                                    color: '#424770',
                                    '::placeholder': {
                                        color: '#aab7c4',
                                    },
                                },
                                invalid: {
                                    color: '#9e2146',
                                },
                            },
                        }}
                    />
                    <button className="btn btn-primary btn-sm mt-4" type="submit" disabled={!stripe || !clientSecret}>
                        Pay
                    </button>
                    <p className="text-red-600 mt-2">{error}</p>
                    {
                        transactionId && <p className="text-green-400">{transactionId}</p>
                    }
                </form>
            </div>
        </div>
    );
};

export default CheckoutForm;