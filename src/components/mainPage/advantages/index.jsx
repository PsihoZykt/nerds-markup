import s from './index.module.css'
import React from 'react';
import advantageImage1 from "../../../../assets/img/mainPage/advantages/advantageImage_1.png";
import advantageImage2 from "../../../../assets/img/mainPage/advantages/advantageImage_2.png";
import advantageImage3 from "../../../../assets/img/mainPage/advantages/advantageImage_3.png";

const MainPage = () => {
    return (
        <div className={s.advantages}>
            <div className={s.advantageCard}>
                <div className={s.advantageImage}>
                    <img src={advantageImage1} alt={"a little laptop with small webpage on it"}/>
                </div>
                <div className={s.advantageHeader}>
                    Веб-сайты
                </div>
                <div className={s.advantageText}>
                    Мир никогда не будет прежним <br/> после того как увидит ваш сайт!
                </div>
                <div className={s.advantageButton}>
                    Заказать
                </div>
            </div>
            <div className={s.advantageCard}>
                <div className={s.advantageImage}>
                    <img src={advantageImage2} alt="2 smartphones"/>
                </div>
                <div className={s.advantageHeader}>
                    Приложения
                </div>
                <div className={s.advantageText}>Покорите топ-10 приложений в <br/> AppStore и Google Play</div>
                <div className={s.advantageButton + " " + s.green}>Заказать</div>
            </div>
            <div className={s.advantageCard}>
                <div className={s.advantageImage}>
                    <img src={advantageImage3} alt="dashboard with some graphics on it"/>
                </div>
                <div className={s.advantageHeader}>Презентации</div>
                <div className={s.advantageText}>Вы даже не подозреваете, <br/> насколько вы изумительны!</div>
                <div className={s.advantageButton + " " + s.yellow}>Заказать</div>
            </div>
        </div>
    );
};

export default MainPage;