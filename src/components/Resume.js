import React from 'react';

const Resume = props => {
  const liStyle = {
    backgroundColor: '#460703',
  };

  return (
    <div className="resume">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="mb-4">Resume</h2>
            <p>Now let's discuss the boring parts.</p>
            <h3 className="mb-4 text-center">Working experience</h3>
            <ul className="list-group mb-4 px-5">
              <li style={liStyle} className="list-group-item">
                January 2019 - Present
                <br />
                Front End Developer; <b>Freelancer</b>
              </li>
              <li style={liStyle} className="list-group-item">
                June 2018 - January 2019
                <br />
                Front End Developer; <b>Havas Magma</b>
              </li>
              <li style={liStyle} className="list-group-item">
                August 2015 - June 2018
                <br />
                Front End Developer; <b>Hangar</b>
              </li>
            </ul>
            <h3 className="mb-4 text-center">Skills</h3>
            <p className="px-4">
              <b>Tech skills:</b> ReactJS, MeteorJS, Bootstrap, SCSS, Webpack,
              Docker.
            </p>
            <p className="px-4">
              <b>Soft skills:</b> Analytic, proactive, fast learner, problem
              solver.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
