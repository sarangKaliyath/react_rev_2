import React from "react";

export const Card = ({ data }) => {
  console.log(data);
  return (
    <div>
      <div>
        <img src={data.img} alt="" />
      </div>
      <div>{data.text_1}</div>
      <div>{data.text_2}</div>
    </div>
  );
};
