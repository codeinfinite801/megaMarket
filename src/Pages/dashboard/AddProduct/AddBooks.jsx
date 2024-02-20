import { useState } from "react";
import swal from "sweetalert";
import UsePostAxios from "../../../Hooks/usePostApi";


const AddBooks = () => {
    const CallAxios = UsePostAxios()
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedIsNew, setSelectedIsNew] = useState('');

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };
    const handleIsNewChange = (event) => {
        setSelectedIsNew(event.target.value);
    }

    const handelAddBook = (event) => {
        event.preventDefault()
        const name = event.target.bookName.value;
        const author_name = event.target.authorName.value;
        const author_image = event.target.authorImage.value;
        const pagesUrlInputs1 = event.target.Pages1.value;
        const pagesUrlInputs2 = event.target.Pages2.value;
        const read_book = [pagesUrlInputs1, pagesUrlInputs2];
        const category = selectedCategory;
        const price = event.target.bookPrice.value;
        const discount = event.target.discountPrice.value;
        const quantity = event.target.bookQuantity.value;
        const publisher = event.target.publisherName.value;
        const country = event.target.countryName.value;
        const language = event.target.languageOfBook.value;
        const isNew = selectedIsNew;
        const rating = event.target.bookRating.value;
        const total_pages = event.target.pagesNumber.value;
        const edition_date = event.target.editionDate.value;
        const image = event.target.coverPhoto.value;
        const author_details = event.target.details.value;
        const summary = event.target.summaryOfBook.value;

        const bookData = [name, author_name, author_image, read_book, category, price, discount, quantity, publisher, country, language, isNew, rating, total_pages, edition_date, image, author_details, summary]
        console.log(bookData);
        console.log("this console for books")
        CallAxios.post('/allBooks', bookData)
            .then(res => {
                console.log(res.data);
                if (res?.data?.insertedId) {
                   return swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Book Added Successfully',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
            .catch(error => {
                console.error('Error adding product:', error);
            });


    }

    return (
        <div className="ml-4 p-4">
            <form className="grid grid-cols-4 md:grid-cols-4 sm:grid-cols-2 gap-4" onSubmit={handelAddBook}>
                <div  className="form-control col-span-2">
                    <label className="label">
                        <span className="label-text">Book Name</span>
                    </label>
                    <input type="text" placeholder="Book Name"
                        name="bookName" className="input input-bordered" required />
                </div>
                <div className="form-control col-span-2">
                    <label className="label">
                        <span className="label-text">Author Name</span>
                    </label>
                    <input type="text" placeholder="Author Name"
                        name="authorName" className="input input-bordered" required />
                </div>
                <div className="form-control col-span-2">
                    <label className="label">
                        <span className="label-text">Author Image</span>
                    </label>
                    <input type="text" placeholder="Author Image Url"
                        name="authorImage" className="input  input-bordered" required />
                </div>

                <div className="form-control ">
                    <label className="label">
                        <span className="label-text">1st Url</span>
                    </label>
                    <input type="text" placeholder="Demo Pages Photo Url" name="Pages1" className="input  input-bordered" required />
                </div>
                <div className="form-control ">
                    <label className="label">
                        <span className="label-text">2nd Url</span>
                    </label>
                    <input type="text" placeholder="Demo Pages Photo Url" name="Pages2" className="input  input-bordered" required />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Category</span>
                    </label>
                    <select
                        className="select select-bordered"
                        onChange={handleCategoryChange}
                        value={selectedCategory}
                    >
                        <option disabled value="">Pick one</option>
                        <option value="উপন্যাস">উপন্যাস</option>
                        <option value="ইসলামী বই">ইসলামী বই</option>
                        <option value="ভর্তি, নিয়োগ ও প্রস্তুতি পরীক্ষা">ভর্তি, নিয়োগ ও প্রস্তুতি পরীক্ষা</option>
                        <option value="শিশু-কিশোর বই ">শিশু-কিশোর বই </option>
                        <option value="আত্ম-উন্নয়ন">আত্ম-উন্নয়ন</option>
                        <option value="রহস্য, গোয়েন্দা, ভৌতিক, থ্রিলার ও অ্যাডভেঞ্চার">রহস্য, গোয়েন্দা, ভৌতিক, থ্রিলার ও অ্যাডভেঞ্চার</option>
                        <option value="পশ্চিমবঙ্গের বই">পশ্চিমবঙ্গের বই</option>
                        <option value="ইংরেজি ভাষার বই">ইংরেজি ভাষার বই</option>
                        <option value="ইতিহাস ও ঐতিহ্য">ইতিহাস ও ঐতিহ্য</option>
                        <option value="গণিত, বিজ্ঞান ও প্রযুক্তি">গণিত, বিজ্ঞান ও প্রযুক্তি</option>
                        <option value="ফ্রিল্যান্সিং ও আউটসোর্সিং">ফ্রিল্যান্সিং ও আউটসোর্সিং </option>
                        <option value="গল্প">গল্প</option>
                        <option value="When 0-4: Primary Learning">When 0-4: Primary Learning</option>
                        <option value="বয়স যখন ৪-৮">বয়স যখন ৪-৮</option>
                        <option value="বয়স যখন ৮-১২">বয়স যখন ৮-১২</option>
                        <option value="বয়স যখন ১২-১৭">বয়স যখন ১২-১৭</option>
                        <option value="ক্যারিয়ার সাকসেস">ক্যারিয়ার সাকসেস</option>
                        <option value="সায়েন্স ফিকশন">সায়েন্স ফিকশন</option>
                        <option value="জীবনী ও সাক্ষাৎকার ">জীবনী ও সাক্ষাৎকার </option>
                        <option value="রাজনীতি">রাজনীতি</option>
                        <option value="মুক্তিযুদ্ধ"> মুক্তিযুদ্ধ</option>
                        <option value="পরিবার ও প্যারেন্টিং">পরিবার ও প্যারেন্টিং</option>
                        <option value="পুরস্কারপ্রাপ্ত বই ">পুরস্কারপ্রাপ্ত বই </option>
                        <option value="ছড়া, কবিতা ও আবৃত্তি ">ছড়া, কবিতা ও আবৃত্তি </option>
                    </select>
                </div>
                <div className="form-control ">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <input type="text" placeholder="Book Price" name="bookPrice" className="input  input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Discount</span>
                    </label>
                    <input type="text" placeholder="Discount from price" name="discountPrice" className="input  input-bordered" required />
                </div>
                <div className="form-control ">
                    <label className="label">
                        <span className="label-text">Quantity</span>
                    </label>
                    <input type="text" placeholder="Number of books" name="bookQuantity" className="input  input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Publisher</span>
                    </label>
                    <input type="text" placeholder="Publisher Name" name="publisherName" className="input  input-bordered" required />
                </div>
                <div className="form-control ">
                    <label className="label">
                        <span className="label-text">Country</span>
                    </label>
                    <input type="text" placeholder="Country Name" name="countryName" className="input  input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Language</span>
                    </label>
                    <input type="text" placeholder=" Language of book" name="languageOfBook" className="input  input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Is New</span>
                    </label>
                    <select className="select select-bordered"
                        onChange={handleIsNewChange}
                        value={selectedIsNew}>
                        <option disabled value="">Pick one</option>
                        <option value="true">true</option>
                        <option value="false">false</option>
                    </select>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Rating</span>
                    </label>
                    <input type="text" placeholder="Book rating" name="bookRating" className="input  input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Total Pages</span>
                    </label>
                    <input type="text" placeholder="Number of pages on book" name="pagesNumber" className="input  input-bordered" required />
                </div>
                <div className="form-control col-span-2">
                    <label className="label">
                        <span className="label-text">Edition Date
                        </span>
                    </label>
                    <input type="text" placeholder="Last Edition Date" name="editionDate" className="input  input-bordered" required />
                </div>
                <div className="form-control col-span-4">
                    <label className="label">
                        <span className="label-text">Cover Photo</span>
                    </label>
                    <input type="text" placeholder="Book Cover Photo" name="coverPhoto" className="input  input-bordered" required />
                </div>
                <div className="form-control col-span-4">
                    <label className="label">
                        <span className="label-text">Author Details
                        </span>
                    </label>
                    <textarea placeholder="Details Of Book Author"
                        name="details" className="textarea textarea-bordered textarea-lg w-full" ></textarea>
                </div>
                <div className="form-control col-span-4">
                    <label className="label">
                        <span className="label-text">Summary
                        </span>
                    </label>
                    <textarea placeholder="Summary Of Book"
                        name="summaryOfBook" className="textarea textarea-bordered textarea-lg w-full" ></textarea>

                </div>
                <div className="form-control mt-6 col-span-4">
                    <button type="submit" className="btn btn-primary">Add Book</button>
                </div>
            </form>
        </div>
    );
};

export default AddBooks;