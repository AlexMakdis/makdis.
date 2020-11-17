import React from 'react';
import { NavLink } from 'react-router-dom';


function Nav() {
  return (
<div className="nav_container ">
    <nav className="nav ">
        <ul className="nav_links row">
            <div className="col-12 col-sm-4 ">
                <li className="nav_links_logo ">
                    <NavLink exact to="/" activeClassName="nav_links_active">
                        So Socksy
                    </NavLink>
                </li>
            </div>
            <div className="col-12 col-sm-4">
                <li>
                    <NavLink exact to="/profile" activeClassName="nav_links_active">
                        Profile
                    </NavLink>
                </li>
            </div>
            <div className="col-12 col-sm-4">
                <li>
                    <NavLink exact to="/contact" activeClassName="nav_links_active">
                        Contact
                    </NavLink>
                </li>
            </div>
        </ul>
    </nav>
</div>
  );
}

export default Nav;
