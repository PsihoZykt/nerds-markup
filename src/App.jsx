import React from 'react';
import 'normalize.css'
import s from './app.module.css'
import nerdsLogo from './assets/img/topMenu/nerds-logo.png'
import cartIcon from './assets/img/topMenu/cart-icon.svg'
import sloganImage from './assets/img/topMenu/sloganImage.png'
import advantageImage1 from './assets/img/mainPage/advantages/advantageImage_1.png'
import advantageImage2 from './assets/img/mainPage/advantages/advantageImage_2.png'
import advantageImage3 from './assets/img/mainPage/advantages/advantageImage_3.png'
import descriptionImage from './assets/img/mainPage/description/descriptionImage.png'
import htmlAcademyLogo from './assets/img/mainPage/description/logo-1.png'
import borodinskiLogo from './assets/img/mainPage/description/logo-2.png'
import pinkLogo from './assets/img/mainPage/description/logo-3.png'
import mishkaLogo from './assets/img/mainPage/description/logo-4.png'
import locationMap from './assets/img/footer/contacts/map.png'
import mapMarker from './assets/img/footer/contacts/map-marker.png'
import fbIcon from './assets/img/footer/socialMedia/fb-icon.png'
import instaIcon from './assets/img/footer/socialMedia/insta-icon.png'
import vkIcon from './assets/img/footer/socialMedia/vk-icon.png'

const App = () => {
    return (
        <div className={s.wrapper}>
            <div className={s.topMenu}>
                <div className={s.navbarWrapper}>
                    {/*<div className={s.logo}>*/}
                    <img src={nerdsLogo} alt="Nerd's written with russian and english letters"/>
                    {/*</div>*/}
                    <div className={s.navbar}>
                        <div className={s.navbarItem}>Студия</div>
                        <div className={s.navbarItem}>Клиенты</div>
                        <div className={s.navbarItem}>Магазин</div>
                        <div className={s.navbarItem}>Контакты</div>
                    </div>
                    <div className={s.cart}>
                        <div className={s.cartIcon}><img src={cartIcon} alt="Lightgray icon of cart"/></div>
                        <div className={s.cartText}>Корзина</div>
                    </div>
                </div>
                <div className={s.sloganWrapper}>
                    <h2 className={s.sloganHeader}>
                        Долго, дорого, скрупулезно.
                    </h2>
                    <div className={s.sloganText}>
                        Математически выверенный дизайн <br/> для вашего сайта или мобильного приложения.
                    </div>
                    <div className={s.sloganButton}>
                        Узнать больше
                    </div>
                    <div className={s.sloganImage}>
                        <img src={sloganImage} alt="3 mobile devices with some red figures ( lines, circles, curves )"/>
                    </div>

                </div>
            </div>
            <div className={s.mainPage}>
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
                <div className={s.description}>
                    <div className={s.descriptionLeft}>
                        <div className={s.descriptionHeader}>Мы — маленькая, но гордая <br/> дизайн-студия из
                            Краснодара.
                        </div>
                        <div className={s.descriptionText}>
                            Исповедуем принципы минимализма и чистоты. Ставим математический расчет <br/> превыше
                            креатива. Работаем не покладая рук, как роботы.
                        </div>
                        <div className={s.descriptionOrderWrapper}>
                            <div className={s.descriptionOrderHeader}>
                                Выполняем заказы на разработку:
                            </div>
                            <div className={s.descriptionOrder}>
                                Веб-сайтов любой сложности
                            </div>
                            <div className={s.descriptionOrder}>
                                Мобильных приложений для iOS и Android
                            </div>
                            <div className={s.descriptionOrder}>
                                Слайдшоу и видео для корпоративных презентаций
                            </div>
                        </div>
                    </div>
                    <div className={s.descriptionRight}>
                        <div className={s.descriptionImage}>
                            <img src={descriptionImage}
                                 alt="Nerds written with russian and english letters and some color figures ( lines, circles, curves )"/>
                            <div className={s.descriptionPercentages}>
                                <div className={s.descriptionPercentagesHeader}>
                                    с 2004 года Любим точность во всем:
                                </div>
                                <div className={s.descriptionPercentageItemWrapper}>
                                    <div className={s.descriptionPercentageItem}>
                                        <div className={s.descriptionPercentageItemHeader}>
                                            146<span className={s.percentageSign}>%</span>
                                        </div>
                                        <div className={s.descriptionPercentageItemText}>
                                            Уровень<br/>самоотдачи
                                        </div>
                                    </div>
                                    <div className={s.descriptionPercentageItem}>
                                        <div className={s.descriptionPercentageItemHeader}>
                                            100<span className={s.percentageSign}>%</span>
                                        </div>
                                        <div className={s.descriptionPercentageItemText}>
                                            Соблюдение<br/>сроков
                                        </div>
                                    </div>
                                    <div className={s.descriptionPercentageItem}>
                                        <div className={s.descriptionPercentageItemHeader}>
                                            50<span className={s.percentageSign}>%</span>
                                        </div>
                                        <div className={s.descriptionPercentageItemText}>
                                            Минимальная<br/>предоплата
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className={s.descriptionSocial}>
                        <div className={s.descriptionSocialItem}>
                            <img src={htmlAcademyLogo}
                                 alt="'HTML Academy' logo  with students hat in the shield on the left"/>
                            <div className={s.verticalDivider}/>
                        </div>
                        <div className={s.descriptionSocialItem}>
                            <img src={borodinskiLogo} alt="'Borodinski' logo with mustache on the bottom "/>
                            <div className={s.verticalDivider}/>
                        </div>
                        <div className={s.descriptionSocialItem}>
                            <img src={pinkLogo} alt="'Pink' logo and glasses"/>
                            <div className={s.verticalDivider}/>
                        </div>
                        <div className={s.descriptionSocialItem}>
                            <img src={mishkaLogo}
                                 alt="'Mishka' logo in border's which looks like bear's skin with bear's ears"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className={s.footer}>
                <div className={s.contacts}>
                    <img src={locationMap}
                         alt="Map with nerds location: 191186 St.Petersburg B. Konushennaya street 19/7. Phone number : +7 (812) 275 75 75"/>
                    <div className={s.contactsMapCard}>
                        <div className={s.contactsMapCardHeader}>NЁRDS DESIGN STUDIO</div>
                        <div className={s.contactsMapCardText}>
                            191186, Санкт-Петербург, <br/> ул. Б. Конюшенная, д. 19/8<br/> <br/> тел. +7 (812) 275-75-75
                        </div>
                        <div className={s.contactsMapCardButton}>Напишите нам</div>

                    </div>
                    <div className={s.contactsMapMarker}>
                        <img src={mapMarker} alt="dialogue bubble with word NERDS point on map location of office"/>
                    </div>
                </div>
                <div className={s.socialMedia}>
                    <div className={s.socialMediaIconsWrapper}>
                        <div className={s.socialMediaIcon}><img src={vkIcon} alt="vk icon"/></div>
                        <div className={s.socialMediaIcon}><img src={fbIcon} alt="fb icon"/></div>
                        <div className={s.socialMediaIcon}><img src={instaIcon} alt="instagramm icon"/></div>
                    </div>
                    <div className={s.socialMediaDiscount}>
                        <div className={s.socialMediaDiscountHeader}>
                            Давайте дружить, это выгодно!
                        </div>
                        <div className={s.socialMediaDiscountText}>
                            Скидка 10% для друзей из социальных сетей.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;