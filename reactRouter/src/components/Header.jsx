import React from "react";
import { Link, NavLink } from "react-router";

function Header() {
  return (
    <header className="shadow sticky z-50 top-0">
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/" className="flex items-center">
            <img
              src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
              className="mr-3 h-12"
              alt="Logo"
            />
          </Link>
          <div className="flex items-center lg:order-2">
            <Link
              to="#"
              className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
            >
              Log in
            </Link>
            <Link
              to="#"
              className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
            >
              Get started
            </Link>
          </div>
          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <NavLink
                  to="/"
                  className={(
                    { isActive } // ye css ko call back ki trh islie likhe h kyu ki jab ye likhte hai to ye ek argenent detea hai isActive jo {js } ki trh inject ho jata hai class name m and active hota hai wo to uske andar kud aa jata hai ki active hai jaise ki hum isme use kie hai
                  ) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  // yha nav link k andar definr kie hai ki kha jaiga ye /about p ajiga kyu ki wha main .jsx m hum phly se sab define kar chuke hai
                  to="/about"
                  className={(
                    { isActive } // ye css ko call back ki trh islie likhe h kyu ki jab ye likhte hai to ye ek argenent detea hai isActive jo {js } ki trh inject ho jata hai class name m and active hota hai wo to uske andar kud aa jata hai ki active hai jaise ki hum isme use kie hai
                  ) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  // yha nav link k andar definr kie hai ki kha jaiga ye /about p ajiga kyu ki wha main .jsx m hum phly se sab define kar chuke hai
                  to="/contact"
                  className={(
                    { isActive } // ye css ko call back ki trh islie likhe h kyu ki jab ye likhte hai to ye ek argenent detea hai isActive jo {js } ki trh inject ho jata hai class name m and active hota hai wo to uske andar kud aa jata hai ki active hai jaise ki hum isme use kie hai
                  ) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink
                  // yha nav link k andar definr kie hai ki kha jaiga ye /about p ajiga kyu ki wha main .jsx m hum phly se sab define kar chuke hai
                  to="/github"
                  className={(
                    { isActive } // ye css ko call back ki trh islie likhe h kyu ki jab ye likhte hai to ye ek argunent detea hai isActive jo {js } ki trh inject ho jata hai class name m and active hota hai wo to uske andar kud aa jata hai ki active hai jaise ki hum isme use kie hai
                  ) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Github
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
