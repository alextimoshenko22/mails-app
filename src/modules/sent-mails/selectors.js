export const selectAllSentMails = (state) => Object.values(state.sentMails.entities);

export const selectSentMailById = (state, mailId) => {
    const sentMails = Object.values(state.sentMails.entities);
    return sentMails.find(({ id }) => id === mailId);
} 

export const selectIsSentMailsLoading = (state) => state.sentMails.isLoading;

export const selectIsSentMailsFailed = (state) => state.sentMails.isFailed;