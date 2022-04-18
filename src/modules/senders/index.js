import { createSlice } from "@reduxjs/toolkit";

export const sendersSlice = createSlice({
    name: 'senders',
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
        addSenders: (state, { payload: { senders } }) => {
            return {
                isLoading: false,
                isFailed: false,
                entities: {
                    ...state.entities,
                    ...senders,
                }
            }
        }
    }
})