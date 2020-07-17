import React from 'react';
import ReactDOM from 'react-dom';
import { Navbar } from '../navbar';

export class Home extends React.Component{
    constructor(){
        super()
    }

    render(){
        return(
            <div>
                <Header />
                <div className="Wrapper">
                    <OurPropose />
                    <Form />
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
            <div id="Header">
                <div className="Wrapper">
                    <div className="Header-container">
                        <h1 className="Header-headline1">Строим с Нами</h1>
                        <h2 className="Header-headline2">
                            Еврозабор Полтава Установка Покраска<br /> Заборы и ворота всех видов
                            Автоматика Термофасад Плитка
                        </h2>
                        <a className="Header-button" href="/form">Оставить заявку</a>
                    </div>
                </div>
            </div>
        )
    }
}
class OurPropose extends React.Component{
    constructor(){
        super()
    }

    render(){
        return(
            <section id="OurPropose">
                <div className="OurPropose-title">Мы предлагаем</div>
                <div className="OurPropose-line"></div>
                <div className="OurPropose-container">
                    <div className="OurPropose-container-box">
                        <img className="OurPropose-container-box-photo" src="https://www.dropbox.com/s/ytptmk1cynvsghf/%D0%BA%D0%B0%D1%80%D0%BF%D0%B0%D1%82%D1%81%D0%BA%D0%B8%D0%B9%20%D0%BA%D0%B0%D0%BC%D0%B5%D0%BD%D1%8C%20%20%2833%29.jpg?dl=1" alt="OurPropose-photo"></img>
                        <div className="OurPropose-container-box-border">
                            <div className='OurPropose-container-box-name'>Заборы</div>
                            <div className="OurPropose-container-box-desc">
                                Еврозабор собственного производства. На сегодняшний день это оптимальный вариант, соотношения цены и качества при выборе и строительстве забора. Еврозабор имеет ряд достоинств, перед иными капитальными строениями. Всё изготовлено из качественного материала.            
                            </div>
                            <a href="/market" className="OurPropose-container-box-button">Все предложения</a>
                        </div>
                    </div>
                    <div className="OurPropose-container-box">
                        <img className="OurPropose-container-box-photo" src="https://www.dropbox.com/s/1nf4j2oxb1rv6of/OurPropose-photo.jpg?dl=1" alt="OurPropose-photo"></img>
                        <div className="OurPropose-container-box-border">
                            <div className='OurPropose-container-box-name'>Ворота</div>
                            <div style={{fontSize:'15px'}} className="OurPropose-container-box-desc">
                                На сегодняшний день компания «Строим с Нами» предлагает ворота собственного производства:

                                    <br />из разных материалов (профнастил, металлические, филенчатые);
                                    <br />учитывая предназначение (въездные, гаражные)
                                    <br />любой стоимостью (бюджетные, дорогостоящие);
                                    <br />необходимого качества;
                                    <br />для выполнения нужных функций.                           
                            </div>
                            <a href="/market" className="OurPropose-container-box-button">Все предложения</a>
                        </div>
                    </div>
                    <div className="OurPropose-container-box">
                        <img className="OurPropose-container-box-photo" src="https://www.dropbox.com/s/sbmh279tf88273m/%D0%BA%D0%B0%D1%80%D0%BF%D0%B0%D1%82%D1%81%D0%BA%D0%B8%D0%B9%20%D0%BA%D0%B0%D0%BC%D0%B5%D0%BD%D1%8C%20%2813%29.JPG?dl=1" alt="OurPropose-photo"></img>
                        <div className="OurPropose-container-box-border">
                            <div className='OurPropose-container-box-name'>Покраска</div>
                            <div className="OurPropose-container-box-desc">
                                Покраска еврозаборов высококачественными материалами. Поможет сохранить забор от разрушений и сделает ограждение индивидуальным, выделив форму и особенности плит.
                            </div>
                            <a href="/market" className="OurPropose-container-box-button">Все предложения</a>
                        </div>
                    </div>
                    <div className="OurPropose-container-box">
                        <img className="OurPropose-container-box-photo" src="https://www.dropbox.com/s/9mvrgdmdjxz6p0v/36272082_211565929487419_1708950749590847488_n.jpg?dl=1" alt="OurPropose-photo"></img>
                        <div className="OurPropose-container-box-border">
                            <div className='OurPropose-container-box-name'>Автоматика для ворот</div>
                            <div className="OurPropose-container-box-desc">
                                В категорию «Автоматика для ворот» входят промышленные, гаражные, въездные конструкции. Для их изготовления применяются современные материалы, инновационная автоматика. Прочность, надежность, практичность и удобство в эксплуатации.
                            </div>
                            <a href="/market" className="OurPropose-container-box-button">Все предложения</a>
                        </div>
                    </div>
                    <div className="OurPropose-container-box">
                        <img className="OurPropose-container-box-photo" src="https://www.dropbox.com/s/nt7bd9qflxk29pm/%D1%80%D0%BE%D0%BB%D0%BB%D0%B5%D1%82%D1%8B%20%288%29.jpg?dl=1" alt="OurPropose-photo"></img>
                        <div className="OurPropose-container-box-border">
                            <div className='OurPropose-container-box-name'>Роллеты</div>
                            <div className="OurPropose-container-box-desc">
                                Системы роллет являются защитными конструкциями для дверных, оконных проемов. Это алюминиевые полотна, движущие по направляющим, которые сворачиваются в короб рулоном.
                            </div>
                            <a href="/market" className="OurPropose-container-box-button">Все предложения</a>
                        </div>
                    </div>
                    <div className="OurPropose-container-box">
                        <img className="OurPropose-container-box-photo" src="https://www.dropbox.com/s/nqmo8dyvw0kwqos/%D0%BF%D0%BB%D0%B8%D1%82%D0%BA%D0%B0%20%D1%8D%D0%BA%D0%BE%D0%BB%D0%BE%D0%B3%D0%B8%D1%8F%20%288%29.jpg?dl=1" alt="OurPropose-photo"></img>
                        <div className="OurPropose-container-box-border">
                            <div className='OurPropose-container-box-name'>Плитка "Экология"</div>
                            <div className="OurPropose-container-box-desc">
                                Плитка газонная (решетка, экология) ― это плитка для создания автомобильных парковок, проезда транспорта в зоне озеленения. Защищает грунт от эрозии, гарантирует нормальную циркуляцию воды и рост газонной травы.                            </div>
                            <a href="/market" className="OurPropose-container-box-button">Все предложения</a>
                        </div>
                    </div>

                </div>
            </section>
        )
    }
}
export class Form extends React.Component{
    constructor(){
        super()
    }

    render(){
        return(
            <section id="Homepage-form">
                <div className="OurPropose-title">Форма обратной связи</div>
                <div className="OurPropose-line"></div>
                <div>
                    <form action="telegram.php" method="POST" className="Homepage-form-form" >
                        <div class="Homepage-form-form-group">
                            <label>
                                <input name="user_name" type="text" className="Homepage-form-input" placeholder="Ваше имя"></input>
                            </label>
                        </div>
                        <div class="form-group">
                            <label>
                                <input name="user_phone" type="text" className="Homepage-form-input" placeholder="Ваш номер телефона"></input>
                            </label>
                        </div>
                        <div className='Homepage-form-buttonBox'>
                            <button type="submit" className="Homepage-form-button">Отправить форму!</button>
                        </div>
                    </form>
                </div>
            </section>
        )
    }
}