import React from 'react';
import ReactDOM from 'react-dom';

export class Navbar extends React.Component{
    constructor(){
        super()
    }

    onClick(){
        let Navbar = document.getElementById('Navbar-ProductsAndService')
        const className = 'Navbar-ProductsAndService_active'
        Navbar.classList.toggle(className)
    }
    opa(e){
        e.preventDefault()
    }
    onClick1(e){
        console.log('hello')
        e.preventDefault()
        const opa1 = document.getElementById("opa")
        const opa = document.getElementById("opa1")
        const opa2 = document.getElementsByClassName("NavbarMobile-burgermenu-link")

        const className1 = "burgerMenu-button_active"
        const className2 = "NavbarMobile-burgermenu-link_active"
        const className = "NavbarMobile-burgerMenu-block_active"
        
        opa.classList.toggle(className)
        opa1.classList.toggle(className1)
        opa2[0].classList.toggle(className2)
        opa2[1].classList.toggle(className2)
        opa2[2].classList.toggle(className2)
        opa2[3].classList.toggle(className2)
        opa2[4].classList.toggle(className2)


    }

    render(){
        return(
            <nav id="Navbar">
                <a className="Navbar-href" style={{borderBottom:`2px solid ${document.location.href === 'http://localhost:3000/' ? 'black' : 'transperent'}`}} href="/">Главная</a>
                <a className="Navbar-href" style={{borderBottom:`2px solid ${document.location.href === 'http://localhost:3000/aboutus' ? 'black' : 'transperent'}`}} href="/aboutus">О нас</a>
                <div className="Navbar-href1" onClick={this.onClick = this.onClick.bind(this)} >
                    <a className="Navbar-href" onClick={this.opa = this.opa.bind(this)} href='/' style={{margin:'22px 0',position:'relative'}}>Товары и услуги<span className="Navbar-arrow"></span></a>
                    <nav id="Navbar-ProductsAndService" className="Navbar-ProductsAndService" style={{borderBottom:`2px solid ${document.location.href === 'http://localhost:3000/market' ? 'black' : 'transperent'}`}}>
                        <a href="/market">Все товары</a>
                        <a href="/market/fences">Заборы</a>
                        <a href="/market/gate">Ворота</a>
                        <a href="/market/rolls">Роллеты</a>
                        <a href="/market/automation">Автоматика для ворот</a>
                        <a href="/market/parking">Шлагбаумы и парковки</a>
                        <a href="/market/tile">Плитка</a>
                        <a href="/market/tileeco">Плитка "Экология"</a>
                        <a href="/market/thermofacade">Термофасад</a>
                    </nav>
                </div>
                <a className="Navbar-href" style={{borderBottom:`2px solid ${document.location.href === 'http://localhost:3000/desivery' ? 'black' : 'transperent'}`}} href="/desivery">Доставка и оплата</a>
                <a className="Navbar-href" style={{borderBottom:`2px solid ${document.location.href === 'http://localhost:3000/gallery' ? 'black' : 'transperent'}`}} href="/gallery">Фотогалерея</a>
                
                
                <a className="MainHeader-logo-href" href="/stroim-s-nami.ua">
                    <img className="MainHeader-block1-logo" src="/logo.png" alt='logo'></img>
                </a>
                <div id="opa1" className="NavbarMobile-burgerMenu-block">
                    <div  className="NavbarMobile-burgerMenu">
                        <a id="opa" onClick={this.onClick1.bind(this)} href="#" className="burgerMenu-button">
                            <span className="burgerMenu-button-span">
                            </span>
                        </a>
                    </div>
                    <a className="NavbarMobile-burgermenu-link" href="/">Главная</a>
                    <a className="NavbarMobile-burgermenu-link" href="/aboutus">О нас</a>
                    <a className="NavbarMobile-burgermenu-link" href="/market">Товары и услуги</a>
                    <a className="NavbarMobile-burgermenu-link" href="/desivery">Доставка и оплата</a>
                    <a className="NavbarMobile-burgermenu-link" href="/gallery">Фотогалерея</a>
                </div>
            </nav>
        )
    }
}