import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SentMail } from './component';
import { loadMails } from '../../modules/all-mails/effects/load-incoming-mails';
import { selectAllMails, selectIsMailsLoading, selectIsMailsFailed } from '../../modules/all-mails/selector';
import { useParams } from 'react-router-dom';
import { ErrorBoundary } from '../../components/error-boundary/component';

export const SentMailContainer = () => {
    const dispatch = useDispatch();
    const { id } = useParams();

    useEffect(() => {
        dispatch(loadMails());
    }, []);

    const mails = useSelector(selectAllMails);
    const isLoading = useSelector(selectIsMailsLoading);
    const isFailed = useSelector(selectIsMailsFailed);

    if (isLoading) {
        return <div>Загрузка...</div>
    }

    if (isFailed) {
        return <div>Обновите позже</div>
    }

    if (!mails?.length) {
        return null;
    }

    return <ErrorBoundary key={id}>
        <SentMail />
    </ErrorBoundary>
}