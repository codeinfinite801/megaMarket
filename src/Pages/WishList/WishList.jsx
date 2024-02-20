import useWishList from "../../Hooks/useWishList";
import DataTable from 'react-data-table-component';
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";
import useAxiosSecure from '../../Hooks/AxiosSecure/useAxiosSecure';
import { Link } from "react-router-dom";

const WishList = () => {
    const [wishList, refetch] = useWishList()
    const axiosSecure = useAxiosSecure()
    console.log(wishList);

    // delete product
    const handleDelete = async (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const res = await axiosSecure.delete(`/wishList/${id}`);
                    if (res.data.deletedCount > 0) {
                        refetch();
                        Swal.fire({
                            title: "Deleted!",
                            text: "Favorite Item has been deleted.",
                            icon: "success"
                        });
                    }
                } catch (error) {
                    console.error("Error deleting item:", error.message);
                    // Handle error state
                }
            }
        });
    };

    const columns = [
        {
            name: 'Serial Number',
            cell: (row, index) => index + 1,
        },
        {
            name: 'Book Name',
            selector: row => row.name
        },
        {
            name: 'Author Name/Brand Name',
             selector: row => row.author_name || row.brand
        },
        {
            name: 'Author Image/Brand Logo',
            selector: row =>(
                <>
                    {row.author_image ? (
                        <img className='w-10 h-10 rounded-full' src={row.author_image} alt="Author Image" />
                    ) : (
                        <img className='w-10 h-10 rounded-full' src={row.brand_logo} alt="Brand Logo" />
                    )}
                </>
            ),
        },
        {
            name: 'Price',
            selector: row => row.price,
            sortable: true,
        },
        {
            name: 'Action',
            cell: row => <button className="text-2xl text-red-600" onClick={() => handleDelete(row._id)}><MdDelete className=" text-4xl  text-red-600" /></button>
        }
    ]


    return (
        <div className='container w-[95%] justify-center mx-auto'>
            {wishList?.length > 0 ? <DataTable
                title="Wish List"
                columns={columns}
                data={wishList}
                highlightOnHover
                fixedHeader
                pagination>
            </DataTable> : <div className="text-center mt-10 mb-10">
                <div className="flex justify-center items-center">
                    <img className="h-[400px]" src="https://i.ibb.co/7zwbXhL/emty-list.png" alt="" />
                </div>
                <h2 className="text-3xl font-semibold mt-5">Your wishList is Empty!</h2>
                <p className="text-lg mt-3">There’s nothing in your wishlist yet. But don’t let that stop you from finding the perfect products for you.<br></br> Browse our categories and add your favorites to your wishlist.</p>
                <Link to={'/'}>
                    <button className="mt-3 text-xl font-bold text-sky-600">Start shopping now and enjoy amazing deals.</button>
                </Link>
            </div>}
        </div>
    );
};

export default WishList;