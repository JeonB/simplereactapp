import React from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "../style/NavbarElements";
import { useAuth } from "../form/AuthContext";

const Navbar: React.FC = () => {
  const { loginData, clearLoginData } = useAuth();

  const handleSignOut = () => {
    clearLoginData();
    alert("로그아웃");
  };
  var isSignInOut = "";
  var link = "";

  if (loginData.id) {
    isSignInOut = "sign-out";
    link = "/sign-in";
  } else {
    isSignInOut = "sign-in";
    link = "/sign-in";
  }

  return (
    <>
      <Nav>
        <Bars />
        <NavMenu>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/events">Events</NavLink>
          <NavLink to="/annual">Annual Report</NavLink>
          <NavLink to="/team">Recruit</NavLink>
          <NavLink to="/blogs">Blogs</NavLink>
          <NavLink to="/sign-up">Sign Up</NavLink>
        </NavMenu>
        <NavBtn>
          {loginData.id ? (
            <NavBtnLink to={link} onClick={handleSignOut}>
              {isSignInOut}
            </NavBtnLink>
          ) : (
            <NavBtnLink to={link}>{isSignInOut}</NavBtnLink>
          )}
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
