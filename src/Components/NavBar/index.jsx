import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ShoppingCartContext } from "../../Context";
import { ShoppingBagIcon } from "@heroicons/react/24/solid";

const NavBar = () => {
  const context = useContext(ShoppingCartContext);
  const activeStyle = "underline underline-offset-4 text-white";

  const closeSideMenu = () => {
    context.setIsProductDetailOpen(false),
      context.setIsCheckoutSideMenuOpen(false);
  };

  return (
    <nav className="flex justify-between items-center fixed z-10 w-full py-5 px-8 text-sm font-light top-0 bg-purple-700">
      <ul className="flex items-center gap-3">
        <li className="font-semibold text-lg text-white">
          <NavLink to="/" onClick={closeSideMenu}>
            LittleShop
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/"
            onClick={closeSideMenu}
            className={({ isActive }) =>
              isActive ? activeStyle : "text-white"
            }
          >
            All
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/men's-clothing"
            onClick={() => context.setSearchByCategory("men's clothing")}
            className={({ isActive }) =>
              isActive ? activeStyle : "text-white"
            }
          >
            Men's Clothing
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/women's-clothing"
            onClick={() => context.setSearchByCategory("women's clothing")}
            className={({ isActive }) =>
              isActive ? activeStyle : "text-white"
            }
          >
            Women's Clothing
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/electronics"
            onClick={() => context.setSearchByCategory("electronics")}
            className={({ isActive }) =>
              isActive ? activeStyle : "text-white"
            }
          >
            Electronics
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/jewelery"
            onClick={() => context.setSearchByCategory("jewelery")}
            className={({ isActive }) =>
              isActive ? activeStyle : "text-white"
            }
          >
            Jewelery
          </NavLink>
        </li>
      </ul>
      <ul className="flex items-center gap-3">
        <li className="text-white">lisroa@littleshop.com</li>
        <li>
          <NavLink
            to="/my-orders"
            onClick={closeSideMenu}
            className={({ isActive }) =>
              isActive ? activeStyle : "text-white"
            }
          >
            My Orders
          </NavLink>
        </li>
        {/*

        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? activeStyle : "text-white"
            }
          >
            My Account
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? activeStyle : "text-white"
            }
          >
            Sign In
          </NavLink>
      

      
        </li>  */}
        <li className="flex">
          <ShoppingBagIcon className="h-5 w-5 text-white mr-1"></ShoppingBagIcon>
          <p className="text-white">{context.cartProducts.length}</p>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
