import React, { useEffect } from 'react';
import { TableMails } from './component';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { loadMails } from '../../modules/all-mails/effects/load-incoming-mails';
import { selectIsMailsLoading, selectIsMailsFailed, selectAllMails } from '../../modules/all-mails/selector';

export const TableMailsContainer = () => {
    const dispatch = useDispatch();
    const { tabs } = useParams();

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

    return <TableMails tabs={tabs} />
}