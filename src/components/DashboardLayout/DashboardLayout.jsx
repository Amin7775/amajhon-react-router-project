// import Dashboard from "../../Pages/Dashboard/Dashboard";

import { Link, Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="flex my-10 gap-10">
      <div className="w-[20%] bg-red-200 shadow-md">
        <ul className="p-5 text-2xl">
          <Link to="/dashboard">
            <li className="hover:bg-red-300 border-b-2 border-black hover:font-medium py-2">
              Dashboard
            </li>
          </Link>
          <Link to="/dashboard/profile">
            <li className="hover:bg-red-300 border-b-2 border-black hover:font-medium py-2">Profile</li>
          </Link>
          <Link to="/dashboard/editProfile">
            <li className="hover:bg-red-300 border-b-2 border-black hover:font-medium py-2">Edit Profile</li>
          </Link>
        </ul>
      </div>
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default DashboardLayout;
