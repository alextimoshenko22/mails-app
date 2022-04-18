import { sendersSlice } from '../index';
import { selectAllSenders } from '../selectors';

export function loadSenders() {
    return function (dispatch, getState) {
        const state = getState();
        const senders = selectAllSenders(state);
        
        if (senders?.length) {
            return;
        }

        dispatch(sendersSlice.actions.startLoading());

        fetch('http://localhost:3001/api/senders').then((res) => res.json()).then((senders) => {
            dispatch(sendersSlice.actions.addSenders({senders}));
        }).catch((error) => {
            dispatch(sendersSlice.actions.failLoading({ error }))
        });
    }
}
