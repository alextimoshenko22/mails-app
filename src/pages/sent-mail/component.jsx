import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import style from './styles.module.css';
import { selectMailById } from '../../modules/all-mails/selector';

export const SentMail = () => {
    const { id } = useParams();
    const { from, to, theme, body, date } = useSelector(state => selectMailById(state, id));
    
    return <div>
        <h2>Тема: {theme}</h2>

        <div>Откуда: {from}</div>

        <div>Куда: {to}</div>

        <div>Дата: {date}</div>

        <div className={style.body}>
            {body}
        </div>
    </div>
}
