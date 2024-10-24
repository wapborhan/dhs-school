import { Link, NavLink } from "react-router-dom";

const Notice = () => {
  return (
    <div
      className="bg-no-repeat  w-full bg-left-top  p-5 bg-slate-100 rounded-md"
      style={{
        backgroundImage: `url(/assets/images/bg_notice_board.png)`,
      }}
    >
      <div className="title">
        <h2 className="ml-20 text-2xl font-bold">Notice</h2>
      </div>
      <div className="notice-list mx-20 mt-8">
        <ul className="w-full  text-blue-800 space-y-2">
          <li>
            <Link
              to="#"
              className="w-full flex border-dotted border-b-2 border-slate-400"
            >
              i<span className="ml-2 truncate ">এনটিআরসিএ</span>
            </Link>
          </li>
          <li>
            <Link
              to="#"
              className="w-fill flex border-dotted border-b-2 border-slate-400"
            >
              i
              <span className="ml-2 truncate">
                মাধ্যমিক ও উচ্চশিক্ষা অধিদপ্তর
              </span>
            </Link>
          </li>
          <li>
            <Link
              to=""
              className="w-fill flex border-dotted border-b-2 border-slate-400"
            >
              i<span className="ml-2 truncate">শিক্ষা মন্ত্রণালয়</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="btns flex justify-end mt-6">
        <NavLink className=" p-2 rounded-sm text-white px-5 bg-[#fca120]">
          সকল নোটিশ
        </NavLink>
      </div>
    </div>
  );
};

export default Notice;
