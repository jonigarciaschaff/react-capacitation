import React, { useState } from 'react';
import Back from '../components/back';
import Title  from '../components/title.js';
import './styles/UseEvents.scss';


const UseEvents = () => {

  const title = 'Use Events';
  const [clickme, setClickme] = useState(false);
  const [changeme, setChangeme] = useState('');
  const [overme, setOverme] = useState(false);

  const handleChange = (event) => {
    setChangeme(event.target.value)
  }

  return (
    <div className="container mt-5 pt-5">
      <Title text={title}/>
      <Back/>
      <div className="card">
        <ul>
          <li className="m-3">
            onClick: 
            <button
              className={`ml-3 ${clickme ? "click-on" : "click-off"}`}
              onClick={() => setClickme(!clickme)}>
                Clickme
            </button>
          </li>
          <li className="m-3">
            onChange: <input type="text" name="changeme" value={changeme} onChange={handleChange}/>
            <b className="ml-3">value=</b>{changeme}
          </li>
          <li className="m-3">
            onMouseOver:
            <span
              onMouseEnter={() => setOverme(true)}
              onMouseLeave={() => setOverme(false)}
              className={overme ? "mouse-enter" : "click-leave"}
            >Mouse Overme!</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default UseEvents;