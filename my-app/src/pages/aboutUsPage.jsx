import React from 'react';
import ReactDOM from 'react-dom';
import { Form } from './homePage';

export class AboutUs extends React.Component{
    constructor(){
        super()
    }

    render(){
        return(
            <div>
                <Header />
                <div className="Wrapper">
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
                        <h1>Еврозабор, ворота, автоматика</h1>
                    </div>
                    <div className="Aboutus-Header-leftSide-desc">
                        Еврозабор собственного производства. На сегодняшний день это оптимальный вариант, соотношения цены и качества при выборе и строительстве забора. Еврозабор имеет ряд достоинств, перед иными капитальными строениями. Сами плиты еврозабора изготовлены из качественного материала.
                        Выполняем работу любой сложности!
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
                                    Способ оплаты: наличный и безналичный рассчёт. Доставка товара по всей Украине.
                                    Предоставляем рассрочку до 6 месяцев
                                    Быстро, качественно, надёжно
                                </div>
                            </div>
                        </div>
                        <div className="Aboutus-Header-rightSide-item">
                            <img className="Aboutus-Header-ico" src="/fence.svg" alt="icon"></img>
                            <div className="Aboutus-Header-rightSide-box-desc">
                                <div className="Aboutus-Header-rightSide-box-desc-title">Установка забора</div>
                                <div className="Aboutus-Header-rightSide-box-desc-desc">
                                    Наша бригада имеет большой опыт в провидении строительно-монтажных работ. С каждым нашим клиентом мы работаем индивидуально.
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
                <section className="AboutUsMain-consultation">
                    <div className="AboutUsMain-consultation-title">
                        Получите Бесплатную Консультацию
                    </div>
                    <a className="AboutUsMain-consultation-button" href='/'>
                        Перезвоните мне
                    </a>
                </section>
                <section className="AboutUsMain-aboutus">
                        <img src="/aboutus-photo.png"></img>
                        <div className="AboutUsMain-aboutus-container">
                            <div className="AboutUsMain-aboutus-container-1">
                                <div className="AboutUsMain-aboutus-container-1-title">
                                    <div>О Компании «Строим с Нами»</div>
                                    <div className="AboutUsMain-aboutus-container-1-line"></div>
                                </div>
                                <div className="AboutUsMain-aboutus-container-1-box">
                                    <div className="AboutUsMain-aboutus-container-1-box-text">
                                        <div className="AboutUsMain-aboutus-container-1-box-text1">
                                        Строительная компания "Строим с Нами" уже более 15 лет на рынке и с каждым годом все больше и больше радует своих клиентов. Высоким качеством работ.
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
                                    <div className="AboutUsMain-aboutus-container-2-box-number">15</div>
                                    <div className="AboutUsMain-aboutus-container-2-box-text">Лет на рынке</div>
                                </div>
                                <div className="AboutUsMain-aboutus-container-2-box2">
                                    <div className="AboutUsMain-aboutus-container-2-box-number">250</div>
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
                            <img alt="icon"></img>
                            <div className="AboutUsMain-whyus-container-box-title">Собственное производство</div>
                        </div>
                        <div className="AboutUsMain-whyus-container-box">
                            <img alt="icon"></img>
                            <div className="AboutUsMain-whyus-container-box-title">Постоянное наличие продукции на складе</div>
                        </div>
                        <div className="AboutUsMain-whyus-container-box">
                            <img alt="icon"></img>
                            <div className="AboutUsMain-whyus-container-box-title">Многолетний опыт работы</div>
                        </div>
                        <div className="AboutUsMain-whyus-container-box">
                            <img alt="icon"></img>
                            <div className="AboutUsMain-whyus-container-box-title">Лояльная ценовая политика</div>
                        </div>
                        <div className="AboutUsMain-whyus-container-box">
                            <img alt="icon"></img>
                            <div className="AboutUsMain-whyus-container-box-title">Широкий ассортимент продукции</div>
                        </div>
                        <div className="AboutUsMain-whyus-container-box">
                            <img alt="icon"></img>
                            <div className="AboutUsMain-whyus-container-box-title">Жёсткий контроль качества</div>
                        </div>
                    </div>
                </section>
                <section className="AboutUsMain-video">
                    <div className="AboutUsMain-video-text">
                        <div className="AboutUsMain-video-text-title">
                            <div>Занимаемся строительством больше 15-и лет</div>
                            <div className='AboutUsMain-video-line'></div>
                        </div>
                        <div className="AboutUsMain-video-text-text">
                            <div className="AboutUsMain-video-text-text-1">Мы предоставляем все услуги, а именно: Консультация, Замер, Изготовление плит и столбов, Установка, Покраска. Наша бригада имеет большой опыт в проведении строительно-монтажных работ. Что бы из вышеперечисленного Вы не выбрали, мы гарантируем: Надежность, эстетическую привлекательность, большой цветовой и дизайнерский выбор, морозостойкость</div>
                            <div className="AboutUsMain-video-text-text-2">Вы можете установить уникальное, качественное и надежное ограждение, которого не будет ни у кого из Ваших соседей, а все благодаря тому, что мы занимаемся собственным производством, покраской и установкой заборов уже много лет и опыта в этом деле нам не занимать! Поэтому, лучше сразу доверить всю работу профессионалам Строим с Нами!</div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <iframe width="760" height="562" src="https://www.youtube.com/embed/FDLvhmlRbRA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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