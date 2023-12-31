import Container from "../components/Container";
import { Link, NavLink } from "react-router-dom";
import ButtonPrimary from "../components/button/ButtonPrimary";
import { useEffect, useState } from "react";
import Logo from "../components/logo/Logo";
import useAuth from "../hooks/useAuth";
import Avatar from "../components/profile/Avatar";
import logoDark from "../assets/fav-icon.png";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const [darkMode, setDarkMode] = useState("light");
  const [navbarToggle, setNavbarToggle] = useState(false);
  const [dropdownToggle, setDropdownToggle] = useState(false);

  // desktop and mobile links
  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? `after:bg-secondary_color after:h-[4px] after:w-full after:inline-block flex flex-col after:scale-100 after:duration-300 `
              : `hover:after:scale-100 after:bg-secondary_color after:h-[4px] after:w-full after:inline-block flex flex-col after:scale-0 after:duration-300`
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about-us"
          className={({ isActive }) =>
            isActive
              ? `after:bg-secondary_color after:h-[4px] after:w-full after:inline-block flex flex-col after:scale-100 after:duration-300 `
              : `hover:after:scale-100 after:bg-secondary_color after:h-[4px] after:w-full after:inline-block flex flex-col after:scale-0 after:duration-300`
          }
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to="services"
          className={({ isActive }) =>
            isActive
              ? `after:bg-secondary_color after:h-[4px] after:w-full after:inline-block flex flex-col after:scale-100 after:duration-300 `
              : `hover:after:scale-100 after:bg-secondary_color after:h-[4px] after:w-full after:inline-block flex flex-col after:scale-0 after:duration-300`
          }
        >
          Services
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/feedBack"
          className={({ isActive }) =>
            isActive
              ? `after:bg-secondary_color after:h-[4px] after:w-full after:inline-block flex flex-col after:scale-100 after:duration-300 `
              : `hover:after:scale-100 after:bg-secondary_color after:h-[4px] after:w-full after:inline-block flex flex-col after:scale-0 after:duration-300`
          }
        >
          <span>FeedBack</span>
        </NavLink>
      </li>
    </>
  );
  // MOBILE LINKS
  const Mobilelinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? `text-secondary_color` : "")}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="about"
          className={({ isActive }) => (isActive ? `text-secondary_color` : "")}
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to="services"
          className={({ isActive }) => (isActive ? `text-secondary_color` : "")}
        >
          Services
        </NavLink>
      </li>
    </>
  );

  // dropdown links
  const dropdown = (
    <>
      <li className="w-full block border-b ">
        <NavLink
          to="/my"
          className={({ isActive }) =>
            isActive
              ? `after:bg-secondary_color after:h-[4px] pb-1 w-full after:w-full after:inline-block flex flex-col after:scale-100 after:duration-300 `
              : `hover:after:scale-100 after:bg-secondary_color pb-1 w-full after:h-[4px] after:w-full after:inline-block flex flex-col after:scale-0 after:duration-300`
          }
        >
          My Services
        </NavLink>
      </li>
      <li className="w-full block ">
        <NavLink
          to="/addServices"
          className={({ isActive }) =>
            isActive
              ? `after:bg-secondary_color after:h-[4px] pb-1 w-full after:w-full after:inline-block flex flex-col after:scale-100 after:duration-300 `
              : `hover:after:scale-100 after:bg-secondary_color pb-1 w-full after:h-[4px] after:w-full after:inline-block flex flex-col after:scale-0 after:duration-300`
          }
        >
          Add Services
        </NavLink>
      </li>
      <li className="w-full block ">
        <NavLink
          to="/mySchedules"
          className={({ isActive }) =>
            isActive
              ? `after:bg-secondary_color after:h-[4px] w-full  after:w-full after:inline-block flex flex-col after:scale-100 after:duration-300 `
              : `hover:after:scale-100 after:bg-secondary_color  w-full after:h-[4px] after:w-full after:inline-block flex flex-col after:scale-0 after:duration-300`
          }
        >
          My Schedules
        </NavLink>
      </li>
    </>
  );
  const Mobiledropdown = (
    <>
      <li className="w-full block ">
        <NavLink
          to="/my"
          className={({ isActive }) => (isActive ? `text-secondary_color` : "")}
        >
          My Services
        </NavLink>
      </li>
      <li className="w-full block ">
        <NavLink
          to="/addServices"
          className={({ isActive }) => (isActive ? `text-secondary_color` : "")}
        >
          Add Services
        </NavLink>
      </li>
      <li className="w-full block ">
        <NavLink
          to="/mySchedules"
          className={({ isActive }) => (isActive ? `text-secondary_color` : "")}
        >
          My Schedules
        </NavLink>
      </li>
    </>
  );

  // handle dark mode

  // getting mode from localStorage
  useEffect(() => {
    const mod = localStorage.getItem("homeCareHub");
    const html = document.documentElement;
    html.classList.add(mod);
    setDarkMode(mod);
  }, []);

  return (
    <>
      <Container>
        <nav className="flex justify-between items-center h-full relative z-50">
          <Link to="/">
            <div className="flex items-center gap-3">
              <img src={logoDark} alt="dark mode logo" className="md:w-8 w-6" />
              <h1 className="dark:text-text_color_dark text-text_color_normal text-xl md:text-2xl font-medium sm:inline-block hidden">
                HomeCareHub
              </h1>
            </div>
          </Link>
          <div className="flex justify-between items-center gap-8">
            <ul className="lg:flex hidden items-center gap-5 text-lg font-medium dark:text-text_color_dark text-text_color_normal main-nav">
              {links}

              <li className="relative inline-block w-full group z-50">
                <button
                  className={`after:bg-secondary_color after:h-[4px] hover:after:scale-100 after:w-full after:inline-block flex flex-col after:duration-300  after:duration-300 after:scale-0`}
                >
                  <span className="flex gap-1 items-center">
                    Dashboard
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </span>
                </button>
                <div className=" origin-top absolute left-0 mt-2 w-56 rounded-md shadow-lg dark:bg-dark_component bg-primary_color ring-1 ring-black ring-opacity-5  transform scale-0 group-hover:scale-100 transition-transform duration-300">
                  <ul className="main-nav p-3 divide-y divide-gray-400">
                    {dropdown}
                  </ul>
                </div>
              </li>
            </ul>
            <div className="flex items-center gap-3 ">
              {user ? (
                <Avatar></Avatar>
              ) : (
                <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    isActive
                      ? `after:bg-secondary_color text-lg font-medium after:h-[4px] after:w-full after:inline-block flex flex-col after:scale-100 after:duration-300 `
                      : `hover:after:scale-100 text-lg font-medium text-black after:bg-secondary_color after:h-[4px] after:w-full after:inline-block flex flex-col after:scale-0 after:duration-300`
                  }
                >
                  Login
                </NavLink>
              )}
              <button
                onClick={() => setNavbarToggle(true)}
                className="lg:hidden flex h-10 w-10  active:scale-95 dark:bg-gray-700 dark:text-text_color_dark bg-white rounded-full justify-center items-center shadow-sm ring-1 ring-gray-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-7 h-7"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </button>
            </div>
          </div>
        </nav>
      </Container>

      {/* MOBILE NAV */}
      <div
        className={`absolute top-0 duration-500 dark:text-text_color_dark ${
          navbarToggle ? "left-0" : "-left-[999px]"
        }  w-full sm:w-1/2 h-screen z-[60] backdrop-blur bg-primary_color/60  dark:bg-dark_component`}
      >
        <div className="flex justify-between items-center m-4">
          <button
            onClick={() => setNavbarToggle(false)}
            className="lg:hidden flex h-10 w-10  active:scale-95 dark:bg-gray-700 dark:text-text_color_dark bg-white rounded-full justify-center items-center shadow-sm ring-1 ring-gray-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="flex flex-col  items-center mx-3">
          <ul className="w-full flex mb-5 flex-col gap-5 text-2xl font-medium divide-y divide-gray-400">
            {Mobilelinks}
            <li className="w-full">
              <button
                className="flex justify-between items-center w-full"
                onClick={() => setDropdownToggle(!dropdownToggle)}
              >
                Dashboard
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </button>
              <ul
                className={`my-3 flex flex-col gap-5 divide-y divide-gray-400  ${
                  dropdownToggle ? "relative" : "absolute -top-[999px]"
                }`}
              >
                {Mobiledropdown}
              </ul>
            </li>
          </ul>
          {user ? (
            <button
              onClick={() => logOut()}
              className="flex gap-2 w-full border-2 border-transparent hover:bg-transparent hover:border-secondary_color hover:text-secondary_color active:scale-95  bg-secondary_color justify-center items-center py-2 rounded text-lg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                />
              </svg>
              Logout
            </button>
          ) : (
            <ButtonPrimary
              link="/login"
              className="flex gap-2 items-center w-full"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
                />
              </svg>
              Login
            </ButtonPrimary>
          )}
        </div>
      </div>
      {/* MOBILE NAV OVERLAY */}
      <div
        onClick={() => setNavbarToggle(false)}
        className={`absolute top-0 z-50 left-0 bg-text_color_normal/10 ${
          navbarToggle ? "w-full h-screen" : "w-0 h-0"
        }`}
      ></div>
    </>
  );
};

export default Navbar;
