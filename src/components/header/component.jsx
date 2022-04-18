import React from 'react';
import { Layout } from "antd";
import style from './styles.module.css'
import { NavLink } from 'react-router-dom';

const { Header } = Layout;

export const MyHeader = () => {
    return (
        <Header className={style.header}>
            <NavLink to="/mails">
                <button className={style.button}>
                    Mails App
                </button>
            </NavLink>
        </Header>
    );
}