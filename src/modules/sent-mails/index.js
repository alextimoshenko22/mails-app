import { createSlice } from '@reduxjs/toolkit';

export const sentMailsSlice = createSlice({
    name: 'sentMails',
    initialState: {
        isLoading: false,
        isFailed: false,
        error: null,
        entities: {},
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
        addSentMails: (state, { payload: { sentMails } }) => {
            return {
                isLoading: false,
                isFailed: false,
                entities: {
                    ...state.entities,
                    ...sentMails,
                }
            }
        }
    }
});