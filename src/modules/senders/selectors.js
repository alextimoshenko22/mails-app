
export const selectAllSenders = (state) => Object.values(state.senders.entities);

export const selectSenderById = (state, senderId) => {
    const senders = Object.values(state.senders.entities);
    return senders.find(({ id }) => id === senderId);
} 

export const selectIsSendersLoading = (state) => state.senders.isLoading;

export const selectIsSendersFailed = (state) => state.senders.isFailed;
