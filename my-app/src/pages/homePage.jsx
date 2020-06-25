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
                            Еврозабор Полтава! Еврозабор и ворота всех видов.
                            Установка, Покраска. Автоматика. Термофасад
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
                        <img className="OurPropose-container-box-photo" src="OurPropose-photo.jpeg" alt="OurPropose-photo"></img>
                        <div className="OurPropose-container-box-border">
                            <div className='OurPropose-container-box-name'>Ворота</div>
                            <div className="OurPropose-container-box-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, nemo! Explicabo reprehenderit voluptates cum dolorum accusamus ducimus, itaque voluptatum ipsum, similique quasi rem nobis quo. Voluptas odit officia dolore fuga?</div>
                            <a href="/market" className="OurPropose-container-box-button">Все предложения</a>
                        </div>
                    </div>
                    <div className="OurPropose-container-box">
                        <img className="OurPropose-container-box-photo" src="OurPropose-photo.jpeg" alt="OurPropose-photo"></img>
                        <div className="OurPropose-container-box-border">
                            <div className='OurPropose-container-box-name'>Ворота</div>
                            <div className="OurPropose-container-box-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, nemo! Explicabo reprehenderit voluptates cum dolorum accusamus ducimus, itaque voluptatum ipsum, similique quasi rem nobis quo. Voluptas odit officia dolore fuga?</div>
                            <a href="/market" className="OurPropose-container-box-button">Все предложения</a>
                        </div>
                    </div>
                    <div className="OurPropose-container-box">
                        <img className="OurPropose-container-box-photo" src="OurPropose-photo.jpeg" alt="OurPropose-photo"></img>
                        <div className="OurPropose-container-box-border">
                            <div className='OurPropose-container-box-name'>Ворота</div>
                            <div className="OurPropose-container-box-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, nemo! Explicabo reprehenderit voluptates cum dolorum accusamus ducimus, itaque voluptatum ipsum, similique quasi rem nobis quo. Voluptas odit officia dolore fuga?</div>
                            <a href="/market" className="OurPropose-container-box-button">Все предложения</a>
                        </div>
                    </div>
                </div>
                <div className="OurPropose-container">
                    <div className="OurPropose-container-box">
                        <img className="OurPropose-container-box-photo" src="OurPropose-photo.jpeg" alt="OurPropose-photo"></img>
                        <div className="OurPropose-container-box-border">
                            <div className='OurPropose-container-box-name'>Ворота</div>
                            <div className="OurPropose-container-box-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, nemo! Explicabo reprehenderit voluptates cum dolorum accusamus ducimus, itaque voluptatum ipsum, similique quasi rem nobis quo. Voluptas odit officia dolore fuga?</div>
                            <a href="/market" className="OurPropose-container-box-button">Все предложения</a>
                        </div>
                    </div>
                    <div className="OurPropose-container-box">
                        <img className="OurPropose-container-box-photo" src="OurPropose-photo.jpeg" alt="OurPropose-photo"></img>
                        <div className="OurPropose-container-box-border">
                            <div className='OurPropose-container-box-name'>Ворота</div>
                            <div className="OurPropose-container-box-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, nemo! Explicabo reprehenderit voluptates cum dolorum accusamus ducimus, itaque voluptatum ipsum, similique quasi rem nobis quo. Voluptas odit officia dolore fuga?</div>
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