import React from "react";
import TeacherCard from "./TeacherCard";

const Teachers = () => {
  return (
    <div className="president border-2 border-[#fca120]">
      <div className="bg-[#fca120] p-2">
        <h2 className="ml-6 text-2xl text-white font-bold">শিক্ষক</h2>
      </div>
      <div className="grid grid-cols-4 p-8 gap-4">
        <TeacherCard />
        <TeacherCard />
        <TeacherCard />
        <TeacherCard />
      </div>
    </div>
  );
};

export default Teachers;
