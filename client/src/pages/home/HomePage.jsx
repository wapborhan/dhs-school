import React from "react";
import Notice from "./notice/Notice";
import AboutIns from "./about/AboutIns";
import Teachers from "./teacher/Teachers";
import Links from "./links/Links";
import TopStudents from "./top-students/TopStudents";

const HomePage = () => {
  return (
    <div className="space-y-4">
      <Notice />
      <AboutIns />
      <Links />
      <Teachers />
      <TopStudents />
    </div>
  );
};

export default HomePage;
