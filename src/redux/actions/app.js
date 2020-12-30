export const TOGGLE_NAVBAR = '[APP] TOGGLE_NAVBAR';

export const toggleNavbar = (value) => {
    return {
        type: TOGGLE_NAVBAR,
        payload: {
            joni: value
        }
    }
}

/* export const toggleNavbar = (value) => {
    return dispatch => {
        // logica
        dispatch({
            type: TOGGLE_POST_MODAL
        });
    }
} */