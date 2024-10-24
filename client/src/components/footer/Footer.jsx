const Footer = () => {
  const styleh5 = "text-lg font-bold border-b-[#fca120] border-b w-11/12";
  return (
    <>
      <div className="bg-[#1d2538] text-white px-8 py-5">
        <div className="grid grid-cols-3">
          <div className="info flex flex-col w-full items-center justify-center space-y-2">
            <h2 className={styleh5}>About</h2>
            <img
              src="https://jessoreboard.gov.bd/jb_logo_new.png"
              alt=""
              className="w-20"
            />{" "}
            <h2>SR High School</h2>
            <h2 className="">স্থাপিত: ১৯৯৬ ইং</h2>
            <h2 className="">ই.আই.আই.এন: 117464</h2>
          </div>
          <div className="important-links">
            <h2 className={styleh5}>Important Links</h2>
            <ul>
              <li>Link</li>
              <li>Link</li>
              <li>Link</li>
            </ul>
          </div>
          <div className="important-links">
            <h2 className={styleh5}>Others</h2>
            <ul>
              <li>Link</li>
              <li>Link</li>
              <li>Link</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="credit bg-slate-900 text-center text-white py-3 px-10 flex justify-between gap-5">
        <div>Copyright © {new Date().getFullYear()} . All Rights Reserved.</div>
        <div>
          Developed by{" "}
          <a href="http://www.srdreamlab.com" target="__BLANK">
            SR Dream Lab
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
