import Logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userSelector, login, logout } from "../../features/user/userSlice";
import WishistModal from "../Modal/WishlistModal";
import { FiShoppingCart } from "react-icons/fi";
import { productsSelector } from "../../features/products/productsSlice";

const Navbar = () => {
  const { isLoggedIn } = useSelector(userSelector);
  const { cart } = useSelector(productsSelector);
  const uniqueCart = cart.filter(
    (item, index, self) => self.findIndex((t) => t.id === item.id) === index
  );

  const dispatch = useDispatch();

  const handleAuth = () => {
    dispatch(isLoggedIn ? logout() : login());
  };

  return (
    <div className="py-4 border-b sticky z-50 top-0 left-0 right-0 bg-white/40 backdrop-blur-sm">
      <div className="flex items-center justify-between max-w-[1024px] mx-auto">
        <Link to="/">
          <img src={Logo} alt="logo" />
        </Link>
        <div className="flex items-center justify-between space-x-4">
          <WishistModal />
          <Link to="/cart" className="relative p-2">
            <FiShoppingCart className="!h-7 !w-7" />
            {uniqueCart.length > 0 && (
              <div className="cart-num">
                <span className="text-xs">{uniqueCart.length}</span>
              </div>
            )}
          </Link>
          <button onClick={handleAuth} className="btn btn-secondary">
            {isLoggedIn ? "Logout" : "Login"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
