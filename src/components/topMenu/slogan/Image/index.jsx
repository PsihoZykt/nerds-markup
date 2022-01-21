import s from './index.module.css'
import React from 'react';

const Image = () => {
    return (
        <div className={s.sloganImage}>
            <img src={sloganImage} alt="3 mobile devices with some red figures ( lines, circles, curves )"/>
        </div>

    );
};

export default Image;