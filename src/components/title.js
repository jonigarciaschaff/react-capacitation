import React from 'react';
import './styles/title.scss';

const Title = ({ text }) => {
  return (
    <h1 className="mb-5">{text}</h1>
  );
}

export default Title;

