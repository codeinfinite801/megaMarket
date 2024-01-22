import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import SidePart from "./SidePart";

const PlaceOrder = () => {
    const { user } = useContext(AuthContext);
    console.log(user);
    return (
        <div className="flex gap-5 bg-[#f8f9fa] px-10">
            <div className="w-8/12 mt-5">
                {/* div-1 */}
                <div className="bg-[#fff] px-5 py-3 flex justify-between">
                    <div className="flex gap-3">
                        <input type="checkbox" name="" id="" />
                        <p>Select All (1 Items)</p>
                    </div>
                    <div>
                        <h2>{user?.email}</h2>
                    </div>
                </div>
                {/* div-2 */}
                
            </div>
            <div className="w-4/12 mt-5">
              <SidePart></SidePart>
            </div>
        </div>
    );
};

export default PlaceOrder;




    

   


