import React, { Fragment } from "react";

import LinksCard from "./LinksCard";

const ImportantLinks = () => {
  return (
    <Fragment>
      <div className="imp-links border-2 border-[#fca120] ">
        <div className="bg-[#fca120] p-2">
          <h2 className="text-center text-2xl text-white font-bold">
            অভ্যন্তরীণ ই-সেবা
          </h2>
        </div>
        <div className="links">
          <ul className="w-full rounded-lg  text-blue-800">
            <LinksCard />
            <LinksCard />
            <LinksCard />
            <LinksCard />
            <LinksCard />
            <LinksCard />
            <LinksCard />
            <LinksCard />
            <LinksCard />
            <LinksCard />
          </ul>
        </div>
      </div>
    </Fragment>
  );
};

export default ImportantLinks;
