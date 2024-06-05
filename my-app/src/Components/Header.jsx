import React from "react";
import { Banner1, Banner2, Banner3, Banner4, Banner5 } from "../images";

const images = [Banner1, Banner2, Banner3, Banner4, Banner5];

const Header = ({title,image,type}) => {
  return (
    <div className="w-full h-[100vh]">
      <div className="relative w-full h-full">
        <img
          src={images[Math.floor(Math.random() * images.length)]}
          className="w-full h-full object-cover"
          alt="recipes"
        />
      </div>

      <div className="absolute w-full h-full bg-gradient-to-t from-black to-transparent top-0 z-8 flex flex-col justify-center pt-40 2xl:pt-20 px-4">
        <h1 className="text-white text-4xl md:text-5xl font-bold text-center">{title}</h1>
        {type && (
          <p className="text-green-500 mt-4 text-center text-sm px-6 py-4 bg-black rounded-full">Welcome to FlavorVerse, your passport to culinary adventures!
          <br className="hidden md:block"/>Discover a treasure trove of delectable recipes from around the globe.</p>
        )}
      </div>
    </div>
  );
};

export default Header;
