import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
} from "react-router-dom";



export class Market extends React.Component{
    constructor(){
        super()


    }
    onClick(e){
        e.preventDefault()
        
        let link = document.querySelectorAll('.HeaderLink')
        let button = document.getElementById('Market-header-button')
        let button1 = document.getElementsByClassName('Header-button-market')

        const className = 'Market-header-button_active'
        const className1 = 'Header-button-market_active'

        button.classList.toggle(className)
        button1[0].classList.toggle(className1)

        link[0].addEventListener('click',() =>{
            button.classList.remove(className)
            button1[0].classList.remove(className1)

        })
        link[1].addEventListener('click',() =>{
            button.classList.remove(className)
            button1[0].classList.remove(className1)

        })
        link[2].addEventListener('click',() =>{
            button.classList.remove(className)
            button1[0].classList.remove(className1)

        })
        link[3].addEventListener('click',() =>{
            button.classList.remove(className)
            button1[0].classList.remove(className1)

        })
        link[4].addEventListener('click',() =>{
            button.classList.remove(className)
            button1[0].classList.remove(className1)

        })
        link[5].addEventListener('click',() =>{
            button.classList.remove(className)
            button1[0].classList.remove(className1)

        })
        link[6].addEventListener('click',() =>{
            button.classList.remove(className)
            button1[0].classList.remove(className1)

        })

    }
    render(){
        return(
            <div>
                <div id="Header">
                    <div className="Wrapper">
                        <div className="Header-container">
                            <h1 className="Header-headline1">Строим с Нами</h1>
                            <h2 className="Header-headline2">
                                Еврозабор Полтава! Еврозабор и ворота всех видов.
                                Установка, Покраска. Автоматика. Термофасад
                            </h2>
                            <a onClick={this.onClick = this.onClick.bind(this)} href="/" className="Header-button-market">
                                <div>
                                {
                                    document.location.href === "http://localhost:3000/market" ? 'Все товары' :
                                    document.location.href === "http://localhost:3000/market/fences" ? 'Заборы' : 
                                    document.location.href === "http://localhost:3000/market/gate" ? 'Ворота' : 
                                    document.location.href === "http://localhost:3000/market/rolls" ? 'Роллеты' : 
                                    document.location.href === "http://localhost:3000/market/automation" ? 'Автоматика для ворот' : 
                                    document.location.href === "http://localhost:3000/market/parking" ? 'Шлагбаумы и парковки' : 
                                    document.location.href === "http://localhost:3000/market/tile" ? 'Плитка' : 
                                    document.location.href === "http://localhost:3000/market/thermofacade" ? 'Термофасад' : ''
                                }
                                </div>
                            </a>
                            <MarketLinks />
                        </div>
                    </div>
                </div>
                <div className="Wrapper">
                    <MarketSwitch />
                </div>
            </div>
        )
    }

}
function MarketLinks(){
    let { path, url } = useRouteMatch();


    return(
        <div>
            <nav id="Market-header-button" className="Market-header-button">
                <a href="/market">Все товары</a>
                <Link className="HeaderLink" to={`${url}/fences`}>Заборы</Link>
                <Link className="HeaderLink" to={`${url}/gate`}>Ворота</Link>
                <Link className="HeaderLink" to={`${url}/rolls`}>Роллеты</Link>
                <Link className="HeaderLink" to={`${url}/automation`}>Автоматика для ворот</Link>
                <Link className="HeaderLink" to={`${url}/parking`}>Шлагбаумы и парковки</Link>
                <Link className="HeaderLink" to={`${url}/tile`}>Плитка</Link>
                <Link className="HeaderLink" to={`${url}/thermofacade`}>Термофасад</Link>
            </nav>
        </div>
    )
}
function MarketSwitch(){
    let { path, url } = useRouteMatch();

    return(
        <div>
            <Switch>
                <Route exact path={path}>
                    <MarketMain />
                </Route>
                <Route path={`${path}/:topicId`}>
                    <Topic />
                </Route>
            </Switch>
        </div>
    )
}
function Topic() {
    let { topicId } = useParams();
  
    return (
      <div>
        <div>
            {

            topicId === 'fences' ? <Fences /> :
            topicId === 'gate' ? <Gate /> : 
            topicId === 'rolls' ? <Rolls /> : 
            topicId === 'automation' ? <Automation /> : 
            topicId === 'parking' ? <Parking /> : 
            topicId === 'tile' ? <Tile /> : 
            topicId === 'thermofacade' ? <Thermofacade /> :  ''
            
            }
        </div>
      </div>
    );
}
class MarketMain extends React.Component{
    constructor(){
        super()
        this.itemBox = [
            <ItemBox category="Откатные" name="Ворота Откатные" price={100} />,
            <ItemBox category="Распашные" name="Ворота Распашные" price={80} />,
            <ItemBox category="Обычные" name="Ворота Обычные" price={90} />,
            <ItemBox category="Откатные" name="Ворота Распашные" price={55} />,
            <ItemBox category="Обычные" name="Ворота Обычные" price={34} />,
            <ItemBox category="Обычные" name="Ворота Обычные" price={15} />,
            <ItemBox category="Распашные" name="Ворота Распашные" price={64} />,
            <ItemBox category="Откатные" name="Ворота Откатные" price={75} />,
            <ItemBox category="Распашные" name="Ворота Распашные" price={24} />,
        ]
        this.state = {
            itemBox: [
                <ItemBox category="Откатные" name="Ворота Откатные" price={100} />,
                <ItemBox category="Распашные" name="Ворота Распашные" price={80} />,
                <ItemBox category="Обычные" name="Ворота Обычные" price={90} />,
                <ItemBox category="Откатные" name="Ворота Откатные" price={55} />,
                <ItemBox category="Обычные" name="Ворота Обычные" price={34} />,
                <ItemBox category="Обычные" name="Ворота Обычные" price={15} />,
                <ItemBox category="Распашные" name="Ворота Распашные" price={64} />,
                <ItemBox category="Откатные" name="Ворота Откатные" price={75} />,
                <ItemBox category="Распашные" name="Ворота Распашные" price={24} />,
            ],
            price: ''
        }
    }

    FromCheapToExpensive(e){
        e.preventDefault()
        const button = document.getElementsByClassName('Price-button')
        const style = 'Price-button_active'

        button[0].classList.add(style)
        button[1].classList.remove(style)

        const arr = this.itemBox
        const newArr1 = arr.sort(function(a, b) {
            if (a.props.price > b.props.price) return 1;
            if (a.props.price == b.props.price) return 0;
            if (a.props.price < b.props.price) return -1;
        });
        if(newArr1){
            this.setState({
                itemBox: newArr1,
            })
        }
    }
    FromExpensiveToCheap(e){
        e.preventDefault()
        const button = document.getElementsByClassName('Price-button')
        const style = 'Price-button_active'

        button[1].classList.add(style)
        button[0].classList.remove(style)


        const arr = this.itemBox
        const newArr1 = arr.sort(function(a, b) {
            if (a.props.price > b.props.price) return -1;
            if (a.props.price == b.props.price) return 0;
            if (a.props.price < b.props.price) return 1;
        });
        if(newArr1){
            this.setState({
                itemBox: newArr1,
            })
        }

    }
    onChange(event){
        let value = event.target.value.trim()
        let newValue = value.toLowerCase()

        const Product = document.getElementById('ItemBox1')
        let Items = document.querySelectorAll('.ItemBox1')
        console.log(newValue)
        console.log(this.itemBox)
        console.log(Items)

        if(newValue != ''){
            Items.forEach(function(elem){
                if(elem.innerText.toLowerCase().search(newValue) == -1){
                    elem.classList.add("hide")  
                }else{
                    elem.classList.remove("hide")  
                }
            })
        }else{
            Items.forEach(function(elem){
                elem.classList.remove("hide")  
            })
        }
        
    }

    render(){
        return(
            <div id='MarketMain'>
                <div className='MarketMain-container1' >
                    <div className='MarketMain-container1-search'>
                        <div className="MarketMain-text">Поиск товара:</div>
                        <div className='MarketMain-container1-search-box'>
                            <input className="MarketMain-input" onChange={this.onChange = this.onChange.bind(this)} type="text" placeholder="Введите название или тип товара" ></input>
                            <img className="MarketMain-search-icon" src="search-2.svg" alt="icon"></img>
                        </div>
                    </div>
                    <div className="MarketMain-container1-price">
                        <div className="MarketMain-text">По цене:</div>
                        <div id="Price">
                            <a className="Price-button" onClick={this.FromCheapToExpensive = this.FromCheapToExpensive.bind(this)} href="/">От дешёвых к дорогим</a>
                            <a className="Price-button" onClick={this.FromExpensiveToCheap = this.FromExpensiveToCheap.bind(this)} href="/">От дорогих к дешёвым</a>
                        </div>
                    </div>
                </div>
                <div className='MarketMain-container2' >
                    <div className='MarketMain-container1-filter'>
                        <div className="MarketMain-text">Сортировка:</div>
                        <div className="MarketMain-filter">
                            Выберите категорию товара
                        </div>
                    </div>
                </div>
                <div className='MarketMain-container3' >
                    <div className="MarketMain-container3-box">
                        {this.state.itemBox}
                    </div>
                </div>
            </div>
        )
    }
}
class ItemBox extends React.Component{
    constructor(){
        super()
    }

    render(){
        return(
            <div className="ItemBox1">
            <div id="ItemBox">
                <img className="ItemBox-photo" src="/OurPropose-photo.jpeg"></img>
                <div className='ItemBox-box'>
                    <div className="ItemBox-box-firstbox">
                        <div className="ItemBox-box-firstbox-name">{this.props.name}</div>
                    </div>
                    <div className="ItemBox-box-secondbox">
                        <div>{this.props.price}</div>
                        <a href='/'>Заказать</a>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}
class Fences extends React.Component{
    constructor(){
        super()
        this.itemBox = [
            <ItemBox category="Еврозабор" name="Еврозабор" price={100} />,
            <ItemBox category="Еврозабор с покраской" name="Еврозабор с покраской" price={80} />,
            <ItemBox category="Секционный металический" name="Забор метал-сетка" price={90} />,
            <ItemBox category="Сетка рабица" name="Забор сетка рабица" price={55} />,
            <ItemBox category="Комбинированный" name="Еврозабор Комбинированный" price={34} />,
        ]
        this.itemBox1 = [
            <ItemBox category="Еврозабор" name="Еврозабор" price={100} />,
            <ItemBox category="Еврозабор" name="Еврозабор" price={10} />

        ]
        this.itemBox2 = [
            <ItemBox category="Еврозабор с покраской" name="Еврозабор с покраской" price={100} />
        ]
        this.itemBox3 = [
            <ItemBox category="Секционный металический" name="Забор метал-сетка" price={100} />
        ]
        this.itemBox4 = [
            <ItemBox category="Сетка рабица" name="Еврозабор Сетка рабица" price={100} />
        ]
        this.itemBox5 = [
            <ItemBox category="Комбинированный" name="Еврозабор Комбинированный" price={100} />
        ]
        
        this.state = {
            itemBox: [
                <ItemBox category="Еврозабор" name="Еврозабор" price={100} />,
                <ItemBox category="Еврозабор с покраской" name="Еврозабор с покраской" price={80} />,
                <ItemBox category="Секционный металический" name="Забор метал-сетка" price={90} />,
                <ItemBox category="Сетка рабица" name="Забор сетка рабица" price={55} />,
                <ItemBox category="Комбинированный" name="Еврозабор Комбинированный" price={34} />,
            ],
        }
        
    }
    FromCheapToExpensive(e){
        e.preventDefault()
        const button = document.getElementsByClassName('Price-button')
        const style = 'Price-button_active'

        button[0].classList.add(style)
        button[1].classList.remove(style)

        const arr = this.itemBox
        const newArr1 = arr.sort(function(a, b) {
            if (a.props.price > b.props.price) return 1;
            if (a.props.price == b.props.price) return 0;
            if (a.props.price < b.props.price) return -1;
        });
        if(newArr1){
            this.setState({
                itemBox: newArr1,
            })
        }
    }
    FromExpensiveToCheap(e){
        e.preventDefault()
        const button = document.getElementsByClassName('Price-button')
        const style = 'Price-button_active'

        button[1].classList.add(style)
        button[0].classList.remove(style)


        const arr = this.itemBox
        const newArr1 = arr.sort(function(a, b) {
            if (a.props.price > b.props.price) return -1;
            if (a.props.price == b.props.price) return 0;
            if (a.props.price < b.props.price) return 1;
        });
        if(newArr1){
            this.setState({
                itemBox: newArr1,
            })
        }
    }
    ToAll(e){
        e.preventDefault()

        const button = document.getElementsByClassName('MarketMain-filter-button')
        const style = 'MarketMain-filter-button_active'


        button[0].classList.add(style)
        button[1].classList.remove(style)
        button[2].classList.remove(style)
        button[3].classList.remove(style)
        button[4].classList.remove(style)
        button[5].classList.remove(style)

        const arr = this.itemBox
        if(arr){
            this.setState({
                itemBox: arr,
            })
        }
    }
    ToItemBox1(e){
        e.preventDefault()

        const button = document.getElementsByClassName('MarketMain-filter-button')
        const style = 'MarketMain-filter-button_active'

        button[1].classList.add(style)
        button[0].classList.remove(style)
        button[2].classList.remove(style)
        button[3].classList.remove(style)
        button[4].classList.remove(style)
        button[5].classList.remove(style)



        const arr = this.itemBox1
        if(arr){
            this.setState({
                itemBox: arr,
            })
        }
    }

    ToItemBox2(e){
        e.preventDefault()

        const button = document.getElementsByClassName('MarketMain-filter-button')
        const style = 'MarketMain-filter-button_active'

        button[0].classList.remove(style)
        button[1].classList.remove(style)
        button[2].classList.add(style)
        button[3].classList.remove(style)
        button[4].classList.remove(style)
        button[5].classList.remove(style)



        const arr = this.itemBox2
        if(arr){
            this.setState({
                itemBox: arr,
            })
        }
    }

    ToItemBox3(e){
        e.preventDefault()

        const button = document.getElementsByClassName('MarketMain-filter-button')
        const style = 'MarketMain-filter-button_active'

        button[0].classList.remove(style)
        button[1].classList.remove(style)
        button[2].classList.remove(style)
        button[3].classList.add(style)
        button[4].classList.remove(style)
        button[5].classList.remove(style)



        const arr = this.itemBox3
        if(arr){
            this.setState({
                itemBox: arr,
            })
        }
    }

    ToItemBox4(e){
        e.preventDefault()

        const button = document.getElementsByClassName('MarketMain-filter-button')
        const style = 'MarketMain-filter-button_active'

        button[0].classList.remove(style)
        button[1].classList.remove(style)
        button[2].classList.remove(style)
        button[3].classList.remove(style)
        button[4].classList.add(style)
        button[5].classList.remove(style)



        const arr = this.itemBox4
        if(arr){
            this.setState({
                itemBox: arr,
            })
        }
    }

    ToItemBox5(e){
        e.preventDefault()

        const button = document.getElementsByClassName('MarketMain-filter-button')
        const style = 'MarketMain-filter-button_active'

        button[0].classList.remove(style)
        button[1].classList.remove(style)
        button[2].classList.remove(style)
        button[3].classList.remove(style)
        button[4].classList.remove(style)
        button[5].classList.add(style)



        const arr = this.itemBox5
        if(arr){
            this.setState({
                itemBox: arr,
            })
        }
    }

    onChange(event){
        let value = event.target.value.trim()
        let newValue = value.toLowerCase()

        const Product = document.getElementById('ItemBox1')
        let Items = document.querySelectorAll('.ItemBox1')
        console.log(newValue)
        console.log(this.itemBox)
        console.log(Items)

        if(newValue != ''){
            Items.forEach(function(elem){
                if(elem.innerText.toLowerCase().search(newValue) == -1){
                    elem.classList.add("hide")  
                }else{
                    elem.classList.remove("hide")  
                }
            })
        }else{
            Items.forEach(function(elem){
                elem.classList.remove("hide")  
            })
        }
        
    }

    render(){
        return(
            <div id='MarketMain'>
                <div className='MarketMain-container1' >
                    <div className='MarketMain-container1-search'>
                        <div className="MarketMain-text">Поиск товара:</div>
                        <div className='MarketMain-container1-search-box'>
                            <input className="MarketMain-input" onChange={this.onChange = this.onChange.bind(this)} type="text" placeholder="Введите название или тип товара" ></input>
                            <img className="MarketMain-search-icon" src="/search-2.svg" alt="icon"></img>
                        </div>
                    </div>
                    <div className="MarketMain-container1-price">
                        <div className="MarketMain-text">По цене:</div>
                        <div id="Price">
                            <a className="Price-button" onClick={this.FromCheapToExpensive = this.FromCheapToExpensive.bind(this)} href="/">От дешёвых к дорогим</a>
                            <a className="Price-button" onClick={this.FromExpensiveToCheap = this.FromExpensiveToCheap.bind(this)} href="/">От дорогих к дешёвым</a>
                        </div>
                    </div>
                </div>
                <div className='MarketMain-container2' >
                    <div className='MarketMain-container1-filter'>
                        <div className="MarketMain-text">Сортировка:</div>
                        <div className="MarketMain-filter">
                            <a className="MarketMain-filter-button" onClick={this.ToAll = this.ToAll.bind(this)} href="/">
                                Все товары
                            </a>
                            <a className="MarketMain-filter-button" onClick={this.ToItemBox1 = this.ToItemBox1.bind(this)} href="/">
                                Еврозабор
                            </a>
                            <a className="MarketMain-filter-button" onClick={this.ToItemBox2 = this.ToItemBox2.bind(this)} href="/">
                                Еврозабор с покраской
                            </a>
                            <a className="MarketMain-filter-button" onClick={this.ToItemBox3 = this.ToItemBox3.bind(this)} href="/">
                                Забор метал-сетка
                            </a>
                            <a className="MarketMain-filter-button" onClick={this.ToItemBox4 = this.ToItemBox4.bind(this)} href="/">
                                Забор сетка рабица
                            </a>
                            <a className="MarketMain-filter-button" onClick={this.ToItemBox5 = this.ToItemBox5.bind(this)} href="/">
                                Комбинированный
                            </a>
                        </div>
                    </div>
                </div>
                <div className='MarketMain-container3' >
                    <div className="MarketMain-container3-box">
                        {this.state.itemBox}
                    </div>
                </div>
            </div>
        )
    }

    
}
class Gate extends React.Component{
    constructor(){
        super()
        this.itemBox = [
            <ItemBox category="Откатные" name="Ворота Откатные" price={100} />,
            <ItemBox category="Распашные" name="Ворота Распашные" price={80} />,
            <ItemBox category="Обычные" name="Ворота Обычные" price={90} />,
            <ItemBox category="Откатные" name="Ворота Распашные" price={55} />,
            <ItemBox category="Обычные" name="Ворота Обычные" price={34} />,
            <ItemBox category="Обычные" name="Ворота Обычные" price={15} />,
            <ItemBox category="Распашные" name="Ворота Распашные" price={64} />,
            <ItemBox category="Откатные" name="Ворота Откатные" price={75} />,
            <ItemBox category="Распашные" name="Ворота Распашные" price={24} />,
        ]
        this.state = {
            itemBox: [
                <ItemBox category="Откатные" name="Ворота Откатные" price={100} />,
                <ItemBox category="Распашные" name="Ворота Распашные" price={80} />,
                <ItemBox category="Обычные" name="Ворота Обычные" price={90} />,
                <ItemBox category="Откатные" name="Ворота Откатные" price={55} />,
                <ItemBox category="Обычные" name="Ворота Обычные" price={34} />,
                <ItemBox category="Обычные" name="Ворота Обычные" price={15} />,
                <ItemBox category="Распашные" name="Ворота Распашные" price={64} />,
                <ItemBox category="Откатные" name="Ворота Откатные" price={75} />,
                <ItemBox category="Распашные" name="Ворота Распашные" price={24} />,
            ],
        }
        
    }
    FromCheapToExpensive(e){
        e.preventDefault()
        const button = document.getElementsByClassName('Price-button')
        const style = 'Price-button_active'

        button[0].classList.add(style)
        button[1].classList.remove(style)

        const arr = this.itemBox
        const newArr1 = arr.sort(function(a, b) {
            if (a.props.price > b.props.price) return 1;
            if (a.props.price == b.props.price) return 0;
            if (a.props.price < b.props.price) return -1;
        });
        if(newArr1){
            this.setState({
                itemBox: newArr1,
            })
        }
    }
    FromExpensiveToCheap(e){
        e.preventDefault()
        const button = document.getElementsByClassName('Price-button')
        const style = 'Price-button_active'

        button[1].classList.add(style)
        button[0].classList.remove(style)


        const arr = this.itemBox
        const newArr1 = arr.sort(function(a, b) {
            if (a.props.price > b.props.price) return -1;
            if (a.props.price == b.props.price) return 0;
            if (a.props.price < b.props.price) return 1;
        });
        if(newArr1){
            this.setState({
                itemBox: newArr1,
            })
        }

    }
    onChange(event){
        let value = event.target.value.trim()
        let newValue = value.toLowerCase()

        const Product = document.getElementById('ItemBox1')
        let Items = document.querySelectorAll('.ItemBox1')
        console.log(newValue)
        console.log(this.itemBox)
        console.log(Items)

        if(newValue != ''){
            Items.forEach(function(elem){
                if(elem.innerText.toLowerCase().search(newValue) == -1){
                    elem.classList.add("hide")  
                }else{
                    elem.classList.remove("hide")  
                }
            })
        }else{
            Items.forEach(function(elem){
                elem.classList.remove("hide")  
            })
        }
        
    }

    render(){
        return(
            <div id='MarketMain'>
                <div className='MarketMain-container1' >
                    <div className='MarketMain-container1-search'>
                        <div className="MarketMain-text">Поиск товара:</div>
                        <div className='MarketMain-container1-search-box'>
                            <input className="MarketMain-input" onChange={this.onChange = this.onChange.bind(this)} type="text" placeholder="Введите название или тип товара" ></input>
                            <img className="MarketMain-search-icon" src="/search-2.svg" alt="icon"></img>
                        </div>
                    </div>
                    <div className="MarketMain-container1-price">
                        <div className="MarketMain-text">По цене:</div>
                        <div id="Price">
                            <a className="Price-button" onClick={this.FromCheapToExpensive = this.FromCheapToExpensive.bind(this)} href="/">От дешёвых к дорогим</a>
                            <a className="Price-button" onClick={this.FromExpensiveToCheap = this.FromExpensiveToCheap.bind(this)} href="/">От дорогих к дешёвым</a>
                        </div>
                    </div>
                </div>
                <div className='MarketMain-container2' >
                    <div className='MarketMain-container1-filter'>
                        <div className="MarketMain-text">Сортировка:</div>
                        <div className="MarketMain-filter">
                            Выберите категорию товара
                        </div>
                    </div>
                </div>
                <div className='MarketMain-container3' >
                    <div className="MarketMain-container3-box">
                        {this.state.itemBox}
                    </div>
                </div>
            </div>
        )
    }

    
}
class Rolls extends React.Component{
    constructor(){
        super()
        this.itemBox = [
            <ItemBox category="Откатные" name="Роллеты Откатные" price={100} />,
            <ItemBox category="Распашные" name="Роллеты Распашные" price={80} />,
            <ItemBox category="Обычные" name="Роллеты Обычные" price={90} />,
            <ItemBox category="Откатные" name="Роллеты Распашные" price={55} />,
            <ItemBox category="Обычные" name="Роллеты Обычные" price={34} />,
            <ItemBox category="Обычные" name="Роллеты Обычные" price={15} />,
            <ItemBox category="Распашные" name="Роллеты Распашные" price={64} />,
            <ItemBox category="Откатные" name="Роллеты Откатные" price={75} />,
            <ItemBox category="Распашные" name="Роллеты Распашные" price={24} />,
        ]
        this.state = {
            itemBox: [
                <ItemBox category="Откатные" name="Роллеты Откатные" price={100} />,
                <ItemBox category="Распашные" name="Роллеты Распашные" price={80} />,
                <ItemBox category="Обычные" name="Роллеты Обычные" price={90} />,
                <ItemBox category="Откатные" name="Роллеты Откатные" price={55} />,
                <ItemBox category="Обычные" name="Роллеты Обычные" price={34} />,
                <ItemBox category="Обычные" name="Роллеты Обычные" price={15} />,
                <ItemBox category="Распашные" name="Роллеты Распашные" price={64} />,
                <ItemBox category="Откатные" name="Роллеты Откатные" price={75} />,
                <ItemBox category="Распашные" name="Роллеты Распашные" price={24} />,
            ],
        }
        
    }
    FromCheapToExpensive(e){
        e.preventDefault()
        const button = document.getElementsByClassName('Price-button')
        const style = 'Price-button_active'

        button[0].classList.add(style)
        button[1].classList.remove(style)

        const arr = this.itemBox
        const newArr1 = arr.sort(function(a, b) {
            if (a.props.price > b.props.price) return 1;
            if (a.props.price == b.props.price) return 0;
            if (a.props.price < b.props.price) return -1;
        });
        if(newArr1){
            this.setState({
                itemBox: newArr1,
            })
        }
    }
    FromExpensiveToCheap(e){
        e.preventDefault()
        const button = document.getElementsByClassName('Price-button')
        const style = 'Price-button_active'

        button[1].classList.add(style)
        button[0].classList.remove(style)


        const arr = this.itemBox
        const newArr1 = arr.sort(function(a, b) {
            if (a.props.price > b.props.price) return -1;
            if (a.props.price == b.props.price) return 0;
            if (a.props.price < b.props.price) return 1;
        });
        if(newArr1){
            this.setState({
                itemBox: newArr1,
            })
        }

    }
    onChange(event){
        let value = event.target.value.trim()
        let newValue = value.toLowerCase()

        const Product = document.getElementById('ItemBox1')
        let Items = document.querySelectorAll('.ItemBox1')
        console.log(newValue)
        console.log(this.itemBox)
        console.log(Items)

        if(newValue != ''){
            Items.forEach(function(elem){
                if(elem.innerText.toLowerCase().search(newValue) == -1){
                    elem.classList.add("hide")  
                }else{
                    elem.classList.remove("hide")  
                }
            })
        }else{
            Items.forEach(function(elem){
                elem.classList.remove("hide")  
            })
        }
        
    }

    render(){
        return(
            <div id='MarketMain'>
                <div className='MarketMain-container1' >
                    <div className='MarketMain-container1-search'>
                        <div className="MarketMain-text">Поиск товара:</div>
                        <div className='MarketMain-container1-search-box'>
                            <input className="MarketMain-input" onChange={this.onChange = this.onChange.bind(this)} type="text" placeholder="Введите название или тип товара" ></input>
                            <img className="MarketMain-search-icon" src="/search-2.svg" alt="icon"></img>
                        </div>
                    </div>
                    <div className="MarketMain-container1-price">
                        <div className="MarketMain-text">По цене:</div>
                        <div id="Price">
                            <a className="Price-button" onClick={this.FromCheapToExpensive = this.FromCheapToExpensive.bind(this)} href="/">От дешёвых к дорогим</a>
                            <a className="Price-button" onClick={this.FromExpensiveToCheap = this.FromExpensiveToCheap.bind(this)} href="/">От дорогих к дешёвым</a>
                        </div>
                    </div>
                </div>
                <div className='MarketMain-container2' >
                    <div className='MarketMain-container1-filter'>
                        <div className="MarketMain-text">Сортировка:</div>
                        <div className="MarketMain-filter">
                            Выберите категорию товара
                        </div>
                    </div>
                </div>
                <div className='MarketMain-container3' >
                    <div className="MarketMain-container3-box">
                        {this.state.itemBox}
                    </div>
                </div>
            </div>
        )
    }

    
}
class Automation extends React.Component{
    constructor(){
        super()
        this.itemBox = [
            <ItemBox category="Откатные" name="Автоматика Откатные" price={100} />,
            <ItemBox category="Распашные" name="Автоматика Распашные" price={80} />,
            <ItemBox category="Обычные" name="Автоматика Обычные" price={90} />,
            <ItemBox category="Откатные" name="Автоматика Распашные" price={55} />,
            <ItemBox category="Обычные" name="Автоматика Обычные" price={34} />,
            <ItemBox category="Обычные" name="Автоматика Обычные" price={15} />,
            <ItemBox category="Распашные" name="Автоматика Распашные" price={64} />,
            <ItemBox category="Откатные" name="Автоматика Откатные" price={75} />,
            <ItemBox category="Распашные" name="Автоматика Распашные" price={24} />,
        ]
        this.state = {
            itemBox: [
                <ItemBox category="Откатные" name="Автоматика Откатные" price={100} />,
                <ItemBox category="Распашные" name="Автоматика Распашные" price={80} />,
                <ItemBox category="Обычные" name="Автоматика Обычные" price={90} />,
                <ItemBox category="Откатные" name="Автоматика Откатные" price={55} />,
                <ItemBox category="Обычные" name="Автоматика Обычные" price={34} />,
                <ItemBox category="Обычные" name="Автоматика Обычные" price={15} />,
                <ItemBox category="Распашные" name="Автоматика Распашные" price={64} />,
                <ItemBox category="Откатные" name="Автоматика Откатные" price={75} />,
                <ItemBox category="Распашные" name="Автоматика Распашные" price={24} />,
            ],
        }
        
    }
    FromCheapToExpensive(e){
        e.preventDefault()
        const button = document.getElementsByClassName('Price-button')
        const style = 'Price-button_active'

        button[0].classList.add(style)
        button[1].classList.remove(style)

        const arr = this.itemBox
        const newArr1 = arr.sort(function(a, b) {
            if (a.props.price > b.props.price) return 1;
            if (a.props.price == b.props.price) return 0;
            if (a.props.price < b.props.price) return -1;
        });
        if(newArr1){
            this.setState({
                itemBox: newArr1,
            })
        }
    }
    FromExpensiveToCheap(e){
        e.preventDefault()
        const button = document.getElementsByClassName('Price-button')
        const style = 'Price-button_active'

        button[1].classList.add(style)
        button[0].classList.remove(style)


        const arr = this.itemBox
        const newArr1 = arr.sort(function(a, b) {
            if (a.props.price > b.props.price) return -1;
            if (a.props.price == b.props.price) return 0;
            if (a.props.price < b.props.price) return 1;
        });
        if(newArr1){
            this.setState({
                itemBox: newArr1,
            })
        }

    }
    onChange(event){
        let value = event.target.value.trim()
        let newValue = value.toLowerCase()

        const Product = document.getElementById('ItemBox1')
        let Items = document.querySelectorAll('.ItemBox1')
        console.log(newValue)
        console.log(this.itemBox)
        console.log(Items)

        if(newValue != ''){
            Items.forEach(function(elem){
                if(elem.innerText.toLowerCase().search(newValue) == -1){
                    elem.classList.add("hide")  
                }else{
                    elem.classList.remove("hide")  
                }
            })
        }else{
            Items.forEach(function(elem){
                elem.classList.remove("hide")  
            })
        }
        
    }

    render(){
        return(
            <div id='MarketMain'>
                <div className='MarketMain-container1' >
                    <div className='MarketMain-container1-search'>
                        <div className="MarketMain-text">Поиск товара:</div>
                        <div className='MarketMain-container1-search-box'>
                            <input className="MarketMain-input" onChange={this.onChange = this.onChange.bind(this)} type="text" placeholder="Введите название или тип товара" ></input>
                            <img className="MarketMain-search-icon" src="/search-2.svg" alt="icon"></img>
                        </div>
                    </div>
                    <div className="MarketMain-container1-price">
                        <div className="MarketMain-text">По цене:</div>
                        <div id="Price">
                            <a className="Price-button" onClick={this.FromCheapToExpensive = this.FromCheapToExpensive.bind(this)} href="/">От дешёвых к дорогим</a>
                            <a className="Price-button" onClick={this.FromExpensiveToCheap = this.FromExpensiveToCheap.bind(this)} href="/">От дорогих к дешёвым</a>
                        </div>
                    </div>
                </div>
                <div className='MarketMain-container2' >
                    <div className='MarketMain-container1-filter'>
                        <div className="MarketMain-text">Сортировка:</div>
                        <div className="MarketMain-filter">
                            Выберите категорию товара
                        </div>
                    </div>
                </div>
                <div className='MarketMain-container3' >
                    <div className="MarketMain-container3-box">
                        {this.state.itemBox}
                    </div>
                </div>
            </div>
        )
    }

    
}
class Parking extends React.Component{
    constructor(){
        super()
        this.itemBox = [
            <ItemBox category="Откатные" name="Паркинг Откатные" price={100} />,
            <ItemBox category="Распашные" name="Паркинг Распашные" price={80} />,
            <ItemBox category="Обычные" name="Паркинг Обычные" price={90} />,
            <ItemBox category="Откатные" name="Паркинг Распашные" price={55} />,
            <ItemBox category="Обычные" name="Паркинг Обычные" price={34} />,
            <ItemBox category="Обычные" name="Паркинг Обычные" price={15} />,
            <ItemBox category="Распашные" name="Паркинг Распашные" price={64} />,
            <ItemBox category="Откатные" name="Паркинг Откатные" price={75} />,
            <ItemBox category="Распашные" name="Паркинг Распашные" price={24} />,
        ]
        this.state = {
            itemBox: [
                <ItemBox category="Откатные" name="Паркинг Откатные" price={100} />,
                <ItemBox category="Распашные" name="Паркинг Распашные" price={80} />,
                <ItemBox category="Обычные" name="Паркинг Обычные" price={90} />,
                <ItemBox category="Откатные" name="Паркинг Откатные" price={55} />,
                <ItemBox category="Обычные" name="Паркинг Обычные" price={34} />,
                <ItemBox category="Обычные" name="Паркинг Обычные" price={15} />,
                <ItemBox category="Распашные" name="Паркинг Распашные" price={64} />,
                <ItemBox category="Откатные" name="Паркинг Откатные" price={75} />,
                <ItemBox category="Распашные" name="Паркинг Распашные" price={24} />,
            ],
        }
        
    }
    FromCheapToExpensive(e){
        e.preventDefault()
        const button = document.getElementsByClassName('Price-button')
        const style = 'Price-button_active'

        button[0].classList.add(style)
        button[1].classList.remove(style)

        const arr = this.itemBox
        const newArr1 = arr.sort(function(a, b) {
            if (a.props.price > b.props.price) return 1;
            if (a.props.price == b.props.price) return 0;
            if (a.props.price < b.props.price) return -1;
        });
        if(newArr1){
            this.setState({
                itemBox: newArr1,
            })
        }
    }
    FromExpensiveToCheap(e){
        e.preventDefault()
        const button = document.getElementsByClassName('Price-button')
        const style = 'Price-button_active'

        button[1].classList.add(style)
        button[0].classList.remove(style)


        const arr = this.itemBox
        const newArr1 = arr.sort(function(a, b) {
            if (a.props.price > b.props.price) return -1;
            if (a.props.price == b.props.price) return 0;
            if (a.props.price < b.props.price) return 1;
        });
        if(newArr1){
            this.setState({
                itemBox: newArr1,
            })
        }

    }
    onChange(event){
        let value = event.target.value.trim()
        let newValue = value.toLowerCase()

        const Product = document.getElementById('ItemBox1')
        let Items = document.querySelectorAll('.ItemBox1')
        console.log(newValue)
        console.log(this.itemBox)
        console.log(Items)

        if(newValue != ''){
            Items.forEach(function(elem){
                if(elem.innerText.toLowerCase().search(newValue) == -1){
                    elem.classList.add("hide")  
                }else{
                    elem.classList.remove("hide")  
                }
            })
        }else{
            Items.forEach(function(elem){
                elem.classList.remove("hide")  
            })
        }
        
    }

    render(){
        return(
            <div id='MarketMain'>
                <div className='MarketMain-container1' >
                    <div className='MarketMain-container1-search'>
                        <div className="MarketMain-text">Поиск товара:</div>
                        <div className='MarketMain-container1-search-box'>
                            <input className="MarketMain-input" onChange={this.onChange = this.onChange.bind(this)} type="text" placeholder="Введите название или тип товара" ></input>
                            <img className="MarketMain-search-icon" src="/search-2.svg" alt="icon"></img>
                        </div>
                    </div>
                    <div className="MarketMain-container1-price">
                        <div className="MarketMain-text">По цене:</div>
                        <div id="Price">
                            <a className="Price-button" onClick={this.FromCheapToExpensive = this.FromCheapToExpensive.bind(this)} href="/">От дешёвых к дорогим</a>
                            <a className="Price-button" onClick={this.FromExpensiveToCheap = this.FromExpensiveToCheap.bind(this)} href="/">От дорогих к дешёвым</a>
                        </div>
                    </div>
                </div>
                <div className='MarketMain-container2' >
                    <div className='MarketMain-container1-filter'>
                        <div className="MarketMain-text">Сортировка:</div>
                        <div className="MarketMain-filter">
                            Выберите категорию товара
                        </div>
                    </div>
                </div>
                <div className='MarketMain-container3' >
                    <div className="MarketMain-container3-box">
                        {this.state.itemBox}
                    </div>
                </div>
            </div>
        )
    }

    
}
class Tile extends React.Component{
    constructor(){
        super()
        this.itemBox = [
            <ItemBox category="Откатные" name="Плитка Откатные" price={100} />,
            <ItemBox category="Распашные" name="Плитка Распашные" price={80} />,
            <ItemBox category="Обычные" name="Плитка Обычные" price={90} />,
            <ItemBox category="Откатные" name="Плитка Распашные" price={55} />,
            <ItemBox category="Обычные" name="Плитка Обычные" price={34} />,
            <ItemBox category="Обычные" name="Плитка Обычные" price={15} />,
            <ItemBox category="Распашные" name="Плитка Распашные" price={64} />,
            <ItemBox category="Откатные" name="Плитка Откатные" price={75} />,
            <ItemBox category="Распашные" name="Плитка Распашные" price={24} />,
        ]
        this.state = {
            itemBox: [
                <ItemBox category="Откатные" name="Плитка Откатные" price={100} />,
                <ItemBox category="Распашные" name="Плитка Распашные" price={80} />,
                <ItemBox category="Обычные" name="Плитка Обычные" price={90} />,
                <ItemBox category="Откатные" name="Плитка Откатные" price={55} />,
                <ItemBox category="Обычные" name="Плитка Обычные" price={34} />,
                <ItemBox category="Обычные" name="Плитка Обычные" price={15} />,
                <ItemBox category="Распашные" name="Плитка Распашные" price={64} />,
                <ItemBox category="Откатные" name="Плитка Откатные" price={75} />,
                <ItemBox category="Распашные" name="Плитка Распашные" price={24} />,
            ],
        }
        
    }
    FromCheapToExpensive(e){
        e.preventDefault()
        const button = document.getElementsByClassName('Price-button')
        const style = 'Price-button_active'

        button[0].classList.add(style)
        button[1].classList.remove(style)

        const arr = this.itemBox
        const newArr1 = arr.sort(function(a, b) {
            if (a.props.price > b.props.price) return 1;
            if (a.props.price == b.props.price) return 0;
            if (a.props.price < b.props.price) return -1;
        });
        if(newArr1){
            this.setState({
                itemBox: newArr1,
            })
        }
    }
    FromExpensiveToCheap(e){
        e.preventDefault()
        const button = document.getElementsByClassName('Price-button')
        const style = 'Price-button_active'

        button[1].classList.add(style)
        button[0].classList.remove(style)


        const arr = this.itemBox
        const newArr1 = arr.sort(function(a, b) {
            if (a.props.price > b.props.price) return -1;
            if (a.props.price == b.props.price) return 0;
            if (a.props.price < b.props.price) return 1;
        });
        if(newArr1){
            this.setState({
                itemBox: newArr1,
            })
        }

    }
    onChange(event){
        let value = event.target.value.trim()
        let newValue = value.toLowerCase()

        const Product = document.getElementById('ItemBox1')
        let Items = document.querySelectorAll('.ItemBox1')
        console.log(newValue)
        console.log(this.itemBox)
        console.log(Items)

        if(newValue != ''){
            Items.forEach(function(elem){
                if(elem.innerText.toLowerCase().search(newValue) == -1){
                    elem.classList.add("hide")  
                }else{
                    elem.classList.remove("hide")  
                }
            })
        }else{
            Items.forEach(function(elem){
                elem.classList.remove("hide")  
            })
        }
        
    }

    render(){
        return(
            <div id='MarketMain'>
                <div className='MarketMain-container1' >
                    <div className='MarketMain-container1-search'>
                        <div className="MarketMain-text">Поиск товара:</div>
                        <div className='MarketMain-container1-search-box'>
                            <input className="MarketMain-input" onChange={this.onChange = this.onChange.bind(this)} type="text" placeholder="Введите название или тип товара" ></input>
                            <img className="MarketMain-search-icon" src="/search-2.svg" alt="icon"></img>
                        </div>
                    </div>
                    <div className="MarketMain-container1-price">
                        <div className="MarketMain-text">По цене:</div>
                        <div id="Price">
                            <a className="Price-button" onClick={this.FromCheapToExpensive = this.FromCheapToExpensive.bind(this)} href="/">От дешёвых к дорогим</a>
                            <a className="Price-button" onClick={this.FromExpensiveToCheap = this.FromExpensiveToCheap.bind(this)} href="/">От дорогих к дешёвым</a>
                        </div>
                    </div>
                </div>
                <div className='MarketMain-container2' >
                    <div className='MarketMain-container1-filter'>
                        <div className="MarketMain-text">Сортировка:</div>
                        <div className="MarketMain-filter">
                            Выберите категорию товара
                        </div>
                    </div>
                </div>
                <div className='MarketMain-container3' >
                    <div className="MarketMain-container3-box">
                        {this.state.itemBox}
                    </div>
                </div>
            </div>
        )
    }

    
}
class Thermofacade extends React.Component{
    constructor(){
        super()
        this.itemBox = [
            <ItemBox category="Откатные" name="Термофасад Откатные" price={100} />,
            <ItemBox category="Распашные" name="Термофасад Распашные" price={80} />,
            <ItemBox category="Обычные" name="Термофасад Обычные" price={90} />,
            <ItemBox category="Откатные" name="Термофасад Распашные" price={55} />,
            <ItemBox category="Обычные" name="Термофасад Обычные" price={34} />,
            <ItemBox category="Обычные" name="Термофасад Обычные" price={15} />,
            <ItemBox category="Распашные" name="Термофасад Распашные" price={64} />,
            <ItemBox category="Откатные" name="Термофасад Откатные" price={75} />,
            <ItemBox category="Распашные" name="Термофасад Распашные" price={24} />,
        ]
        this.state = {
            itemBox: [
                <ItemBox category="Откатные" name="Термофасад Откатные" price={100} />,
                <ItemBox category="Распашные" name="Термофасад Распашные" price={80} />,
                <ItemBox category="Обычные" name="Термофасад Обычные" price={90} />,
                <ItemBox category="Откатные" name="Термофасад Откатные" price={55} />,
                <ItemBox category="Обычные" name="Термофасад Обычные" price={34} />,
                <ItemBox category="Обычные" name="Термофасад Обычные" price={15} />,
                <ItemBox category="Распашные" name="Термофасад Распашные" price={64} />,
                <ItemBox category="Откатные" name="Термофасад Откатные" price={75} />,
                <ItemBox category="Распашные" name="Термофасад Распашные" price={24} />,
            ],
        }
        
    }
    FromCheapToExpensive(e){
        e.preventDefault()
        const button = document.getElementsByClassName('Price-button')
        const style = 'Price-button_active'

        button[0].classList.add(style)
        button[1].classList.remove(style)

        const arr = this.itemBox
        const newArr1 = arr.sort(function(a, b) {
            if (a.props.price > b.props.price) return 1;
            if (a.props.price == b.props.price) return 0;
            if (a.props.price < b.props.price) return -1;
        });
        if(newArr1){
            this.setState({
                itemBox: newArr1,
            })
        }
    }
    FromExpensiveToCheap(e){
        e.preventDefault()
        const button = document.getElementsByClassName('Price-button')
        const style = 'Price-button_active'

        button[1].classList.add(style)
        button[0].classList.remove(style)


        const arr = this.itemBox
        const newArr1 = arr.sort(function(a, b) {
            if (a.props.price > b.props.price) return -1;
            if (a.props.price == b.props.price) return 0;
            if (a.props.price < b.props.price) return 1;
        });
        if(newArr1){
            this.setState({
                itemBox: newArr1,
            })
        }

    }
    onChange(event){
        let value = event.target.value.trim()
        let newValue = value.toLowerCase()

        const Product = document.getElementById('ItemBox1')
        let Items = document.querySelectorAll('.ItemBox1')
        console.log(newValue)
        console.log(this.itemBox)
        console.log(Items)

        if(newValue != ''){
            Items.forEach(function(elem){
                if(elem.innerText.toLowerCase().search(newValue) == -1){
                    elem.classList.add("hide")  
                }else{
                    elem.classList.remove("hide")  
                }
            })
        }else{
            Items.forEach(function(elem){
                elem.classList.remove("hide")  
            })
        }
        
    }

    render(){
        return(
            <div id='MarketMain'>
                <div className='MarketMain-container1' >
                    <div className='MarketMain-container1-search'>
                        <div className="MarketMain-text">Поиск товара:</div>
                        <div className='MarketMain-container1-search-box'>
                            <input className="MarketMain-input" onChange={this.onChange = this.onChange.bind(this)} type="text" placeholder="Введите название или тип товара" ></input>
                            <img className="MarketMain-search-icon" src="/search-2.svg" alt="icon"></img>
                        </div>
                    </div>
                    <div className="MarketMain-container1-price">
                        <div className="MarketMain-text">По цене:</div>
                        <div id="Price">
                            <a className="Price-button" onClick={this.FromCheapToExpensive = this.FromCheapToExpensive.bind(this)} href="/">От дешёвых к дорогим</a>
                            <a className="Price-button" onClick={this.FromExpensiveToCheap = this.FromExpensiveToCheap.bind(this)} href="/">От дорогих к дешёвым</a>
                        </div>
                    </div>
                </div>
                <div className='MarketMain-container2' >
                    <div className='MarketMain-container1-filter'>
                        <div className="MarketMain-text">Сортировка:</div>
                        <div className="MarketMain-filter">
                            Выберите категорию товара
                        </div>
                    </div>
                </div>
                <div className='MarketMain-container3' >
                    <div className="MarketMain-container3-box">
                        {this.state.itemBox}
                    </div>
                </div>
            </div>
        )
    }

    
}