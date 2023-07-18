import { useState, useCallback } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-scroll";
import navBarElements from "../assets/js/navBarElements";
import "../assets/css/NavBar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const closeNavBar = useCallback(() => setIsOpen(false), []);

  return (
    <div className="navbar" id={isOpen ? "open" : "close"}>
      <div className="toggleButton">
        <button onClick={toggle}>
          {isOpen ? <AiOutlineClose /> : <GiHamburgerMenu />}
        </button>
      </div>
      <div className="links">
        {navBarElements.map((elem) => (
          <Link
            key={elem.id}
            to={elem.to}
            spy={elem.spy}
            smooth={elem.smooth}
            offset={elem.offset}
            onClick={closeNavBar}
          >
            {elem.to}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Navbar;
