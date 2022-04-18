import React, { useEffect } from 'react';
import { useRouteMatch, Route } from 'react-router-dom';
import { Tabs } from '../../components/tabs/component';
import { TableMailsContainer } from '../table-mails/container';
import { useDispatch, useSelector } from 'react-redux';
import { selectAllTabs, selectIsTabsLoading, selectIsTabsFailed } from '../../modules/tabs/selectors';
import { loadTabs } from '../../modules/tabs/effects/load-tabs';

export const Main = () => {
    const { path } = useRouteMatch();

    const tabs = useSelector(selectAllTabs);

    return <h1>
        <Tabs tabs={tabs} />
        <Route path={`${path}/:tabs`} >
            <TableMailsContainer />
        </Route>
    </h1>
}