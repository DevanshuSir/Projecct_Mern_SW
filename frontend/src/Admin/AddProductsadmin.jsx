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
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddProductadmin = () => {
  const navigate = useNavigate();

  const [productName, setProductName] = useState("");
  const [productDesc, setProductDesc] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productRating, setProductRating] = useState(0);
  const [isSize, setIssize] = useState([]);
  const [isBestseller, setIsbestseller] = useState(false);

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
    };

    fetch("/api/adminproductdata", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        if (result.message === "Successfully Insert Product 😍") {
          navigate("/adminproduct");
        }
      });
  }

  return (
    <div>
      <div className="flex flex-col items-center justify-center gap-3 w-auto mt-5">
        <Left />
        {/* Right */}
        <div className="w-11/12 ">
          <h1 className=" text-center text-4xl font-bold text-sky-600 my-4">
            Add Products ✔️
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
                startAdornment={
                  <InputAdornment position="start">₹</InputAdornment>
                }
                label="Amount"
                value={productPrice}
                onChange={(e) => {
                  setProductPrice(e.target.value);
                }}
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
                    onChange={handleChange}
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    label="M"
                    value={"M"}
                    onChange={handleChange}
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    label="L"
                    value={"L"}
                    onChange={handleChange}
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    label="XL"
                    value={"XL"}
                    onChange={handleChange}
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    label="XXL"
                    value={"XXL"}
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
              Add Product
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProductadmin;
