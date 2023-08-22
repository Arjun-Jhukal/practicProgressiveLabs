import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <ul className="menu__items">
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/super-heroes"}>Super Heroes</NavLink>
      </li>
      <li>
        <NavLink to={"/rq-super-heroes"}>RQ Super Heroes</NavLink>
      </li>
    </ul>
  );
};

export default Navbar;
