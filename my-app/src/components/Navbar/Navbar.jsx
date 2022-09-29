import { useState } from "react";
import { MenuItems } from "./MenuItems";
import "./Navbar.css";

export default function Navbar() {
  const [clicked, setClicked] = useState(false);

  function handleClicked() {
    setClicked(!clicked);
  }

  return (
    <nav className="NavbarItems">
      <h1 className="navbarLogo">
        React
        <i
          className="fab fa-react"
          style={{ marginLeft: "0.5rem", fontSize: "1.6rem" }}
        ></i>
      </h1>
      <div className="menuIcon" onClick={handleClicked}>
        <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      <ul className={clicked ? "navMenu active" : "navMenu"}>
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <a className={item.cName} href={item.url}>
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
