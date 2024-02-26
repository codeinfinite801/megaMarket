import { useContext, useState } from 'react';
import Rating from 'react-rating-stars-component';
import { AuthContext } from '../../provider/AuthProvider';
import moment from 'moment';
import Swal from 'sweetalert2';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import useReviews from '../../Hooks/useReviews';


const Reviews = ({ image, name, productId, rating }) => {
    const { id } = useParams()
    const { data, refetch } = useReviews()
    const filter = data?.filter(review => review.productId === id)

    const { user } = useContext(AuthContext)
    const [reviewText, setReviewText] = useState('');
    const [userRating, setUserRating] = useState(0);
    console.log(userRating);
    const date = moment().format('ll')
    const handleRatingChange = (newRating) => {
        setUserRating(newRating);
    };

    const handleReviewTextChange = (event) => {
        setReviewText(event.target.value);
    };
    const dataInfo = { productId: productId, user: user?.displayName, userPhoto: user?.photoURL, userRating, reviewText, date }
    console.log(data);
    const handleSubmit = (event) => {
        event.preventDefault();
        if(!userRating){
            return Swal.fire({
                icon: "error",
                title: "Please Give Rating",
                showConfirmButton: false,
                timer: 1500
            });
        }
        if (!reviewText) {
            return Swal.fire({
                icon: "error",
                title: "Review Text Cannot be Empty",
                showConfirmButton: false,
                timer: 1500
            });
        }
        axios.post(`https://mega-merket-project-server-site.vercel.app/review`, dataInfo)
            .then(res => {
                console.log(res.data);
                if (res?.data.insertedId) {
                    refetch()
                    return Swal.fire({
                        icon: "success",
                        title: "Review Added Successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })

    };

    return (
        <div className="mx-14">
            <div>
                <h1 className="text-xl mb-3">Reviews And Ratings</h1>
                <div id="divider"></div>
                <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-4">
                        <img className="w-14" src={image} alt="" />
                        <div>
                            <h1>{name}</h1>
                            <p>Rate This Product</p>
                            <Rating
                                count={5}
                                onChange={handleRatingChange}
                                size={24}
                                activeColor="#ffd700"
                            />
                        </div>
                    </div>
                    <div>
                        <div>
                            <div>
                                {/* <h1>{averageRating}</h1> */}
                            </div>
                            <img className="w-32" src="https://t4.ftcdn.net/jpg/03/52/11/77/360_F_352117727_d5h8yi1Smn7mxzYKte15ThuDlHzRuGkN.jpg" alt="" />
                            <h1 className="text-center text-lg">({rating}) Ratings</h1>
                            <h1 className="text-center text-lg">({filter?.length}) Reviews</h1>
                        </div>
                    </div>
                </div>
                <form onSubmit={handleSubmit}>
                    <textarea
                        placeholder="Describe your opinion about this product"
                        rows={5}
                        cols={50}
                        className="border-gray-400 border rounded p-3"
                        value={reviewText}
                        onChange={handleReviewTextChange}
                    ></textarea><br />
                    <input
                        className="border-blue-300 border px-3 py-2 rounded animation-300 hover:bg-blue-400 hover:text-white"
                        type="submit"
                        value="Post Review"
                    />
                </form>
            </div>
            <div className="divider"></div>
            {/* Reviews display section */}
            <div>
                {
                    filter?.map((review, idx) => {
                        return (
                            <div key={idx}>
                                <div className='flex items-center gap-4'>
                                    <img className='w-10 rounded-full' src={review?.userPhoto} alt="" />
                                    <div>
                                        <div className='flex items-center gap-2'>
                                            <p className='text-gray-500'>by <span className='text-black'>{review?.user}</span></p>
                                            <span className='text-sm text-gray-500'>{review?.date}</span>
                                        </div>
                                        <Rating
                                            count={5}
                                            value={review?.userRating}
                                            activeColor="#ffd700"
                                        />
                                    </div>
                                </div>
                                <p className='my-5'>{review?.reviewText}</p>
                            </div>
                        );
                    })
                }

            </div>
        </div>
    );
};

export default Reviews;
