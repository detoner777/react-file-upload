import React from "react";
import PropTypes from "prop-types";

function Proress({ percentage }) {
  return (
    <div className="progress">
      <div
        className="progress-bar progress-bar-striped progress-bar-animated"
        role="progressbar"
        style={{ width: `${percentage}%` }}
      >
        {percentage}%
      </div>
    </div>
  );
}

Proress.propTypes = {
  percentage: PropTypes.number.isRequired
};

export default Proress;
