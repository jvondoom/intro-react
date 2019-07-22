import React from 'react';

const Header = props => {
  const jumboStyle = {
    color: '#6E0902',
    backgroundColor: '#9d9d9d',
  };
  return (
    <div className="header">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="jumbotron" style={jumboStyle}>
              <h1 className="display-4 text-center">Juan von Doom M</h1>
              <p className="lead text-center">An Introduction</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
