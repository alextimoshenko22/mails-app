import { mailsSlice } from '../index';
import { selectAllMails } from '../selector';

export function loadMails() {
    return function (dispatch, getState) {
        const state = getState();
        const mails = selectAllMails(state);
        
        if (mails?.length) {
            return;
        }

        dispatch(mailsSlice.actions.startLoading());

        fetch('http://localhost:3001/api/mails').then((res) => res.json()).then((mails) => {
            dispatch(mailsSlice.actions.addMails({ mails }));
        }).catch((error) => {
            dispatch(mailsSlice.actions.failLoading({ error }))
        });
    }
}
