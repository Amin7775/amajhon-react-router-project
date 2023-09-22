import { NavLink, Outlet, useNavigation } from "react-router-dom";
import Footer from "../../Pages/Footer/Footer";

const MainLayout = () => {
  const navigation = useNavigation();
  console.log(navigation.state);
  return (
    <div>
      <section className="flex justify-between px-10 shadow-md py-7">
        <div>
          <h1 className="text-3xl font-bold">Amajhon</h1>
        </div>
        <nav className="text-lg font-medium">
          <ul className="flex gap-14">
            <li>
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "bg-green-400 py-3 px-6" : ""}>
                Home
              </NavLink>
              </li>

            <li>
              <NavLink
                to="/products"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "bg-green-400 py-3 px-6" : ""}>
                Products
              </NavLink>
              </li>
            <li>

              <NavLink
                to="/dashboard"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "bg-green-400 py-3 px-6" : ""}>
                Dashboard
              </NavLink>
              </li>

            {/* <li>
              <a href="/products">Products</a>
            </li>
            <li>
              <a href="/dashboard">Dashboard</a>
            </li> */}
          </ul>
        </nav>
      </section>
      <div className="min-h-screen">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
