import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header>
        <nav className="navbar  px-3">
          <div className="container-fluid">
            <NavLink className="navbar-brand ms-2" to="/">
              <img
                src="https://ucarecdn.com/2cde689e-410b-4e0e-8d52-5bcb46dcd5bf/"
                alt="Meetup Logo"
                height={80}
                width={80}
              />
            </NavLink>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
