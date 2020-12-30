import {
    TOGGLE_NAVBAR,
  } from '../actions/app';
  
  const defaultState = {
    navbar: {
      isVisible: true
    },
  };
  
  export default (state = defaultState, action) => {
    //action.payload.joni
    switch (action.type) {
      case TOGGLE_NAVBAR:
        return {
          ...state,
          navbar: {
            isVisible: !state.navbar.isVisible
          }
        }
      default:
        return state;
    }
  }
  