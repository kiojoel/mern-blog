import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import DashSidebar from "../componenets/DashSidebar";
import DashProfile from "../componenets/DashProfile";
import DashPosts from "../componenets/DashPosts";
import DashUsers from "../componenets/DashUsers";
import DashComments from "../componenets/DashCommments";

export default function Dashboard() {
  const location = useLocation();
  const [tab, setTab] = useState("");
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFormUrl = urlParams.get("tab");
    if (tabFormUrl) {
      setTab(tabFormUrl);
    }
  }, [location.search]);
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <div className="md:w-56">
        {/* sidebar */}
        <DashSidebar />
      </div>
      {/* profile */}
      {tab === "profile" && <DashProfile />}
      {/* posts... */}
      {tab === "posts" && <DashPosts />}
      {/* users */}
      {tab === "users" && <DashUsers />}
      {/* comments  */}
      {tab === "comments" && <DashComments />}
    </div>
  );
}
