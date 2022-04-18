export const selectAllIncomingMails = (state) => {
    const mails = Object.values(state.incomingMails.entities);
    return mails.filter(({ basket }) => basket !== true);
};

export const selectIncomingMailById = (state, mailId) => {
    const incomingMails = Object.values(state.incomingMails.entities);
    return incomingMails.find(({ id }) => id === mailId);
} 

export const selectIsIncomingMailsLoading = (state) => state.incomingMails.isLoading;

export const selectIsIncomingMailsFailed = (state) => state.incomingMails.isFailed;

export const selectAllIncomingMailsInBasket = (state) => {
    const allMails = Object.values(state.incomingMails.entities);
    return allMails.filter(mail => mail.basket === true);
}