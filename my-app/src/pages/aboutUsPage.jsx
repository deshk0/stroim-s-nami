import React from 'react';
import ReactDOM from 'react-dom';
import { Form, Phone } from './homePage';

export class AboutUs extends React.Component{
    constructor(){
        super()
    }

    render(){
        return(
            <div>
                <Header />
                <div className="Wrapper">
                    <Phone />
                    <Main />
                </div>
            </div>
        )
    }

}
class Header extends React.Component{
    constructor(){
        super()
    }

    render(){
        return(
            <div id="Aboutus-Header">
                <div className="Aboutus-Header-leftSide">
                    <div className="Aboutus-Header-leftSide-title">
                        <div className="Aboutus-Header-leftSide-line"></div>
                        <div className="Aboutus-Header-leftSide-title-mobile">Строим с Нами</div>
                        <h1 className="Aboutus-Header-leftSide-headline">Еврозабор ворота автоматика</h1>
                    </div>
                    <div className="Aboutus-Header-leftSide-desc">
                        • Мы осуществляем деятельность круглогодично<br />
                        • Работаем с проверенными материалами высокого качества<br />                                                                           
                        • Короткий срок изготовления заказов<br /> 
                        • Предоставление гарантии
                    </div>
                    <a className="Aboutus-Header-leftSide-button" href='/'>Посмотреть все предложения</a>
                </div>
                <div className="Aboutus-Header-rightSide">
                    <div className="Aboutus-Header-rightSide-title">Наши услуги</div>
                    <div className="Aboutus-Header-rightSide-box">
                        <div className="Aboutus-Header-rightSide-item">
                            <img className="Aboutus-Header-ico" src="/box.svg" alt="icon"></img>
                            <div className="Aboutus-Header-rightSide-box-desc">
                                <div className="Aboutus-Header-rightSide-box-desc-title">Доставка материалов</div>
                                <div className="Aboutus-Header-rightSide-box-desc-desc">
                                    Способ оплаты: наличный и безналичный расчёт. 
                                    Предоставляем рассрочку до 6 месяцев. 
                                    Доставка товара по всей Украине. Быстро, качественно, надёжно.
                                </div>
                            </div>
                        </div>
                        <div className="Aboutus-Header-rightSide-item">
                            <img className="Aboutus-Header-ico" src="/fence.svg" alt="icon"></img>
                            <div className="Aboutus-Header-rightSide-box-desc">
                                <div className="Aboutus-Header-rightSide-box-desc-title">Установка забора</div>
                                <div className="Aboutus-Header-rightSide-box-desc-desc">
                                    Наша бригада имеет большой опыт в проведении строительно-монтажных работ. С каждым нашим клиентом мы работаем индивидуально.
                                </div>
                            </div>
                        </div>
                        <div className="Aboutus-Header-rightSide-item">
                            <img className="Aboutus-Header-ico" src="/worker.svg" alt="icon"></img>
                            <div className="Aboutus-Header-rightSide-box-desc">
                                <div className="Aboutus-Header-rightSide-box-desc-title">Установка и обслуживание автоматики</div>
                                <div className="Aboutus-Header-rightSide-box-desc-desc">
                                    Компания "Строим с Нами" является официальным дилером известных брендов автоматики для ворот. Производим продажу и установку автоматики Comunello, Alutech, Anmotors для всех видов ворот. Предоставляем гарантию до 3-х лет.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
class Main extends React.Component{
    constructor(){
        super()
    }

    render(){
        return(
            <div id="AboutUsMain">
                <section className="AboutUsMain-mobile">
                    <div className="AboutUsMain-mobile-title">О нас</div>
                    <div className="AboutUsMain-mobile-desc">
                        Строительная компания "Строим с Нами" уже более 9 лет на рынке и с каждым годом все больше 
                        и больше радует своих клиентов качественными работами.
                        <br />
                        <br />
                        Мы предоставляем все услуги, а именно:
                        <br /><br />
                        -изготовление и монтаж еврозабора и сопутствующих товаров;<br />
                        -изготовление и монтаж ворот и калиток;<br />
                        -установка и обслуживание автоматики для ворот;<br />
                        -покраска еврозабора;<br />
                        -консультация и замер.
                        <br />
                        <br />
                        Наша бригада имеет большой опыт в проведении строительно-монтажных работ. 
                        Что бы из вышеперечисленного Вы не выбрали, 
                        мы гарантируем: качество, надежность и эстетическую привлекательность.
                        <br />
                        <br />
                        Вы можете установить уникальное, качественное и надежное ограждение, которого не будет ни у кого из 
                        Ваших соседей, а все благодаря тому, что мы занимаемся собственным производством, 
                        покраской и установкой заборов уже много лет и опыта в этом деле нам не занимать! 
                    </div>
                </section>
                <section className="AboutUsMain-consultation">
                    <div className="AboutUsMain-consultation-title">
                        Получите Бесплатную Консультацию
                    </div>
                    <a className="AboutUsMain-consultation-button" href="tel:+380951681833">
                        Перезвоните мне
                    </a>
                </section>
                <section className="AboutUsMain-aboutus">
                        <img 
                            className="AboutUsMain-aboutus-photo" 
                            src="https://ntk7gw.am.files.1drv.com/y4mggYg11p7gWJIUjGSueE-YtxZ1c2ofy2JO5Nrzso0oW3XTn2tBHLDpv8s10cBiUhiRmiiWHvdO42A_UXGqLc5OWnTB6UEZeSy9w5DiziJrUcEUGPu3BRGVelWxtRBIwuGk8LKcIOTAnDF3izAPeW6PMtcPUchWQS1-dfK3sGtWV1jebz2yWQkp5JQXqccvsFRUihKO50zEi40dDpAV5TPfg?width=691&height=956&cropmode=none">
                        
                        </img>
                        <div className="AboutUsMain-aboutus-container">
                            <div className="AboutUsMain-aboutus-container-1">
                                <div className="AboutUsMain-aboutus-container-1-title">
                                    <div>О Компании «Строим с Нами»</div>
                                    <div className="AboutUsMain-aboutus-container-1-line"></div>
                                </div>
                                <div className="AboutUsMain-aboutus-container-1-box">
                                    <div className="AboutUsMain-aboutus-container-1-box-text">
                                        <div className="AboutUsMain-aboutus-container-1-box-text1">
                                        Строительная компания "Строим с Нами" уже более 9 лет на рынке и с каждым годом все больше и больше радует своих клиентов высоким качеством работ.
                                        </div>
                                        <div className="AboutUsMain-aboutus-container-1-box-text1">
                                        Для себя и своей семьи всегда старайтесь выбирать все только самое лучшее. Пользуйтесь услугами "Строим с Нами", и облагораживание участка превратиться из заботы в хобби! 
                                        </div>
                                    </div>

                                    <div className="AboutUsMain-aboutus-container-1-box-text">
                                        <div className="AboutUsMain-aboutus-container-1-box-text1">
                                        Технологии современного строительства ушли так далеко вперед, что сегодня можно в кратчайшие сроки изготовить забор под любые желания и требования. Все, чтобы радовать Вас!
                                        </div>
                                        <a  className="AboutUsMain-aboutus-container-1-box-text-button" href="/">Посмотреть товары</a>
                                    </div>
                                </div>
                            </div>
                            <div className="AboutUsMain-aboutus-container-2">
                                <div className="AboutUsMain-aboutus-container-2-box1">
                                    <div className="AboutUsMain-aboutus-container-2-box-number">9</div>
                                    <div className="AboutUsMain-aboutus-container-2-box-text">Лет на рынке</div>
                                </div>
                                <div className="AboutUsMain-aboutus-container-2-box2">
                                    <div className="AboutUsMain-aboutus-container-2-box-number">1000+</div>
                                    <div className="AboutUsMain-aboutus-container-2-box-text">Проектов завершено</div>
                                </div>
                            </div>
                        </div>
                </section>  
                <section className="AboutUsMain-whyus">
                    <div className="AboutUsMain-whyus-title">
                        <div>Почему «Строим с Нами»</div>
                        <div className='AboutUsMain-whyus-line'></div>
                    </div>
                    <div className="AboutUsMain-whyus-container">
                        <div className="AboutUsMain-whyus-container-box">
                            <img src="/company.svg" alt="icon"></img>
                            <div className="AboutUsMain-whyus-container-box-title">Собственное производство</div>
                        </div>
                        <div className="AboutUsMain-whyus-container-box">
                            <img src="/factory.svg" alt="icon"></img>
                            <div className="AboutUsMain-whyus-container-box-title">Постоянное наличие продукции на складе</div>
                        </div>
                        <div className="AboutUsMain-whyus-container-box">
                            <img src="/checkmark.svg" alt="icon"></img>
                            <div className="AboutUsMain-whyus-container-box-title">Многолетний опыт работы</div>
                        </div>
                        <div className="AboutUsMain-whyus-container-box">
                            <img src="/shield.svg" alt="icon"></img>
                            <div className="AboutUsMain-whyus-container-box-title">Лояльная ценовая политика</div>
                        </div>
                        <div className="AboutUsMain-whyus-container-box">
                            <img src="/checklist.svg" alt="icon"></img>
                            <div className="AboutUsMain-whyus-container-box-title">Широкий ассортимент продукции</div>
                        </div>
                        <div className="AboutUsMain-whyus-container-box">
                            <img src="/shield1.svg" alt="icon"></img>
                            <div className="AboutUsMain-whyus-container-box-title">Жёсткий контроль качества</div>
                        </div>
                    </div>
                </section>
                
                <div className="AboutUsMain-video-mobile-title">Видео о нас</div>

                <section className="AboutUsMain-video">
                    <div className="AboutUsMain-video-text">
                        <div className="AboutUsMain-video-text-title">
                            <div>Занимаемся строительством больше 9-и лет</div>
                            <div className='AboutUsMain-video-line'></div>
                        </div>
                        <div className="AboutUsMain-video-text-text">
                            <div className="AboutUsMain-video-text-text-1">Мы предоставляем все услуги, а именно: Консультация, Замер, Изготовление плит и столбов, Установка, Покраска. Наша бригада имеет большой опыт в проведении строительно-монтажных работ. Что бы из вышеперечисленного Вы не выбрали, мы гарантируем: Надежность, эстетическую привлекательность, большой цветовой и дизайнерский выбор, морозостойкость</div>
                            <div className="AboutUsMain-video-text-text-2">Вы можете установить уникальное, качественное и надежное ограждение, которого не будет ни у кого из Ваших соседей, а все благодаря тому, что мы занимаемся собственным производством, покраской и установкой заборов уже много лет и опыта в этом деле нам не занимать! Поэтому, лучше сразу доверить всю работу профессионалам Строим с Нами!</div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <iframe className="AboutUsMain-video-iframe" width="760" height="562" src="https://www.youtube.com/embed/v-ukrDPa8DA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                        <div className="AboutUsMain-video-box">
                            <div className="AboutUsMain-video-box-box-1">
                                <a className="AboutUsMain-video-button" href="/">Посмотреть все товары</a>
                            </div>
                            <div className="AboutUsMain-video-box-box-2">
                                <a className="AboutUsMain-video-button" href="/">Перезвоните мне</a>
                            </div>
                        </div>
                    </div>
                </section> 
                <Form /> 
            </div>
        )
    }
}