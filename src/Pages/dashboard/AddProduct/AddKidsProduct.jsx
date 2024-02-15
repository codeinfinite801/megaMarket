
import { useState } from "react";
import UsePostAxios from "../../../Hooks/usePostApi";
import Swal from "sweetalert2";

const AddKidsProduct = () => {
    const CallAxios = UsePostAxios()
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedIsNew, setSelectedIsNew] = useState('');
    
    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };
    const handleIsNewChange = (event) => {
        setSelectedIsNew(event.target.value);
    }
    
    const handelAddProduct = (event) => {
        event.preventDefault()
    
        const name = event.target.productName.value;
        const brand = event.target.brandName.value;
        const brand_logo = event.target.brandLogo.value;
        const pagesUrlInputs1 = event.target.Pages1.value;
        const pagesUrlInputs2 = event.target.Pages2.value;
        const pagesUrlInputs3 = event.target.Pages3.value;
        const pagesUrlInputs4 = event.target.Pages4.value;
        const image = [pagesUrlInputs1, pagesUrlInputs2,pagesUrlInputs3, pagesUrlInputs4];
        const category = selectedCategory;
        const main_category="কিডস জোন"
        const price = event.target.productPrice.value;
        const discount = event.target.discountPrice.value;
        const quantity = event.target.productQuantity.value;
        const country = event.target.countryName.value;
        const volume = event.target.volumeOfProduct.value;
        const age = event.target.ageRange.value;
        const isNew = selectedIsNew;
        const rating = event.target.productRating.value;
        const product_code = event.target.productModel.value;
        const brand_details= event.target.details.value;
        const features = event.target.featuresOfProduct.value;
        const summary = event.target.summaryOfProduct.value;
    
        const productData = [name, brand, brand_logo, image, category,main_category, price, discount, quantity, country,age, volume, isNew, rating, product_code,brand_details, features,summary]
        console.log(productData);
        CallAxios.post('/allElectronics', productData)
        .then(res => {
            console.log(res?.data);
            if (res?.data?.insertedId) {
                return Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'product Added Successfully',
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
            <form className="grid grid-cols-4 md:grid-cols-4 sm:grid-cols-2 gap-4" onSubmit={handelAddProduct}>
                <div className="form-control col-span-2">
                    <label  htmlFor="productName" className="label">
                        <span className="label-text">Product Name</span>
                    </label>
                    <input id="productName" type="text" placeholder="Product Name"
                        name="productName" className="input input-bordered" required />
                </div>
                <div className="form-control col-span-2">
                    <label  htmlFor="brandName" className="label">
                        <span className="label-text">Brand Name</span>
                    </label>
                    <input id="brandName" type="text" placeholder="Brand Name"
                        name="brandName" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label htmlFor="brandLogo"  className="label">
                        <span className="label-text">Brand Logo</span>
                    </label>
                    <input id="brandLogo" type="text" placeholder="Brand Logo url"
                        name="brandLogo" className="input  input-bordered" required />
                </div>
    
                <div className="form-control ">
                    <label htmlFor="Pages1" className="label">
                        <span className="label-text">1st Url</span>
                    </label>
                    <input id="Pages1" type="text" placeholder="Image of product" name="Pages1" className="input  input-bordered" required />
                </div>
                <div className="form-control ">
                    <label htmlFor="Pages2" className="label">
                        <span className="label-text">2nd Url</span>
                    </label>
                    <input id="pages2" type="text" placeholder="Image of product" name="Pages2" className="input  input-bordered" required />
                </div>
                <div className="form-control ">
                    <label htmlFor="Pages3" className="label">
                        <span className="label-text">3rd Url</span>
                    </label>
                    <input id="pages3" type="text" placeholder="Image of product" name="Pages3" className="input  input-bordered" required />
                </div>
                <div className="form-control ">
                    <label htmlFor="Pages4" className="label">
                        <span className="label-text">4th Url</span>
                    </label>
                    <input id="pages4" type="text" placeholder="Image of product" name="Pages4" className="input  input-bordered" required />
                </div>
    
                <div className="form-control">
                    <label htmlFor="Category" className="label">
                        <span className="label-text">Category</span>
                    </label>
                    <select id="Category"
                        className="select select-bordered"
                        onChange={handleCategoryChange}
                        value={selectedCategory}
                    >
                        <option disabled value="" >Pick one</option>
                        <option value="Baby Body Washes">Baby Body Washes</option>
                        <option value="Baby Lotions and Creams">Baby Lotions and Creams</option>
                        <option value="Kids Toys and Games">Kids Toys and Games</option>
                        <option value="Baby Strollers and Prams">Baby Strollers and Prams </option>
                        <option value="Baby Feeding">Baby Feeding</option>
                        <option value="Baby Powders">Baby Powders</option>
                    </select>
                </div>
                <div className="form-control ">
                    <label  htmlFor="Price" className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <input id="Price" type="text" placeholder="Product Price" name="productPrice" className="input  input-bordered" required />
                </div>
                <div className="form-control">
                    <label htmlFor="Discount" className="label">
                        <span className="label-text">Discount</span>
                    </label>
                    <input id="Discount" type="text" placeholder="Discount from price" name="discountPrice" className="input  input-bordered" required />
                </div>
                <div className="form-control ">
                    <label htmlFor="Quantity" className="label">
                        <span className="label-text">Quantity</span>
                    </label>
                    <input id="Quantity" type="text" placeholder="Number of product" name="productQuantity" className="input  input-bordered" required />
                </div>
                <div className="form-control">
                    <label htmlFor="Warranty" className="label">
                        <span className="label-text">Age Range</span>
                    </label>
                    <input id="Age" type="text" placeholder="Age Range" name="ageRange" className="input  input-bordered" required />
                </div>
                <div className="form-control ">
                    <label htmlFor="Country" className="label">
                        <span className="label-text">Country</span>
                    </label>
                    <input id="Country" type="text" placeholder="Country Name" name="countryName" className="input  input-bordered" required />
                </div>
                <div className="form-control">
                    <label htmlFor="Color" className="label">
                        <span className="label-text">volume</span>
                    </label>
                    <input id="volume" type="text" placeholder=" volume number" name="volumeOfProduct" className="input  input-bordered" required />
                </div>
                <div className="form-control">
                    <label htmlFor="New" className="label">
                        <span className="label-text">Is New</span>
                    </label>
                    <select id="New" className="select select-bordered"
                        onChange={handleIsNewChange}
                        value={selectedIsNew}>
                        <option disabled value="">Pick one</option>
                        <option value="true">true</option>
                        <option value="false">false</option>
                    </select>
                </div>
                <div className="form-control">
                    <label htmlFor="Rating" className="label">
                        <span className="label-text">Rating</span>
                    </label>
                    <input id="Rating" type="text" placeholder="Product rating" name="productRating" className="input  input-bordered" required />
                </div>
                <div className="form-control col-span-2">
                    <label htmlFor="Model" className="label">
                        <span className="label-text">Model</span>
                    </label>
                    <input id="Model" type="text" placeholder="Product Model" name="productModel" className="input  input-bordered" required />
                </div>
                <div className="form-control col-span-4">
                    <label htmlFor="Brand" className="label">
                        <span className="label-text">Brand Details
                        </span>
                    </label>
                    <textarea id="Brand" placeholder="Brand Details"
                        name="details" className="textarea textarea-bordered textarea-lg w-full" ></textarea>
                </div>
                <div className="form-control col-span-4">
                    <label htmlFor="Features" className="label">
                        <span className="label-text">Features
                        </span>
                    </label>
                    <textarea id="Features" placeholder="features Of Product"
                        name="featuresOfProduct" className="textarea textarea-bordered textarea-lg w-full" ></textarea>
    
                </div>
                <div className="form-control col-span-4">
                    <label htmlFor="summary" className="label">
                        <span className="label-text">summary
                        </span>
                    </label>
                    <textarea id="summary" placeholder="summary Of Product"
                        name="summaryOfProduct" className="textarea textarea-bordered textarea-lg w-full" ></textarea>
    
                </div>
                <div className="form-control mt-6 col-span-4">
                    <button type="submit" className="btn btn-primary">Add Product</button>
                </div>
            </form>
        </div>
    );
    };

export default AddKidsProduct;



