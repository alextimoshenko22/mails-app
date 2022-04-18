import { createSlice } from '@reduxjs/toolkit';
import { tabs } from '../../fixtures';

export const tabsSlice = createSlice({
    name: 'tabs',
    initialState: tabs,
    reducers: {
        addNewTab: (state, { payload }) => {
            return [...state, payload];
        },
        updateTab: (state, { payload: { tabId, tabLabel } }) => {
            return state.map(tab => {
                if(tab.id === tabId) {
                    return {
                        ...tab,
                        label: tabLabel
                    }
                }
                return tab;
            })
        },
        deleteTab: (state, { payload: { tabId } }) => {
            return state.filter(tab => tab.id !== tabId);
        },
    }
});