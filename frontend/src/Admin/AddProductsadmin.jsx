import React, { useState } from "react";
import Left from "./Left";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";

const AddProductadmin = () => {
  const [Products, setProducts] = useState({
    ProductName: "",
    ProductDesc: "",
    ProductPrice: "",
    ProductRating: "",
    ProductSize: "",
    BestSeller: null,
  });

  function handleForm(e) {
    e.preventDefault();
    console.log(Products);
  }

  return (
    <div>
      <div className="flex  justify-center gap-3 w-11/12 mt-5">
        <Left />
        {/* Right */}
        <div className="w-2/3">
          <h1 className=" text-center text-4xl font-bold text-sky-600 my-4">
            Add Products ✔️
          </h1>
          <form onSubmit={handleForm}>
            <TextField
              fullWidth
              label="ProductName"
              id="fullWidth"
              sx={{ marginBottom: "10px" }}
              value={Products.ProductName}
            />
            <TextField
              fullWidth
              label="ProductDescription"
              id="fullWidth"
              multiline
              rows={4}
              sx={{ marginBottom: "10px" }}
              value={Products.ProductDesc}
              onChange={(e) => {
                setProducts(e.target.value);
              }}
            />

            <FormControl fullWidth sx={{ marginBottom: "10px" }}>
              <InputLabel htmlFor="outlined-adornment-amount">
                Amount
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-amount"
                startAdornment={
                  <InputAdornment position="start">₹</InputAdornment>
                }
                label="Amount"
                value={Products.ProductPrice}
                onChange={(e) => {
                  setProducts(e.target.value);
                }}
              />
            </FormControl>

            <TextField
              fullWidth
              label="Rating"
              id="fullWidth"
              sx={{ marginBottom: "10px" }}
              value={Products.ProductRating}
              onChange={(e) => {
                setProducts(e.target.value);
              }}
            />

            {/* Size Options */}
            <div className="mb-4">
              <h3 className="font-semibold mb-2">Select Size:</h3>
              <div className="flex gap-2">
                <FormGroup
                  sx={{ display: "flex", flexDirection: "row" }}
                  value={Products.ProductSize}
                  onChange={(e) => {
                    setProducts(e.target.value);
                  }}
                >
                  <FormControlLabel
                    control={<Checkbox />}
                    label="S"
                    value={"S"}
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    label="M"
                    value={"M"}
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    label="L"
                    value={"L"}
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    label="XL"
                    value={"XL"}
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    label="XXL"
                    value={"XXL"}
                  />
                </FormGroup>
              </div>
            </div>

            <FormControlLabel
              control={
                <Checkbox
                  icon={<FavoriteBorder />}
                  checkedIcon={<Favorite color="error" />}
                  value={Products.BestSeller}
                  onChange={(e) => {
                    setProducts(e.target.value);
                  }}
                />
              }
              label="BestSeller"
            />

            <Button variant="outlined" color="error">
              Add Product
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProductadmin;
