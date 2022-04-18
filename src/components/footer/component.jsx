import React from 'react';
import style from './styles.module.css';
import { Layout } from 'antd';

const { Footer } = Layout;

export const MyFooter = () => {
    return <Footer className={style.footer}>Created by Alex Timoshenko, 2022</Footer>
}