import './Company.scss';
import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

const Company = () => {
  const [activeLink, setActiveLink] = useState('overview');
  return (
    <>
      <div className="company">
        <div className="company__navbar">
          <Link className="company__nav-item" to="/company/overview">
            Overview
          </Link>
          <Link className="company__nav-item" to="/company/post">
            Post
          </Link>
          <Link className="company__nav-item" to="/company/post">
            Reviews
          </Link>
        </div>

        <Outlet />
      </div>
    </>
  );
};
export default Company;
