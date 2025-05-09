import React from "react";
import Left from "./Left";

const AdminQuery = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center gap-3 w-auto mt-5">
        <Left />
        {/* Right */}
        <div className="w-11/12 ">
          <h1>Query Management</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod itaque
            ea repudiandae id reiciendis cumque dolore maiores voluptatem aut
            porro.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminQuery;
