import React from "react";
import Left from "./Left";

const Admin = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center gap-3 w-auto mt-5">
        <Left />
        {/* Right */}
        <div className="w-11/12 ">
          <h1 className="text-4xl font-bold text-sky-600 my-4">Admin 👤</h1>
          <p className="text-gray-500 text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod itaque
            ea repudiandae id reiciendis cumque dolore maiores voluptatem aut
            porro. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Aperiam tempore accusantium ipsum voluptatum perferendis! Maxime eum
            perspiciatis, quia enim dicta vero molestias sed. Eos nam quo, illo
            ducimus eius ipsa velit obcaecati rerum aspernatur dolorem? Et,
            delectus, suscipit cum tempore nemo modi pariatur alias mollitia
            earum repellendus est inventore corporis!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Admin;
