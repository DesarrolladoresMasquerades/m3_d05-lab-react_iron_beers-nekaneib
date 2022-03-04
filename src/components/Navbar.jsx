

import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav>
    <h1>Welcome to IronBeers</h1>
      <NavLink to="/" >
        <button>Home</button>
      </NavLink>
      <NavLink to="/new-beer" >
        <button>Create a beer</button>
      </NavLink>
      <NavLink to="/random-beer" >
        <button>Random beer</button>
      </NavLink>
    </nav>
  );
}

export default Navbar;
