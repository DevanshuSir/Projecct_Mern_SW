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
import { useNavigate, useParams } from "react-router-dom";

const AdminProductUpdate = () => {
  const [productName, setProductName] = useState("");
  const [productDesc, setProductDesc] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productRating, setProductRating] = useState(0);
  const [isSize, setIssize] = useState([]);
  const [isBestseller, setIsbestseller] = useState(false);
  const [status, setStatus] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  function handleChange(e) {
    let value = e.target.value;
    let checked = e.target.checked;

    if (checked) {
      setIssize([...isSize, value]);
    } else {
      setIssize(isSize.filter((item) => item !== value));
    }
  }

  function handleForm(e) {
    e.preventDefault();
    const formData = {
      Title: productName,
      Desc: productDesc,
      Price: productPrice,
      Rating: productRating,
      Size: isSize,
      BestSeller: isBestseller,
      PStatus: status,
    };

    fetch(`/api/adminnewproductupdate/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        if (result.message === "Successfully Update ✔️") {
          navigate("/adminproduct");
        }
      });
  }

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
      <div className="flex flex-col items-center justify-center gap-3 w-auto mt-5">
        <Left />
        {/* Right */}
        <div className="w-11/12">
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

            <select
              name=""
              id=""
              className="w-full border bottom-10 border-black rounded-sm p-2"
              onChange={(e) => {
                setStatus(e.target.value);
              }}
            >
              <option value="">---Select---</option>
              <option value="In-Stock">In-Stock</option>
              <option value="Out-Of-Stock">Out-Of-Stock</option>
            </select>

            {/* Size Options */}
            <div className="mb-4">
              <h3 className="font-semibold mb-2">Select Size:</h3>
              <div className="flex gap-2">
                <FormGroup sx={{ display: "flex", flexDirection: "row" }}>
                  <FormControlLabel
                    control={<Checkbox />}
                    label="S"
                    value={"S"}
                    checked={isSize.includes("S")}
                    onChange={handleChange}
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    label="M"
                    value={"M"}
                    checked={isSize.includes("M")}
                    onChange={handleChange}
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    label="L"
                    value={"L"}
                    checked={isSize.includes("L")}
                    onChange={handleChange}
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    label="XL"
                    value={"XL"}
                    checked={isSize.includes("XL")}
                    onChange={handleChange}
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    label="XXL"
                    value={"XXL"}
                    checked={isSize.includes("XXL")}
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
