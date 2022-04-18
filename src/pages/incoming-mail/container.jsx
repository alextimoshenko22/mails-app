import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IncomingMail } from './component';
import { selectAllMails, selectIsMailsLoading, selectIsMailsFailed } from '../../modules/all-mails/selector';
import { loadMails } from '../../modules/all-mails/effects/load-incoming-mails';
import { ErrorBoundary } from '../../components/error-boundary/component';
import { useParams } from 'react-router-dom';

export const IncomingMailContainer = () => {
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
        <IncomingMail />
    </ErrorBoundary>
    
}