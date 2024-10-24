import React from "react";
import { Link } from "react-router-dom";

const President = () => {
  return (
    <div className="president border-2 border-[#fca120]">
      <div className="bg-[#fca120] p-2">
        <h2 className="text-center text-2xl text-white font-bold">সভাপতি</h2>
      </div>
      <img
        src="https://mdsobedalischool.com/wp-content/uploads/sites/3/2023/08/269076614_430633075347337_3732938258557794002_n.jpg"
        alt=""
      />
      <h2 className="text-center py-3 text-2xl">মোঃ শামসুল হক</h2>
      <div className="btn bg-slate-600 text-white text-center py-2">
        <Link to="/"> বিস্তারিত</Link>
      </div>
    </div>
  );
};

export default President;
