import React from 'react';
import ReactDOM from 'react-dom';
import { Form, Phone, Header } from './homePage';

export class Price extends React.Component{
    constructor(){
        super()
    }

    render(){
        return(
            <div>
                <Header />
                <div className="Wrapper">
                    <Phone />
                    <Main />
                    <Form />
                </div>
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
            <div id="Price">
                <div className="OurPropose-title">Модели еврозаборов</div>
                <div className="OurPropose-line"></div>
                <div className="Price-container">
                    <ItemBox 
                        img="https://ferum.kh.ua/images/%D0%95%D0%B2%D1%80%D0%BE%D0%B7%D0%B0%D0%B1%D0%BE%D1%80-%D1%85%D0%B0%D1%80%D1%8C%D0%BA%D0%BE%D0%B2-%D0%BA%D0%B8%D1%80%D0%BF%D0%B8%D1%87-%D0%B2-%D0%BA%D0%B0%D0%BD%D1%82%D0%B5.jpg" 
                        number={1} name=' "Кирпич в рамке" ' 
                    />
                    <ItemBox 
                        img="https://ferum.kh.ua/images/%D0%95%D0%B2%D1%80%D0%BE%D0%B7%D0%B0%D0%B1%D0%BE%D1%80-%D0%BA%D1%83%D0%BF%D0%B8%D1%82%D1%8C-%D0%BA%D0%B8%D1%80%D0%BF%D0%B8%D1%87-%D0%B2-%D0%BA%D0%B0%D0%BD%D1%82%D0%B5.jpg" 
                        number={3} name=' "Кирпич декор" ' 
                    />
                    <ItemBox 
                        img="https://ferum.kh.ua/images/%D0%95%D0%B2%D1%80%D0%BE%D0%B7%D0%B0%D0%B1%D0%BE%D1%80-%D1%85%D0%B0%D1%80%D1%8C%D0%BA%D0%BE%D0%B2-%D0%B1%D0%B0%D0%BB%D1%8F%D1%81%D0%B8%D0%BD%D1%8B.jpg" 
                        number={5} name=' "Декоративная ' 
                    />
                    <ItemBox 
                        img="https://ferum.kh.ua/images/%D0%95%D0%B2%D1%80%D0%BE%D0%B7%D0%B0%D0%B1%D0%BE%D1%80-%D1%85%D0%B0%D1%80%D1%8C%D0%BA%D0%BE%D0%B2-%D0%B4%D0%B5%D0%BA%D0%BE%D1%80.jpg" 
                        number={6} name=' "Декоративная" '
                    />
                    <ItemBox 
                        img="https://cf5y8a.am.files.1drv.com/y4mJKPKdKA2urVFTXVcZTEXUVVGY6o08FSbw17X6ONWcIi88B184hdZCzvE4V8nl78MFWXOCDNddLQQv6MxsYav3O1a3gHhOoasDmvl4YGmtHHIrE9ol9PiW4FQ4S1aBeLP1RTVFeuY5ki6rck2RHwyWUDqu2I5bW93ehpU3PzAJ9MQ0XyhC-KO67shNu47n4ulSWyqWtZ5H4AeWehvLGdU2A?width=320&height=104&cropmode=none" 
                        number={8} name=' "Декоративная" '
                    />
                    <ItemBox 
                        img="https://ferum.kh.ua/images/%D0%95%D0%B2%D1%80%D0%BE%D0%B7%D0%B0%D0%B1%D0%BE%D1%80-%D1%85%D0%B0%D1%80%D1%8C%D0%BA%D0%BE%D0%B2-%D0%BA%D0%B8%D1%80%D0%BF%D0%B8%D1%87-%D0%BE%D1%82%D0%BA%D1%80%D1%8B%D1%82%D0%B0%D1%8F.jpg" 
                        number={10} name=' "Кирпич декор." ' 
                    />
                    <ItemBox 
                        img="https://ferum.kh.ua/images/%D0%95%D0%B2%D1%80%D0%BE%D0%B7%D0%B0%D0%B1%D0%BE%D1%80-%D1%85%D0%B0%D1%80%D1%8C%D0%BA%D0%BE%D0%B2-%D0%B1%D1%83%D1%82-30%D1%81%D0%BC.jpg" 
                        number={11} name=' "Бутовый камень" '  
                    />
                    <ItemBox 
                        img="https://ferum.kh.ua/images/%D0%95%D0%B2%D1%80%D0%BE%D0%B7%D0%B0%D0%B1%D0%BE%D1%80-%D1%85%D0%B0%D1%80%D1%8C%D0%BA%D0%BE%D0%B2-%D0%B2%D0%B5%D1%80%D1%81%D0%B0%D1%87%D0%B5-%D0%B3%D1%80%D0%B5%D1%86%D0%B8%D1%8F.jpg" 
                        number={14} name=' "Версаче" '  
                    />
                    <ItemBox 
                        img="https://ferum.kh.ua/images/%D0%95%D0%B2%D1%80%D0%BE%D0%B7%D0%B0%D0%B1%D0%BE%D1%80-%D1%85%D0%B0%D1%80%D1%8C%D0%BA%D0%BE%D0%B2-%D0%BF%D0%B5%D1%81%D1%87%D0%B0%D0%BD%D0%B8%D0%BA.jpg" 
                        number={15.1} name=' "Песчаник" ' 
                    />
                    <ItemBox 
                        img="https://ferum.kh.ua/images/%D0%95%D0%B2%D1%80%D0%BE%D0%B7%D0%B0%D0%B1%D0%BE%D1%80-%D1%85%D0%B0%D1%80%D1%8C%D0%BA%D0%BE%D0%B2-%D0%BF%D0%B5%D1%81%D1%87%D0%B0%D0%BD%D0%B8%D0%BA-%D0%BF%D0%B0%D0%B7%D0%BB-%D0%B2%D0%B5%D1%80%D1%85.jpg" 
                        number={19} name=' "Песчаник зубок декор." '  
                    />
                    <ItemBox 
                        img="https://ferum.kh.ua/images/evrozabor-obrazec-doska.jpg" 
                        number={21} name=' "Сайдинг" ' 
                    />
                    <ItemBox 
                        img="https://ferum.kh.ua/images/%D0%95%D0%B2%D1%80%D0%BE%D0%B7%D0%B0%D0%B1%D0%BE%D1%80-%D1%85%D0%B0%D1%80%D1%8C%D0%BA%D0%BE%D0%B2-%D0%B1%D1%83%D1%82%D0%BE%D0%B2%D1%8B%D0%B9-%D0%BA%D0%B0%D0%BC%D0%B5%D0%BD%D1%8C.jpg" 
                        number={22} name=' "Бутовый камень" ' 
                    />
                    <ItemBox 
                        img="https://ferum.kh.ua/images/%D0%95%D0%B2%D1%80%D0%BE%D0%B7%D0%B0%D0%B1%D0%BE%D1%80-%D1%85%D0%B0%D1%80%D1%8C%D0%BA%D0%BE%D0%B2-%D0%BA%D0%B0%D0%BC%D0%B5%D0%BD%D1%8C.jpg" 
                        number={23} name=' "Старый город" ' 
                    />
                    <ItemBox 
                        img="https://ferum.kh.ua/images/evrozabor_24_fagot.jpg" 
                        number={24} name=' "Фагот" '  
                    />
                    <ItemBox 
                        img="https://ferum.kh.ua/images/evrozabor_24_fagot_decor.jpg" 
                        number={25.1} name=' "Фагот декор." '  
                    />
                    <ItemBox 
                        img="https://ferum.kh.ua/images/%D0%95%D0%B2%D1%80%D0%BE%D0%B7%D0%B0%D0%B1%D0%BE%D1%80-%D1%85%D0%B0%D1%80%D1%8C%D0%BA%D0%BE%D0%B2-%D0%BA%D0%B0%D1%80%D0%BF%D0%B0%D1%82%D1%81%D0%BA%D0%B8%D0%B9-%D0%BA%D0%B0%D0%BC%D0%B5%D0%BD%D1%8C.jpg" 
                        number={30} name=' "Карпатский камень" ' 
                    />
                    <ItemBox 
                        img="https://ferum.kh.ua/images/%D0%95%D0%B2%D1%80%D0%BE%D0%B7%D0%B0%D0%B1%D0%BE%D1%80-%D1%85%D0%B0%D1%80%D1%8C%D0%BA%D0%BE%D0%B2-%D0%BA%D0%B0%D1%80%D0%BF%D0%B0%D1%82%D1%8B-%D0%B3%D0%BB%D1%83%D1%85%D0%B0%D1%8F.jpg" 
                        number={31} name=' "Карпатский камень верх" ' 
                    />
                    <ItemBox 
                        img="https://ferum.kh.ua/images/%D0%95%D0%B2%D1%80%D0%BE%D0%B7%D0%B0%D0%B1%D0%BE%D1%80-%D1%85%D0%B0%D1%80%D1%8C%D0%BA%D0%BE%D0%B2-%D0%BA%D0%B0%D1%80%D0%BF%D0%B0%D1%82%D1%8B-%D0%BE%D1%82%D0%BA%D1%80%D1%8B%D1%82%D0%B0%D1%8F.jpg" 
                        number={32} name=' "Карпатский камень декор." ' 
                    />
                    <ItemBox 
                        img="https://b15y8a.am.files.1drv.com/y4m7GvcezEXOqn2AEPzZ5FXOarIh9ccRpf5UvIJD8-R476lgS8oTN_zbHcfqKr1yCk3g1UdcUvZVrA5jvUzGl8ZTkQ3Bl64HuvYEVuDaPWWqL8nwRNaOrGces6ZapRBTSFnCqXuvc5TkdLaAj_j9tUFr6IaVNVfg7FxnJ4SDl4VwyFR6JiWOquwm1jLVYnPUF0D_SeOLyQCk5g6sD84876l8g?width=238&height=58&cropmode=none" 
                        number={33} name=' "Карпатский камень декор." ' 
                    />
                    <ItemBox 
                        img="https://af7zza.am.files.1drv.com/y4mCF0pCUYzj9xDY9xd-hm7o3CjSA8GQjuSEhuCi022mio9pxqtPEKaOdBi3QHsSS4BS7j_dOmmO6PV-F5YVaHDIKizgoeBIJgpl4lIYolbUubyhdYWL0yVJMQOhAbzrXJuL0U9H1AYcTamUM-MkE62GgoLyVS6n9Ayus4qbUhdNPPmcznfezaYnsLnGOzDiKyx1_79cXftnRcJOdDMFjeT7A?width=260&height=72&cropmode=none" 
                        number={34} name=' "Дерево в рамке" ' 
                    />
                    <ItemBox 
                        img="https://ferum.kh.ua/images/evrozabor_35_gladkij_kirpich.png" 
                        number={35} name=' "Гладкий кирпич" '  
                    />
                </div>
                
                <div className="OurPropose-title">Столбы</div>
                <div className="OurPropose-line"></div>
                <div className="Price-container">
                    <div className="Price-container-photo">
                        <img alt="photo" src="https://q13zza.am.files.1drv.com/y4mzgB_k2aU-eLm7ooU0KJq2RNSJcQdXMzDfxmHol-w8rffV73k7QFAX9b1QCrdj8hP4hfKrTWIAx2dOAJSA4eI8mnOpERM1Cc0-jvoGrmdgPIaqS-Wbnc28O4S_JR7BPhHbL5109DEDHY4XDbC3zETpuTqePAwSvEdQ3mFI9w0AgMpjkxnGCqK6f8T4ICEMGaRLJl_pkXE5zJzItEGcjMfhw?width=216&height=30&cropmode=none"/>
                    </div>
                    <ItemBox1 number={0.5} desc="(27 кг) 1 плита × 0,5м (1,0м)" price={100} />
                    <ItemBox1 number={1.0} desc="(40 кг) 2 плиты × 0,5м (1,5м)" price={120} />
                    <ItemBox1 number={1.5} desc="(65 кг) 3 плиты × 0,5м (2,23м)" price={150} />
                    <ItemBox1 number={1.8} desc=" 1 плита × 0,3м + 3 плиты × 0,5м (2,5м)" price={160} />
                    <ItemBox1 number={2.0} desc="(68 кг) 4 плиты × 0,5м (2,7м)" price={170} />
                    <ItemBox1 number={2.0} desc="(80 кг) 4 плиты × 0,5м (2,8м)" price={210} />
                    <ItemBox1 number={2.5} desc="(108 кг) 5 плит × 0,5м (3,4м)" price={280} />
                </div>
            
                <div className="OurPropose-title">Столб под сетку рабица</div>
                <div className="OurPropose-line"></div>
                <div className="Price-container">
                    <div className="Price-container-photo">
                        <img alt="photo" src="https://av5y8a.am.files.1drv.com/y4mDZQznWCjSx-uuEUIO5sZFjcw9eUoiHGdhnKslXbFNojZqAXnyjCy0Z1UIc5tPDBG2wwc04h_CKREdhzQaue08qLYpyCRPa5lszq-t9NBTAwVKbq2w4sLnkpzJe5yDA2t2WYASveS43EsHcz1gE6wIXn71G8uTQUEy86_TolrInzyF3zHK7g8u7RPM4_9gV9Mp26z1YxriE5QCrEkfGGdgw?width=306&height=28&cropmode=none"/>
                    </div>
                    <ItemBox1 number={2.05} desc="10*10 (2,05м)" price={140} />
                </div>
            </div>
        )
    }
}
class ItemBox extends React.Component {
    constructor(){
        super()
    }

    render(){
        return(
            <div className="Price-container-box">
                <img className="Price-container-box-img" src={this.props.img} alt="fences" />
                <div className="Price-container-box-title">Еврозабор плита №{this.props.number}</div>
                <div className="Price-container-box-desc">{this.props.name} {this.props.price}</div>
            </div>  
        )
    }
}
class ItemBox1 extends React.Component {
    constructor(){
        super()
    }

    render(){
        return(
            <div className="Price-container-box1">
                <div className="Price-container-box-title">{this.props.number}м</div>
                <div className="Price-container-box-desc">{this.props.desc}</div>
                <div className="Price-container-box-desc">{this.props.price}грн</div>
            </div>  
        )
    }
}