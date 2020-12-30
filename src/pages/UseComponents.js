import React from 'react';
import Back from '../components/back';
import Title  from '../components/title.js';
import Counter  from '../components/counter';


const UseComponents = () => {

  const title = 'Use Components';

  return (
    <div className="container mt-5 pt-5">
      <Title text={title}/>
      <Back/>
      <div className="card">
        <ul>
          <li>
            Counter: <Counter/>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default UseComponents;