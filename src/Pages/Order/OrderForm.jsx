

const OrderForm = () => {
    return (
        <div className="bg-white border-2 border-sky-300 rounded-md">
            <form className="card-body">
                <h2 className="text-xl font-semibold">Shipping Address <span className="text-sm text-gray-700">(Please Fill Out Your Information)</span></h2>
                <hr className="mt-3 mb-3" />
                <div className="flex">
                    <h2 className="mr-10">Pick Up Your Parcel From:</h2>
                    <div className="flex gap-5">
                        <button className="flex justify-center items-center gap-2">
                            <input type="radio" name="radio-7" className="radio radio-info" />
                            <span>Home</span>
                        </button>
                        <button className="flex justify-center items-center gap-2">
                            <input type="radio" name="radio-7" className="radio radio-info" />
                            <span>Office</span>
                        </button>
                    </div>
                </div>
                {/* name */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" placeholder="Enter Your Name" className="input input-bordered" required />
                </div>
                {/* phone no */}
                <div className="flex gap-5">
                    <div className="form-control flex-1">
                        <label className="label">
                            <span className="label-text">Phone No:</span>
                        </label>
                        <input type="text" placeholder="Phone No:" className="input input-bordered" required />
                    </div>
                    <div className="form-control flex-1">
                        <label className="label">
                            <span className="label-text">Alternative Phone No:</span>
                        </label>
                        <input type="text" placeholder="Alternative Phone No" className="input input-bordered" required />
                    </div>
                </div>
                {/* place */}
                <div className="flex gap-5 mt-5">
                    <div className="form-control flex-1">
                        <input type="text" defaultValue={'Bangladesh'} className="input input-bordered" required />
                    </div>
                    <div className="form-control flex-1">
                        <input type="password" placeholder="password" className="input input-bordered" required />
                    </div>
                </div>
                {/* text-area */}
                <div>
                    <textarea className="textarea w-full textarea-bordered h-24" placeholder="Street Address, P.O Box, City"></textarea>
                </div>

            </form>
        </div>
    );
};

export default OrderForm;