import React from "react";
import Left from "./Left";

const Admin = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row items-center justify-center gap-3 w-11/12 mt-5">
        <Left />
        {/* Right */}
        <div className="w-2/3 flex items-center justify-center flex-col">
          <h1 className="text-4xl font-bold text-sky-600 my-4">Admin 👤</h1>
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

export default Admin;
