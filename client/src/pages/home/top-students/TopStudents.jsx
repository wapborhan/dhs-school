import React from "react";
import TopStudenscard from "./TopStudenscard";

const TopStudents = () => {
  return (
    <div className="top-students border-2 border-[#fca120]">
      <div className="bg-[#fca120] p-2">
        <h2 className="ml-6 text-2xl text-white font-bold">
          আমাদের সেরা শিক্ষার্থী
        </h2>
      </div>
      <div className="grid grid-cols-4 p-8 gap-4">
        <TopStudenscard />
        <TopStudenscard />
        <TopStudenscard />
        <TopStudenscard />
      </div>
    </div>
  );
};

export default TopStudents;
