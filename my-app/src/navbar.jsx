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

    render(){
        return(
            <nav id="Navbar">
                <a style={{borderBottom:`2px solid ${document.location.href === 'http://localhost:3000/' ? 'black' : 'transperent'}`}} href="/">Главная</a>
                <a style={{borderBottom:`2px solid ${document.location.href === 'http://localhost:3000/aboutus' ? 'black' : 'transperent'}`}} href="/aboutus">О нас</a>
                <div onClick={this.onClick = this.onClick.bind(this)} style={{height:"62px",display:'flex',flexDirection:'column'}}>
                    <a onClick={this.opa = this.opa.bind(this)} href='/' style={{margin:'22px 0',position:'relative'}}>Товары и услуги<span className="Navbar-arrow"></span></a>
                    <nav id="Navbar-ProductsAndService" className="Navbar-ProductsAndService" style={{borderBottom:`2px solid ${document.location.href === 'http://localhost:3000/market' ? 'black' : 'transperent'}`}}>
                        <a href="/market">Все товары</a>
                        <a href="/market/fences">Заборы</a>
                        <a href="/market/gate">Ворота</a>
                        <a href="/market/rolls">Роллеты</a>
                        <a href="/market/automation">Автоматика для ворот</a>
                        <a href="/market/parking">Шлагбаумы и парковки</a>
                        <a href="/market/tile">Плитка</a>
                        <a href="/market/thermofacade">Термофасад</a>
                    </nav>
                </div>
                <a style={{borderBottom:`2px solid ${document.location.href === 'http://localhost:3000/desivery' ? 'black' : 'transperent'}`}} href="/desivery">Доставка и оплата</a>
                <a style={{borderBottom:`2px solid ${document.location.href === 'http://localhost:3000/gallery' ? 'black' : 'transperent'}`}} href="/gallery">Фотогалерея</a>
            </nav>
        )
    }
}