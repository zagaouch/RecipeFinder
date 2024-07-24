import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faList, faCog, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import Sidebar from './Sidebar';  

export default function Navbar() {
  const [showSidebar, setShowSidebar] = useState(false);
  const links = [
    { name: "Home", path: "/", icon: faHome },
    { name: "About", path: "/about", icon: faInfoCircle },
    { name: "Recipes", path: "/recipes", icon: faList },
    { name: "Preferences", path: "/preferences", icon: faCog },
  ];
  function closeSidebar() {
    setShowSidebar(false);
  }
  return (
    <>
      <div className="navbar container">
        <a href="#!" className="logo"><span>Recipe</span>Finder</a>
        <div className="nav-links">
          {links.map(link => (
            <a href={link.path} key={link.name}>{link.name}</a>
          ))}
        </div>
        <div onClick={() => setShowSidebar(true)} className={showSidebar ? "sidebar-btn active" : "sidebar-btn"}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
      {showSidebar && <Sidebar close={closeSidebar} links={links} />}
    </>
  );
}
