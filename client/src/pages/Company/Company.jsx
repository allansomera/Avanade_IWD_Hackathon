import './Company.scss';
import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

const Company = () => {
  const [activeLink, setActiveLink] = useState('overview');
  return (
    <>
      <div className="company">
        <Link to="/company/overview">Overview</Link>
        <Link to="/company/post">Post</Link>

        <Outlet />
      </div>
    </>
  );
};
export default Company;

// <Navbar className="company__navbar">
//   <Nav
//     defaultActiveKey={activeLink}
//     onSelect={(selectedKey, event) => {
//       event.preventDefault();
//       console.log(selectedKey);
//       setActiveLink(selectedKey);
//     }}
//   >
//     <Nav.Link
//       as={Link}
//       to="/company/overview"
//       className="company__navbar-item"
//       eventKey="overview"
//     >
//       Overview
//     </Nav.Link>
//     <Nav.Link as={Link} className="company__navbar-item" to="/company/post" eventKey="post">
//       Post
//     </Nav.Link>
//   </Nav>
// </Navbar>
