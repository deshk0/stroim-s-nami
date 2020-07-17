import React from 'react';
import ReactDOM from 'react-dom';

export class Gallery extends React.Component{
    constructor(){
        super()

        this.state = {
            category: 'Вс фотографии'
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
class ParkingPhoto extends React.Component{
    constructor(){
        super()
        this.container = [
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