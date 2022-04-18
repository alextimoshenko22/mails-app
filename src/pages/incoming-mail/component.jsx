import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import style from './styles.module.css'
import { selectMailById } from '../../modules/all-mails/selector';

export const IncomingMail = () => {
    const { id } = useParams();

    const { from, theme, date, body } = useSelector(state => selectMailById(state, id));
    
    return <div>
        <h2>Тема: {theme}</h2>

        <div>
            Куда: {from}
        </div>

        <div>
            Дата: {date}
        </div>
        <div className={style.body}>
            {body}
        </div>
    </div>
}