import { Outlet } from "react-router-dom";

const SharedLayoutProtected = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default SharedLayoutProtected;
