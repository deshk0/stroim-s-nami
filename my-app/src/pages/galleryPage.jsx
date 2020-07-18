import React from 'react';
import ReactDOM from 'react-dom';

export class Gallery extends React.Component{
    constructor(){
        super()

        this.state = {
            category: 'Все фотографии'
        }
    }
    onClick(e){
        e.preventDefault()

        const buttonBox = document.getElementById('GalleryPage-buttonBox-box')
        const style = 'GalleryPage-buttonBox-box_active'

        buttonBox.classList.toggle(style)
    }
    pickAll(e){
        e.preventDefault()
        this.setState({
            category: 'Все фотографии'
        })
        const buttonBox = document.getElementById('GalleryPage-buttonBox-box')
        const style = 'GalleryPage-buttonBox-box_active'

        buttonBox.classList.toggle(style)
    }
    pickFences(e){
        e.preventDefault()
        this.setState({
            category: 'Заборы'
        })
        const buttonBox = document.getElementById('GalleryPage-buttonBox-box')
        const style = 'GalleryPage-buttonBox-box_active'

        buttonBox.classList.toggle(style)
    }
    pickColoring(e){
        e.preventDefault()
        this.setState({
            category: 'Покраска'
        })
        const buttonBox = document.getElementById('GalleryPage-buttonBox-box')
        const style = 'GalleryPage-buttonBox-box_active'

        buttonBox.classList.toggle(style)
    }
    pickGate(e){
        e.preventDefault()
        this.setState({
            category: 'Ворота'
        })

        const buttonBox = document.getElementById('GalleryPage-buttonBox-box')
        const style = 'GalleryPage-buttonBox-box_active'

        buttonBox.classList.toggle(style)
    }
    pickRolls(e){
        e.preventDefault()
        this.setState({
            category: 'Роллеты'
        })

        const buttonBox = document.getElementById('GalleryPage-buttonBox-box')
        const style = 'GalleryPage-buttonBox-box_active'

        buttonBox.classList.toggle(style)
    }
    pickAutomation(e){
        e.preventDefault()
        this.setState({
            category: 'Автоматика для ворот'
        })

        const buttonBox = document.getElementById('GalleryPage-buttonBox-box')
        const style = 'GalleryPage-buttonBox-box_active'

        buttonBox.classList.toggle(style)
    }
    pickParking(e){
        e.preventDefault()
        this.setState({
            category: 'Шлагбаумы и парковки'
        })

        const buttonBox = document.getElementById('GalleryPage-buttonBox-box')
        const style = 'GalleryPage-buttonBox-box_active'

        buttonBox.classList.toggle(style)
    }
    pickTile(e){
        e.preventDefault()
        this.setState({
            category: 'Плитка'
        })

        const buttonBox = document.getElementById('GalleryPage-buttonBox-box')
        const style = 'GalleryPage-buttonBox-box_active'

        buttonBox.classList.toggle(style)
    }
    pickTileEco(e){
        e.preventDefault()
        this.setState({
            category: 'Плитка "Экология"'
        })

        const buttonBox = document.getElementById('GalleryPage-buttonBox-box')
        const style = 'GalleryPage-buttonBox-box_active'

        buttonBox.classList.toggle(style)
    }
    pickThermofacade(e){
        e.preventDefault()
        this.setState({
            category: 'Термофасад'
        })

        const buttonBox = document.getElementById('GalleryPage-buttonBox-box')
        const style = 'GalleryPage-buttonBox-box_active'

        buttonBox.classList.toggle(style)
    }


    render(){
        return(
            <div className="Wrapper">
                <div id="GalleryPage">
                    <div className="GalleryPage-buttonContainer">
                        <a onClick={this.onClick = this.onClick.bind(this)} className="GalleryPage-buttonBox-button" href="/">
                            {this.state.category}
                        </a>
                        <div id="GalleryPage-buttonBox-box" className="GalleryPage-buttonBox-box">
                            <a onClick={this.pickAll = this.pickAll.bind(this)} href="/">Все фотографии</a>
                            <a onClick={this.pickFences = this.pickFences.bind(this)} href="/">Заборы</a>
                            <a onClick={this.pickColoring = this.pickColoring.bind(this)} href="/">Покраска</a>
                            <a onClick={this.pickGate = this.pickGate.bind(this)} href="/">Ворота</a>
                            <a onClick={this.pickRolls = this.pickRolls.bind(this)} href="/">Роллеты</a>
                            <a onClick={this.pickAutomation = this.pickAutomation.bind(this)} href="/">Автоматика для ворот</a>
                            <a onClick={this.pickParking = this.pickParking.bind(this)} href="/">Шлагбаумы и парковки</a>
                            <a onClick={this.pickTile = this.pickTile.bind(this)} href="/">Плитка</a>
                            <a onClick={this.pickTileEco = this.pickTileEco.bind(this)} href="/">Плитка "Экология"</a>
                            <a onClick={this.pickThermofacade = this.pickThermofacade.bind(this)} href="/">Термофасад</a>
                        </div>
                    </div>
                    <div className="GalleryPage-instruction">
                        Нажмите чтобы выбрать фотогалерею
                    </div>
                    <div className="GalleryPage-container">
                        {
                            this.state.category === "Все фотографии" ? <AllPhoto /> :
                            this.state.category === "Заборы" ? <FencesPhoto /> :
                            this.state.category === "Покраска" ? <Coloring /> :
                            this.state.category === "Ворота" ? <GatesPhoto /> : 
                            this.state.category === "Роллеты" ? <RoolsPhoto /> : 
                            this.state.category === "Автоматика для ворот" ? <AutomationPhoto /> : 
                            this.state.category === "Шлагбаумы и парковки" ? <ParkingPhoto /> : 
                            this.state.category === "Плитка" ? <TilePhoto /> : 
                            this.state.category === 'Плитка "Экология"' ? <TileEcoPhoto /> : 
                            this.state.category === "Термофасад" ? <ThermofacadePhoto /> : <AllPhoto />
                        }
                    </div>
                </div>
            </div>
        )
    }
}

class PhotoBox extends React.Component{
    constructor(){
        super()
    }
    onClick(e){
        e.preventDefault()
    }

    render(){
        return(
            <a href="/" onClick={this.onClick = this.onClick.bind(this)} className="PhotoBox-box">
                <img className="PhotoBox-photo" src={this.props.img} alt="Opa"></img>
            </a>
        )
    }
}

class AllPhoto extends React.Component{
    constructor(){
        super()
        this.container = [
            [
                <PhotoBox img="https://www.dropbox.com/s/lmwuzjd48l79l0u/%D0%BA%D0%B8%D1%80%D0%BF%D0%B8%D1%87%20%D0%B2%20%D1%80%D0%B0%D0%BC%D0%BA%D0%B5%20%2811%29.jpg?dl=1" />,
                <PhotoBox img="https://www.dropbox.com/s/2qzz8x779hzt8a9/%D0%BF%D0%B5%D1%80%D0%B5%D0%BF%D0%BB%D0%B5%D1%82%20%282%29.JPG?dl=1" />,
                <PhotoBox img="https://www.dropbox.com/s/l2illxqwsvr4ll4/09.jpg?dl=1"/>,
                <PhotoBox img="https://www.dropbox.com/s/adrfvmjva7m7tb6/%D0%9F%D0%BB%D0%B8%D1%82%D0%BA%D0%B0%20%281%29.gif?dl=1"/>,
                <PhotoBox img="https://www.dropbox.com/s/6qp4dz4wsw3qtu3/%D0%BF%D0%BB%D0%B8%D1%82%D0%BA%D0%B0%20%D1%8D%D0%BA%D0%BE%D0%BB%D0%BE%D0%B3%D0%B8%D1%8F%2013.jpg?dl=1"/>,
                <PhotoBox img="https://www.dropbox.com/s/6tgpy8fziptr9ni/0-02-04-c59bbc7a55d16974255777bf78800bc92a8ee2402edc894bd3753007848ed124_b541cb8e.jpg?dl=1"/>,
                <PhotoBox img="https://www.dropbox.com/s/1492m3mydn01bme/%D1%80%D0%BE%D0%BB%D0%BB%D0%B5%D1%82%D1%8B%20%285%29.jpg?dl=1"/>,
                <PhotoBox img="https://www.dropbox.com/s/myanw1u3n58a49v/%D0%B8%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5_viber_2019-07-08_13-54-03.jpg?dl=1"/>,
                <PhotoBox img="https://www.dropbox.com/s/u97g2u4913wx3ge/01.jpg?dl=1"/>,
            ],
            [
                <PhotoBox img="https://www.dropbox.com/s/1nf4j2oxb1rv6of/OurPropose-photo.jpg?dl=1" />,
                <PhotoBox img="https://www.dropbox.com/s/1nf4j2oxb1rv6of/OurPropose-photo.jpg?dl=1" />,
                <PhotoBox img="https://www.dropbox.com/s/1nf4j2oxb1rv6of/OurPropose-photo.jpg?dl=1" />,
                <PhotoBox img="https://www.dropbox.com/s/1nf4j2oxb1rv6of/OurPropose-photo.jpg?dl=1" />,
                <PhotoBox img="https://www.dropbox.com/s/1nf4j2oxb1rv6of/OurPropose-photo.jpg?dl=1" />,
                <PhotoBox img="https://www.dropbox.com/s/1nf4j2oxb1rv6of/OurPropose-photo.jpg?dl=1" />,
                <PhotoBox img="https://www.dropbox.com/s/1nf4j2oxb1rv6of/OurPropose-photo.jpg?dl=1" />,
                <PhotoBox img="https://www.dropbox.com/s/1nf4j2oxb1rv6of/OurPropose-photo.jpg?dl=1" />,
                <PhotoBox img="https://www.dropbox.com/s/1nf4j2oxb1rv6of/OurPropose-photo.jpg?dl=1" />,
            ],
            [
                <PhotoBox img="https://www.dropbox.com/s/1nf4j2oxb1rv6of/OurPropose-photo.jpg?dl=1" />,
                <PhotoBox img="https://www.dropbox.com/s/1nf4j2oxb1rv6of/OurPropose-photo.jpg?dl=1" />,
                <PhotoBox img="https://www.dropbox.com/s/1nf4j2oxb1rv6of/OurPropose-photo.jpg?dl=1" />,
                <PhotoBox img="https://www.dropbox.com/s/1nf4j2oxb1rv6of/OurPropose-photo.jpg?dl=1" />,
                <PhotoBox img="https://www.dropbox.com/s/1nf4j2oxb1rv6of/OurPropose-photo.jpg?dl=1" />,
                <PhotoBox img="https://www.dropbox.com/s/1nf4j2oxb1rv6of/OurPropose-photo.jpg?dl=1" />,
                <PhotoBox img="https://www.dropbox.com/s/1nf4j2oxb1rv6of/OurPropose-photo.jpg?dl=1" />,
                <PhotoBox img="https://www.dropbox.com/s/1nf4j2oxb1rv6of/OurPropose-photo.jpg?dl=1" />,
                <PhotoBox img="https://www.dropbox.com/s/1nf4j2oxb1rv6of/OurPropose-photo.jpg?dl=1" />,
            ]
        ]
        this.state = {
            index: 0
        }
    }
    next(e){
        e.preventDefault()
        if(this.state.index < 2){
                this.setState({
                    index: this.state.index + 1
                })
            console.log(this.state.index)
        }
    }
    prev(e){
        e.preventDefault()
        if(this.state.index >= 1){
                this.setState({
                    index: this.state.index - 1
                })
            console.log(this.state.index)
        }
    }


    render(){
        return(
            <div className="GalleryPage-container">
                {this.container[this.state.index]}
                <div className="GalleryPage-container-arrows">
                    <a onClick={this.prev = this.prev.bind(this)} href="/" className="GalleryPage-container-arrow">←</a>
                    <a onClick={this.next = this.next.bind(this)} href="/" className="GalleryPage-container-arrow">→</a>
                </div>
            </div>
        )
    }
}
class FencesPhoto extends React.Component{
    constructor(){
        super()
        this.container = [
            [
                <PhotoBox img="https://www.dropbox.com/s/lmwuzjd48l79l0u/%D0%BA%D0%B8%D1%80%D0%BF%D0%B8%D1%87%20%D0%B2%20%D1%80%D0%B0%D0%BC%D0%BA%D0%B5%20%2811%29.jpg?dl=1" />,
                <PhotoBox img="https://www.dropbox.com/s/2qzz8x779hzt8a9/%D0%BF%D0%B5%D1%80%D0%B5%D0%BF%D0%BB%D0%B5%D1%82%20%282%29.JPG?dl=1" />,
                <PhotoBox img="https://www.dropbox.com/s/2e23agzcln3uy44/%D0%BF%D0%B5%D1%81%D1%87%D0%B0%D0%BD%D0%B8%D0%BA%284%29.jpg?dl=1" />,
                <PhotoBox img="https://www.dropbox.com/s/fv91wcrh4eorgk9/%D0%B1%D1%83%D1%82%20%D0%B2%D0%BE%D0%BB%D0%BD%D0%B8%D1%81%D1%82%D1%8B%D0%B9%20%285%29.JPG?dl=1" />,
                <PhotoBox img="https://www.dropbox.com/s/223k0x0466a9g9n/%D0%91%D1%83%D1%82%20%285%29.jpg?dl=1"/>,
                <PhotoBox img="https://www.dropbox.com/s/pwuzgftyxofxq65/%D1%81%D1%82%D0%B0%D1%80%D1%8B%D0%B9%20%D0%B3%D0%BE%D1%80%D0%BE%D0%B4%20%286%29.jpg?dl=1"/>,
                <PhotoBox img="https://www.dropbox.com/s/6yo9ks5quom1gnv/%D1%84%D0%B0%D0%B3%D0%BE%D1%82%20%2821%29.JPG?dl=1"/>,
                <PhotoBox img="https://www.dropbox.com/s/kqp32pwlcqd243j/%D0%B8%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5_viber_2019-07-16_11-36-43.jpg?dl=1"/>,
                <PhotoBox img="https://www.dropbox.com/s/0s68aff3eg1kvdb/%D0%B8%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5_viber_2019-07-16_11-36-43.jpg?dl=1"/>,
            ],
            [
                <PhotoBox img="https://www.dropbox.com/s/1nf4j2oxb1rv6of/OurPropose-photo.jpg?dl=1" />,
                <PhotoBox img="https://www.dropbox.com/s/1nf4j2oxb1rv6of/OurPropose-photo.jpg?dl=1" />,
                <PhotoBox img="https://www.dropbox.com/s/1nf4j2oxb1rv6of/OurPropose-photo.jpg?dl=1" />,
                <PhotoBox img="https://www.dropbox.com/s/1nf4j2oxb1rv6of/OurPropose-photo.jpg?dl=1" />,
                <PhotoBox img="https://www.dropbox.com/s/1nf4j2oxb1rv6of/OurPropose-photo.jpg?dl=1" />,
                <PhotoBox img="https://www.dropbox.com/s/1nf4j2oxb1rv6of/OurPropose-photo.jpg?dl=1" />,
                <PhotoBox img="https://www.dropbox.com/s/1nf4j2oxb1rv6of/OurPropose-photo.jpg?dl=1" />,
                <PhotoBox img="https://www.dropbox.com/s/1nf4j2oxb1rv6of/OurPropose-photo.jpg?dl=1" />,
                <PhotoBox img="https://www.dropbox.com/s/1nf4j2oxb1rv6of/OurPropose-photo.jpg?dl=1" />,
            ],
            [
                <PhotoBox img="https://www.dropbox.com/s/1nf4j2oxb1rv6of/OurPropose-photo.jpg?dl=1" />,
                <PhotoBox img="https://www.dropbox.com/s/1nf4j2oxb1rv6of/OurPropose-photo.jpg?dl=1" />,
                <PhotoBox img="https://www.dropbox.com/s/1nf4j2oxb1rv6of/OurPropose-photo.jpg?dl=1" />,
                <PhotoBox img="https://www.dropbox.com/s/1nf4j2oxb1rv6of/OurPropose-photo.jpg?dl=1" />,
                <PhotoBox img="https://www.dropbox.com/s/1nf4j2oxb1rv6of/OurPropose-photo.jpg?dl=1" />,
                <PhotoBox img="https://www.dropbox.com/s/1nf4j2oxb1rv6of/OurPropose-photo.jpg?dl=1" />,
                <PhotoBox img="https://www.dropbox.com/s/1nf4j2oxb1rv6of/OurPropose-photo.jpg?dl=1" />,
                <PhotoBox img="https://www.dropbox.com/s/1nf4j2oxb1rv6of/OurPropose-photo.jpg?dl=1" />,
                <PhotoBox img="https://www.dropbox.com/s/1nf4j2oxb1rv6of/OurPropose-photo.jpg?dl=1" />,
            ]
        ]
        this.state = {
            index: 0
        }
    }
    next(e){
        e.preventDefault()
        if(this.state.index < 2){
                this.setState({
                    index: this.state.index + 1
                })
            console.log(this.state.index)
        }
    }
    prev(e){
        e.preventDefault()
        if(this.state.index >= 1){
                this.setState({
                    index: this.state.index - 1
                })
            console.log(this.state.index)
        }
    }


    render(){
        return(
            <div className="GalleryPage-container">
                {this.container[this.state.index]}
                <div className="GalleryPage-container-arrows">
                    <a onClick={this.prev = this.prev.bind(this)} href="/" className="GalleryPage-container-arrow">←</a>
                    <a onClick={this.next = this.next.bind(this)} href="/" className="GalleryPage-container-arrow">→</a>
                </div>
            </div>
        )
    }
}
class GatesPhoto extends React.Component{
    constructor(){
        super()
        this.container = [
            [
                <PhotoBox img="https://www.dropbox.com/s/evdkgr07ib2hjjh/01.jpg?dl=1"/>,
                <PhotoBox img="https://www.dropbox.com/s/71x7js1hxf31nuh/03.jpg?dl=1"/>,
                <PhotoBox img="https://www.dropbox.com/s/jnknbinhyy8xi50/05.jpg?dl=1"/>,
                <PhotoBox img="https://www.dropbox.com/s/l2illxqwsvr4ll4/09.jpg?dl=1"/>,
                <PhotoBox img="https://www.dropbox.com/s/jovm51stqsrz3ey/02.jpeg?dl=1"/>,
                <PhotoBox img="https://www.dropbox.com/s/u97g2u4913wx3ge/01.jpg?dl=1"/>,
                <PhotoBox img="https://www.dropbox.com/s/wrqtwy3m2e0m1bv/08.jpg?dl=1"/>,
                <PhotoBox img="https://www.dropbox.com/s/qk7mw50h90c7iju/01.jpg?dl=1"/>,
                <PhotoBox img="https://www.dropbox.com/s/6xd1pgzo3wwktzo/02.jpg?dl=1"/>,
            ],
            [
                <PhotoBox img="https://www.dropbox.com/s/1nf4j2oxb1rv6of/OurPropose-photo.jpg?dl=1" />,
                <PhotoBox img="https://www.dropbox.com/s/1nf4j2oxb1rv6of/OurPropose-photo.jpg?dl=1" />,
                <PhotoBox img="https://www.dropbox.com/s/1nf4j2oxb1rv6of/OurPropose-photo.jpg?dl=1" />,
                <PhotoBox img="https://www.dropbox.com/s/1nf4j2oxb1rv6of/OurPropose-photo.jpg?dl=1" />,
                <PhotoBox img="https://www.dropbox.com/s/1nf4j2oxb1rv6of/OurPropose-photo.jpg?dl=1" />,
                <PhotoBox img="https://www.dropbox.com/s/1nf4j2oxb1rv6of/OurPropose-photo.jpg?dl=1" />,
                <PhotoBox img="https://www.dropbox.com/s/1nf4j2oxb1rv6of/OurPropose-photo.jpg?dl=1" />,
                <PhotoBox img="https://www.dropbox.com/s/1nf4j2oxb1rv6of/OurPropose-photo.jpg?dl=1" />,
                <PhotoBox img="https://www.dropbox.com/s/1nf4j2oxb1rv6of/OurPropose-photo.jpg?dl=1" />,
            ],
            [
                <PhotoBox img="https://www.dropbox.com/s/1nf4j2oxb1rv6of/OurPropose-photo.jpg?dl=1" />,
                <PhotoBox img="https://www.dropbox.com/s/1nf4j2oxb1rv6of/OurPropose-photo.jpg?dl=1" />,
                <PhotoBox img="https://www.dropbox.com/s/1nf4j2oxb1rv6of/OurPropose-photo.jpg?dl=1" />,
                <PhotoBox img="https://www.dropbox.com/s/1nf4j2oxb1rv6of/OurPropose-photo.jpg?dl=1" />,
                <PhotoBox img="https://www.dropbox.com/s/1nf4j2oxb1rv6of/OurPropose-photo.jpg?dl=1" />,
                <PhotoBox img="https://www.dropbox.com/s/1nf4j2oxb1rv6of/OurPropose-photo.jpg?dl=1" />,
                <PhotoBox img="https://www.dropbox.com/s/1nf4j2oxb1rv6of/OurPropose-photo.jpg?dl=1" />,
                <PhotoBox img="https://www.dropbox.com/s/1nf4j2oxb1rv6of/OurPropose-photo.jpg?dl=1" />,
                <PhotoBox img="https://www.dropbox.com/s/1nf4j2oxb1rv6of/OurPropose-photo.jpg?dl=1" />,
            ]
        ]
        this.state = {
            index: 0
        }
    }
    next(e){
        e.preventDefault()
        if(this.state.index < 2){
                this.setState({
                    index: this.state.index + 1
                })
            console.log(this.state.index)
        }
    }
    prev(e){
        e.preventDefault()
        if(this.state.index >= 1){
                this.setState({
                    index: this.state.index - 1
                })
            console.log(this.state.index)
        }
    }


    render(){
        return(
            <div className="GalleryPage-container">
                {this.container[this.state.index]}
                <div className="GalleryPage-container-arrows">
                    <a onClick={this.prev = this.prev.bind(this)} href="/" className="GalleryPage-container-arrow">←</a>
                    <a onClick={this.next = this.next.bind(this)} href="/" className="GalleryPage-container-arrow">→</a>
                </div>
            </div>
        )
    }
}
class RoolsPhoto extends React.Component{
    constructor(){
        super()
        this.container = [
            [
                <PhotoBox img="https://www.dropbox.com/s/00hrwni12eqsi3p/%D1%80%D0%BE%D0%BB%D0%BB%D0%B5%D1%82%D1%8B%20%281%29.jpg?dl=1"/>,
                <PhotoBox img="https://www.dropbox.com/s/y4rnsgj6rrf71fv/%D1%80%D0%BE%D0%BB%D0%BB%D0%B5%D1%82%D1%8B%20%282%29.jpg?dl=1"/>,
                <PhotoBox img="https://www.dropbox.com/s/k3cjvwialcroe63/%D1%80%D0%BE%D0%BB%D0%BB%D0%B5%D1%82%D1%8B%20%283%29.jpg?dl=1"/>,
                <PhotoBox img="https://www.dropbox.com/s/0uqyyuiy7vnxqj0/%D1%80%D0%BE%D0%BB%D0%BB%D0%B5%D1%82%D1%8B%20%284%29.jpg?dl=1"/>,
                <PhotoBox img="https://www.dropbox.com/s/1492m3mydn01bme/%D1%80%D0%BE%D0%BB%D0%BB%D0%B5%D1%82%D1%8B%20%285%29.jpg?dl=1"/>,
                <PhotoBox img="https://www.dropbox.com/s/c05bkvuifm05sfz/%D1%80%D0%BE%D0%BB%D0%BB%D0%B5%D1%82%D1%8B%20%286%29.jpg?dl=1"/>,
                <PhotoBox img="https://www.dropbox.com/s/5r8v9zrqttd7vli/%D1%80%D0%BE%D0%BB%D0%BB%D0%B5%D1%82%D1%8B%20%287%29.jpg?dl=1"/>,
                <PhotoBox img="https://www.dropbox.com/s/nt7bd9qflxk29pm/%D1%80%D0%BE%D0%BB%D0%BB%D0%B5%D1%82%D1%8B%20%288%29.jpg?dl=1"/>,
                <PhotoBox img="https://www.dropbox.com/s/es41rxwp2rlle5m/%D1%80%D0%BE%D0%BB%D0%BB%D0%B5%D1%82%D1%8B%20%289%29.jpg?dl=1"/>,
            ],
            [
                <PhotoBox img="https://www.dropbox.com/s/1nf4j2oxb1rv6of/OurPropose-photo.jpg?dl=1" />,
                <PhotoBox img="https://www.dropbox.com/s/1nf4j2oxb1rv6of/OurPropose-photo.jpg?dl=1" />,
                <PhotoBox img="https://www.dropbox.com/s/1nf4j2oxb1rv6of/OurPropose-photo.jpg?dl=1" />,
                <PhotoBox img="https://www.dropbox.com/s/1nf4j2oxb1rv6of/OurPropose-photo.jpg?dl=1" />,
                <PhotoBox img="https://www.dropbox.com/s/1nf4j2oxb1rv6of/OurPropose-photo.jpg?dl=1" />,
                <PhotoBox img="https://www.dropbox.com/s/1nf4j2oxb1rv6of/OurPropose-photo.jpg?dl=1" />,
                <PhotoBox img="https://www.dropbox.com/s/1nf4j2oxb1rv6of/OurPropose-photo.jpg?dl=1" />,
                <PhotoBox img="https://www.dropbox.com/s/1nf4j2oxb1rv6of/OurPropose-photo.jpg?dl=1" />,
                <PhotoBox img="https://www.dropbox.com/s/1nf4j2oxb1rv6of/OurPropose-photo.jpg?dl=1" />,
            ],
            [
                <PhotoBox img="https://www.dropbox.com/s/1nf4j2oxb1rv6of/OurPropose-photo.jpg?dl=1" />,
                <PhotoBox img="https://www.dropbox.com/s/1nf4j2oxb1rv6of/OurPropose-photo.jpg?dl=1" />,
                <PhotoBox img="https://www.dropbox.com/s/1nf4j2oxb1rv6of/OurPropose-photo.jpg?dl=1" />,
                <PhotoBox img="https://www.dropbox.com/s/1nf4j2oxb1rv6of/OurPropose-photo.jpg?dl=1" />,
                <PhotoBox img="https://www.dropbox.com/s/1nf4j2oxb1rv6of/OurPropose-photo.jpg?dl=1" />,
                <PhotoBox img="https://www.dropbox.com/s/1nf4j2oxb1rv6of/OurPropose-photo.jpg?dl=1" />,
                <PhotoBox img="https://www.dropbox.com/s/1nf4j2oxb1rv6of/OurPropose-photo.jpg?dl=1" />,
                <PhotoBox img="https://www.dropbox.com/s/1nf4j2oxb1rv6of/OurPropose-photo.jpg?dl=1" />,
                <PhotoBox img="https://www.dropbox.com/s/1nf4j2oxb1rv6of/OurPropose-photo.jpg?dl=1" />,
            ]
        ]
        this.state = {
            index: 0
        }
    }
    next(e){
        e.preventDefault()
        if(this.state.index < 2){
                this.setState({
                    index: this.state.index + 1
                })
            console.log(this.state.index)
        }
    }
    prev(e){
        e.preventDefault()
        if(this.state.index >= 1){
                this.setState({
                    index: this.state.index - 1
                })
            console.log(this.state.index)
        }
    }


    render(){
        return(
            <div className="GalleryPage-container">
                {this.container[this.state.index]}
                <div className="GalleryPage-container-arrows">
                    <a onClick={this.prev = this.prev.bind(this)} href="/" className="GalleryPage-container-arrow">←</a>
                    <a onClick={this.next = this.next.bind(this)} href="/" className="GalleryPage-container-arrow">→</a>
                </div>
            </div>
        )
    }
}
class AutomationPhoto extends React.Component{
    constructor(){
        super()
        this.container = [
            [
                <PhotoBox img="https://www.dropbox.com/s/6tgpy8fziptr9ni/0-02-04-c59bbc7a55d16974255777bf78800bc92a8ee2402edc894bd3753007848ed124_b541cb8e.jpg?dl=1"/>,
                <PhotoBox img="https://www.dropbox.com/s/9mvrgdmdjxz6p0v/36272082_211565929487419_1708950749590847488_n.jpg?dl=1"/>,
                <PhotoBox img="https://www.dropbox.com/s/36mbte4x5kp47hr/36322988_211565952820750_8413211093089910784_n.jpg?dl=1"/>,
                <PhotoBox img="https://www.dropbox.com/s/a4doierc9qm12fv/36340486_211565919487420_2208545236701937664_n.jpg?dl=1"/>,
                <PhotoBox img="https://www.dropbox.com/s/bguv4bz649d4rb7/633411334_1_644x461_avtomatika-dlya-garazhnyh-sektsionnyh-vorot-an-motors-alutech-108-evro-kiev_rev002.jpg?dl=1"/>,
                <PhotoBox img="https://www.dropbox.com/s/zw7kg2lmwjd4wns/%D0%BA%D0%B5%D1%80%D0%B4%D0%B6.jpg?dl=1"/>,
                <PhotoBox img="https://www.dropbox.com/s/lr57ibw9dm7tyzh/viber%20image34.jpg?dl=1"/>,
            ],
            [
                <PhotoBox img="https://www.dropbox.com/s/1nf4j2oxb1rv6of/OurPropose-photo.jpg?dl=1" />,
                <PhotoBox img="https://www.dropbox.com/s/1nf4j2oxb1rv6of/OurPropose-photo.jpg?dl=1" />,
                <PhotoBox img="https://www.dropbox.com/s/1nf4j2oxb1rv6of/OurPropose-photo.jpg?dl=1" />,
                <PhotoBox img="https://www.dropbox.com/s/1nf4j2oxb1rv6of/OurPropose-photo.jpg?dl=1" />,
                <PhotoBox img="https://www.dropbox.com/s/1nf4j2oxb1rv6of/OurPropose-photo.jpg?dl=1" />,
                <PhotoBox img="https://www.dropbox.com/s/1nf4j2oxb1rv6of/OurPropose-photo.jpg?dl=1" />,
                <PhotoBox img="https://www.dropbox.com/s/1nf4j2oxb1rv6of/OurPropose-photo.jpg?dl=1" />,
                <PhotoBox img="https://www.dropbox.com/s/1nf4j2oxb1rv6of/OurPropose-photo.jpg?dl=1" />,
                <PhotoBox img="https://www.dropbox.com/s/1nf4j2oxb1rv6of/OurPropose-photo.jpg?dl=1" />,
            ],
            [
                <PhotoBox img="https://www.dropbox.com/s/1nf4j2oxb1rv6of/OurPropose-photo.jpg?dl=1" />,
                <PhotoBox img="https://www.dropbox.com/s/1nf4j2oxb1rv6of/OurPropose-photo.jpg?dl=1" />,
                <PhotoBox img="https://www.dropbox.com/s/1nf4j2oxb1rv6of/OurPropose-photo.jpg?dl=1" />,
                <PhotoBox img="https://www.dropbox.com/s/1nf4j2oxb1rv6of/OurPropose-photo.jpg?dl=1" />,
                <PhotoBox img="https://www.dropbox.com/s/1nf4j2oxb1rv6of/OurPropose-photo.jpg?dl=1" />,
                <PhotoBox img="https://www.dropbox.com/s/1nf4j2oxb1rv6of/OurPropose-photo.jpg?dl=1" />,
                <PhotoBox img="https://www.dropbox.com/s/1nf4j2oxb1rv6of/OurPropose-photo.jpg?dl=1" />,
                <PhotoBox img="https://www.dropbox.com/s/1nf4j2oxb1rv6of/OurPropose-photo.jpg?dl=1" />,
                <PhotoBox img="https://www.dropbox.com/s/1nf4j2oxb1rv6of/OurPropose-photo.jpg?dl=1" />,
            ]
        ]
        this.state = {
            index: 0
        }
    }
    next(e){
        e.preventDefault()
        if(this.state.index < 2){
                this.setState({
                    index: this.state.index + 1
                })
            console.log(this.state.index)
        }
    }
    prev(e){
        e.preventDefault()
        if(this.state.index >= 1){
                this.setState({
                    index: this.state.index - 1
                })
            console.log(this.state.index)
        }
    }


    render(){
        return(
            <div className="GalleryPage-container">
                <div>
                {this.container[this.state.index]}
                </div>
                <div className="GalleryPage-container-arrows">
                    <a onClick={this.prev = this.prev.bind(this)} href="/" className="GalleryPage-container-arrow">←</a>
                    <a onClick={this.next = this.next.bind(this)} href="/" className="GalleryPage-container-arrow">→</a>
                </div>
            </div>
        )
    }
}
class ParkingPhoto extends React.Component{
    constructor(){
        super()
        this.container = [
            [
                <PhotoBox img="https://www.dropbox.com/s/4de7n04ej76ukkw/%D0%90%D0%BD%D1%82%D0%B8%D0%BF%D0%B0%D1%80%D0%BA%D0%BE%D0%B2%D0%BA%D0%B0%20%20%281%29.jpg?dl=1"/>,
                <PhotoBox img="https://www.dropbox.com/s/wl62t6slfwmgzew/%D0%90%D0%BD%D1%82%D0%B8%D0%BF%D0%B0%D1%80%D0%BA%D0%BE%D0%B2%D0%BA%D0%B0%20%20%285%29.jpg?dl=1"/>,
                <PhotoBox img="https://www.dropbox.com/s/02p82jeazysidji/%D0%90%D0%BD%D1%82%D0%B8%D0%BF%D0%B0%D1%80%D0%BA%D0%BE%D0%B2%D0%BA%D0%B0%20%20%2812%29.jpg?dl=1"/>,
            ],
            [
                <PhotoBox img="https://www.dropbox.com/s/1nf4j2oxb1rv6of/OurPropose-photo.jpg?dl=1" />,
                <PhotoBox img="https://www.dropbox.com/s/1nf4j2oxb1rv6of/OurPropose-photo.jpg?dl=1" />,
                <PhotoBox img="https://www.dropbox.com/s/1nf4j2oxb1rv6of/OurPropose-photo.jpg?dl=1" />,
                <PhotoBox img="https://www.dropbox.com/s/1nf4j2oxb1rv6of/OurPropose-photo.jpg?dl=1" />,
                <PhotoBox img="https://www.dropbox.com/s/1nf4j2oxb1rv6of/OurPropose-photo.jpg?dl=1" />,
                <PhotoBox img="https://www.dropbox.com/s/1nf4j2oxb1rv6of/OurPropose-photo.jpg?dl=1" />,
                <PhotoBox img="https://www.dropbox.com/s/1nf4j2oxb1rv6of/OurPropose-photo.jpg?dl=1" />,
                <PhotoBox img="https://www.dropbox.com/s/1nf4j2oxb1rv6of/OurPropose-photo.jpg?dl=1" />,
                <PhotoBox img="https://www.dropbox.com/s/1nf4j2oxb1rv6of/OurPropose-photo.jpg?dl=1" />,
            ],
            [
                <PhotoBox img="https://www.dropbox.com/s/1nf4j2oxb1rv6of/OurPropose-photo.jpg?dl=1" />,
                <PhotoBox img="https://www.dropbox.com/s/1nf4j2oxb1rv6of/OurPropose-photo.jpg?dl=1" />,
                <PhotoBox img="https://www.dropbox.com/s/1nf4j2oxb1rv6of/OurPropose-photo.jpg?dl=1" />,
                <PhotoBox img="https://www.dropbox.com/s/1nf4j2oxb1rv6of/OurPropose-photo.jpg?dl=1" />,
                <PhotoBox img="https://www.dropbox.com/s/1nf4j2oxb1rv6of/OurPropose-photo.jpg?dl=1" />,
                <PhotoBox img="https://www.dropbox.com/s/1nf4j2oxb1rv6of/OurPropose-photo.jpg?dl=1" />,
                <PhotoBox img="https://www.dropbox.com/s/1nf4j2oxb1rv6of/OurPropose-photo.jpg?dl=1" />,
                <PhotoBox img="https://www.dropbox.com/s/1nf4j2oxb1rv6of/OurPropose-photo.jpg?dl=1" />,
                <PhotoBox img="https://www.dropbox.com/s/1nf4j2oxb1rv6of/OurPropose-photo.jpg?dl=1" />,
            ]
        ]
        this.state = {
            index: 0
        }
    }
    next(e){
        e.preventDefault()
        if(this.state.index < 2){
                this.setState({
                    index: this.state.index + 1
                })
            console.log(this.state.index)
        }
    }
    prev(e){
        e.preventDefault()
        if(this.state.index >= 1){
                this.setState({
                    index: this.state.index - 1
                })
            console.log(this.state.index)
        }
    }


    render(){
        return(
            <div className="GalleryPage-container">
                {this.container[this.state.index]}
                <div className="GalleryPage-container-arrows">
                    <a onClick={this.prev = this.prev.bind(this)} href="/" className="GalleryPage-container-arrow">←</a>
                    <a onClick={this.next = this.next.bind(this)} href="/" className="GalleryPage-container-arrow">→</a>
                </div>
            </div>
        )
    }
}
class TilePhoto extends React.Component{
    constructor(){
        super()
        this.container = [
            [
                <PhotoBox img="https://www.dropbox.com/s/adrfvmjva7m7tb6/%D0%9F%D0%BB%D0%B8%D1%82%D0%BA%D0%B0%20%281%29.gif?dl=1"/>,
                <PhotoBox img="https://www.dropbox.com/s/afdj1hmsiho5jiu/%D0%BF%D0%BB%D0%B8%D1%82%D0%BA%D0%B0%20%283%29.JPG?dl=1"/>,
                <PhotoBox img="https://www.dropbox.com/s/veoz2mq2yofd059/%D0%BA%D0%B8%D1%80%D0%BF%D0%B8%D1%87%D0%B8%D0%BA.jpg?dl=1"/>,
                <PhotoBox img="https://www.dropbox.com/s/hhiccot64ido3jq/35%20%D0%BD%D0%B0%2035.JPG?dl=1"/>,
                <PhotoBox img="https://www.dropbox.com/s/p3mp4ge92cf30ef/%D0%BF%D0%B0%D1%80%D0%BA%D0%B5%D1%82.jpg?dl=1"/>,
                <PhotoBox img="https://www.dropbox.com/s/k99yqccja8778k8/%D0%BF%D0%BB%D0%B8%D1%82%D0%BA%D0%B0%20%285%29.jpg?dl=1"/>,
                <PhotoBox img="https://www.dropbox.com/s/628h9lwl1zo30ud/%D0%BF%D0%BB%D0%B8%D1%82%D0%BA%D0%B0%20%287%29.jpg?dl=1"/>,
                <PhotoBox img="https://www.dropbox.com/s/9389o2v1qb6aqwc/%D0%BF%D0%BB%D0%B8%D1%82%D0%BA%D0%B0%20%288%29.jpg?dl=1"/>,
                <PhotoBox img="https://www.dropbox.com/s/h7sbdn16xasfdd6/%D0%BF%D0%BB%D0%B8%D1%82%D0%BA%D0%B0%20%289%29.jpg?dl=1"/>,
            ],
            [
                <PhotoBox img="https://www.dropbox.com/s/1nf4j2oxb1rv6of/OurPropose-photo.jpg?dl=1" />,
                <PhotoBox img="https://www.dropbox.com/s/1nf4j2oxb1rv6of/OurPropose-photo.jpg?dl=1" />,
                <PhotoBox img="https://www.dropbox.com/s/1nf4j2oxb1rv6of/OurPropose-photo.jpg?dl=1" />,
                <PhotoBox img="https://www.dropbox.com/s/1nf4j2oxb1rv6of/OurPropose-photo.jpg?dl=1" />,
                <PhotoBox img="https://www.dropbox.com/s/1nf4j2oxb1rv6of/OurPropose-photo.jpg?dl=1" />,
                <PhotoBox img="https://www.dropbox.com/s/1nf4j2oxb1rv6of/OurPropose-photo.jpg?dl=1" />,
                <PhotoBox img="https://www.dropbox.com/s/1nf4j2oxb1rv6of/OurPropose-photo.jpg?dl=1" />,
                <PhotoBox img="https://www.dropbox.com/s/1nf4j2oxb1rv6of/OurPropose-photo.jpg?dl=1" />,
                <PhotoBox img="https://www.dropbox.com/s/1nf4j2oxb1rv6of/OurPropose-photo.jpg?dl=1" />,
            ],
            [
                <PhotoBox img="https://www.dropbox.com/s/1nf4j2oxb1rv6of/OurPropose-photo.jpg?dl=1" />,
                <PhotoBox img="https://www.dropbox.com/s/1nf4j2oxb1rv6of/OurPropose-photo.jpg?dl=1" />,
                <PhotoBox img="https://www.dropbox.com/s/1nf4j2oxb1rv6of/OurPropose-photo.jpg?dl=1" />,
                <PhotoBox img="https://www.dropbox.com/s/1nf4j2oxb1rv6of/OurPropose-photo.jpg?dl=1" />,
                <PhotoBox img="https://www.dropbox.com/s/1nf4j2oxb1rv6of/OurPropose-photo.jpg?dl=1" />,
                <PhotoBox img="https://www.dropbox.com/s/1nf4j2oxb1rv6of/OurPropose-photo.jpg?dl=1" />,
                <PhotoBox img="https://www.dropbox.com/s/1nf4j2oxb1rv6of/OurPropose-photo.jpg?dl=1" />,
                <PhotoBox img="https://www.dropbox.com/s/1nf4j2oxb1rv6of/OurPropose-photo.jpg?dl=1" />,
                <PhotoBox img="https://www.dropbox.com/s/1nf4j2oxb1rv6of/OurPropose-photo.jpg?dl=1" />,
            ]
        ]
        this.state = {
            index: 0
        }
    }
    next(e){
        e.preventDefault()
        if(this.state.index < 2){
                this.setState({
                    index: this.state.index + 1
                })
            console.log(this.state.index)
        }
    }
    prev(e){
        e.preventDefault()
        if(this.state.index >= 1){
                this.setState({
                    index: this.state.index - 1
                })
            console.log(this.state.index)
        }
    }


    render(){
        return(
            <div className="GalleryPage-container">
                {this.container[this.state.index]}
                <div className="GalleryPage-container-arrows">
                    <a onClick={this.prev = this.prev.bind(this)} href="/" className="GalleryPage-container-arrow">←</a>
                    <a onClick={this.next = this.next.bind(this)} href="/" className="GalleryPage-container-arrow">→</a>
                </div>
            </div>
        )
    }
}
class TileEcoPhoto extends React.Component{
    constructor(){
        super()
        this.container = [
            [
                <PhotoBox img="https://www.dropbox.com/s/98w312ctr0zpat4/%D0%BF%D0%BB%D0%B8%D1%82%D0%BA%D0%B0%20%D1%8D%D0%BA%D0%BE%D0%BB%D0%BE%D0%B3%D0%B8%D1%8F%20%282%29.jpg?dl=1"/>,
                <PhotoBox img="https://www.dropbox.com/s/6rzhkl5i6cd4azk/%D0%BF%D0%BB%D0%B8%D1%82%D0%BA%D0%B0%20%D1%8D%D0%BA%D0%BE%D0%BB%D0%BE%D0%B3%D0%B8%D1%8F%20%283%29.jpg?dl=1"/>,
                <PhotoBox img="https://www.dropbox.com/s/16vn7p1ee4p7o7j/%D0%BF%D0%BB%D0%B8%D1%82%D0%BA%D0%B0%20%D1%8D%D0%BA%D0%BE%D0%BB%D0%BE%D0%B3%D0%B8%D1%8F%20%284%29.jpg?dl=1"/>,
                <PhotoBox img="https://www.dropbox.com/s/1r90xvsy616a5rg/%D0%BF%D0%BB%D0%B8%D1%82%D0%BA%D0%B0%20%D1%8D%D0%BA%D0%BE%D0%BB%D0%BE%D0%B3%D0%B8%D1%8F%20%285%29.jpg?dl=1"/>,
                <PhotoBox img="https://www.dropbox.com/s/1rz1y21v3cp4jwi/%D0%BF%D0%BB%D0%B8%D1%82%D0%BA%D0%B0%20%D1%8D%D0%BA%D0%BE%D0%BB%D0%BE%D0%B3%D0%B8%D1%8F%20%286%29.jpg?dl=1"/>,
                <PhotoBox img="https://www.dropbox.com/s/nqmo8dyvw0kwqos/%D0%BF%D0%BB%D0%B8%D1%82%D0%BA%D0%B0%20%D1%8D%D0%BA%D0%BE%D0%BB%D0%BE%D0%B3%D0%B8%D1%8F%20%288%29.jpg?dl=1"/>,
                <PhotoBox img="https://www.dropbox.com/s/8rtda80ywwd3u09/%D0%BF%D0%BB%D0%B8%D1%82%D0%BA%D0%B0%20%D1%8D%D0%BA%D0%BE%D0%BB%D0%BE%D0%B3%D0%B8%D1%8F%20%2811%29.jpg?dl=1"/>,
                <PhotoBox img="https://www.dropbox.com/s/6qp4dz4wsw3qtu3/%D0%BF%D0%BB%D0%B8%D1%82%D0%BA%D0%B0%20%D1%8D%D0%BA%D0%BE%D0%BB%D0%BE%D0%B3%D0%B8%D1%8F%2013.jpg?dl=1"/>,
                <PhotoBox img="https://www.dropbox.com/s/p075coh9aini9rz/%D0%BF%D0%BB%D0%B8%D1%82%D0%BA%D0%B0%20%D1%8D%D0%BA%D0%BE%D0%BB%D0%BE%D0%B3%D0%B8%D1%8F%20%2817%29.jpg?dl=1"/>,
            ],
            [
                <PhotoBox img="https://www.dropbox.com/s/1nf4j2oxb1rv6of/OurPropose-photo.jpg?dl=1" />,
                <PhotoBox img="https://www.dropbox.com/s/1nf4j2oxb1rv6of/OurPropose-photo.jpg?dl=1" />,
                <PhotoBox img="https://www.dropbox.com/s/1nf4j2oxb1rv6of/OurPropose-photo.jpg?dl=1" />,
                <PhotoBox img="https://www.dropbox.com/s/1nf4j2oxb1rv6of/OurPropose-photo.jpg?dl=1" />,
                <PhotoBox img="https://www.dropbox.com/s/1nf4j2oxb1rv6of/OurPropose-photo.jpg?dl=1" />,
                <PhotoBox img="https://www.dropbox.com/s/1nf4j2oxb1rv6of/OurPropose-photo.jpg?dl=1" />,
                <PhotoBox img="https://www.dropbox.com/s/1nf4j2oxb1rv6of/OurPropose-photo.jpg?dl=1" />,
                <PhotoBox img="https://www.dropbox.com/s/1nf4j2oxb1rv6of/OurPropose-photo.jpg?dl=1" />,
                <PhotoBox img="https://www.dropbox.com/s/1nf4j2oxb1rv6of/OurPropose-photo.jpg?dl=1" />,
            ],
            [
                <PhotoBox img="https://www.dropbox.com/s/1nf4j2oxb1rv6of/OurPropose-photo.jpg?dl=1" />,
                <PhotoBox img="https://www.dropbox.com/s/1nf4j2oxb1rv6of/OurPropose-photo.jpg?dl=1" />,
                <PhotoBox img="https://www.dropbox.com/s/1nf4j2oxb1rv6of/OurPropose-photo.jpg?dl=1" />,
                <PhotoBox img="https://www.dropbox.com/s/1nf4j2oxb1rv6of/OurPropose-photo.jpg?dl=1" />,
                <PhotoBox img="https://www.dropbox.com/s/1nf4j2oxb1rv6of/OurPropose-photo.jpg?dl=1" />,
                <PhotoBox img="https://www.dropbox.com/s/1nf4j2oxb1rv6of/OurPropose-photo.jpg?dl=1" />,
                <PhotoBox img="https://www.dropbox.com/s/1nf4j2oxb1rv6of/OurPropose-photo.jpg?dl=1" />,
                <PhotoBox img="https://www.dropbox.com/s/1nf4j2oxb1rv6of/OurPropose-photo.jpg?dl=1" />,
                <PhotoBox img="https://www.dropbox.com/s/1nf4j2oxb1rv6of/OurPropose-photo.jpg?dl=1" />,
            ]
        ]
        this.state = {
            index: 0
        }
    }
    next(e){
        e.preventDefault()
        if(this.state.index < 2){
                this.setState({
                    index: this.state.index + 1
                })
            console.log(this.state.index)
        }
    }
    prev(e){
        e.preventDefault()
        if(this.state.index >= 1){
                this.setState({
                    index: this.state.index - 1
                })
            console.log(this.state.index)
        }
    }


    render(){
        return(
            <div className="GalleryPage-container">
                {this.container[this.state.index]}
                <div className="GalleryPage-container-arrows">
                    <a onClick={this.prev = this.prev.bind(this)} href="/" className="GalleryPage-container-arrow">←</a>
                    <a onClick={this.next = this.next.bind(this)} href="/" className="GalleryPage-container-arrow">→</a>
                </div>
            </div>
        )
    }
}
class ThermofacadePhoto extends React.Component{
    constructor(){
        super()
        this.container = [
            [
                <PhotoBox img="https://www.dropbox.com/s/c63ytxzdktso70g/%D0%B8%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5_viber_2019-07-08_13-53-45.jpg?dl=1"/>,
                <PhotoBox img="https://www.dropbox.com/s/myanw1u3n58a49v/%D0%B8%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5_viber_2019-07-08_13-54-03.jpg?dl=1"/>,
                <PhotoBox img="https://www.dropbox.com/s/tsnm1vfhqdr4i9i/%D1%82%D0%B5%D1%80%D0%BC%D0%BE%D1%84%D0%B0%D1%81%D0%B0%D0%B4%20%281%29.webp?dl=1"/>,
                <PhotoBox img="https://www.dropbox.com/s/bz35b1ov7wmujc2/%D1%82%D0%B5%D1%80%D0%BC%D0%BE%D1%84%D0%B0%D1%81%D0%B0%D0%B4%20%282%29.jpg?dl=1"/>,
                <PhotoBox img="https://www.dropbox.com/s/bn1k7sh2376802u/%D1%82%D0%B5%D1%80%D0%BC%D0%BE%D1%84%D0%B0%D1%81%D0%B0%D0%B4%20%283%29.jpg?dl=1"/>,
                <PhotoBox img="https://www.dropbox.com/s/dorlihn3znr3ewh/%D1%82%D0%B5%D1%80%D0%BC%D0%BE%D1%84%D0%B0%D1%81%D0%B0%D0%B4%20%284%29.jpg?dl=1"/>,
                <PhotoBox img="https://www.dropbox.com/s/vjvdny5ay8lxi6l/%D1%82%D0%B5%D1%80%D0%BC%D0%BE%D1%84%D0%B0%D1%81%D0%B0%D0%B4%205.jpg?dl=1"/>,
                <PhotoBox img="https://www.dropbox.com/s/3b4vtgcnjniooqv/%D1%82%D0%B5%D1%80%D0%BC%D0%BE%D1%84%D0%B0%D1%81%D0%B0%D0%B4%207.jpg?dl=1"/>,
            ],
            [
                <PhotoBox img="https://www.dropbox.com/s/1nf4j2oxb1rv6of/OurPropose-photo.jpg?dl=1" />,
                <PhotoBox img="https://www.dropbox.com/s/1nf4j2oxb1rv6of/OurPropose-photo.jpg?dl=1" />,
                <PhotoBox img="https://www.dropbox.com/s/1nf4j2oxb1rv6of/OurPropose-photo.jpg?dl=1" />,
                <PhotoBox img="https://www.dropbox.com/s/1nf4j2oxb1rv6of/OurPropose-photo.jpg?dl=1" />,
                <PhotoBox img="https://www.dropbox.com/s/1nf4j2oxb1rv6of/OurPropose-photo.jpg?dl=1" />,
                <PhotoBox img="https://www.dropbox.com/s/1nf4j2oxb1rv6of/OurPropose-photo.jpg?dl=1" />,
                <PhotoBox img="https://www.dropbox.com/s/1nf4j2oxb1rv6of/OurPropose-photo.jpg?dl=1" />,
                <PhotoBox img="https://www.dropbox.com/s/1nf4j2oxb1rv6of/OurPropose-photo.jpg?dl=1" />,
                <PhotoBox img="https://www.dropbox.com/s/1nf4j2oxb1rv6of/OurPropose-photo.jpg?dl=1" />,
            ],
            [
                <PhotoBox img="https://www.dropbox.com/s/1nf4j2oxb1rv6of/OurPropose-photo.jpg?dl=1" />,
                <PhotoBox img="https://www.dropbox.com/s/1nf4j2oxb1rv6of/OurPropose-photo.jpg?dl=1" />,
                <PhotoBox img="https://www.dropbox.com/s/1nf4j2oxb1rv6of/OurPropose-photo.jpg?dl=1" />,
                <PhotoBox img="https://www.dropbox.com/s/1nf4j2oxb1rv6of/OurPropose-photo.jpg?dl=1" />,
                <PhotoBox img="https://www.dropbox.com/s/1nf4j2oxb1rv6of/OurPropose-photo.jpg?dl=1" />,
                <PhotoBox img="https://www.dropbox.com/s/1nf4j2oxb1rv6of/OurPropose-photo.jpg?dl=1" />,
                <PhotoBox img="https://www.dropbox.com/s/1nf4j2oxb1rv6of/OurPropose-photo.jpg?dl=1" />,
                <PhotoBox img="https://www.dropbox.com/s/1nf4j2oxb1rv6of/OurPropose-photo.jpg?dl=1" />,
                <PhotoBox img="https://www.dropbox.com/s/1nf4j2oxb1rv6of/OurPropose-photo.jpg?dl=1" />,
            ]
        ]
        this.state = {
            index: 0
        }
    }
    next(e){
        e.preventDefault()
        if(this.state.index < 2){
                this.setState({
                    index: this.state.index + 1
                })
            console.log(this.state.index)
        }
    }
    prev(e){
        e.preventDefault()
        if(this.state.index >= 1){
                this.setState({
                    index: this.state.index - 1
                })
            console.log(this.state.index)
        }
    }


    render(){
        return(
            <div className="GalleryPage-container">
                <div>
                {this.container[this.state.index]}
                </div>
                <div className="GalleryPage-container-arrows">
                    <a onClick={this.prev = this.prev.bind(this)} href="/" className="GalleryPage-container-arrow">←</a>
                    <a onClick={this.next = this.next.bind(this)} href="/" className="GalleryPage-container-arrow">→</a>
                </div>
            </div>
        )
    }
}
class Coloring extends React.Component{
    constructor(){
        super()
        this.container = [
            [
                <PhotoBox img="https://www.dropbox.com/s/52b3u0q7baqy481/%D0%BA%D0%B8%D1%80%D0%BF%D0%B8%D1%87%D0%B8%D0%BA%20%D0%B2%20%D1%80%D0%B0%D0%BC%D0%BA%D0%B5%20%284%29.JPG?dl=1"/>,
                <PhotoBox img="https://www.dropbox.com/s/4dakr9afqa8bfvr/%D0%BA%D0%B8%D1%80%D0%BF%D0%B8%D1%87%D0%B8%D0%BA%20%D0%B2%20%D1%80%D0%B0%D0%BC%D0%BA%D0%B5%20%283%29.JPG?dl=1"/>,
                <PhotoBox img="https://www.dropbox.com/s/6hn2v9ybt0x9f2b/%D0%BF%D0%B5%D1%81%D1%87%D0%B0%D0%BD%D0%BD%D0%B8%D0%BA%20%285%29.jpg?dl=1"/>,
                <PhotoBox img="https://www.dropbox.com/s/znxa7xzzrsnqkjt/%D0%B1%D1%83%D1%82%20%D0%B2%D0%BE%D0%BB%D0%BD%D0%B8%D1%81%D1%82%D1%8B%D0%B9%20%287%29.JPG?dl=1"/>,
                <PhotoBox img="https://www.dropbox.com/s/i01xmc1eox16l0b/DSCF0075.JPG?dl=1"/>,
                <PhotoBox img="https://www.dropbox.com/s/5phsqx6mq4xjuof/0-02-04-22b5fdd7f1fd72f03feda55a833b18def15a77b6e1f256efb998e2ea0353c0bb_26b5305b.jpg?dl=1"/>,
                <PhotoBox img="https://www.dropbox.com/s/uw7gpce5i7avief/IMG_20160412_132051.jpg?dl=1"/>,
                <PhotoBox img="https://www.dropbox.com/s/sbmh279tf88273m/%D0%BA%D0%B0%D1%80%D0%BF%D0%B0%D1%82%D1%81%D0%BA%D0%B8%D0%B9%20%D0%BA%D0%B0%D0%BC%D0%B5%D0%BD%D1%8C%20%2813%29.JPG?dl=1"/>,
                <PhotoBox img="https://www.dropbox.com/s/ckhyals1cy6mhb6/%D0%BA%D0%B0%D1%80%D0%BF%D0%B0%D1%82%D1%81%D0%BA%D0%B8%D0%B9%20%D0%BA%D0%B0%D0%BC%D0%B5%D0%BD%D1%8C%20%2816%29.JPG?dl=1"/>,

            ],
            [
                <PhotoBox img="https://www.dropbox.com/s/1nf4j2oxb1rv6of/OurPropose-photo.jpg?dl=1" />,
                <PhotoBox img="https://www.dropbox.com/s/1nf4j2oxb1rv6of/OurPropose-photo.jpg?dl=1" />,
                <PhotoBox img="https://www.dropbox.com/s/1nf4j2oxb1rv6of/OurPropose-photo.jpg?dl=1" />,
                <PhotoBox img="https://www.dropbox.com/s/1nf4j2oxb1rv6of/OurPropose-photo.jpg?dl=1" />,
                <PhotoBox img="https://www.dropbox.com/s/1nf4j2oxb1rv6of/OurPropose-photo.jpg?dl=1" />,
                <PhotoBox img="https://www.dropbox.com/s/1nf4j2oxb1rv6of/OurPropose-photo.jpg?dl=1" />,
                <PhotoBox img="https://www.dropbox.com/s/1nf4j2oxb1rv6of/OurPropose-photo.jpg?dl=1" />,
                <PhotoBox img="https://www.dropbox.com/s/1nf4j2oxb1rv6of/OurPropose-photo.jpg?dl=1" />,
                <PhotoBox img="https://www.dropbox.com/s/1nf4j2oxb1rv6of/OurPropose-photo.jpg?dl=1" />,
            ],
            [
                <PhotoBox img="https://www.dropbox.com/s/1nf4j2oxb1rv6of/OurPropose-photo.jpg?dl=1" />,
                <PhotoBox img="https://www.dropbox.com/s/1nf4j2oxb1rv6of/OurPropose-photo.jpg?dl=1" />,
                <PhotoBox img="https://www.dropbox.com/s/1nf4j2oxb1rv6of/OurPropose-photo.jpg?dl=1" />,
                <PhotoBox img="https://www.dropbox.com/s/1nf4j2oxb1rv6of/OurPropose-photo.jpg?dl=1" />,
                <PhotoBox img="https://www.dropbox.com/s/1nf4j2oxb1rv6of/OurPropose-photo.jpg?dl=1" />,
                <PhotoBox img="https://www.dropbox.com/s/1nf4j2oxb1rv6of/OurPropose-photo.jpg?dl=1" />,
                <PhotoBox img="https://www.dropbox.com/s/1nf4j2oxb1rv6of/OurPropose-photo.jpg?dl=1" />,
                <PhotoBox img="https://www.dropbox.com/s/1nf4j2oxb1rv6of/OurPropose-photo.jpg?dl=1" />,
                <PhotoBox img="https://www.dropbox.com/s/1nf4j2oxb1rv6of/OurPropose-photo.jpg?dl=1" />,
            ]
        ]
        this.state = {
            index: 0
        }
    }
    next(e){
        e.preventDefault()
        if(this.state.index < 2){
                this.setState({
                    index: this.state.index + 1
                })
            console.log(this.state.index)
        }
    }
    prev(e){
        e.preventDefault()
        if(this.state.index >= 1){
                this.setState({
                    index: this.state.index - 1
                })
            console.log(this.state.index)
        }
    }


    render(){
        return(
            <div className="GalleryPage-container">
                <div>
                {this.container[this.state.index]}
                </div>
                <div className="GalleryPage-container-arrows">
                    <a onClick={this.prev = this.prev.bind(this)} href="/" className="GalleryPage-container-arrow">←</a>
                    <a onClick={this.next = this.next.bind(this)} href="/" className="GalleryPage-container-arrow">→</a>
                </div>
            </div>
        )
    }
}