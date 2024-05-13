// import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
// import { AuthContext } from "../components/AuthProvider";

const Navbar = () => {
//   const { user, logOut } = useContext(AuthContext);

//   const handleLogOut = () => {
//     logOut().then().catch();
//   };

  const navLinks = (
    <>
      <li className="font-bold">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="font-bold">
        <NavLink to="/allArtCraft">All Art And Craft Items</NavLink>
      </li>

      <li className="font-bold">
        <NavLink to="/addCraftItem">Add Craft Item</NavLink>
      </li>
      <li className="font-bold">
        <NavLink to="/myArtCraft">My Art And Craft List</NavLink>
      </li>
    </>
  );

  return (
    <div className="mb-10 h-[120px] pt-4">
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <a className="btn btn-ghost text-2xl  text-[#8F3034] font-bold">
            <div className="flex flex-col">
              <span className="md:text-5xl mr-2">Creative</span>
              <span>Canvas Corner</span>
            </div>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal">{navLinks}</ul>
        </div>


        <div className="navbar-end">
          {/* {user ? (
            <div className="flex items-center">
              <div className="relative group">
                <Link to="/update">
                  <img
                    className="h-16 rounded-full"
                    src={
                      user?.photoURL || "https://imgbb.host/images/DfdvE.png"
                    }
                    alt=""
                  />
                </Link>
                <span className="absolute  opacity-0 group-hover:opacity-100 px-2 py-1 text-xl">
                  {user?.displayName}
                </span>
              </div>
              <button
                onClick={handleLogOut}
                className="btn text-2xl bg-[#8F3034] text-white ml-1"
              >
                Logout
              </button>
            </div>
          ) : ( */}
            <div className="flex items-center">
              {/* <img
                className="h-16"
                src="https://imgbb.host/images/DfdvE.png"
                alt=""
              /> */}
              <NavLink to="/login">
                <button className="btn bg-[#8F3034] text-xl text-white ml-1">
                  Login
                </button>
              </NavLink>
              <NavLink to="/register">
                <button className="btn bg-[#8F3034] text-xl text-white ml-1">
                  Register
                </button>
              </NavLink>
            </div>
          {/* )} */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
