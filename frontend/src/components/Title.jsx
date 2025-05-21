import React from "react";

const Title = (props) => {
  const { text_one, text_two } = props;

  return (
    <div className="inline-flex gap-2 items-center  mb-3 mt-5 text-center">
      <p className="text-gray-500 text-3xl ">
        {text_one} <span className="text-gray-700 font-medium">{text_two}</span>
      </p>
      <p className="w-8 sm:w-12 h-[1px] sm:h-[2px]   bg-[#ff6825]"></p>
    </div>
  );
};

export default Title;
