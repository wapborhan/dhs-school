import React, { Fragment } from "react";
import InternalEcard from "./InternalEcard";

const InternalEservices = () => {
  return (
    <Fragment>
      <div className="imp-links border-2 border-[#fca120] sticky top-0 bg-white">
        <div className="bg-[#fca120] p-2">
          <h2 className="text-center text-2xl text-white font-bold">
            গুরুত্বপূর্ণ লিংক
          </h2>
        </div>
        <div className="links">
          <ul className="w-full rounded-lg  text-blue-800">
            <InternalEcard />
            <InternalEcard />
            <InternalEcard />
            <InternalEcard />
            <InternalEcard />
            <InternalEcard />
          </ul>
        </div>
      </div>
    </Fragment>
  );
};

export default InternalEservices;
