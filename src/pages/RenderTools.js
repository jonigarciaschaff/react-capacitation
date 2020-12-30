import React, { useState } from 'react';
import Back from '../components/back';
import Title  from '../components/title.js';


const RenderTools = () => {

  const title = 'Render tools';
  const [toggle, setToggle] = useState(false);
  const contries = [
    {id: 1, name: 'Argentina'},
    {id: 2, name: 'Brasil'},
    {id: 3, name: 'Paraguay'},
    {id: 4, name: 'Peru'},
    {id: 5, name: 'Uruguay'},
  ];

  return (
    <div className="container mt-5 pt-5">
      <Title text={title}/>
      <Back/>
      <div className="card">
        <ul>
          <li>
            IF: <button onClick={() => setToggle(!toggle)}>Toggle</button>
            {
              !!toggle &&
              <>
                <span className="ml-3">hello!!!</span>
              </>
            }
          </li>
          <li>
            FOR: 
            <div>
              <ul>
                {contries.map((country, index) => {
                    return(
                      <li key={country.id}>
                        {country.name}
                      </li>
                    )
                  }
                )}
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default RenderTools;