import React from "react";
import Left from "./Left";
import { Button, TextField } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import toast from "react-hot-toast";

const AdminQueryReply = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [to, setTo] = useState("");
  const [sub, setSub] = useState("");
  const [mailBody, setMailBody] = useState("");

  useEffect(() => {
    fetch(`/api/userquerydata/${id}`)
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        setTo(result.QueryEmail);
      });
  }, []);

  function handleForm(e) {
    e.preventDefault();
    const formData = { to, sub, mailBody };
    fetch(`/api/usermailreply/${id}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        if (result.message === "Successfully Reply 😉") {
          toast.success(result.message);
          navigate("/adminquery");
        } else {
          toast.error(result.message);
        }
      });
  }

  return (
    <div>
      <div className="flex flex-col items-center justify-center gap-3 w-auto mt-5">
        <Left />
        {/* Right */}
        <div className="w-11/12 ">
          <h1 className="text-4xl font-bold text-sky-600 my-4">Reply 📧</h1>
          <form onSubmit={handleForm}>
            <TextField
              fullWidth
              label="To"
              id="fullWidth"
              sx={{ marginBottom: "10px" }}
              value={to}
            />
            <TextField
              fullWidth
              label="From"
              id="fullWidth"
              sx={{ marginBottom: "10px" }}
              value={"dkexpress06@gmail.com"}
            />
            <TextField
              fullWidth
              label="Subject"
              id="fullWidth"
              sx={{ marginBottom: "10px" }}
              value={sub}
              onChange={(e) => {
                setSub(e.target.value);
              }}
            />
            <TextField
              fullWidth
              label="Body"
              id="fullWidth"
              multiline
              rows={4}
              sx={{ marginBottom: "10px" }}
              value={mailBody}
              onChange={(e) => {
                setMailBody(e.target.value);
              }}
            />

            <Button type="submit" variant="outlined" color="error">
              Reply
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminQueryReply;
