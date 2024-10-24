import React from "react";
import { Link } from "react-router-dom";

const HeadTeacher = () => {
  return (
    <div className="head-teacher border-2 border-[#fca120] ">
      <div className="bg-[#fca120] p-2">
        <h2 className="text-center text-2xl text-white font-bold">
          প্রধান শিক্ষক
        </h2>
      </div>
      <img
        src="https://mdsobedalischool.com/wp-content/uploads/sites/3/2023/09/Md-Siddiqur-Rahman-teacher.jpg"
        alt=""
      />
      <h2 className="text-center py-3 text-2xl">মোঃ সিদ্দিকুর রহমান</h2>
      <div className="btn bg-green-700 text-white text-center py-2">
        <Link to="/"> বিস্তারিত</Link>
      </div>
    </div>
  );
};

export default HeadTeacher;
