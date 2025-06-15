import React from "react";
import Hero from "../components/Hero";
import Policy from "../components/Policy";
import Query from "../components/Query";
import Latest from "./Latest";
import BestSeller from "./BestSeller";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const HomePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    let token = localStorage.getItem("token");
    // console.log(token);

    fetch("/api/homepage", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token ?? "undefined"}`,
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        if (result.message === "Successfully") {
          navigate("/home");
        } else if (result.message === "No token provided") {
          navigate("/");
        } else if (result.message === "Invalid token or expired token") {
          toast.error(result.message);
        }
      });
  }, [navigate]);

  return (
    <div>
      <Hero />
      <Latest />
      <BestSeller />
      <Policy />
      <Query />
    </div>
  );
};

export default HomePage;
