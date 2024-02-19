import { useState, useEffect } from 'react';
import { TbCurrencyTaka } from "react-icons/tb";
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaRegHeart } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import Swal from 'sweetalert2';
import useAxiosSecure from '../../Hooks/AxiosSecure/useAxiosSecure';

const DealsOfTheWeek = () => {
  const [currentDeals, setCurrentDeals] = useState([]);
  const CallAxios = useAxiosSecure()

  const getInitialTargetDate = () => {
    const storedTargetDate = localStorage.getItem('targetDate');
    if (storedTargetDate) {
      return parseInt(storedTargetDate, 10);
    } else {
      const now = new Date().getTime();
      const initialTargetDate = now + 7 * 24 * 60 * 60 * 1000;
      localStorage.setItem('targetDate', initialTargetDate.toString());
      return initialTargetDate;
    }
  };

  const calculateTimeRemaining = (targetDate) => {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      // Reset target date to 7 days from now
      const newTargetDate = now + 7 * 24 * 60 * 60 * 1000;
      localStorage.setItem('targetDate', newTargetDate.toString());
      setTargetDate(newTargetDate);

      // Rotate deals when countdown reaches 00
      rotateDeals();
    }

    const totalSeconds = Math.floor(difference / 1000);
    const days = Math.floor(totalSeconds / (24 * 60 * 60));
    const hours = Math.floor((totalSeconds % (24 * 60 * 60)) / (60 * 60));
    const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
    const seconds = totalSeconds % 60;

    return { days, hours, minutes, seconds };
  };

  const formatNumber = (number) => (number < 10 ? `0${number}` : number);
  const [targetDate, setTargetDate] = useState(getInitialTargetDate());
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining(targetDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining(targetDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  useEffect(() => {
    if (currentDeals.length === 0) {
      rotateDeals();
    }

    const timer = setInterval(() => {
      rotateDeals(); // Rotate deals every 7 days
    }, 7 * 24 * 60 * 60 * 1000);

    // Clear the interval when the component is unmounted
    return () => clearInterval(timer);
  }, [currentDeals]);

  const rotateDeals = async () => {
    try {
      const allBooks = await fetchProducts('https://maga-market-server-eta.vercel.app/allBooks');
      const allElectronics = await fetchProducts('https://maga-market-server-eta.vercel.app/allElectronics');
      const kidsZone = await fetchProducts('https://maga-market-server-eta.vercel.app/kidsZone');
      const allProducts = [...allBooks, ...allElectronics, ...kidsZone];
      const newDeals = getRandomDeals(allProducts);
      setCurrentDeals(newDeals);
    } catch (error) {
      console.error('Error fetching and setting deals:', error);
    }
  };

  const fetchProducts = async (apiEndpoint) => {
    const response = await fetch(apiEndpoint);
    const data = await response.json();
    return data;
  };

  const getRandomDeals = (productList) => {
    const numberOfDealsToShow = 12;
    const shuffledProducts = [...productList].sort(() => 0.5 - Math.random());
    return shuffledProducts.slice(0, numberOfDealsToShow);
  };

   //add to shoping card  
   const addToCart = (id) => {
    console.log(id);
    const targetProduct = currentDeals.filter((pruduct) => pruduct._id === id);
    const productData = targetProduct[0];
    CallAxios.post('/addProducts', productData)
        .then(res => {
            console.log(res.data);
            if (res?.data?.insertedId) {
                return Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Product Added On Your Cart Successfully',
                    showConfirmButton: false,
                    timer: 1500
                })
            }
        })

}

  const addOnWishlist = (id) => {
    const targetProduct = currentDeals.filter((pruduct) => pruduct._id === id);
    const productData = targetProduct[0];
    CallAxios.post("/wishList", productData)
      .then(res => {
        console.log(res.data);
        if (res?.data?.insertedId) {
          return Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Product Added On Your WishList Successfully',
            showConfirmButton: false,
            timer: 1500
          })
        }
      })
  }

  return (
    <div className='pt-5 pb-10'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 items-center justify-center'>
        <h2 className='text-5xl text-black font-semibold sm:text-center'>Deals Of The Week</h2>
        <div className="grid grid-flow-col gap-5 text-center auto-cols-max sm:justify-center">
          <div className="flex flex-col">
            <span className="countdown font-mono text-5xl text-red-500">
              {formatNumber(timeRemaining.days)}
            </span>
            days
          </div>
          <div className="flex flex-col">
            <span className="countdown font-mono text-5xl text-red-500">
              {formatNumber(timeRemaining.hours)}
            </span>
            hours
          </div>
          <div className="flex flex-col">
            <span className="countdown font-mono text-5xl text-red-500">
              {formatNumber(timeRemaining.minutes)}
            </span>
            min
          </div>
          <div className="flex flex-col">
            <span className="countdown font-mono text-5xl text-red-500">
              {formatNumber(timeRemaining.seconds)}
            </span>
            sec
          </div>
        </div>
      </div>
      <div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-5 pt-10'>
        {currentDeals.map((deal) => <div key={deal._id} className='flex items-center justify-center'>
          <div className="card w-80 h-96 bg-base-100 relative group">
            <figure className="px-2 pt-4">
              <img src={deal.image} alt="image" className="rounded-xl
              h-52 " />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{deal.name}</h2>
              {deal.author_name ? <p>{deal.author_name}</p> : ""}
              {deal.brand ? <p>{deal.brand}</p> : ""}
              <p className='flex items-center justify-center'><span><TbCurrencyTaka /></span><span>{deal.price}</span></p>
            </div>

            <div className="card-overlay absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div  className="card w-72 h-[22rem] grid grid-cols-3">
                <button onClick={()=>{addToCart(deal._id)}} className="border rounded-l-lg flex items-center justify-center bg-white mt-[20rem] hover:bg-blue-500 hover:text-white text-center">
                  <FaShoppingCart className='text-xl' />
                </button>
                <button onClick={() => addOnWishlist(deal._id)} className=" border border-l-2 border-r-2 flex items-center justify-center bg-white mt-[20rem] text-center hover:bg-pink-500  hover:text-white">
                  <FaRegHeart className='text-xl' />
                </button>
                <Link to={`/bookDetails/${deal._id}`}>
                  <button className="border rounded-r-lg w-full py-4 flex items-center justify-center bg-white mt-[20rem] hover:bg-blue-500 hover:text-white text-center">
                    <IoEyeOutline className='text-xl' />
                  </button>
                </Link>
              </div>
            </div>


          </div>
        </div>)}

      </div>
    </div>
  );
};

export default DealsOfTheWeek;
