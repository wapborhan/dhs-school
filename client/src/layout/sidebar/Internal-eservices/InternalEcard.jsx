import React from "react";
import { Link } from "react-router-dom";

const InternalEcard = () => {
  return (
    <li>
      <Link
        to=""
        className="w-fill flex p-2 border-b-2  border-[#fca120] hover:bg-slate-100"
      >
        ➤<span className="ml-2 truncate">শিক্ষা মন্ত্রণালয়</span>
      </Link>
    </li>
  );
};

export default InternalEcard;
