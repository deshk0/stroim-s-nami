import React from 'react';
import ReactDOM from 'react-dom';

export class Header extends React.Component{
    constructor(){
        super()
    }

    render(){
        return(
            <div id="MainHeader">
                <div className="MainHeader-block1">
                    <a href="/stroim-s-nami.ua"><img className="MainHeader-block1-logo" src="/logo.png" alt='logo'></img></a>
                </div>
                <div className="MainHeader-block2">
                <div className="MainHeader-triangle1"></div>
                    <img className="MainHeader-block2-photo" src="/pin.svg" alt="icon"></img>
                    <div className="MainHeader-block2-text">
                        <div>Харківське шосе, 8, Полтава,</div>
                        <div>Полтавська область, 36000</div>
                    </div>
                    <div className="MainHeader-triangle2"></div>
                </div>
                <div className="MainHeader-block3">
                    <div className="Footer-nav-col3-box1">
                            <img className="Footer-nav-col3-box1-photo" src="/phone.svg" alt="icon"></img>
                            <div className="Footer-nav-col3-box1-telephons">
                                <div className="Footer-nav-col3-numbers">050-869-86-44</div>
                                <div className="Footer-nav-col3-numbers">095-168-18-33</div>
                                <div className="Footer-nav-col3-numbers">098-550-10-95</div>
                            </div>
                        </div>
                </div>
            </div>
        )
    }
}