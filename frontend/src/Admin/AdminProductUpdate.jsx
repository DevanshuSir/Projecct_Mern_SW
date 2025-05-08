import React, { useEffect, useState } from "react";
import Left from "./Left";
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
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import { useParams } from "react-router-dom";

const AdminProductUpdate = () => {
  const [productName, setProductName] = useState("");
  const [productDesc, setProductDesc] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productRating, setProductRating] = useState(0);
  const [isSize, setIssize] = useState([]);
  const [isBestseller, setIsbestseller] = useState(false);

  function handleChange(e) {
    let value = e.target.value;
    let checked = e.target.checked;

    console.log(value);
    console.log(checked);

    if (checked) {
      setIssize([value]);
    } else {
      setIssize(isSize.filter((item) => item == value));
    }
  }

  function handleForm(e) {
    e.preventDefault();
  }

  const { id } = useParams();

  useEffect(() => {
    fetch(`/api/adminsingleproductupdate/${id}`)
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        console.log(result);
        setProductName(result.ProductName);
        setProductDesc(result.ProductDescription);
        setProductPrice(result.ProductPrice);
        setProductRating(result.ProductRating);
        setIssize(result.ProductSizes);
        setIsbestseller(result.ProductBestSeller);
      });
  }, [id]);

  return (
    <div>
      <div className="flex flex-col md:flex-row items-center justify-center gap-3 w-11/12 mt-5">
        <Left />
        {/* Right */}
        <div className="w-2/3">
          <h1 className=" text-center text-4xl font-bold text-sky-600 my-4">
            Update Product 💫
          </h1>
          <form onSubmit={handleForm}>
            <TextField
              fullWidth
              label="ProductName"
              id="fullWidth"
              sx={{ marginBottom: "10px" }}
              value={productName}
              onChange={(e) => {
                setProductName(e.target.value);
              }}
            />
            <TextField
              fullWidth
              label="ProductDescription"
              id="fullWidth"
              multiline
              rows={4}
              sx={{ marginBottom: "10px" }}
              value={productDesc}
              onChange={(e) => {
                setProductDesc(e.target.value);
              }}
            />

            <FormControl fullWidth sx={{ marginBottom: "10px" }}>
              <InputLabel htmlFor="outlined-adornment-amount">
                Amount
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-amount"
                value={productPrice}
                onChange={(e) => {
                  setProductPrice(e.target.value);
                }}
                startAdornment={
                  <InputAdornment position="start">₹</InputAdornment>
                }
                label="Amount"
              />
            </FormControl>

            <TextField
              fullWidth
              label="Rating"
              id="fullWidth"
              sx={{ marginBottom: "10px" }}
              value={productRating}
              onChange={(e) => {
                setProductRating(e.target.value);
              }}
            />

            {/* Size Options */}
            <div className="mb-4">
              <h3 className="font-semibold mb-2">Select Size:</h3>
              <div className="flex gap-2">
                <FormGroup sx={{ display: "flex", flexDirection: "row" }}>
                  <FormControlLabel
                    control={<Checkbox />}
                    label="S"
                    value={"S"}
                    checked={isSize[0] == "S" ? true : false}
                    onChange={handleChange}
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    label="M"
                    value={"M"}
                    checked={isSize[1] == "M" ? true : false}
                    onChange={handleChange}
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    label="L"
                    value={"L"}
                    checked={isSize[2] == "L" ? true : false}
                    onChange={handleChange}
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    label="XL"
                    value={"XL"}
                    checked={isSize[3] == "XL" ? true : false}
                    onChange={handleChange}
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    label="XXL"
                    value={"XXL"}
                    checked={isSize[4] == "XXL" ? true : false}
                    onChange={handleChange}
                  />
                </FormGroup>
              </div>
            </div>

            <FormControlLabel
              control={
                <Checkbox
                  icon={<FavoriteBorder />}
                  checkedIcon={<Favorite color="error" />}
                  checked={isBestseller}
                  onChange={(e) => {
                    setIsbestseller(e.target.checked);
                  }}
                />
              }
              label="BestSeller"
            />

            <Button type="submit" variant="outlined" color="error">
              Update Product
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminProductUpdate;
