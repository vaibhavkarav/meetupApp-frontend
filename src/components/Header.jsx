import { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [input, setInput] = useState("");
  console.log(input);
  return (
    <>
      <header>
        <nav className="navbar bg-light-subtle px-3">
          <div className="container-fluid">
            <NavLink className="navbar-brand ms-2" to="/">
              <img
                src="https://ucarecdn.com/2cde689e-410b-4e0e-8d52-5bcb46dcd5bf/"
                alt="Meetup Logo"
                height={80}
                width={80}
              />
            </NavLink>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="🔍 Search by title and tag"
                aria-label="Search"
                onChange={(e) => setInput(e.target.value)}
              />
            </form>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
