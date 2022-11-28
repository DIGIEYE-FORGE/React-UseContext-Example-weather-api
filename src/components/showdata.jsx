import React from "react";
import { useMyContext } from "../Provider/provider";

const Showdata = () => {
  let context = useMyContext();
  console.log(context.data.dataseries);
  return (
    <>
      {context.data.dataseries.map((stat, key) => {
        return <div key={key}>{stat.prec_type}</div>;
      })}
    </>
  );
};

export default Showdata;
