import President from "./president/President";
import HeadTeacher from "./head-teacher/HeadTeacher";
import ImportantLinks from "./important-links/ImportantLinks";
import InternalEservices from "./Internal-eservices/InternalEservices";

const Sidebar = () => {
  return (
    <div className="space-y-4 sticky top-5">
      <President />
      <HeadTeacher />
      <ImportantLinks />
      <InternalEservices />
    </div>
  );
};

export default Sidebar;
