import React from "react";
import { useParams } from "react-router-dom";

const AdminQueryReply = () => {
  const { id } = useParams();
  return <div>{id}</div>;
};

export default AdminQueryReply;
