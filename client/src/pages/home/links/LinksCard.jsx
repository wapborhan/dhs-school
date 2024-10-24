import React from "react";
import { Link } from "react-router-dom";

const LinksCard = () => {
  return (
    <div className="card border-2 border-[#fca120]  p-5">
      <div className="card-header text-2xl font-bold">পরীক্ষা সংক্রান্ত</div>
      <div className="card-body flex gap-3 items-center mt-5">
        <div className="img basis-1/3">
          <img
            src="https://mdsobedalischool.com/wp-content/uploads/sites/3/2023/08/exam-related.svg"
            alt=""
            className="w-20"
          />
        </div>
        <div className="links basis-2/3">
          <ul className="w-full rounded-lg space-y-3  text-blue-800">
            <li>
              <Link to="#" className="w-fill flex">
                ➤<span className="ml-2 truncate">এনটিআরসিএ</span>
              </Link>
            </li>
            <li>
              <Link to="#" className="w-fill flex">
                ➤
                <span className="ml-2 truncate">
                  মাধ্যমিক ও উচ্চশিক্ষা অধিদপ্তর
                </span>
              </Link>
            </li>
            <li>
              <Link to="" className="w-fill flex">
                ➤<span className="ml-2 truncate">শিক্ষা মন্ত্রণালয়</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LinksCard;
