import { sentMailsSlice } from '../index';
import { selectAllSentMails } from '../selectors';

export const loadSentMails = () => (dispatch, getState) => {
    const state = getState();
    const sentMails = selectAllSentMails(state);
    
    if (sentMails?.length) {
        return;
    }

    dispatch(sentMailsSlice.actions.startLoading());

    fetch('http://localhost:3001/api/sent').then((res) => res.json()).then((sentMails) => {
        dispatch(sentMailsSlice.actions.addSentMails({ sentMails }));
    }).catch((error) => {
        dispatch(sentMailsSlice.actions.failLoading({ error }))
    });
}
