import { incomingMailsSlice } from '../index';
import { selectAllIncomingMails } from '../selectors';

export function loadIncomingMails() {
    return function (dispatch, getState) {
        const state = getState();
        const incomingMails = selectAllIncomingMails(state);
        
        if (incomingMails?.length) {
            return;
        }

        dispatch(incomingMailsSlice.actions.startLoading());

        fetch('http://localhost:3001/api/incoming').then((res) => res.json()).then((incomingMails) => {
            dispatch(incomingMailsSlice.actions.addIncomingMails({ incomingMails }));
        }).catch((error) => {
            dispatch(incomingMailsSlice.actions.failLoading({ error }))
        });
    }
}
