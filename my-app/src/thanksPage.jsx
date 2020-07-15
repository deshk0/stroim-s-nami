import React from 'react';
import ReactDOM from 'react-dom';

export class ThanksPage extends React.Component{
    constructor(){
        super()
    }


    render(){
        return(
            <div className="Wrapper">
                <div id="ThanksPage">
                    <div className="ThanksPage-text">
                        Ваша заявка успешно принята, мы скоро с вами свяжемся!
                    </div>
                    <a className="ThanksPage-button" href="/">
                        Вернуться на сайт
                    </a>
                </div>
            </div>
        )
    }
}