import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { incomingMailsSlice } from './incoming-mails';
import { sentMailsSlice } from './sent-mails';
import { mailsSlice } from './all-mails';
import { tabsSlice } from './tabs';

export const store = configureStore({
    reducer: combineReducers({
        incomingMails: incomingMailsSlice.reducer,
        sentMails: sentMailsSlice.reducer,
        mails: mailsSlice.reducer,
        tabs: tabsSlice.reducer,
    }),
    middleware: (getDefaultMidddleware) => getDefaultMidddleware().concat(),
    devTools: true,
});
