import { useContext, useState } from "react";
import MoonIcon from "../assets/icons/moon.svg";
import RingIcon from "../assets/icons/ring.svg";
import ShoppingCartIcon from "../assets/icons/shopping-cart.svg";
import SunIcon from "../assets/icons/sun.svg";
import logo from "../assets/logo.svg";
import { MovieContext, ThemeContext } from "../context";
import CartDetails from "./cine/CartDetails";

const Header = () => {
  const [showCart, setShowCart] = useState(false);
  const { cartData } = useContext(MovieContext);
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  const handleCartShow = () => {
    setShowCart(true);
  };

  return (
    <header>
      {showCart && <CartDetails onCancel={() => setShowCart(false)} />}
      <nav className="container flex items-center justify-between space-x-10 py-6">
        <a href="">
          <img src={logo} width="139" height="26" alt="logo" />
        </a>

        <ul className="flex items-center space-x-5">
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <img src={RingIcon} width="24" height="24" alt="ring" />
            </a>
          </li>
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
              onClick={() => setDarkMode((darkMode) => !darkMode)}
            >
              <img
                src={darkMode ? SunIcon : MoonIcon}
                width="24"
                height="24"
                alt="moon"
              />
            </a>
          </li>
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
              onClick={handleCartShow}
            >
              <img src={ShoppingCartIcon} width="24" height="24" alt="cart" />
              {cartData.length > 0 && (
                <span className="rounded-full absolute -top-[10px] left-[20px] bg-[#12CF6F] text-white text-xs font-semibold text-center p-[2px] w-[20px] h-[20px]">
                  {cartData.length}
                </span>
              )}
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
