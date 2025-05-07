import React from "react";
import Exchange from "../assets/Exchange.png";
import Return from "../assets/Return.png";
import Support from "../assets/Support.png";
const Policy = () => {
  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-2">
        <div>
          <img src={Exchange} alt="" className="w-12 m-auto mb-5" />
          <p className="font-semibold">Easy Exchange Policy</p>
          <p className="text-gray-400"> We offer hassle free exchange policy</p>
        </div>
        <div>
          <img src={Return} alt="" className="w-12 m-auto mb-5" />
          <p className="font-semibold">7 Days Return Policy</p>
          <p className="text-gray-400">We provide 7 days free return policy</p>
        </div>
        <div>
          <img src={Support} alt="" className="w-12 m-auto mb-5" />
          <p className="font-semibold">Best customer support</p>
          <p className="text-gray-400"> We provide 24/7 customer support</p>
        </div>
      </div>
    </div>
  );
};

export default Policy;
