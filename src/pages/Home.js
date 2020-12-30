import React from 'react';
import { Link } from 'react-router-dom';
import Title  from '../components/title.js';

const Home = () => {

  const title = 'React Capacitation';

  return (
    <div className="container mt-5 pt-5">
      <Title text={title}/>
      <div className="card">
        <div className="card-body">
          <ul>
            <li>
              <Link to="/use-components">
                Use components
              </Link>
            </li>
            <li>
              <Link to="/use-events">
                Use events
              </Link>
            </li>
            <li>
              <Link to="/render-tools">
                Render tools
              </Link>
            </li>
            <li>
              <Link to="/use-apis">
                Use APIs
              </Link>
            </li>
            <li>
              <Link to="/use-redux">
                Use Redux
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Home;