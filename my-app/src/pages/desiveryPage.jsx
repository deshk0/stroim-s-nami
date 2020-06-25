import React from 'react';
import ReactDOM from 'react-dom';
import { Form } from './homePage';

export class Desivery extends React.Component{
    constructor(){
        super()
    }

    render(){
        return(
            <div className="Wrapper">
                <Main title="Способы оплаты" text="Наличный и безналичный расчет"/>
                <Main title="Регионы доставки" text="Доставка товара по г. Полтава и Полтавской области"/>
                <Main1 title="Регионы доставки"/>

                <Form />
            </div>

        )
    }
}
class Main extends React.Component {
    constructor(){
        super()
    }

    render(){
        return(
            <div id="DesiveryMain">
                <div className="DesiveryMain-title">{this.props.title}</div>
                <div className="DesiveryMain-line"></div>
                <div className="DesiveryMain-text">{this.props.text}</div>
            </div>
        )
    }
}
class Main1 extends React.Component {
    constructor(){
        super()
    }

    render(){
        return(
            <div id="DesiveryMain">
                <div className="DesiveryMain-title">{this.props.title}</div>
                <div className="DesiveryMain-line"></div>
                <div className="DesiveryMain-text">
                    Предоставляем рассрочку до 6 месяцев<br />
                    Быстро, качественно, надёжно<br />
                    По всем вопросам обращаться по телефонам:<br />
                    095-16-81-833<br />
                    050-86-98-644<br />
                    067-111-49-49`<br />
                </div>
            </div>
        )
    }
}