import React from "react";
import { useNavigate } from "react-router-dom";


export const Navigation = (props) => {
  const navigate = useNavigate()
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1">
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <a className="navbar-brand page-scroll" href="#page-top" style={{fontFamily:"serif"}}>
          Sneha Portfolio
          </a>{" "}
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#about" className="page-scroll">
                About
              </a>
            </li>
            <li>
              <a href="#features" className="page-scroll">
                Education
              </a>
            </li>
            <li>
              <a href="#services" className="page-scroll">
              Skills
              </a>
            </li>
            <li>
              <a href="#testimonials" className="page-scroll">
              Experience
              </a>
            </li>
            <li>
              <a href="#contact" className="page-scroll">
             Contact
              </a>
            </li>
            {/* <li>
              <a href="#team" className="page-scroll" >
                Team
              </a>
            </li>
            <li>
              <a href="#contact" className="page-scroll" >
                Contact
              </a>
            </li> */}
            {/* <li>
              <button type="submit" style={{marginTop:"8%"}} className="btn btn-success"  onClick={()=>navigate("/sign-up")}>Sign Up</button>
              </li> 
              <li>
              <button type="submit" style={{marginTop:"8%" , marginLeft:"8px"}} className="btn btn-success"  onClick={()=>navigate("/sign-in")}>Sign In</button>
              </li> */}
            {/* <li>
              <a href="#sign-up" className="page-scroll" >
               Sign Up
              </a>
            </li>
            <li>
              <a href="#sign-in" className="page-scroll" >
                Sign In
              </a>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
};
