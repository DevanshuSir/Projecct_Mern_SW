import React from "react";
import Left from "./Left";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const AdminProduct = () => {
  return (
    <div>
      <div className="flex items-center justify-center gap-3 w-11/12 mt-5">
        <Left />
        {/* Right */}
        <div className="w-2/3 flex items-center justify-center flex-col">
          <h1 className="text-4xl font-bold text-sky-600 my-4">
            Product Management👤
          </h1>
          <Link to={"/addadminproducts"}>
            <Button variant="contained" color="warning">
              Add Product Here ..😍
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdminProduct;
