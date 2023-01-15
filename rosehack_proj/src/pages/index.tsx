import React from "react";
import Image from "next/image";
import homeBack from "../public/pictures/background.png";

const index = () => {
  return <div> <Image src={homeBack} alt="" placeholder="blur" quality={100} /></div>;
  
};


export default index;
