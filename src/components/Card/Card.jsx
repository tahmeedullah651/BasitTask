import React from "react";

//  olamba
const Card = ({ text, value }) => {
  return (
    <>
      <div className="w-[20%] flex rounded-t-lg border border-gray-200 justify-center items-center flex-col gap-y-1">
        <h2 className="text-base w-full overflow-hidden rounded-lg font-semibold p-3 text-white bg-black shadow">
          {text}
        </h2>
        <span className="text-lg font-bold py-3 px-1">{value}</span>
      </div>
    </>
  );
};

export default Card;
