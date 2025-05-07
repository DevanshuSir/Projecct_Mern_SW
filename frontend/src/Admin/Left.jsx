import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
const Left = () => {
  return (
    <div className="w-1/3 flex flex-col gap-3">
      <Link to={"/adminproduct"}>
        <Button variant="contained" color="success" fullWidth>
          Product Management
        </Button>
      </Link>
      <Link to={"/adminquery"}>
        <Button variant="contained" color="success" fullWidth>
          Query Management
        </Button>
      </Link>
    </div>
  );
};

export default Left;
