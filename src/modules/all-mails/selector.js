import { createSelector } from 'reselect';
import { sortMailsByDate } from './utils';

export const selectAllMails = (state) => state.mails.entities;

export const selectMailById = (state, mailId) => {
    return state.mails.entities.find(({ id }) => id === mailId);
}

export const selectMailsByType = (state, mailType) => {
    const mails = state.mails.entities.filter(({ type }) => type === mailType);
    return sortMailsByDate(mails);
}

export const selectIsMailsLoading = (state) => state.mails.isLoading;

export const selectIsMailsFailed = (state) => state.mails.isFailed;
