import React from "react";
import { FaGraduationCap, FaHeart } from "react-icons/fa";
import { FaCode } from "react-icons/fa";

export const About = (props) => {
  return (
    <div id="about" style={{height:"100%"}}>
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {" "}
            <img src="Media.png" className="img-responsive" alt="" />{" "}
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2 style={{marginLeft:"-20%"}}>About Me</h2>
              <p style={{fontSize:"18px" , marginLeft:"-20%"}}>{props.data ? props.data.paragraph : "loading..."}</p>
              {/* <h2 style={{marginLeft:"-20%"}}>Work Experience</h2> */}
              <div className="list-style">
              <div className="flex-container">
                  <div>
                  <FaGraduationCap fontSize="40px" style={{marginLeft:"-25%", marginTop:"8px"}}/> 
                    {props.data
                      ? props.data.Why.map((d, i) => (
                        <p key={`${d}-${i}`}>{d}</p>
                        ))
                      : "loading"}
                  </div>
                </div>
                <div className="list-style1">
                <div className="flex-container"style={{width:"60vw"}}>
                  <div >
                     <FaCode fontSize="40px" style={{marginLeft:"-28%", marginTop:"5px"}}/>
                    {props.data
                      ? props.data.Why2.map((d, i) => (
                          <p style={{paddingLeft:"10px"}} key={`${d}-${i}`}> {d}</p>
                        ))
                      : "loading"}
                  </div>
                  <div className="list-style2">
                <div className="flex-container" >
                <FaHeart fontSize="35px" style={{marginLeft:"-114%", marginTop:"84px"}}/>
                  <div>
                    {props.data
                      ? props.data.Why3.map((d, i) => (
                          <p style={{paddingLeft:"70px"}} key={`${d}-${i}`}> {d}</p>
                        ))
                      : "loading"}
                  </div>
                  </div>
                  </div>
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
  );
};
