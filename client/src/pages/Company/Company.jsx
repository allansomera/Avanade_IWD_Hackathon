import './Company.scss';
import { useState } from 'react';
import { NavLink, Link, Outlet, useNavigate } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

const Company = () => {
  const [activeLink, setActiveLink] = useState('overview');
  let navigate = useNavigate();
  return (
    <>
      <div className="company">
        <div className="company__header">
          <div className="company__l-header">
            <div className="company__logo"></div>
            <div className="company__combo-con">
              <div className="company__name">Avanade</div>
              <div className="company__rating-con">
                <div className="company__star-icon"></div>
                <div className="company__star-rating-combo">
                  <div className="company__star-rating-num">4.9</div>
                  <div className="company__rating-quantity">(402)</div>
                </div>
              </div>
            </div>
          </div>
          <div className="company__r-header">
            <div className="company__rh-btn-con">
              <button onClick={() => navigate('/process/rate-step1')} className="company__rh-btn">
                Rate This Company
              </button>
            </div>
          </div>
        </div>
        <div className="company__navbar">
          <NavLink
            className="company__nav-item"
            to="/company/overview"
            style={({ isActive }) => ({
              border: isActive ? '2px solid transparent' : '2px solid transparent',
              borderBottomColor: isActive ? '#4666f1' : '#d9d9d9',
            })}
          >
            Overview
          </NavLink>
          <NavLink
            className="company__nav-item"
            to="/company/post"
            style={({ isActive }) => ({
              border: isActive ? '2px solid transparent' : '2px solid transparent',
              borderBottomColor: isActive ? '#4666f1' : '#d9d9d9',
            })}
          >
            Post
          </NavLink>
          <NavLink
            className="company__nav-item"
            to="/company/review"
            style={({ isActive }) => ({
              border: isActive ? '2px solid transparent' : '2px solid transparent',
              borderBottomColor: isActive ? '#4666f1' : '#d9d9d9',
            })}
          >
            Reviews
          </NavLink>
        </div>

        <Outlet />
      </div>
    </>
  );
};
export default Company;
