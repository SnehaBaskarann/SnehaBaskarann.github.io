import React from "react";
import { FaGraduationCap, FaHeart, FaCode } from "react-icons/fa";

export const About = (props) => {
  return (
    <div id="about" style={{ width:"100%" , height: "100%" }}>
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <img src="Media.png" className="img-responsive" alt="" />
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2 style={{ marginLeft: "0" }}>About Me</h2>
              <p style={{ fontSize: "18px", marginLeft: "0" }}>
                {props.data ? props.data.paragraph : "loading..."}
              </p>
              <div className="list-style">
                <div className="flex-container">
                  <div>
                    <FaGraduationCap fontSize="40px" style={{ marginTop: "8px" }} />
                    {props.data
                      ? props.data.Why.map((d, i) => <p style={{ marginLeft: "45px"}}  key={`${d}-${i}`}>{d}</p>)
                      : "loading"}
                  </div>
                </div>
                <div className="list-style1">
                  <div className="flex-container">
                    <div>
                      <FaCode fontSize="40px" style={{ marginTop: "5px" }} />
                      {props.data
                        ? props.data.Why2.map((d, i) => (
                            <p style={{ marginLeft: "45px"}} key={`${d}-${i}`}>
                              {d}
                            </p>
                          ))
                        : "loading"}
                    </div>
                    <div className="list-style2">
                      <div className="flex-container">
                      <div>
                        <FaHeart fontSize="34px" style={{ marginLeft:"-488px", marginTop: "85px"}} />
                          {props.data
                            ? props.data.Why3.map((d, i) => (
                                <p key={`${d}-${i}`}>
                                  {d}
                                </p>
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
