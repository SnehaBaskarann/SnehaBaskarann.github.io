import React from "react";

export const Testimonials = (props) => {
  return (
    <div id="testimonials">
      <div className="container" style={{ height: "90%", marginTop: "50px" }}>
        <div className="section-title text-center">
          <h2>Project Experience</h2>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-xs-12 col-sm-6 col-md-4">
                  <div className="testimonial">
                    <div className="testimonial-image">
                      <img src={d.img} alt="" />
                    </div>
                    <div className="testimonial-content">
                      <p>"{d.text}"</p>
                      <div className="testimonial-meta">- {d.name}</div>
                    </div>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
