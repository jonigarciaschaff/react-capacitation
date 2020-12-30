import React from 'react';
import { Link } from 'react-router-dom';

const Back = () => {
  return (
    <Link to="../">
      <span className="m-2">
        Back
      </span>
    </Link>
  );
}

export default Back;

