import React from "react";

function Cards(props) {
  const { name, imageUrl } = props;
  return (
    <div className="h-[500px] rounded-xl flex flex-col justify-center items-center border-4">
      <div className="rounded-t-xl flex justify-center items-center">
        <img src={imageUrl} alt="#" className="h-80 w-80 rounded-3xl "></img>
      </div>
      <span className="text-xl mt-5 font-semibold">{name}</span>
    </div>
  );
}

export default Cards;
