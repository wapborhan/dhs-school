import React from "react";

const TeacherCard = () => {
  return (
    <div className="bg-white border-2   p-4 rounded-md ">
      <div className="flex justify-center items-center leading-none">
        <img
          src="https://mdsobedalischool.com/wp-content/uploads/sites/3/2023/09/Md-Siddiqur-Rahman-teacher.jpg"
          alt="pic"
          className="h-40 w-56 rounded-md shadow-lg mt-6 transform -translate-y-14 hover:-translate-y-4 transition duration-700"
        />
      </div>
      <div className="p-3 text-center">
        <h2 className="block mb-1 font-extralight">মোঃ সিদ্দিকুর রহমান</h2>
        <h2 className="block mb-1 font-extralight">প্রধান শিক্ষক</h2>
      </div>
    </div>
  );
};

export default TeacherCard;
