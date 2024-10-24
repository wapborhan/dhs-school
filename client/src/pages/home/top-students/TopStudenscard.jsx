import React from "react";

const TopStudenscard = () => {
  return (
    <div className="bg-white border-2   p-4 rounded-md ">
      <div className="flex justify-center items-center leading-none">
        <img
          src="http://gripetech.com/demo/wp-content/uploads/2023/09/genderinequalityinvariousreligiouspersonallawsinindia_2836807710.jpg"
          alt="pic"
          className="h-40 w-56 rounded-md shadow-lg  "
        />
      </div>
      <div className="p-3 text-center space-y-2">
        <h2 className="block mb-1 font-extralight">নুর আলম</h2>
        <h2 className="inline-block py-1 px-4 mb-1 font-extralight bg-orange-300 rounded-2xl">
          জিপিএ 3.6
        </h2>
      </div>
    </div>
  );
};

export default TopStudenscard;
