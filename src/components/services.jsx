import React from "react";

export const Services = (props) => {
  return (
    <div id="services" className="text-center">
      <div className="container" style={{height:"90%"}}>
        <div className="section-title">
          <h2>Skill set</h2>
          <p>
            My Technical Skills
          </p>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-3">
                  {" "}
                  <i className={d.icon}></i>
                  <div className="service-desc">
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
