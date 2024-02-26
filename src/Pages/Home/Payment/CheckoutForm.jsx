import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import useCarts from "../../../Hooks/useCarts";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { AuthContext } from "../../../provider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";

const CheckoutForm = ({ paymentFormInfo }) => {
  const {
    phone,
    alternative_Phone,
    country,
    address,
    location,
    selectedPayment,
  } = paymentFormInfo;
  const [error, setError] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [cart, refetch] = useCarts();
  const totalPrice = cart?.reduce(
    (previousPrice, current) => previousPrice + current?.price * current?.count,
    0
  );
  const totalDiscount = cart?.reduce(
    (previousPrice, current) => previousPrice + current?.discount,
    0
  );
  const totalPriceWithDiscount = parseFloat(
    (totalPrice - (totalPrice * totalDiscount) / 100).toFixed(2)
  );
  console.log(cart);

  const [codeDiscountPrice, setCodeDiscountPrice] = useState(0);
  const retrieveDiscountedPriceFromLocalStorage = () => {
    if (user) {
      const storedDiscountedPrice = localStorage.getItem("discountedPrice");
      if (storedDiscountedPrice) {
        const discountedPrice = parseFloat(storedDiscountedPrice);
        setCodeDiscountPrice(discountedPrice);
      }
    }
  };

  useEffect(() => {
    if (user) {
      retrieveDiscountedPriceFromLocalStorage();
    }
  }, [user]);
  const totalPayablePrice = parseFloat(
    (totalPriceWithDiscount - codeDiscountPrice).toFixed(2)
  );

  const formattedDate = new Date().toLocaleString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  useEffect(() => {
    if (totalPayablePrice > 0) {
      axios
        .post(
          "https://mega-merket-project-server-site.vercel.app/create-payment-intent",
          { price: totalPayablePrice }
        )
        .then((res) => {
          setClientSecret(res.data.clientSecret);
        });
    }
  }, [totalPayablePrice]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    const { error } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setError(error.message);
    } else {
      setError("");
    }
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.displayName || "anonymous",
            email: user?.email || "anonymous",
          },
        },
      });

    if (confirmError) {
      setError(confirmError.message);
    }
    if (paymentIntent) {
      if (paymentIntent.status === "succeeded") {
        setTransactionId(paymentIntent.id);
        const paymentInfo = {
          name: user?.displayName,
          email: user?.email,
          transactionId: paymentIntent.id,
          cartIds: cart?.map((item) => item?._id),
          productIds: cart?.map((item) => item?.productId),
          names: cart?.map((item) => item?.name),
          prices: cart?.map((item) => item?.price),
          categories: cart?.map((item) => item?.category),
          count: cart?.map((item) => item?.count),
          discounts: cart?.map((item) => item?.discount),
          price: totalPayablePrice,
          date: formattedDate,
          phone,
          alternative_Phone,
          country,
          address,
          location,
          paymentMethod: selectedPayment,
          status: "pending",
        };
        const res = await axios.post(
          "https://mega-merket-project-server-site.vercel.app/payments",
          paymentInfo
        );
        if (
          res.data?.paymentResult?.insertedId &&
          res.data?.deleteResult?.deletedCount > 0
        ) {
          Swal.fire({
            title: "Payment Successful",
            text: "Do you want to visit the payment history page?",
            icon: "success",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Sure",
          }).then((result) => {
            if (result.isConfirmed) {
              navigate("/dashboard/paymentHistory");
            }
          });
          refetch();
        }
      } else {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "payment fail . Please try again!",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
  };

  return (
    <div>
      <h2 className="md:text-4xl text-2xl font-bold relative text-center md:mb-16 mb-8">
        {totalPriceWithDiscount > 1 ? (
          <span className="text-color"> Please Pay {totalPayablePrice}tk </span>
        ) : (
          <Link to="/">
            <button className="underline text-sky-500">
              Continue to shopping
            </button>
          </Link>
        )}
        {transactionId && <span className="text-color">Pay Successful 🤑</span>}
      </h2>
      <div className="lg:w-2/4 md:w-3/4 mx-auto p-4 bg-white border-2 border-sky-300 rounded-lg shadow-2xl">
        <div className="flex justify-between items-center px-4 mb-2">
          <h2 className="font-medium text-[18px]">Credit or debit card:</h2>
          <h2 className="text-3xl">💳</h2>
        </div>

        <form onSubmit={handleSubmit}>
          <CardElement
            className="border p-2 rounded border-sky-300"
            options={{
              style: {
                base: {
                  fontSize: "18px",
                  color: "#424770",
                  "::placeholder": {
                    color: "#aab7c4",
                  },
                },
                invalid: {
                  color: "#9e2146",
                },
              },
            }}
          />
          <button
            className="btn btn-primary btn-block btn-sm mt-4"
            type="submit"
            disabled={!stripe || !clientSecret}
          >
            Pay {totalPayablePrice}tk
          </button>
          <p className="text-red-600 mt-2">{error}</p>
          {transactionId && (
            <p className="text-green-400">
              Your transaction Id : {transactionId}
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default CheckoutForm;
