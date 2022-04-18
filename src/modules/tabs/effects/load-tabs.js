import { tabsSlice } from '../index';
import { selectAllTabs } from '../selectors';

export const loadTabs = () => (dispatch, getState) => {
    const state = getState();
    const tabs = selectAllTabs(state);
    
    if (tabs?.length) {
        return;
    }

    dispatch(tabsSlice.actions.startLoading());

    fetch('http://localhost:3001/api/tabs').then((res) => res.json()).then((tabs) => {
        dispatch(tabsSlice.actions.addTabs({ tabs }));
    }).catch((error) => {
        dispatch(tabsSlice.actions.failLoading({ error }))
    });
}
