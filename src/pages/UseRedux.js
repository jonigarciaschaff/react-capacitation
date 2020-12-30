import React, {useEffect} from 'react';
import Back from '../components/back';
import Title  from '../components/title.js';
import { useSelector, useDispatch } from 'react-redux';
import { toggleNavbar } from '../redux/actions/app';

const UseRedux = () => {

  useEffect(() => {
    alert('sapee')
    return () => {
      alert('me fui')
    }
  }, [])

  const isVisible = useSelector((state) => {
    return state.app.navbar.isVisible;
  });

  useEffect(() => {
    alert('isVisible cambio', isVisible)
  }, [isVisible])

  const dispatch = useDispatch();

  let title = 'Use Redux';

  const changeTitle = () => {
    title = 'otro title';
  };

  const toggle = () => {
    dispatch(toggleNavbar());
  };

  return (
    <div className="container mt-5 pt-5">
      <Title text={title}/>
      <Back/>
      <div className="card">
        {isVisible ? <span>true</span> : <span>false</span>}
        <br/>
        <button onClick={toggle}>toggle</button>
        <button onClick={changeTitle}>Change title</button>
      </div>
    </div>
  );
}

export default UseRedux;