import React, { useEffect, useState } from 'react';
import { useRouteMatch, useHistory, useLocation } from 'react-router-dom';
import style from './styles.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectMailsByType } from '../../modules/all-mails/selector';
import { mailsSlice } from '../../modules/all-mails';

export const TableMails = ({ tabs }) => {
    const dispatch = useDispatch();
    const { url } = useRouteMatch();
    const history = useHistory();
    const { search } = useLocation();

    const mails = useSelector(state => selectMailsByType(state, tabs));

    const [searchValue, setSearchValue] = useState('');
    const [filteredMails, setFilteredMails] = useState(mails);
    
    useEffect(() => {
        const parsed = new URLSearchParams(search).get('q');
        if(parsed !== '' && parsed !== null) {
            const result = mails.filter(({ body }) => body.toLowerCase().includes(parsed.toLowerCase()));
            setFilteredMails(result);
            setSearchValue(parsed);
        }
    }, []);

    useEffect(() => {
        const parsed = new URLSearchParams(search).get('q');
        let result = [];
        if(parsed !== null) {
            result = mails.filter(({ body }) => body.toLowerCase().includes(parsed.toLowerCase()));
        }
        if(result.length !== 0) {
            setFilteredMails(result);
        }
        else if(result.length === 0 && searchValue !== '') {
            setFilteredMails(result);
        }
        else if(searchValue === '') {
            setFilteredMails(mails);
        }
    }, [search, tabs]);

    useEffect(() => {
        if (searchValue) {
            history.replace({
                search: `?q=${searchValue}`
            });
        } else {
            history.replace({
                search: `?q=`
            });
        }
    }, [searchValue, history]);

    const onRowClick = (mailId) => {
        history.push(`${url}/${mailId}`);
        dispatch(mailsSlice.actions.checkedMail(mailId));
    }

    return <>
        <div className={style.input}>
            <label className={style.label}>ФИЛЬТРЫ</label>
            <div className={style.wrapper}>
                <input 
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.currentTarget.value)}
                    type="text" 
                    className={style.control}
                    placeholder="Введите текст письма..." />
            </div>
        </div>
        {
            filteredMails.length === 0 &&
            <div className={style.empty}>
                Пустая папка...
            </div>
        }
        {
            filteredMails.length !== 0 &&
            <table className={style.table}>
                <tbody>
                    <tr>
                        <th>Автор</th>
                        <th>Превью</th>
                        <th>Дата</th>
                    </tr>
                    {
                        filteredMails.map(({id, sender, theme, body, date, checked}) => <tr key={id} onClick={() => {onRowClick(id)}}>
                                <td>
                                    {sender.name}
                                </td>
                                <td>
                                    <span>{theme}</span>
                                    <span>: </span>
                                    <span className={style.body}>{body.substring(0, 30)}...</span>
                                </td>
                                <td>
                                    <div className={style.date}>
                                        <span>{date}</span> 
                                        {
                                            !!checked && checked === true ? <span className={style.checked}></span> : <span></span>
                                        }
                                    </div>        
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        }
    </>   
}
