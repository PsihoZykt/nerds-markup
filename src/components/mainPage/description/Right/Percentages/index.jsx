import s from './index.module.css'
import React from 'react';
import Header from "./Header";
import Order from "./Order";
import Text from "./Text";

const Left = () => {
    return (
            <div className={s.descriptionLeft}>
                <Header />
                <Text />
                <Order />
            </div>

    );
};

export default Left;