export const selectAllTabs = (state) => state.tabs;

export const selectTabById = (state, tabId) =>  state.tabs.find(({ id }) => id === tabId);