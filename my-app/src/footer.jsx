import React from 'react';
import ReactDOM from 'react-dom';

export class Footer extends React.Component{
    constructor(){
        super()
    }

    render(){
        return(
            <div id="Footer">
                <div className="Footer-map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10352.814578545016!2d34.5338605!3d49.5561806!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xab9bd5aaecbf5818!2z0JXQstGA0L7Qt9Cw0LHQvtGAINCf0L7Qu9GC0LDQstCwLNCl0LDRgNGM0LrQvtCyLNCa0LjQtdCyLtCj0YHRgtCw0L3QvtCy0LrQsC7Qn9C-0LrRgNCw0YHQutCwLtCS0L7RgNC-0YLQsCDQstGB0LXRhSDQstC40LTQvtCyLtCQ0LLRgtC-0LzQsNGC0LjQutCwLtCa0L7QvNC_0LDQvdC40Y8gItCh0YLRgNC-0LjQvCDRgSDQndCw0LzQuCI!5e0!3m2!1sru!2sua!4v1592225360448!5m2!1sru!2sua" width="600" height="450" frameborder="0"  allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                </div>
                <div className="Footer-nav">
                    <div className="Footer-nav-col1">
                        <div className="Footer-nav-col1-title">
                            <div>Навигация</div><div className="Footer-nav-col1-line"></div>
                        </div>
                        <a href="/gallery" className="Footer-nav-col1-gallery">
                            <img className="Footer-icon" src="/camera.svg" alt='icon'></img>
                            <span className="Footer-title">Фотогалерея</span>
                        </a>
                    </div>
                    <div className="Footer-nav-col2">
                        <div className="Footer-nav-col2-box">
                            <div className="Footer-nav-col2-box-title">Заборы</div>
                            <div className="Footer-nav-col2-box-href">
                                <a href="/market">Еврозабор</a>
                                <a href="/market">Еврозабор</a>
                                <a href="/market">Еврозабор</a>
                                <a href="/market">Еврозабор</a>
                            </div>
                        </div>
                        <div className="Footer-nav-col2-box">
                            <div className="Footer-nav-col2-box-title">Заборы</div>
                            <div className="Footer-nav-col2-box-href">
                                <a href="/market">Еврозабор</a>
                                <a href="/market">Еврозабор</a>
                                <a href="/market">Еврозабор</a>
                                <a href="/market">Еврозабор</a>
                            </div>
                        </div>
                        <div className="Footer-nav-col2-box">
                            <div className="Footer-nav-col2-box-title">Заборы</div>
                            <div className="Footer-nav-col2-box-href">
                                <a href="/market">Еврозабор</a>
                                <a href="/market">Еврозабор</a>
                                <a href="/market">Еврозабор</a>
                                <a href="/market">Еврозабор</a>
                            </div>
                        </div>
                        <div className="Footer-nav-col2-box">
                            <div className="Footer-nav-col2-box-title">Заборы</div>
                            <div className="Footer-nav-col2-box-href">
                                <a href="/market">Еврозабор</a>
                                <a href="/market">Еврозабор</a>
                                <a href="/market">Еврозабор</a>
                                <a href="/market">Еврозабор</a>
                            </div>
                        </div>
                    </div>
                    <div className="Footer-nav-col3">
                        <div className="Footer-nav-col3-box1">
                            <img className="Footer-nav-col3-box1-photo" src="/phone.svg" alt="icon"></img>
                            <div className="Footer-nav-col3-box1-telephons">
                                <div className="Footer-nav-col3-numbers">050-869-86-44</div>
                                <div className="Footer-nav-col3-numbers">095-168-18-33</div>
                                <div className="Footer-nav-col3-numbers">098-550-10-95</div>
                            </div>
                        </div>
                        <a href="/">
                        <div className="Footer-nav-col3-box2">
                            <img className="Footer-nav-col3-box1-photo" src="/instagram.svg" alt='icon'></img>
                            <div className="Footer-nav-col3-box2-text">@stroim.s.nami</div>
                        </div>
                        </a>
                        <a href="/">
                            <div className="Footer-nav-col3-box2">
                                <img className="Footer-nav-col3-box1-photo" src="/facebook.svg" alt='icon'></img>
                                <div className="Footer-nav-col3-box2-text">@ZaborVorotaPoltava</div>
                            </div>
                        </a>
                    </div>
                    <div className="Footer-nav-col4">
                        <div className="Footer-nav-col3-box1" >
                            <img className="Footer-nav-col3-box1-photo" src="/mail.svg" alt="icon"></img>
                            <div className="Footer-nav-col3-numbers">storpolt@i.ua</div>
                        </div>
                        <div className="Footer-nav-col4-box">
                            <div>2020 © «­Строим с Нами»</div>
                            <div>Designed and Developed by «­Cool Raccoon`s»</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}