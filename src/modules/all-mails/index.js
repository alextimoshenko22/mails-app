import { createSlice } from '@reduxjs/toolkit';

export const mailsSlice = createSlice({
    name: 'mails',
    initialState: {
        isLoading: false,
        isFailed: false,
        error: null,
        entities: [],
    },
    reducers: {
        startLoading: (state) => {
            state.isLoading = true;
            state.isFailed = false;

            return state;
        },
        failLoading: (state, { payload: { error } }) => {
            state.isLoading = false;
            state.isFailed = true;
            state.error = error;

            return state;
        },
        addMails: (state, { payload: { mails } }) => {
            return {
                isLoading: false,
                isFailed: false,
                entities: [
                    ...state.entities,
                    ...mails,
                ]
            }
        },
        checkedMail: (state, {payload: mailId}) => {
            return {
                entities: state.entities.map(mail => {
                    if(mail.id === mailId && !!mail.checked && mail.checked !== false) {
                        return {...mail, checked: false }
                    }
                    return mail;
                })
            }
        }
    }
});
