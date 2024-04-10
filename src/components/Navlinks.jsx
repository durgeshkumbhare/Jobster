import React from 'react'
import links from '../utils/links';
import { NavLink } from 'react-router-dom';


const Navlinks = ({toggleSidebar}) => {
  return (
    <div className="nav-links">
    {links.map((link) => {
      const { id, icon, text, path } = link;
      return (
        <NavLink
          to={path}
          className={({ isActive }) => {
            return isActive ? "nav-link active" : "nav-link";
          }}
          key={id}
          onClick={toggleSidebar}
          end
        >
          <span className="icon">{icon}</span>
          {text}
        </NavLink>
      );
    })}
  </div>
  )
}

export default Navlinks