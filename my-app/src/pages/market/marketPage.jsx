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
import {Helmet} from "react-helmet";




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
        link[7].addEventListener('click',() =>{
            button.classList.remove(className)
            button1[0].classList.remove(className1)

        })

    }
    render(){
        return(
            <div>   
                <Helmet>
                    <meta charSet="utf-8" />
                    <meta
                      name="description"
                      content="Еврозабор. Тротуарная плитка. Ворота. Автоматика для ворот. Термофасад. Роллеты. Установка, покраска. "
                    />
                    <meta 
                      name="keywords"
                      content="Еврозабор в полтаве, Автоматика на ворота, термофасад, покраска забора полтава, установка еврозабора,   забор полтава"
                    />
    
                    <title>Строим с Нами – Еврозабор в Полтаве.</title>
                </Helmet>

                <div id="Header">
                    <div className="Wrapper">
                        <div className="Header-container">
                            <h1 className="Header-headline1">Строим с Нами</h1>
                            <h2 className="Header-headline2">
                                Еврозабор Полтава. Еврозабор и ворота всех видов.
                                Установка, Покраска. Автоматика. Термофасад
                            </h2>
                            <a onClick={this.onClick = this.onClick.bind(this)} href="/" className="Header-button-market">
                                <div>
                                {
                                    document.location.href === "https://stroim-s-nami.com.ua/market" ? 'Все товары' :
                                    document.location.href === "https://stroim-s-nami.com.ua/market/fences" ? 'Заборы' : 
                                    document.location.href === "https://stroim-s-nami.com.ua/market/gate" ? 'Ворота' : 
                                    document.location.href === "https://stroim-s-nami.com.ua/market/rolls" ? 'Роллеты' : 
                                    document.location.href === "https://stroim-s-nami.com.ua/market/automation" ? 'Автоматика для ворот' : 
                                    document.location.href === "https://stroim-s-nami.com.ua/market/parking" ? 'Шлагбаумы и парковки' : 
                                    document.location.href === "https://stroim-s-nami.com.ua/market/tile" ? 'Плитка' : 
                                    document.location.href === "https://stroim-s-nami.com.ua/market/tileeco" ? 'Плитка "Экология"' : 
                                    document.location.href === "https://stroim-s-nami.com.ua/market/thermofacade" ? 'Термофасад' : ''
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
                <Link className="HeaderLink" to={`${url}/tileeco`}>Плитка "Экология"</Link>
                <Link className="HeaderLink" to={`${url}/thermofacade`}>Термофасад</Link>
                <a href="/market">Свернуть</a>
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
            topicId === 'tileeco' ? <TileEco /> : 
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
            <ItemBox button="Заказать" img="https://lrxmpw.am.files.1drv.com/y4mOMqrxete4qqliyZ-2gx4EK03m1uIS-kIFzwMgK_QSB0vIdl4PuhqFI34n2q5fSW1HQ7VGnFqeCXDUbCF7lBcWKgMakUAPeAUxED7kxrG3ymQSiOVCBeq6oALRVjCkwNCjctIip2_WWPmpYM7FljDeSZ9CSpslzzUryYXQhIS0j7vefhkqyhQh1SGweY3NYMaroWGLyeBeiU2-nGXL0IeRw?width=1280&height=960&cropmode=none" category="Еврозабор" name="Еврозабор" price={285} cube="грн. п.м" word="От" />,
            <ItemBox button="Заказать" img="https://mtlqkg.am.files.1drv.com/y4m7oyi0h_Al-Mp-tbsTbZk021NWwmRhNdMCvGoS76-kDEwaXBOR5K09JHgVmIvPnv82CpcE1ehN13rXYt3s_45TMimH5H5N6_8l9FKyf1d3c1AOV7SKx5wHtgipLTV7Z1HyaFFE5c7Pf2rTAr2mJpX2QbkmrRzp1z-2v10kpb5gW6rASbXR2DP4Flge0gkHroPTOz9EsaFRMNqHtVKj1-gNw?width=1024&height=768&cropmode=none" category="Еврозабор с покраской" name="Еврозабор с покраской" price={75} cube="грн. кв.м" word="От" />,
            <ItemBox button="Заказать" img="https://qv1y8a.am.files.1drv.com/y4mrSrvRUsjSrYRwx4dx-GZSbxXhz4E3VFyHZcH6jOK1-Uq2yry4Kj2T8Uj6Nx6O3x5jSHDTrXGrNKf4ozSQbDiWGB4QidxaAbV3W2hLiiihYqshRbSUlr-hzw5RLcQ4f7JAaUwKHTtz83pHYa1wggCkGtl_-6xIezmtwaJcsEnw0YzLmftjeCxzbkh2iuPTz2cL8kxSouxLFVAfzix9j_D4A?width=3264&height=2448&cropmode=none" category="Секционный металический" name="Забор металл-сетка" price={306} cube="грн. п.м" />,
            <ItemBox button="Заказать" img="https://lrzkrg.am.files.1drv.com/y4mG3x__1G0BNiAPpJ1LhSQ2R4qW_ZbGsOJ62mtJyU87MIMUyWPcCaelys92VkCgmMWHJF8irjRzSIsWyR6IWap0_QBIARM1RbwSSNG2LMSwlZ7TAiao9KeyB0a-VLue9qtcKtLBg_qpSWhd5IAK55Ab3v__eAlWSQ8fNOPMCa1XET4vsnMQCXNobQdSOzJmVtce1kJnK_yOSm5WKPx6rd4yw?width=960&height=720&cropmode=none" category="Сетка рабица" name="Забор сетка рабица" price={140} cube="грн. столб" word="От" />,
            <ItemBox button="Заказать" img="https://a15y8a.am.files.1drv.com/y4m9oJsDpwoUhDzCksCj94ttraUgzk7jNuqrtzzlyF6QGuLTMnxLgWY1tTnSjJ7Y_78qskLmfCcD1oe-a1ghBUoH1mpPgeAW1Tmk73Kj5H6UtoYDnjK4ufacOeqy_OlZnoqReIsqEJJ7lH6sVDhHHPxKvG-qyFGLyxfUp8tgKgTtXVNOGpGSwMa3wvJPNmQ5O7KmV6IugdHUh1alYFq8XFLtA?width=1024&height=498&cropmode=none" category="Комбинированный" name="Еврозабор Комбинированный" price='' cube=" Цена договорная" />,
            <ItemBox button="Заказать" img="https://lrxfpw.am.files.1drv.com/y4m2NdPlBqFK1GiOW34cToxrAJLE_uBnApzgMI25tHzHAqgaB6ul-VHgkwWIJBIbqf3udZMMBlbOSz0T2dVQNI7G3vx6fSNualr9zQ46vC57aUXVkkdX_rSD-cc_AdbFsYLD4G8UhYovG7hALwFecE2xe2-Kr3A8mu7P5v6PkN3lgJ6SRh5cf4Qz_1dpBbZhtmjIF7WLSZMCguKR86IAj8V-A?width=1024&height=768&cropmode=none" category="Откатные" name="Ворота Откатные" price="Цена договорная" />,
            <ItemBox button="Заказать" img="https://7bnc1w.am.files.1drv.com/y4m0qHjacADBh-1i4VbxwWO_Pq3pgDfjnlnvLqdvlhYBJmwcy5hOwlYMwalH93QkmRdWSozx2-doSiwT7_SpR3Nv-yFbPRow2pbGSjdHUUXmfisGCYCXDzL4HL_myg0Qls2XYKbE6v2zHE3W2jLt_B0bs8pSxpevPNDGr_6R00n9jGqNI0oHh6DIpwelp1K7di7Nz3M95HjuSw6ztbcRrPP5Q?width=800&height=600&cropmode=none" category="Распашные" name="Ворота Распашные" price="Цена договорная" />,
            <ItemBox button="Заказать" img="https://gecgtq.am.files.1drv.com/y4m2IRG7gkX07EzcGnJzSmf2xmOLyrRD0fOFPllpQwdrdSIWem6fbCVbCKK0pG6fH19Klp6jATFs-sCGhMc4sghFLoef8LzBFZy3mSlBrPFVtKz--wLA_So1ChUaWivuHSmmSPWD3YHVceiP95pQwTm8HkaNn89NtZt0dDjKxqoatm6o0Bru3yL9d6CmMjV7puTlI98C-N5SqeXKFhAnUQTGQ?width=1024&height=647&cropmode=none" category="Гаражные" name="Ворота Гаражные" price="Цена договорная" />,
            <ItemBox button="Заказать" img="https://gecsvw.am.files.1drv.com/y4mT1rXcDy64M6meaogUlp4S4cY2sGyQLmrNTaLIOhfXKbqCBDd_6BXosJc8lc-MB2rwGdMc6y-uCpPEZux_MtE3RE7g5U5CPYhxIkqRj9l_K3Q5eQ1Cq3CVmlyAAZlDVQSvnXRKd90NFaLUy_H9nhPP7obL81hODlsvBEupQHm8hljt4t2WMnJ9lxzXT7-nZS5phuLJ5qarA9XL4FNyQVaEw?width=1024&height=852&cropmode=none" category="Откатные" name="Роллеты" price="Цена договорная" />,
            <ItemBox button="Рассчитать" img="https://www.vsv-group.com.ua/wp-content/uploads/2020/02/otkatnoj-privod.jpg" category="Откатные" name="Автоматика" price="Цена договорная" desc="Для Откатных Ворот" />,
            <ItemBox button="Рассчитать стоимость" img="https://www.vsv-group.com.ua/wp-content/uploads/2017/12/aljuteh1-450x300.jpg" category="Откатные" name="Автоматика Alutech Roto RTO-500KIT(вес до 500 кг)" desc="комплект привода для откатных ворот" price={7854} cube="грн" />,
            <ItemBox button="Рассчитать стоимость" img="https://www.vsv-group.com.ua/wp-content/uploads/2017/12/aljuteh1-450x300.jpg" category="Откатные" name="Автоматика Alutech Roto RTO-1000KIT(до 1000 кг)" desc="комплект привода для откатных ворот" price={8778} cube="грн" />,
            <ItemBox button="Рассчитать стоимость" img="https://www.vsv-group.com.ua/wp-content/uploads/2017/12/aljuteh1-450x300.jpg" category="Откатные" name="Автоматика Alutech Roto RTO-2000KIT(до 2000 кг)" desc="комплект привода для откатных ворот" price={12243} cube="грн" />,

            <ItemBox button="Рассчитать стоимость" img="https://www.vsv-group.com.ua/wp-content/uploads/2017/12/an-motors-otkatnaja-1-450x300.jpg" category="Откатные" name="Автоматика AN-Motors ASL500Kit(вес до 500 кг)" desc="комплект привода для откатных ворот" price={7145} cube="грн"/>,
            <ItemBox button="Рассчитать стоимость" img="https://www.vsv-group.com.ua/wp-content/uploads/2017/12/an-motors-otkatnaja-1-450x300.jpg" category="Откатные" name="Автоматика AN-Motors ASL1000Kit(вес до 1000 кг)" desc="комплект привода для откатных ворот" price={7999} cube="грн" />,
            <ItemBox button="Рассчитать стоимость" img="https://www.vsv-group.com.ua/wp-content/uploads/2017/12/an-motors-otkatnaja-1-450x300.jpg" category="Откатные" name="Автоматика AN-Motors ASL2000Kit(вес до 2000 кг)" desc="комплект привода для откатных ворот" price={11650} cube="грн" />,
            
            <ItemBox button="Рассчитать стоимость" img="https://www.vsv-group.com.ua/wp-content/uploads/2017/12/komunello-otkatnaja-1-450x300.jpg" category="Откатные" name="Автоматика Comunello Fort 424(вес до 400 кг)" desc="комплект привода для откатных ворот" price={7425} cube="грн" />,
            <ItemBox button="Рассчитать стоимость" img="https://www.vsv-group.com.ua/wp-content/uploads/2017/12/komunello-otkatnaja-1-450x300.jpg" category="Откатные" name="Автоматика Comunello Fort 500(вес до 500 кг)" desc="комплект привода для откатных ворот" price={8415} cube="грн" />,
            <ItemBox button="Рассчитать стоимость" img="https://www.vsv-group.com.ua/wp-content/uploads/2017/12/komunello-otkatnaja-1-450x300.jpg" category="Откатные" name="Автоматика Comunello Fort 624(вес до 600 кг)" desc="комплект привода для откатных ворот" price={8560} cube="грн" />,
            <ItemBox button="Рассчитать стоимость" img="https://www.vsv-group.com.ua/wp-content/uploads/2017/12/komunello-otkatnaja-1-450x300.jpg" category="Откатные" name="Автоматика Comunello Fort 700(вес до 700 кг)" desc="комплект привода для откатных ворот" price={9240} cube="грн" />,
            <ItemBox button="Рассчитать стоимость" img="https://www.vsv-group.com.ua/wp-content/uploads/2017/12/komunello-otkatnaja-1-450x300.jpg" category="Откатные" name="Автоматика Comunello Fort 1000(вес до 1000 кг)" desc="комплект привода для откатных ворот" price={10487} cube="грн" />,

            <ItemBox button="Рассчитать стоимость" img="https://www.vsv-group.com.ua/wp-content/uploads/2017/12/aljuteh1-1-450x300.jpg" category="Откатные" name="Автоматика Alutech Ambio AM-5000KIT" desc="комплект привода для распашных ворот" price={14817} cube="грн" />,
            <ItemBox button="Рассчитать стоимость" img="https://www.vsv-group.com.ua/wp-content/uploads/2017/12/anmotors-raspashnaja-2-450x300.jpg" category="Откатные" name="Комплект автоматики AN-Motors ASW 3000 Kit" desc="комплект привода для распашных ворот" price={13652} cube="грн" />,
            <ItemBox button="Рассчитать стоимость" img="https://www.vsv-group.com.ua/wp-content/uploads/2017/12/anmotors-raspashnaja-2-450x300.jpg" category="Откатные" name="Комплект автоматики AN-Motors ASW 5000 Kit" desc="комплект привода для распашных ворот" price={14276} cube="грн" />,
            <ItemBox button="Рассчитать стоимость" img="https://www.vsv-group.com.ua/wp-content/uploads/2017/12/anmotors-raspashnaja-1-450x300.jpg" category="Откатные" name="Комплект автоматики AN-Motors ASW 4000 Kit" desc="комплект привода для распашных ворот" price={14276} cube="грн" />,
            <ItemBox button="Рассчитать стоимость" img="https://www.vsv-group.com.ua/wp-content/uploads/2016/04/anmotors-raspashnaja-4-450x300.jpg" category="Откатные" name="Комплект автоматики AN-Motors ASW 5000" desc="комплект привода для распашных ворот" price={6306} cube="грн" />,
            <ItemBox button="Рассчитать стоимость" img="https://www.vsv-group.com.ua/wp-content/uploads/2016/04/anmotors-raspashnaja-5-450x300.jpg" category="Откатные" name="Комплект автоматики AN-Motors ASW 4000" desc="комплект привода для распашных ворот" price={6623} cube="грн" />,
            <ItemBox button="Рассчитать стоимость" img="https://www.vsv-group.com.ua/wp-content/uploads/2017/12/komunello-raspashnye-1-450x300.jpg" category="Откатные" name="Автоматика Comunello Abacus 224" desc="комплект привода для распашных ворот" price={13200} cube="грн" />,
            <ItemBox button="Рассчитать стоимость" img="https://www.vsv-group.com.ua/wp-content/uploads/2017/12/komunello-raspashnye-1-450x300.jpg" category="Откатные" name="Автоматика Comunello Abacus 300" desc="комплект привода для распашных ворот" price={14520} cube="грн" />,
            <ItemBox button="Рассчитать стоимость" img="https://www.vsv-group.com.ua/wp-content/uploads/2017/12/komunello-raspashnye-1-450x300.jpg" category="Откатные" name="Автоматика Comunello Abacus 500" desc="комплект привода для распашных ворот" price={16338} cube="грн" />,

            <ItemBox button="Рассчитать стоимость" img="https://www.vsv-group.com.ua/wp-content/uploads/2018/07/aljuteh-garazhnaja-450x300.jpg" name="Автоматика Alutech Levigato LG-800*" desc="привод для гаражных ворот" price={4191} cube="грн" />,
            <ItemBox button="Рассчитать стоимость" img="https://www.vsv-group.com.ua/wp-content/uploads/2018/07/aljuteh-garazhnaja-450x300.jpg" name="Автоматика Alutech Levigato LG-1000f*" desc="привод для скоростных гаражных ворот" price={5148} cube="грн" />,
            <ItemBox button="Рассчитать стоимость" img="https://www.vsv-group.com.ua/wp-content/uploads/2018/07/aljuteh-garazhnaja-450x300.jpg" name="Автоматика Alutech Levigato LG-1200*" desc="привод для гаражных ворот" price={4653} cube="грн" />,
            <ItemBox button="Рассчитать стоимость" img="https://www.vsv-group.com.ua/wp-content/uploads/2018/07/aljuteh-garazhnaja-450x300.jpg" name="Автоматика Alutech Levigato LG-600f*" desc="привод для скоростных гаражных ворот" price={4653} cube="грн" />,
            <ItemBox button="Рассчитать стоимость" img="https://www.vsv-group.com.ua/wp-content/uploads/2018/07/an-motors-garazhnaja-1-450x300.jpg" name="AN-Motors ASG600 3KIT-L" desc="комплект привода для гаражных ворот" price={4340} cube="грн" />,
            <ItemBox button="Рассчитать стоимость" img="https://www.vsv-group.com.ua/wp-content/uploads/2018/07/an-motors-garazhnaja-1-450x300.jpg" name="AN-Motors ASG1000 3KIT-L" desc="комплект привода для гаражных ворот" price={4613} cube="грн" />,
            <ItemBox button="Рассчитать стоимость" img="https://www.vsv-group.com.ua/wp-content/uploads/2018/07/an-motors-garazhnaja-1-450x300.jpg" name="AN-Motors ASG1000 4KIT" desc="комплект привода для гаражных ворот" price={4848} cube="грн" />,
            <ItemBox button="Рассчитать стоимость" img="https://www.vsv-group.com.ua/wp-content/uploads/2018/07/komunello-garazhnaja-1-450x300.jpg" name="Автоматика Comunello Rampart 600" desc="привод для гаражных ворот" price={7425} cube="грн" />,
            <ItemBox button="Рассчитать стоимость" img="https://www.vsv-group.com.ua/wp-content/uploads/2018/07/komunello-garazhnaja-1-450x300.jpg" name="Автоматика Comunello Rampart 600 L" desc="привод для гаражных ворот" price={7590} cube="грн" />,
            <ItemBox button="Рассчитать стоимость" img="https://www.vsv-group.com.ua/wp-content/uploads/2018/07/komunello-garazhnaja-1-450x300.jpg" name="Автоматика Comunello Rampart 1000L" desc="привод для гаражных ворот" price={8085} cube="грн" />,
            <ItemBox button="Рассчитать стоимость" img="https://www.vsv-group.com.ua/wp-content/uploads/2018/07/komunello-garazhnaja-1-450x300.jpg" name="Автоматика Comunello Rampart 1000" desc="привод для гаражных ворот" price={7920} cube="грн" />,

            <ItemBox button="Рассчитать стоимость" img="https://www.vsv-group.com.ua/wp-content/uploads/2017/12/aljuteh1-2-450x300.jpg" name="Автоматика Alutech Targo TR-3531-230KIT" desc="привод для промышленных ворот" price={10527} cube="грн" />,
            <ItemBox button="Рассчитать стоимость" img="https://www.vsv-group.com.ua/wp-content/uploads/2017/12/aljuteh1-2-450x300.jpg" name="Автоматика Alutech Targo TR-5024-230KIT" desc="привод для промышленных ворот" price={12177} cube="грн" />,
            <ItemBox button="Рассчитать стоимость" img="https://www.vsv-group.com.ua/wp-content/uploads/2017/12/aljuteh1-2-450x300.jpg" name="Автоматика Alutech Targo TR-5024-400KIT" desc="привод для промышленных ворот" price={14784} cube="грн" />,
            <ItemBox button="Рассчитать стоимость" img="https://www.vsv-group.com.ua/wp-content/uploads/2017/12/aljuteh1-2-450x300.jpg" name="Автоматика Alutech Targo TR-10024-400KIT" desc="привод для промышленных ворот" price={16401} cube="грн" />,
            <ItemBox button="Рассчитать стоимость" img="https://www.vsv-group.com.ua/wp-content/uploads/2017/12/aljuteh1-2-450x300.jpg" name="Автоматика Alutech Targo TR-13018-400KIT" desc="привод для промышленных ворот" price={16830} cube="грн" />,

            <ItemBox button="Рассчитать стоимость" img="https://www.vsv-group.com.ua/wp-content/uploads/2020/04/pult-komunello-2.jpg" name="Пульты дистанционного управления" desc="Alutech" price="Цена договорная"/>,
            <ItemBox button="Рассчитать стоимость" img="https://www.vsv-group.com.ua/wp-content/uploads/2020/04/pult-anmotors-2.jpg" name="Пульты дистанционного управления" desc="An-Motors" price="Цена договорная"/>,
            <ItemBox button="Рассчитать стоимость" img="https://www.vsv-group.com.ua/wp-content/uploads/2020/04/pult-komunello.jpg" name="Пульты дистанционного управления" desc="Comunello" price="Цена договорная"/>,

            <ItemBox button="Рассчитать стоимость" img="https://www.vsv-group.com.ua/wp-content/uploads/2020/04/fotojelementy-aljuteh.jpg" name="Фотоэлементы(датчики) для ворот" desc="Alutech" price="Цена договорная"/>,
            <ItemBox button="Рассчитать стоимость" img="https://www.vsv-group.com.ua/wp-content/uploads/2020/04/fotojelementy-anmotors.jpg" name="Фотоэлементы(датчики) для ворот" desc="An-Motors" price="Цена договорная"/>,
            <ItemBox button="Рассчитать стоимость" img="https://www.vsv-group.com.ua/wp-content/uploads/2020/04/fotojelementy-komunello.jpg" name="Фотоэлементы(датчики) для ворот" desc="Comunello" price="Цена договорная"/>,
            
            <ItemBox button="Рассчитать стоимость" img="https://www.vsv-group.com.ua/wp-content/uploads/2020/04/signalnaja-lampa-aljuteh.jpg" name="Сигнальные лампы" desc="Alutech" price="Цена договорная"/>,
            <ItemBox button="Рассчитать стоимость" img="https://www.vsv-group.com.ua/wp-content/uploads/2020/04/signalnaja-lampa-anmotors..jpg" name="Сигнальные лампы" desc="An-Motors" price="Цена договорная"/>,
            <ItemBox button="Рассчитать стоимость" img="https://www.vsv-group.com.ua/wp-content/uploads/2020/04/signalnaja-lampa-komunello.jpg" name="Сигнальные лампы" desc="Comunello" price="Цена договорная"/>,
            <ItemBox button="Заказать" img="https://h44ykq.am.files.1drv.com/y4mgjqvDIepMFgY3-2b0MeXVNRF5hm6Z7wJemjNnW1-f6cpX-CWt0jV8XSoypPHs_y7QJ1Ws0289oE5O4XvZJpn-o3zUImKH8qm0wQtQLXZtuH5Y3SqK1KzSqfc4qIUK9Wo2uAd7pEzjYkiHrmZm8USIgLtVnLMosWiBAQH53fgZ3BYB6-iy8gulmV0PLgdclYVCuus2TJTD2l6u8EfxoR3Rg?width=1024&height=576&cropmode=none" category="Паркинг" name="Антипарковка" price='Цена договорная' />,
            <ItemBox button="Заказать" img="https://lrxbpw.am.files.1drv.com/y4mXqUlofBiw6zDQEuPyaWkif4QT7s-esyCjOQ53gmYD-Wfjg67OZDKkujKObk9yoO0e-9QII2X8p-LiTEAjBmID0DeI8b8gCYFjM-owMsuxAYBieENe_8DkZzcNJ1M7SVt0d-q0XYW_nvJ_-O_teI_BNqZnn3npuer07ozycHSFPwCzbrBILCVjj6tc_otwoHhtJwamsZa9K_YNlPXN-sFBw?width=800&height=600&cropmode=none" category="Плитка" name="Плитка" price="Цена договорная" />,
            <ItemBox button="Заказать" img="https://g7we7q.am.files.1drv.com/y4mlqwnIr_jHyoccTzSQ2LT0nbGf1gya6kSs6DCR44edAGV-sW-CtGzTPpak6fiBEwPeSorSP99kNGPVL5zVIZLzbv-_EzYcw1J4Mut2U7IVDh3dijOvq3qDyEuOjmaQgUFY8uo-mzYKnh9nJvOIrmOI5uPFwuO37P7QJlHMvt0dvKRYIQgFQg8sh4fsdYClQqqZ52fne37odaAVcPiu_bt_Q?width=450&height=327&cropmode=none" category="Плитка Экология" name="Плитка 'Экология'" price="Цена договорная" />,
            <ItemBox button="Заказать" img="https://lrwmvg.am.files.1drv.com/y4mvEK1bD_uewKSxakGdgV0vqOtv_07ojttf4IMOa9ENbzK8X2HJY-weETqlwrZ7BYNK48n3qDBTctr2H5Zrv1YOvXpaIBpyGbcl-fHKJxvMVkjp0HUKkkKhOaGI1s3NmAu_UlNGMP5GxVrAfEJzVPWuDiokS9F2rg7MnKamHxaKBPCNg-CMDCHODgghSxItIp696lViwuuD1TtlSrGljV4zA?width=1024&height=768&cropmode=none" category="Термофасад" name="Термофасад" price="Цена договорная" />,

        ]
        this.state = {
            itemBox: [
                <ItemBox button="Заказать" img="https://lrxmpw.am.files.1drv.com/y4mOMqrxete4qqliyZ-2gx4EK03m1uIS-kIFzwMgK_QSB0vIdl4PuhqFI34n2q5fSW1HQ7VGnFqeCXDUbCF7lBcWKgMakUAPeAUxED7kxrG3ymQSiOVCBeq6oALRVjCkwNCjctIip2_WWPmpYM7FljDeSZ9CSpslzzUryYXQhIS0j7vefhkqyhQh1SGweY3NYMaroWGLyeBeiU2-nGXL0IeRw?width=1280&height=960&cropmode=none" category="Еврозабор" name="Еврозабор" price={285} cube="грн. п.м" word="От" />,
                <ItemBox button="Заказать" img="https://mtlqkg.am.files.1drv.com/y4m7oyi0h_Al-Mp-tbsTbZk021NWwmRhNdMCvGoS76-kDEwaXBOR5K09JHgVmIvPnv82CpcE1ehN13rXYt3s_45TMimH5H5N6_8l9FKyf1d3c1AOV7SKx5wHtgipLTV7Z1HyaFFE5c7Pf2rTAr2mJpX2QbkmrRzp1z-2v10kpb5gW6rASbXR2DP4Flge0gkHroPTOz9EsaFRMNqHtVKj1-gNw?width=1024&height=768&cropmode=none" category="Еврозабор с покраской" name="Еврозабор с покраской" price={75} cube="грн. кв.м" word="От" />,
                <ItemBox button="Заказать" img="https://qv1y8a.am.files.1drv.com/y4mrSrvRUsjSrYRwx4dx-GZSbxXhz4E3VFyHZcH6jOK1-Uq2yry4Kj2T8Uj6Nx6O3x5jSHDTrXGrNKf4ozSQbDiWGB4QidxaAbV3W2hLiiihYqshRbSUlr-hzw5RLcQ4f7JAaUwKHTtz83pHYa1wggCkGtl_-6xIezmtwaJcsEnw0YzLmftjeCxzbkh2iuPTz2cL8kxSouxLFVAfzix9j_D4A?width=3264&height=2448&cropmode=none" category="Секционный металический" name="Забор металл-сетка" price={306} cube="грн. п.м" />,
                <ItemBox button="Заказать" img="https://lrzkrg.am.files.1drv.com/y4mG3x__1G0BNiAPpJ1LhSQ2R4qW_ZbGsOJ62mtJyU87MIMUyWPcCaelys92VkCgmMWHJF8irjRzSIsWyR6IWap0_QBIARM1RbwSSNG2LMSwlZ7TAiao9KeyB0a-VLue9qtcKtLBg_qpSWhd5IAK55Ab3v__eAlWSQ8fNOPMCa1XET4vsnMQCXNobQdSOzJmVtce1kJnK_yOSm5WKPx6rd4yw?width=960&height=720&cropmode=none" category="Сетка рабица" name="Забор сетка рабица" price={140} cube="грн. столб" word="От" />,
                <ItemBox button="Заказать" img="https://a15y8a.am.files.1drv.com/y4m9oJsDpwoUhDzCksCj94ttraUgzk7jNuqrtzzlyF6QGuLTMnxLgWY1tTnSjJ7Y_78qskLmfCcD1oe-a1ghBUoH1mpPgeAW1Tmk73Kj5H6UtoYDnjK4ufacOeqy_OlZnoqReIsqEJJ7lH6sVDhHHPxKvG-qyFGLyxfUp8tgKgTtXVNOGpGSwMa3wvJPNmQ5O7KmV6IugdHUh1alYFq8XFLtA?width=1024&height=498&cropmode=none" category="Комбинированный" name="Еврозабор Комбинированный" price='' cube=" Цена договорная" />,
                <ItemBox button="Заказать" img="https://lrxfpw.am.files.1drv.com/y4m2NdPlBqFK1GiOW34cToxrAJLE_uBnApzgMI25tHzHAqgaB6ul-VHgkwWIJBIbqf3udZMMBlbOSz0T2dVQNI7G3vx6fSNualr9zQ46vC57aUXVkkdX_rSD-cc_AdbFsYLD4G8UhYovG7hALwFecE2xe2-Kr3A8mu7P5v6PkN3lgJ6SRh5cf4Qz_1dpBbZhtmjIF7WLSZMCguKR86IAj8V-A?width=1024&height=768&cropmode=none" category="Откатные" name="Ворота Откатные" price="Цена договорная" />,
                <ItemBox button="Заказать" img="https://7bnc1w.am.files.1drv.com/y4m0qHjacADBh-1i4VbxwWO_Pq3pgDfjnlnvLqdvlhYBJmwcy5hOwlYMwalH93QkmRdWSozx2-doSiwT7_SpR3Nv-yFbPRow2pbGSjdHUUXmfisGCYCXDzL4HL_myg0Qls2XYKbE6v2zHE3W2jLt_B0bs8pSxpevPNDGr_6R00n9jGqNI0oHh6DIpwelp1K7di7Nz3M95HjuSw6ztbcRrPP5Q?width=800&height=600&cropmode=none" category="Распашные" name="Ворота Распашные" price="Цена договорная" />,
                <ItemBox button="Заказать" img="https://gecgtq.am.files.1drv.com/y4m2IRG7gkX07EzcGnJzSmf2xmOLyrRD0fOFPllpQwdrdSIWem6fbCVbCKK0pG6fH19Klp6jATFs-sCGhMc4sghFLoef8LzBFZy3mSlBrPFVtKz--wLA_So1ChUaWivuHSmmSPWD3YHVceiP95pQwTm8HkaNn89NtZt0dDjKxqoatm6o0Bru3yL9d6CmMjV7puTlI98C-N5SqeXKFhAnUQTGQ?width=1024&height=647&cropmode=none" category="Гаражные" name="Ворота Гаражные" price="Цена договорная" />,
                <ItemBox button="Заказать" img="https://gecsvw.am.files.1drv.com/y4mT1rXcDy64M6meaogUlp4S4cY2sGyQLmrNTaLIOhfXKbqCBDd_6BXosJc8lc-MB2rwGdMc6y-uCpPEZux_MtE3RE7g5U5CPYhxIkqRj9l_K3Q5eQ1Cq3CVmlyAAZlDVQSvnXRKd90NFaLUy_H9nhPP7obL81hODlsvBEupQHm8hljt4t2WMnJ9lxzXT7-nZS5phuLJ5qarA9XL4FNyQVaEw?width=1024&height=852&cropmode=none" category="Откатные" name="Роллеты" price="Цена договорная" />,
                <ItemBox button="Рассчитать" img="https://www.vsv-group.com.ua/wp-content/uploads/2020/02/otkatnoj-privod.jpg" category="Откатные" name="Автоматика" price="Цена договорная" desc="Для Откатных Ворот" />,
                <ItemBox button="Рассчитать стоимость" img="https://www.vsv-group.com.ua/wp-content/uploads/2017/12/aljuteh1-450x300.jpg" category="Откатные" name="Автоматика Alutech Roto RTO-500KIT(вес до 500 кг)" desc="комплект привода для откатных ворот" price={7854} cube="грн" />,
                <ItemBox button="Рассчитать стоимость" img="https://www.vsv-group.com.ua/wp-content/uploads/2017/12/aljuteh1-450x300.jpg" category="Откатные" name="Автоматика Alutech Roto RTO-1000KIT(до 1000 кг)" desc="комплект привода для откатных ворот" price={8778} cube="грн" />,
                <ItemBox button="Рассчитать стоимость" img="https://www.vsv-group.com.ua/wp-content/uploads/2017/12/aljuteh1-450x300.jpg" category="Откатные" name="Автоматика Alutech Roto RTO-2000KIT(до 2000 кг)" desc="комплект привода для откатных ворот" price={12243} cube="грн" />,
    
                <ItemBox button="Рассчитать стоимость" img="https://www.vsv-group.com.ua/wp-content/uploads/2017/12/an-motors-otkatnaja-1-450x300.jpg" category="Откатные" name="Автоматика AN-Motors ASL500Kit(вес до 500 кг)" desc="комплект привода для откатных ворот" price={7145} cube="грн"/>,
                <ItemBox button="Рассчитать стоимость" img="https://www.vsv-group.com.ua/wp-content/uploads/2017/12/an-motors-otkatnaja-1-450x300.jpg" category="Откатные" name="Автоматика AN-Motors ASL1000Kit(вес до 1000 кг)" desc="комплект привода для откатных ворот" price={7999} cube="грн" />,
                <ItemBox button="Рассчитать стоимость" img="https://www.vsv-group.com.ua/wp-content/uploads/2017/12/an-motors-otkatnaja-1-450x300.jpg" category="Откатные" name="Автоматика AN-Motors ASL2000Kit(вес до 2000 кг)" desc="комплект привода для откатных ворот" price={11650} cube="грн" />,
                
                <ItemBox button="Рассчитать стоимость" img="https://www.vsv-group.com.ua/wp-content/uploads/2017/12/komunello-otkatnaja-1-450x300.jpg" category="Откатные" name="Автоматика Comunello Fort 424(вес до 400 кг)" desc="комплект привода для откатных ворот" price={7425} cube="грн" />,
                <ItemBox button="Рассчитать стоимость" img="https://www.vsv-group.com.ua/wp-content/uploads/2017/12/komunello-otkatnaja-1-450x300.jpg" category="Откатные" name="Автоматика Comunello Fort 500(вес до 500 кг)" desc="комплект привода для откатных ворот" price={8415} cube="грн" />,
                <ItemBox button="Рассчитать стоимость" img="https://www.vsv-group.com.ua/wp-content/uploads/2017/12/komunello-otkatnaja-1-450x300.jpg" category="Откатные" name="Автоматика Comunello Fort 624(вес до 600 кг)" desc="комплект привода для откатных ворот" price={8560} cube="грн" />,
                <ItemBox button="Рассчитать стоимость" img="https://www.vsv-group.com.ua/wp-content/uploads/2017/12/komunello-otkatnaja-1-450x300.jpg" category="Откатные" name="Автоматика Comunello Fort 700(вес до 700 кг)" desc="комплект привода для откатных ворот" price={9240} cube="грн" />,
                <ItemBox button="Рассчитать стоимость" img="https://www.vsv-group.com.ua/wp-content/uploads/2017/12/komunello-otkatnaja-1-450x300.jpg" category="Откатные" name="Автоматика Comunello Fort 1000(вес до 1000 кг)" desc="комплект привода для откатных ворот" price={10487} cube="грн" />,
    
                <ItemBox button="Рассчитать стоимость" img="https://www.vsv-group.com.ua/wp-content/uploads/2017/12/aljuteh1-1-450x300.jpg" category="Откатные" name="Автоматика Alutech Ambio AM-5000KIT" desc="комплект привода для распашных ворот" price={14817} cube="грн" />,
                <ItemBox button="Рассчитать стоимость" img="https://www.vsv-group.com.ua/wp-content/uploads/2017/12/anmotors-raspashnaja-2-450x300.jpg" category="Откатные" name="Комплект автоматики AN-Motors ASW 3000 Kit" desc="комплект привода для распашных ворот" price={13652} cube="грн" />,
                <ItemBox button="Рассчитать стоимость" img="https://www.vsv-group.com.ua/wp-content/uploads/2017/12/anmotors-raspashnaja-2-450x300.jpg" category="Откатные" name="Комплект автоматики AN-Motors ASW 5000 Kit" desc="комплект привода для распашных ворот" price={14276} cube="грн" />,
                <ItemBox button="Рассчитать стоимость" img="https://www.vsv-group.com.ua/wp-content/uploads/2017/12/anmotors-raspashnaja-1-450x300.jpg" category="Откатные" name="Комплект автоматики AN-Motors ASW 4000 Kit" desc="комплект привода для распашных ворот" price={14276} cube="грн" />,
                <ItemBox button="Рассчитать стоимость" img="https://www.vsv-group.com.ua/wp-content/uploads/2016/04/anmotors-raspashnaja-4-450x300.jpg" category="Откатные" name="Комплект автоматики AN-Motors ASW 5000" desc="комплект привода для распашных ворот" price={6306} cube="грн" />,
                <ItemBox button="Рассчитать стоимость" img="https://www.vsv-group.com.ua/wp-content/uploads/2016/04/anmotors-raspashnaja-5-450x300.jpg" category="Откатные" name="Комплект автоматики AN-Motors ASW 4000" desc="комплект привода для распашных ворот" price={6623} cube="грн" />,
                <ItemBox button="Рассчитать стоимость" img="https://www.vsv-group.com.ua/wp-content/uploads/2017/12/komunello-raspashnye-1-450x300.jpg" category="Откатные" name="Автоматика Comunello Abacus 224" desc="комплект привода для распашных ворот" price={13200} cube="грн" />,
                <ItemBox button="Рассчитать стоимость" img="https://www.vsv-group.com.ua/wp-content/uploads/2017/12/komunello-raspashnye-1-450x300.jpg" category="Откатные" name="Автоматика Comunello Abacus 300" desc="комплект привода для распашных ворот" price={14520} cube="грн" />,
                <ItemBox button="Рассчитать стоимость" img="https://www.vsv-group.com.ua/wp-content/uploads/2017/12/komunello-raspashnye-1-450x300.jpg" category="Откатные" name="Автоматика Comunello Abacus 500" desc="комплект привода для распашных ворот" price={16338} cube="грн" />,
    
                <ItemBox button="Рассчитать стоимость" img="https://www.vsv-group.com.ua/wp-content/uploads/2018/07/aljuteh-garazhnaja-450x300.jpg" name="Автоматика Alutech Levigato LG-800*" desc="привод для гаражных ворот" price={4191} cube="грн" />,
                <ItemBox button="Рассчитать стоимость" img="https://www.vsv-group.com.ua/wp-content/uploads/2018/07/aljuteh-garazhnaja-450x300.jpg" name="Автоматика Alutech Levigato LG-1000f*" desc="привод для скоростных гаражных ворот" price={5148} cube="грн" />,
                <ItemBox button="Рассчитать стоимость" img="https://www.vsv-group.com.ua/wp-content/uploads/2018/07/aljuteh-garazhnaja-450x300.jpg" name="Автоматика Alutech Levigato LG-1200*" desc="привод для гаражных ворот" price={4653} cube="грн" />,
                <ItemBox button="Рассчитать стоимость" img="https://www.vsv-group.com.ua/wp-content/uploads/2018/07/aljuteh-garazhnaja-450x300.jpg" name="Автоматика Alutech Levigato LG-600f*" desc="привод для скоростных гаражных ворот" price={4653} cube="грн" />,
                <ItemBox button="Рассчитать стоимость" img="https://www.vsv-group.com.ua/wp-content/uploads/2018/07/an-motors-garazhnaja-1-450x300.jpg" name="AN-Motors ASG600 3KIT-L" desc="комплект привода для гаражных ворот" price={4340} cube="грн" />,
                <ItemBox button="Рассчитать стоимость" img="https://www.vsv-group.com.ua/wp-content/uploads/2018/07/an-motors-garazhnaja-1-450x300.jpg" name="AN-Motors ASG1000 3KIT-L" desc="комплект привода для гаражных ворот" price={4613} cube="грн" />,
                <ItemBox button="Рассчитать стоимость" img="https://www.vsv-group.com.ua/wp-content/uploads/2018/07/an-motors-garazhnaja-1-450x300.jpg" name="AN-Motors ASG1000 4KIT" desc="комплект привода для гаражных ворот" price={4848} cube="грн" />,
                <ItemBox button="Рассчитать стоимость" img="https://www.vsv-group.com.ua/wp-content/uploads/2018/07/komunello-garazhnaja-1-450x300.jpg" name="Автоматика Comunello Rampart 600" desc="привод для гаражных ворот" price={7425} cube="грн" />,
                <ItemBox button="Рассчитать стоимость" img="https://www.vsv-group.com.ua/wp-content/uploads/2018/07/komunello-garazhnaja-1-450x300.jpg" name="Автоматика Comunello Rampart 600 L" desc="привод для гаражных ворот" price={7590} cube="грн" />,
                <ItemBox button="Рассчитать стоимость" img="https://www.vsv-group.com.ua/wp-content/uploads/2018/07/komunello-garazhnaja-1-450x300.jpg" name="Автоматика Comunello Rampart 1000L" desc="привод для гаражных ворот" price={8085} cube="грн" />,
                <ItemBox button="Рассчитать стоимость" img="https://www.vsv-group.com.ua/wp-content/uploads/2018/07/komunello-garazhnaja-1-450x300.jpg" name="Автоматика Comunello Rampart 1000" desc="привод для гаражных ворот" price={7920} cube="грн" />,
    
                <ItemBox button="Рассчитать стоимость" img="https://www.vsv-group.com.ua/wp-content/uploads/2017/12/aljuteh1-2-450x300.jpg" name="Автоматика Alutech Targo TR-3531-230KIT" desc="привод для промышленных ворот" price={10527} cube="грн" />,
                <ItemBox button="Рассчитать стоимость" img="https://www.vsv-group.com.ua/wp-content/uploads/2017/12/aljuteh1-2-450x300.jpg" name="Автоматика Alutech Targo TR-5024-230KIT" desc="привод для промышленных ворот" price={12177} cube="грн" />,
                <ItemBox button="Рассчитать стоимость" img="https://www.vsv-group.com.ua/wp-content/uploads/2017/12/aljuteh1-2-450x300.jpg" name="Автоматика Alutech Targo TR-5024-400KIT" desc="привод для промышленных ворот" price={14784} cube="грн" />,
                <ItemBox button="Рассчитать стоимость" img="https://www.vsv-group.com.ua/wp-content/uploads/2017/12/aljuteh1-2-450x300.jpg" name="Автоматика Alutech Targo TR-10024-400KIT" desc="привод для промышленных ворот" price={16401} cube="грн" />,
                <ItemBox button="Рассчитать стоимость" img="https://www.vsv-group.com.ua/wp-content/uploads/2017/12/aljuteh1-2-450x300.jpg" name="Автоматика Alutech Targo TR-13018-400KIT" desc="привод для промышленных ворот" price={16830} cube="грн" />,
    
                <ItemBox button="Рассчитать стоимость" img="https://www.vsv-group.com.ua/wp-content/uploads/2020/04/pult-komunello-2.jpg" name="Пульты дистанционного управления" desc="Alutech" price="Цена договорная"/>,
                <ItemBox button="Рассчитать стоимость" img="https://www.vsv-group.com.ua/wp-content/uploads/2020/04/pult-anmotors-2.jpg" name="Пульты дистанционного управления" desc="An-Motors" price="Цена договорная"/>,
                <ItemBox button="Рассчитать стоимость" img="https://www.vsv-group.com.ua/wp-content/uploads/2020/04/pult-komunello.jpg" name="Пульты дистанционного управления" desc="Comunello" price="Цена договорная"/>,
    
                <ItemBox button="Рассчитать стоимость" img="https://www.vsv-group.com.ua/wp-content/uploads/2020/04/fotojelementy-aljuteh.jpg" name="Фотоэлементы(датчики) для ворот" desc="Alutech" price="Цена договорная"/>,
                <ItemBox button="Рассчитать стоимость" img="https://www.vsv-group.com.ua/wp-content/uploads/2020/04/fotojelementy-anmotors.jpg" name="Фотоэлементы(датчики) для ворот" desc="An-Motors" price="Цена договорная"/>,
                <ItemBox button="Рассчитать стоимость" img="https://www.vsv-group.com.ua/wp-content/uploads/2020/04/fotojelementy-komunello.jpg" name="Фотоэлементы(датчики) для ворот" desc="Comunello" price="Цена договорная"/>,
                
                <ItemBox button="Рассчитать стоимость" img="https://www.vsv-group.com.ua/wp-content/uploads/2020/04/signalnaja-lampa-aljuteh.jpg" name="Сигнальные лампы" desc="Alutech" price="Цена договорная"/>,
                <ItemBox button="Рассчитать стоимость" img="https://www.vsv-group.com.ua/wp-content/uploads/2020/04/signalnaja-lampa-anmotors..jpg" name="Сигнальные лампы" desc="An-Motors" price="Цена договорная"/>,
                <ItemBox button="Рассчитать стоимость" img="https://www.vsv-group.com.ua/wp-content/uploads/2020/04/signalnaja-lampa-komunello.jpg" name="Сигнальные лампы" desc="Comunello" price="Цена договорная"/>,
                <ItemBox button="Заказать" img="https://h44ykq.am.files.1drv.com/y4mgjqvDIepMFgY3-2b0MeXVNRF5hm6Z7wJemjNnW1-f6cpX-CWt0jV8XSoypPHs_y7QJ1Ws0289oE5O4XvZJpn-o3zUImKH8qm0wQtQLXZtuH5Y3SqK1KzSqfc4qIUK9Wo2uAd7pEzjYkiHrmZm8USIgLtVnLMosWiBAQH53fgZ3BYB6-iy8gulmV0PLgdclYVCuus2TJTD2l6u8EfxoR3Rg?width=1024&height=576&cropmode=none" category="Паркинг" name="Антипарковка" price='Цена договорная' />,
                <ItemBox button="Заказать" img="https://lrxbpw.am.files.1drv.com/y4mXqUlofBiw6zDQEuPyaWkif4QT7s-esyCjOQ53gmYD-Wfjg67OZDKkujKObk9yoO0e-9QII2X8p-LiTEAjBmID0DeI8b8gCYFjM-owMsuxAYBieENe_8DkZzcNJ1M7SVt0d-q0XYW_nvJ_-O_teI_BNqZnn3npuer07ozycHSFPwCzbrBILCVjj6tc_otwoHhtJwamsZa9K_YNlPXN-sFBw?width=800&height=600&cropmode=none" category="Плитка" name="Плитка" price="Цена договорная" />,
                <ItemBox button="Заказать" img="https://g7we7q.am.files.1drv.com/y4mlqwnIr_jHyoccTzSQ2LT0nbGf1gya6kSs6DCR44edAGV-sW-CtGzTPpak6fiBEwPeSorSP99kNGPVL5zVIZLzbv-_EzYcw1J4Mut2U7IVDh3dijOvq3qDyEuOjmaQgUFY8uo-mzYKnh9nJvOIrmOI5uPFwuO37P7QJlHMvt0dvKRYIQgFQg8sh4fsdYClQqqZ52fne37odaAVcPiu_bt_Q?width=450&height=327&cropmode=none" category="Плитка Экология" name="Плитка 'Экология'" price="Цена договорная" />,
                <ItemBox button="Заказать" img="https://lrwmvg.am.files.1drv.com/y4mvEK1bD_uewKSxakGdgV0vqOtv_07ojttf4IMOa9ENbzK8X2HJY-weETqlwrZ7BYNK48n3qDBTctr2H5Zrv1YOvXpaIBpyGbcl-fHKJxvMVkjp0HUKkkKhOaGI1s3NmAu_UlNGMP5GxVrAfEJzVPWuDiokS9F2rg7MnKamHxaKBPCNg-CMDCHODgghSxItIp696lViwuuD1TtlSrGljV4zA?width=1024&height=768&cropmode=none" category="Термофасад" name="Термофасад" price="Цена договорная" />,

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


        const arr = this.state.itemBox
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
                <img className="ItemBox-photo" src={this.props.img} />
                <div className='ItemBox-box'>
                    <div className="ItemBox-box-firstbox">
                        <div className="ItemBox-box-firstbox-name">
                            <div className="ItemBox-box-firstbox-title">{this.props.name}</div>
                            <div className="ItemBox-box-firstbox-desc">{this.props.desc}</div>
                            <div className="ItemBox-box-firstbox-price">{this.props.word} {this.props.price}{this.props.cube} </div>
                        </div>
                    </div>
                    <div className="ItemBox-box-secondbox">
                        <a href='/form'>{this.props.button}</a>
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
            <ItemBox button="Заказать" img="https://lrxmpw.am.files.1drv.com/y4mOMqrxete4qqliyZ-2gx4EK03m1uIS-kIFzwMgK_QSB0vIdl4PuhqFI34n2q5fSW1HQ7VGnFqeCXDUbCF7lBcWKgMakUAPeAUxED7kxrG3ymQSiOVCBeq6oALRVjCkwNCjctIip2_WWPmpYM7FljDeSZ9CSpslzzUryYXQhIS0j7vefhkqyhQh1SGweY3NYMaroWGLyeBeiU2-nGXL0IeRw?width=1280&height=960&cropmode=none" category="Еврозабор" name="Еврозабор" price={285} cube="грн. п.м" word="От" />,
            <ItemBox button="Заказать" img="https://mtlqkg.am.files.1drv.com/y4m7oyi0h_Al-Mp-tbsTbZk021NWwmRhNdMCvGoS76-kDEwaXBOR5K09JHgVmIvPnv82CpcE1ehN13rXYt3s_45TMimH5H5N6_8l9FKyf1d3c1AOV7SKx5wHtgipLTV7Z1HyaFFE5c7Pf2rTAr2mJpX2QbkmrRzp1z-2v10kpb5gW6rASbXR2DP4Flge0gkHroPTOz9EsaFRMNqHtVKj1-gNw?width=1024&height=768&cropmode=none" category="Еврозабор с покраской" name="Еврозабор с покраской" price={75} cube="грн. кв.м" word="От" />,
            <ItemBox button="Заказать" img="https://qv1y8a.am.files.1drv.com/y4mrSrvRUsjSrYRwx4dx-GZSbxXhz4E3VFyHZcH6jOK1-Uq2yry4Kj2T8Uj6Nx6O3x5jSHDTrXGrNKf4ozSQbDiWGB4QidxaAbV3W2hLiiihYqshRbSUlr-hzw5RLcQ4f7JAaUwKHTtz83pHYa1wggCkGtl_-6xIezmtwaJcsEnw0YzLmftjeCxzbkh2iuPTz2cL8kxSouxLFVAfzix9j_D4A?width=3264&height=2448&cropmode=none" category="Секционный металический" name="Забор металл-сетка" price={306} cube="грн. п.м" />,
            <ItemBox button="Заказать" img="https://lrzkrg.am.files.1drv.com/y4mG3x__1G0BNiAPpJ1LhSQ2R4qW_ZbGsOJ62mtJyU87MIMUyWPcCaelys92VkCgmMWHJF8irjRzSIsWyR6IWap0_QBIARM1RbwSSNG2LMSwlZ7TAiao9KeyB0a-VLue9qtcKtLBg_qpSWhd5IAK55Ab3v__eAlWSQ8fNOPMCa1XET4vsnMQCXNobQdSOzJmVtce1kJnK_yOSm5WKPx6rd4yw?width=960&height=720&cropmode=none" category="Сетка рабица" name="Забор сетка рабица" price={140} cube="грн. столб" word="От" />,
            <ItemBox button="Заказать" img="https://a15y8a.am.files.1drv.com/y4m9oJsDpwoUhDzCksCj94ttraUgzk7jNuqrtzzlyF6QGuLTMnxLgWY1tTnSjJ7Y_78qskLmfCcD1oe-a1ghBUoH1mpPgeAW1Tmk73Kj5H6UtoYDnjK4ufacOeqy_OlZnoqReIsqEJJ7lH6sVDhHHPxKvG-qyFGLyxfUp8tgKgTtXVNOGpGSwMa3wvJPNmQ5O7KmV6IugdHUh1alYFq8XFLtA?width=1024&height=498&cropmode=none" category="Комбинированный" name="Еврозабор Комбинированный" price='' cube=" Цена договорная" />,
        
        ]
        this.itemBox1 = [
            <ItemBox button="Заказать" img="https://lrxmpw.am.files.1drv.com/y4mOMqrxete4qqliyZ-2gx4EK03m1uIS-kIFzwMgK_QSB0vIdl4PuhqFI34n2q5fSW1HQ7VGnFqeCXDUbCF7lBcWKgMakUAPeAUxED7kxrG3ymQSiOVCBeq6oALRVjCkwNCjctIip2_WWPmpYM7FljDeSZ9CSpslzzUryYXQhIS0j7vefhkqyhQh1SGweY3NYMaroWGLyeBeiU2-nGXL0IeRw?width=1280&height=960&cropmode=none" category="Еврозабор" name="Еврозабор" price={285} cube="грн. п.м" word="От" />,

        ]
        this.itemBox2 = [
            <ItemBox button="Заказать" img="https://mtlqkg.am.files.1drv.com/y4m7oyi0h_Al-Mp-tbsTbZk021NWwmRhNdMCvGoS76-kDEwaXBOR5K09JHgVmIvPnv82CpcE1ehN13rXYt3s_45TMimH5H5N6_8l9FKyf1d3c1AOV7SKx5wHtgipLTV7Z1HyaFFE5c7Pf2rTAr2mJpX2QbkmrRzp1z-2v10kpb5gW6rASbXR2DP4Flge0gkHroPTOz9EsaFRMNqHtVKj1-gNw?width=1024&height=768&cropmode=none" category="Еврозабор с покраской" name="Еврозабор с покраской" price={75} cube="грн. кв.м" word="От" />,
        ]
        this.itemBox3 = [
            <ItemBox button="Заказать" img="https://qv1y8a.am.files.1drv.com/y4mrSrvRUsjSrYRwx4dx-GZSbxXhz4E3VFyHZcH6jOK1-Uq2yry4Kj2T8Uj6Nx6O3x5jSHDTrXGrNKf4ozSQbDiWGB4QidxaAbV3W2hLiiihYqshRbSUlr-hzw5RLcQ4f7JAaUwKHTtz83pHYa1wggCkGtl_-6xIezmtwaJcsEnw0YzLmftjeCxzbkh2iuPTz2cL8kxSouxLFVAfzix9j_D4A?width=3264&height=2448&cropmode=none" category="Секционный металический" name="Забор металл-сетка" price={306} cube="грн. п.м" />,
        ]
        this.itemBox4 = [
            <ItemBox button="Заказать" img="https://lrzkrg.am.files.1drv.com/y4mG3x__1G0BNiAPpJ1LhSQ2R4qW_ZbGsOJ62mtJyU87MIMUyWPcCaelys92VkCgmMWHJF8irjRzSIsWyR6IWap0_QBIARM1RbwSSNG2LMSwlZ7TAiao9KeyB0a-VLue9qtcKtLBg_qpSWhd5IAK55Ab3v__eAlWSQ8fNOPMCa1XET4vsnMQCXNobQdSOzJmVtce1kJnK_yOSm5WKPx6rd4yw?width=960&height=720&cropmode=none" category="Сетка рабица" name="Забор сетка рабица" price={140} cube="грн. столб" word="От" />,
        ]
        this.itemBox5 = [
            <ItemBox button="Заказать" img="https://a15y8a.am.files.1drv.com/y4m9oJsDpwoUhDzCksCj94ttraUgzk7jNuqrtzzlyF6QGuLTMnxLgWY1tTnSjJ7Y_78qskLmfCcD1oe-a1ghBUoH1mpPgeAW1Tmk73Kj5H6UtoYDnjK4ufacOeqy_OlZnoqReIsqEJJ7lH6sVDhHHPxKvG-qyFGLyxfUp8tgKgTtXVNOGpGSwMa3wvJPNmQ5O7KmV6IugdHUh1alYFq8XFLtA?width=1024&height=498&cropmode=none" category="Комбинированный" name="Еврозабор Комбинированный" price='' cube=" Цена договорная" />,
        ]
        
        this.state = {
            itemBox: [
                <ItemBox button="Заказать" img="https://lrxmpw.am.files.1drv.com/y4mOMqrxete4qqliyZ-2gx4EK03m1uIS-kIFzwMgK_QSB0vIdl4PuhqFI34n2q5fSW1HQ7VGnFqeCXDUbCF7lBcWKgMakUAPeAUxED7kxrG3ymQSiOVCBeq6oALRVjCkwNCjctIip2_WWPmpYM7FljDeSZ9CSpslzzUryYXQhIS0j7vefhkqyhQh1SGweY3NYMaroWGLyeBeiU2-nGXL0IeRw?width=1280&height=960&cropmode=none" category="Еврозабор" name="Еврозабор" price={285} cube="грн. п.м" word="От" />,
                <ItemBox button="Заказать" img="https://mtlqkg.am.files.1drv.com/y4m7oyi0h_Al-Mp-tbsTbZk021NWwmRhNdMCvGoS76-kDEwaXBOR5K09JHgVmIvPnv82CpcE1ehN13rXYt3s_45TMimH5H5N6_8l9FKyf1d3c1AOV7SKx5wHtgipLTV7Z1HyaFFE5c7Pf2rTAr2mJpX2QbkmrRzp1z-2v10kpb5gW6rASbXR2DP4Flge0gkHroPTOz9EsaFRMNqHtVKj1-gNw?width=1024&height=768&cropmode=none" category="Еврозабор с покраской" name="Еврозабор с покраской" price={75} cube="грн. кв.м" word="От" />,
                <ItemBox button="Заказать" img="https://qv1y8a.am.files.1drv.com/y4mrSrvRUsjSrYRwx4dx-GZSbxXhz4E3VFyHZcH6jOK1-Uq2yry4Kj2T8Uj6Nx6O3x5jSHDTrXGrNKf4ozSQbDiWGB4QidxaAbV3W2hLiiihYqshRbSUlr-hzw5RLcQ4f7JAaUwKHTtz83pHYa1wggCkGtl_-6xIezmtwaJcsEnw0YzLmftjeCxzbkh2iuPTz2cL8kxSouxLFVAfzix9j_D4A?width=3264&height=2448&cropmode=none" category="Секционный металический" name="Забор металл-сетка" price={306} cube="грн. п.м" />,
                <ItemBox button="Заказать" img="https://lrzkrg.am.files.1drv.com/y4mG3x__1G0BNiAPpJ1LhSQ2R4qW_ZbGsOJ62mtJyU87MIMUyWPcCaelys92VkCgmMWHJF8irjRzSIsWyR6IWap0_QBIARM1RbwSSNG2LMSwlZ7TAiao9KeyB0a-VLue9qtcKtLBg_qpSWhd5IAK55Ab3v__eAlWSQ8fNOPMCa1XET4vsnMQCXNobQdSOzJmVtce1kJnK_yOSm5WKPx6rd4yw?width=960&height=720&cropmode=none" category="Сетка рабица" name="Забор сетка рабица" price={140} cube="грн. столб" word="От" />,
                <ItemBox button="Заказать" img="https://a15y8a.am.files.1drv.com/y4m9oJsDpwoUhDzCksCj94ttraUgzk7jNuqrtzzlyF6QGuLTMnxLgWY1tTnSjJ7Y_78qskLmfCcD1oe-a1ghBUoH1mpPgeAW1Tmk73Kj5H6UtoYDnjK4ufacOeqy_OlZnoqReIsqEJJ7lH6sVDhHHPxKvG-qyFGLyxfUp8tgKgTtXVNOGpGSwMa3wvJPNmQ5O7KmV6IugdHUh1alYFq8XFLtA?width=1024&height=498&cropmode=none" category="Комбинированный" name="Еврозабор Комбинированный" price='' cube=" Цена договорная" />,
            
            ],
            category: 'all',
        }
        
    }
    FromCheapToExpensive(e){
        e.preventDefault()
        const button = document.getElementsByClassName('Price-button')
        const style = 'Price-button_active'
        
        const button1 = document.getElementsByClassName('MarketMain-filter-button')
        const style1 = 'MarketMain-filter-button_active'

        button1[0].classList.add(style1)
        button1[1].classList.remove(style1)
        button1[2].classList.remove(style1)
        button1[3].classList.remove(style1)
        button1[4].classList.remove(style1)
        button1[5].classList.remove(style1)

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

        const button1 = document.getElementsByClassName('MarketMain-filter-button')
        const style1 = 'MarketMain-filter-button_active'

        button1[0].classList.add(style1)
        button1[1].classList.remove(style1)
        button1[2].classList.remove(style1)
        button1[3].classList.remove(style1)
        button1[4].classList.remove(style1)
        button1[5].classList.remove(style1)

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
            <ItemBox button="Заказать" img="https://lrxfpw.am.files.1drv.com/y4m2NdPlBqFK1GiOW34cToxrAJLE_uBnApzgMI25tHzHAqgaB6ul-VHgkwWIJBIbqf3udZMMBlbOSz0T2dVQNI7G3vx6fSNualr9zQ46vC57aUXVkkdX_rSD-cc_AdbFsYLD4G8UhYovG7hALwFecE2xe2-Kr3A8mu7P5v6PkN3lgJ6SRh5cf4Qz_1dpBbZhtmjIF7WLSZMCguKR86IAj8V-A?width=1024&height=768&cropmode=none" category="Откатные" name="Ворота Откатные" price="Цена договорная" />,
            <ItemBox button="Заказать" img="https://7bnc1w.am.files.1drv.com/y4m0qHjacADBh-1i4VbxwWO_Pq3pgDfjnlnvLqdvlhYBJmwcy5hOwlYMwalH93QkmRdWSozx2-doSiwT7_SpR3Nv-yFbPRow2pbGSjdHUUXmfisGCYCXDzL4HL_myg0Qls2XYKbE6v2zHE3W2jLt_B0bs8pSxpevPNDGr_6R00n9jGqNI0oHh6DIpwelp1K7di7Nz3M95HjuSw6ztbcRrPP5Q?width=800&height=600&cropmode=none" category="Распашные" name="Ворота Распашные" price="Цена договорная" />,
            <ItemBox button="Заказать" img="https://gecgtq.am.files.1drv.com/y4m2IRG7gkX07EzcGnJzSmf2xmOLyrRD0fOFPllpQwdrdSIWem6fbCVbCKK0pG6fH19Klp6jATFs-sCGhMc4sghFLoef8LzBFZy3mSlBrPFVtKz--wLA_So1ChUaWivuHSmmSPWD3YHVceiP95pQwTm8HkaNn89NtZt0dDjKxqoatm6o0Bru3yL9d6CmMjV7puTlI98C-N5SqeXKFhAnUQTGQ?width=1024&height=647&cropmode=none" category="Гаражные" name="Ворота Гаражные" price="Цена договорная" />,

        ]
        this.itemBox1 = [         
            <ItemBox button="Заказать" img="https://lrxfpw.am.files.1drv.com/y4m2NdPlBqFK1GiOW34cToxrAJLE_uBnApzgMI25tHzHAqgaB6ul-VHgkwWIJBIbqf3udZMMBlbOSz0T2dVQNI7G3vx6fSNualr9zQ46vC57aUXVkkdX_rSD-cc_AdbFsYLD4G8UhYovG7hALwFecE2xe2-Kr3A8mu7P5v6PkN3lgJ6SRh5cf4Qz_1dpBbZhtmjIF7WLSZMCguKR86IAj8V-A?width=1024&height=768&cropmode=none" category="Откатные" name="Ворота Откатные" price="Цена договорная" />,
        ]
        this.itemBox2 = [
            <ItemBox button="Заказать" img="https://7bnc1w.am.files.1drv.com/y4m0qHjacADBh-1i4VbxwWO_Pq3pgDfjnlnvLqdvlhYBJmwcy5hOwlYMwalH93QkmRdWSozx2-doSiwT7_SpR3Nv-yFbPRow2pbGSjdHUUXmfisGCYCXDzL4HL_myg0Qls2XYKbE6v2zHE3W2jLt_B0bs8pSxpevPNDGr_6R00n9jGqNI0oHh6DIpwelp1K7di7Nz3M95HjuSw6ztbcRrPP5Q?width=800&height=600&cropmode=none" category="Распашные" name="Ворота Распашные" price="Цена договорная" />,
        ]
        this.itemBox3 = [
            <ItemBox button="Заказать" img="https://gecgtq.am.files.1drv.com/y4m2IRG7gkX07EzcGnJzSmf2xmOLyrRD0fOFPllpQwdrdSIWem6fbCVbCKK0pG6fH19Klp6jATFs-sCGhMc4sghFLoef8LzBFZy3mSlBrPFVtKz--wLA_So1ChUaWivuHSmmSPWD3YHVceiP95pQwTm8HkaNn89NtZt0dDjKxqoatm6o0Bru3yL9d6CmMjV7puTlI98C-N5SqeXKFhAnUQTGQ?width=1024&height=647&cropmode=none" category="Гаражные" name="Ворота Гаражные" price="Цена договорная" />,
        ]

        this.state = {
            itemBox: [
                <ItemBox button="Заказать" img="https://lrxfpw.am.files.1drv.com/y4m2NdPlBqFK1GiOW34cToxrAJLE_uBnApzgMI25tHzHAqgaB6ul-VHgkwWIJBIbqf3udZMMBlbOSz0T2dVQNI7G3vx6fSNualr9zQ46vC57aUXVkkdX_rSD-cc_AdbFsYLD4G8UhYovG7hALwFecE2xe2-Kr3A8mu7P5v6PkN3lgJ6SRh5cf4Qz_1dpBbZhtmjIF7WLSZMCguKR86IAj8V-A?width=1024&height=768&cropmode=none" category="Откатные" name="Ворота Откатные" price="Цена договорная" />,
                <ItemBox button="Заказать" img="https://7bnc1w.am.files.1drv.com/y4m0qHjacADBh-1i4VbxwWO_Pq3pgDfjnlnvLqdvlhYBJmwcy5hOwlYMwalH93QkmRdWSozx2-doSiwT7_SpR3Nv-yFbPRow2pbGSjdHUUXmfisGCYCXDzL4HL_myg0Qls2XYKbE6v2zHE3W2jLt_B0bs8pSxpevPNDGr_6R00n9jGqNI0oHh6DIpwelp1K7di7Nz3M95HjuSw6ztbcRrPP5Q?width=800&height=600&cropmode=none" category="Распашные" name="Ворота Распашные" price="Цена договорная" />,
                <ItemBox button="Заказать" img="https://gecgtq.am.files.1drv.com/y4m2IRG7gkX07EzcGnJzSmf2xmOLyrRD0fOFPllpQwdrdSIWem6fbCVbCKK0pG6fH19Klp6jATFs-sCGhMc4sghFLoef8LzBFZy3mSlBrPFVtKz--wLA_So1ChUaWivuHSmmSPWD3YHVceiP95pQwTm8HkaNn89NtZt0dDjKxqoatm6o0Bru3yL9d6CmMjV7puTlI98C-N5SqeXKFhAnUQTGQ?width=1024&height=647&cropmode=none" category="Гаражные" name="Ворота Гаражные" price="Цена договорная" />,
            ],
        }
        
    }
    FromCheapToExpensive(e){
        e.preventDefault()
        const button = document.getElementsByClassName('Price-button')
        const style = 'Price-button_active'

        const button1 = document.getElementsByClassName('MarketMain-filter-button')
        const style1 = 'MarketMain-filter-button_active'

        button1[0].classList.add(style1)
        button1[1].classList.remove(style1)
        button1[2].classList.remove(style1)
        button1[3].classList.remove(style1)

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

        const button1 = document.getElementsByClassName('MarketMain-filter-button')
        const style1 = 'MarketMain-filter-button_active'

        button1[0].classList.add(style1)
        button1[1].classList.remove(style1)
        button1[2].classList.remove(style1)
        button1[3].classList.remove(style1)

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




        const arr = this.itemBox3
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
                                Ворота откатные
                            </a>
                            <a className="MarketMain-filter-button" onClick={this.ToItemBox2 = this.ToItemBox2.bind(this)} href="/">
                                Ворота роспашные
                            </a>
                            <a className="MarketMain-filter-button" onClick={this.ToItemBox3 = this.ToItemBox3.bind(this)} href="/">
                                Гаражные Ворота
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
class Rolls extends React.Component{
    constructor(){
        super()
        this.itemBox = [
            <ItemBox button="Заказать" img="https://gecsvw.am.files.1drv.com/y4mT1rXcDy64M6meaogUlp4S4cY2sGyQLmrNTaLIOhfXKbqCBDd_6BXosJc8lc-MB2rwGdMc6y-uCpPEZux_MtE3RE7g5U5CPYhxIkqRj9l_K3Q5eQ1Cq3CVmlyAAZlDVQSvnXRKd90NFaLUy_H9nhPP7obL81hODlsvBEupQHm8hljt4t2WMnJ9lxzXT7-nZS5phuLJ5qarA9XL4FNyQVaEw?width=1024&height=852&cropmode=none" category="Откатные" name="Роллеты" price="Цена договорная" />,
        ]
        this.state = {
            itemBox: [
                <ItemBox button="Заказать" img="https://gecsvw.am.files.1drv.com/y4mT1rXcDy64M6meaogUlp4S4cY2sGyQLmrNTaLIOhfXKbqCBDd_6BXosJc8lc-MB2rwGdMc6y-uCpPEZux_MtE3RE7g5U5CPYhxIkqRj9l_K3Q5eQ1Cq3CVmlyAAZlDVQSvnXRKd90NFaLUy_H9nhPP7obL81hODlsvBEupQHm8hljt4t2WMnJ9lxzXT7-nZS5phuLJ5qarA9XL4FNyQVaEw?width=1024&height=852&cropmode=none" category="Откатные" name="Роллеты" price="Цена договорная" />,
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
            <ItemBox button="Рассчитать стоимость" img="https://www.vsv-group.com.ua/wp-content/uploads/2017/12/aljuteh1-450x300.jpg" category="Откатные" name="Автоматика Alutech Roto RTO-500KIT(вес до 500 кг)" desc="комплект привода для откатных ворот" price={7854} cube="грн" />,
            <ItemBox button="Рассчитать стоимость" img="https://www.vsv-group.com.ua/wp-content/uploads/2017/12/aljuteh1-450x300.jpg" category="Откатные" name="Автоматика Alutech Roto RTO-1000KIT(до 1000 кг)" desc="комплект привода для откатных ворот" price={8778} cube="грн" />,
            <ItemBox button="Рассчитать стоимость" img="https://www.vsv-group.com.ua/wp-content/uploads/2017/12/aljuteh1-450x300.jpg" category="Откатные" name="Автоматика Alutech Roto RTO-2000KIT(до 2000 кг)" desc="комплект привода для откатных ворот" price={12243} cube="грн" />,

            <ItemBox button="Рассчитать стоимость" img="https://www.vsv-group.com.ua/wp-content/uploads/2017/12/an-motors-otkatnaja-1-450x300.jpg" category="Откатные" name="Автоматика AN-Motors ASL500Kit(вес до 500 кг)" desc="комплект привода для откатных ворот" price={7145} cube="грн"/>,
            <ItemBox button="Рассчитать стоимость" img="https://www.vsv-group.com.ua/wp-content/uploads/2017/12/an-motors-otkatnaja-1-450x300.jpg" category="Откатные" name="Автоматика AN-Motors ASL1000Kit(вес до 1000 кг)" desc="комплект привода для откатных ворот" price={7999} cube="грн" />,
            <ItemBox button="Рассчитать стоимость" img="https://www.vsv-group.com.ua/wp-content/uploads/2017/12/an-motors-otkatnaja-1-450x300.jpg" category="Откатные" name="Автоматика AN-Motors ASL2000Kit(вес до 2000 кг)" desc="комплект привода для откатных ворот" price={11650} cube="грн" />,
            
            <ItemBox button="Рассчитать стоимость" img="https://www.vsv-group.com.ua/wp-content/uploads/2017/12/komunello-otkatnaja-1-450x300.jpg" category="Откатные" name="Автоматика Comunello Fort 424(вес до 400 кг)" desc="комплект привода для откатных ворот" price={7425} cube="грн" />,
            <ItemBox button="Рассчитать стоимость" img="https://www.vsv-group.com.ua/wp-content/uploads/2017/12/komunello-otkatnaja-1-450x300.jpg" category="Откатные" name="Автоматика Comunello Fort 500(вес до 500 кг)" desc="комплект привода для откатных ворот" price={8415} cube="грн" />,
            <ItemBox button="Рассчитать стоимость" img="https://www.vsv-group.com.ua/wp-content/uploads/2017/12/komunello-otkatnaja-1-450x300.jpg" category="Откатные" name="Автоматика Comunello Fort 624(вес до 600 кг)" desc="комплект привода для откатных ворот" price={8560} cube="грн" />,
            <ItemBox button="Рассчитать стоимость" img="https://www.vsv-group.com.ua/wp-content/uploads/2017/12/komunello-otkatnaja-1-450x300.jpg" category="Откатные" name="Автоматика Comunello Fort 700(вес до 700 кг)" desc="комплект привода для откатных ворот" price={9240} cube="грн" />,
            <ItemBox button="Рассчитать стоимость" img="https://www.vsv-group.com.ua/wp-content/uploads/2017/12/komunello-otkatnaja-1-450x300.jpg" category="Откатные" name="Автоматика Comunello Fort 1000(вес до 1000 кг)" desc="комплект привода для откатных ворот" price={10487} cube="грн" />,

            <ItemBox button="Рассчитать стоимость" img="https://www.vsv-group.com.ua/wp-content/uploads/2017/12/aljuteh1-1-450x300.jpg" category="Откатные" name="Автоматика Alutech Ambio AM-5000KIT" desc="комплект привода для распашных ворот" price={14817} cube="грн" />,
            <ItemBox button="Рассчитать стоимость" img="https://www.vsv-group.com.ua/wp-content/uploads/2017/12/anmotors-raspashnaja-2-450x300.jpg" category="Откатные" name="Комплект автоматики AN-Motors ASW 3000 Kit" desc="комплект привода для распашных ворот" price={13652} cube="грн" />,
            <ItemBox button="Рассчитать стоимость" img="https://www.vsv-group.com.ua/wp-content/uploads/2017/12/anmotors-raspashnaja-2-450x300.jpg" category="Откатные" name="Комплект автоматики AN-Motors ASW 5000 Kit" desc="комплект привода для распашных ворот" price={14276} cube="грн" />,
            <ItemBox button="Рассчитать стоимость" img="https://www.vsv-group.com.ua/wp-content/uploads/2017/12/anmotors-raspashnaja-1-450x300.jpg" category="Откатные" name="Комплект автоматики AN-Motors ASW 4000 Kit" desc="комплект привода для распашных ворот" price={14276} cube="грн" />,
            <ItemBox button="Рассчитать стоимость" img="https://www.vsv-group.com.ua/wp-content/uploads/2016/04/anmotors-raspashnaja-4-450x300.jpg" category="Откатные" name="Комплект автоматики AN-Motors ASW 5000" desc="комплект привода для распашных ворот" price={6306} cube="грн" />,
            <ItemBox button="Рассчитать стоимость" img="https://www.vsv-group.com.ua/wp-content/uploads/2016/04/anmotors-raspashnaja-5-450x300.jpg" category="Откатные" name="Комплект автоматики AN-Motors ASW 4000" desc="комплект привода для распашных ворот" price={6623} cube="грн" />,
            <ItemBox button="Рассчитать стоимость" img="https://www.vsv-group.com.ua/wp-content/uploads/2017/12/komunello-raspashnye-1-450x300.jpg" category="Откатные" name="Автоматика Comunello Abacus 224" desc="комплект привода для распашных ворот" price={13200} cube="грн" />,
            <ItemBox button="Рассчитать стоимость" img="https://www.vsv-group.com.ua/wp-content/uploads/2017/12/komunello-raspashnye-1-450x300.jpg" category="Откатные" name="Автоматика Comunello Abacus 300" desc="комплект привода для распашных ворот" price={14520} cube="грн" />,
            <ItemBox button="Рассчитать стоимость" img="https://www.vsv-group.com.ua/wp-content/uploads/2017/12/komunello-raspashnye-1-450x300.jpg" category="Откатные" name="Автоматика Comunello Abacus 500" desc="комплект привода для распашных ворот" price={16338} cube="грн" />,

            <ItemBox button="Рассчитать стоимость" img="https://www.vsv-group.com.ua/wp-content/uploads/2018/07/aljuteh-garazhnaja-450x300.jpg" name="Автоматика Alutech Levigato LG-800*" desc="привод для гаражных ворот" price={4191} cube="грн" />,
            <ItemBox button="Рассчитать стоимость" img="https://www.vsv-group.com.ua/wp-content/uploads/2018/07/aljuteh-garazhnaja-450x300.jpg" name="Автоматика Alutech Levigato LG-1000f*" desc="привод для скоростных гаражных ворот" price={5148} cube="грн" />,
            <ItemBox button="Рассчитать стоимость" img="https://www.vsv-group.com.ua/wp-content/uploads/2018/07/aljuteh-garazhnaja-450x300.jpg" name="Автоматика Alutech Levigato LG-1200*" desc="привод для гаражных ворот" price={4653} cube="грн" />,
            <ItemBox button="Рассчитать стоимость" img="https://www.vsv-group.com.ua/wp-content/uploads/2018/07/aljuteh-garazhnaja-450x300.jpg" name="Автоматика Alutech Levigato LG-600f*" desc="привод для скоростных гаражных ворот" price={4653} cube="грн" />,
            <ItemBox button="Рассчитать стоимость" img="https://www.vsv-group.com.ua/wp-content/uploads/2018/07/an-motors-garazhnaja-1-450x300.jpg" name="AN-Motors ASG600 3KIT-L" desc="комплект привода для гаражных ворот" price={4340} cube="грн" />,
            <ItemBox button="Рассчитать стоимость" img="https://www.vsv-group.com.ua/wp-content/uploads/2018/07/an-motors-garazhnaja-1-450x300.jpg" name="AN-Motors ASG1000 3KIT-L" desc="комплект привода для гаражных ворот" price={4613} cube="грн" />,
            <ItemBox button="Рассчитать стоимость" img="https://www.vsv-group.com.ua/wp-content/uploads/2018/07/an-motors-garazhnaja-1-450x300.jpg" name="AN-Motors ASG1000 4KIT" desc="комплект привода для гаражных ворот" price={4848} cube="грн" />,
            <ItemBox button="Рассчитать стоимость" img="https://www.vsv-group.com.ua/wp-content/uploads/2018/07/komunello-garazhnaja-1-450x300.jpg" name="Автоматика Comunello Rampart 600" desc="привод для гаражных ворот" price={7425} cube="грн" />,
            <ItemBox button="Рассчитать стоимость" img="https://www.vsv-group.com.ua/wp-content/uploads/2018/07/komunello-garazhnaja-1-450x300.jpg" name="Автоматика Comunello Rampart 600 L" desc="привод для гаражных ворот" price={7590} cube="грн" />,
            <ItemBox button="Рассчитать стоимость" img="https://www.vsv-group.com.ua/wp-content/uploads/2018/07/komunello-garazhnaja-1-450x300.jpg" name="Автоматика Comunello Rampart 1000L" desc="привод для гаражных ворот" price={8085} cube="грн" />,
            <ItemBox button="Рассчитать стоимость" img="https://www.vsv-group.com.ua/wp-content/uploads/2018/07/komunello-garazhnaja-1-450x300.jpg" name="Автоматика Comunello Rampart 1000" desc="привод для гаражных ворот" price={7920} cube="грн" />,

            <ItemBox button="Рассчитать стоимость" img="https://www.vsv-group.com.ua/wp-content/uploads/2017/12/aljuteh1-2-450x300.jpg" name="Автоматика Alutech Targo TR-3531-230KIT" desc="привод для промышленных ворот" price={10527} cube="грн" />,
            <ItemBox button="Рассчитать стоимость" img="https://www.vsv-group.com.ua/wp-content/uploads/2017/12/aljuteh1-2-450x300.jpg" name="Автоматика Alutech Targo TR-5024-230KIT" desc="привод для промышленных ворот" price={12177} cube="грн" />,
            <ItemBox button="Рассчитать стоимость" img="https://www.vsv-group.com.ua/wp-content/uploads/2017/12/aljuteh1-2-450x300.jpg" name="Автоматика Alutech Targo TR-5024-400KIT" desc="привод для промышленных ворот" price={14784} cube="грн" />,
            <ItemBox button="Рассчитать стоимость" img="https://www.vsv-group.com.ua/wp-content/uploads/2017/12/aljuteh1-2-450x300.jpg" name="Автоматика Alutech Targo TR-10024-400KIT" desc="привод для промышленных ворот" price={16401} cube="грн" />,
            <ItemBox button="Рассчитать стоимость" img="https://www.vsv-group.com.ua/wp-content/uploads/2017/12/aljuteh1-2-450x300.jpg" name="Автоматика Alutech Targo TR-13018-400KIT" desc="привод для промышленных ворот" price={16830} cube="грн" />,

            <ItemBox button="Рассчитать стоимость" img="https://www.vsv-group.com.ua/wp-content/uploads/2020/04/pult-komunello-2.jpg" name="Пульты дистанционного управления" desc="Alutech" price="Цена договорная"/>,
            <ItemBox button="Рассчитать стоимость" img="https://www.vsv-group.com.ua/wp-content/uploads/2020/04/pult-anmotors-2.jpg" name="Пульты дистанционного управления" desc="An-Motors" price="Цена договорная"/>,
            <ItemBox button="Рассчитать стоимость" img="https://www.vsv-group.com.ua/wp-content/uploads/2020/04/pult-komunello.jpg" name="Пульты дистанционного управления" desc="Comunello" price="Цена договорная"/>,

            <ItemBox button="Рассчитать стоимость" img="https://www.vsv-group.com.ua/wp-content/uploads/2020/04/fotojelementy-aljuteh.jpg" name="Фотоэлементы(датчики) для ворот" desc="Alutech" price="Цена договорная"/>,
            <ItemBox button="Рассчитать стоимость" img="https://www.vsv-group.com.ua/wp-content/uploads/2020/04/fotojelementy-anmotors.jpg" name="Фотоэлементы(датчики) для ворот" desc="An-Motors" price="Цена договорная"/>,
            <ItemBox button="Рассчитать стоимость" img="https://www.vsv-group.com.ua/wp-content/uploads/2020/04/fotojelementy-komunello.jpg" name="Фотоэлементы(датчики) для ворот" desc="Comunello" price="Цена договорная"/>,
            
            <ItemBox button="Рассчитать стоимость" img="https://www.vsv-group.com.ua/wp-content/uploads/2020/04/signalnaja-lampa-aljuteh.jpg" name="Сигнальные лампы" desc="Alutech" price="Цена договорная"/>,
            <ItemBox button="Рассчитать стоимость" img="https://www.vsv-group.com.ua/wp-content/uploads/2020/04/signalnaja-lampa-anmotors..jpg" name="Сигнальные лампы" desc="An-Motors" price="Цена договорная"/>,
            <ItemBox button="Рассчитать стоимость" img="https://www.vsv-group.com.ua/wp-content/uploads/2020/04/signalnaja-lampa-komunello.jpg" name="Сигнальные лампы" desc="Comunello" price="Цена договорная"/>,
        ]
        this.itemBox1 = [         
            <ItemBox button="Рассчитать стоимость" img="https://www.vsv-group.com.ua/wp-content/uploads/2017/12/aljuteh1-450x300.jpg" category="Откатные" name="Автоматика Alutech Roto RTO-500KIT(вес до 500 кг)" desc="комплект привода для откатных ворот" price={7854} cube="грн" />,
            <ItemBox button="Рассчитать стоимость" img="https://www.vsv-group.com.ua/wp-content/uploads/2017/12/aljuteh1-450x300.jpg" category="Откатные" name="Автоматика Alutech Roto RTO-1000KIT(до 1000 кг)" desc="комплект привода для откатных ворот" price={8778} cube="грн" />,
            <ItemBox button="Рассчитать стоимость" img="https://www.vsv-group.com.ua/wp-content/uploads/2017/12/aljuteh1-450x300.jpg" category="Откатные" name="Автоматика Alutech Roto RTO-2000KIT(до 2000 кг)" desc="комплект привода для откатных ворот" price={12243} cube="грн" />,

            <ItemBox button="Рассчитать стоимость" img="https://www.vsv-group.com.ua/wp-content/uploads/2017/12/an-motors-otkatnaja-1-450x300.jpg" category="Откатные" name="Автоматика AN-Motors ASL500Kit(вес до 500 кг)" desc="комплект привода для откатных ворот" price={7145} cube="грн"/>,
            <ItemBox button="Рассчитать стоимость" img="https://www.vsv-group.com.ua/wp-content/uploads/2017/12/an-motors-otkatnaja-1-450x300.jpg" category="Откатные" name="Автоматика AN-Motors ASL1000Kit(вес до 1000 кг)" desc="комплект привода для откатных ворот" price={7999} cube="грн" />,
            <ItemBox button="Рассчитать стоимость" img="https://www.vsv-group.com.ua/wp-content/uploads/2017/12/an-motors-otkatnaja-1-450x300.jpg" category="Откатные" name="Автоматика AN-Motors ASL2000Kit(вес до 2000 кг)" desc="комплект привода для откатных ворот" price={11650} cube="грн" />,
            
            <ItemBox button="Рассчитать стоимость" img="https://www.vsv-group.com.ua/wp-content/uploads/2017/12/komunello-otkatnaja-1-450x300.jpg" category="Откатные" name="Автоматика Comunello Fort 424(вес до 400 кг)" desc="комплект привода для откатных ворот" price={7425} cube="грн" />,
            <ItemBox button="Рассчитать стоимость" img="https://www.vsv-group.com.ua/wp-content/uploads/2017/12/komunello-otkatnaja-1-450x300.jpg" category="Откатные" name="Автоматика Comunello Fort 500(вес до 500 кг)" desc="комплект привода для откатных ворот" price={8415} cube="грн" />,
            <ItemBox button="Рассчитать стоимость" img="https://www.vsv-group.com.ua/wp-content/uploads/2017/12/komunello-otkatnaja-1-450x300.jpg" category="Откатные" name="Автоматика Comunello Fort 624(вес до 600 кг)" desc="комплект привода для откатных ворот" price={8560} cube="грн" />,
            <ItemBox button="Рассчитать стоимость" img="https://www.vsv-group.com.ua/wp-content/uploads/2017/12/komunello-otkatnaja-1-450x300.jpg" category="Откатные" name="Автоматика Comunello Fort 700(вес до 700 кг)" desc="комплект привода для откатных ворот" price={9240} cube="грн" />,
            <ItemBox button="Рассчитать стоимость" img="https://www.vsv-group.com.ua/wp-content/uploads/2017/12/komunello-otkatnaja-1-450x300.jpg" category="Откатные" name="Автоматика Comunello Fort 1000(вес до 1000 кг)" desc="комплект привода для откатных ворот" price={10487} cube="грн" />,
        ]
        this.itemBox2 = [
            <ItemBox button="Рассчитать стоимость" img="https://www.vsv-group.com.ua/wp-content/uploads/2017/12/aljuteh1-1-450x300.jpg" category="Откатные" name="Автоматика Alutech Ambio AM-5000KIT" desc="комплект привода для распашных ворот" price={14817} cube="грн" />,
            <ItemBox button="Рассчитать стоимость" img="https://www.vsv-group.com.ua/wp-content/uploads/2017/12/anmotors-raspashnaja-2-450x300.jpg" category="Откатные" name="Комплект автоматики AN-Motors ASW 3000 Kit" desc="комплект привода для распашных ворот" price={13652} cube="грн" />,
            <ItemBox button="Рассчитать стоимость" img="https://www.vsv-group.com.ua/wp-content/uploads/2017/12/anmotors-raspashnaja-2-450x300.jpg" category="Откатные" name="Комплект автоматики AN-Motors ASW 5000 Kit" desc="комплект привода для распашных ворот" price={14276} cube="грн" />,
            <ItemBox button="Рассчитать стоимость" img="https://www.vsv-group.com.ua/wp-content/uploads/2017/12/anmotors-raspashnaja-1-450x300.jpg" category="Откатные" name="Комплект автоматики AN-Motors ASW 4000 Kit" desc="комплект привода для распашных ворот" price={14276} cube="грн" />,
            <ItemBox button="Рассчитать стоимость" img="https://www.vsv-group.com.ua/wp-content/uploads/2016/04/anmotors-raspashnaja-4-450x300.jpg" category="Откатные" name="Комплект автоматики AN-Motors ASW 5000" desc="комплект привода для распашных ворот" price={6306} cube="грн" />,
            <ItemBox button="Рассчитать стоимость" img="https://www.vsv-group.com.ua/wp-content/uploads/2016/04/anmotors-raspashnaja-5-450x300.jpg" category="Откатные" name="Комплект автоматики AN-Motors ASW 4000" desc="комплект привода для распашных ворот" price={6623} cube="грн" />,
            <ItemBox button="Рассчитать стоимость" img="https://www.vsv-group.com.ua/wp-content/uploads/2017/12/komunello-raspashnye-1-450x300.jpg" category="Откатные" name="Автоматика Comunello Abacus 224" desc="комплект привода для распашных ворот" price={13200} cube="грн" />,
            <ItemBox button="Рассчитать стоимость" img="https://www.vsv-group.com.ua/wp-content/uploads/2017/12/komunello-raspashnye-1-450x300.jpg" category="Откатные" name="Автоматика Comunello Abacus 300" desc="комплект привода для распашных ворот" price={14520} cube="грн" />,
            <ItemBox button="Рассчитать стоимость" img="https://www.vsv-group.com.ua/wp-content/uploads/2017/12/komunello-raspashnye-1-450x300.jpg" category="Откатные" name="Автоматика Comunello Abacus 500" desc="комплект привода для распашных ворот" price={16338} cube="грн" />,
        ]
        this.itemBox3 = [
            <ItemBox button="Рассчитать стоимость" img="https://www.vsv-group.com.ua/wp-content/uploads/2018/07/aljuteh-garazhnaja-450x300.jpg" name="Автоматика Alutech Levigato LG-800*" desc="привод для гаражных ворот" price={4191} cube="грн" />,
            <ItemBox button="Рассчитать стоимость" img="https://www.vsv-group.com.ua/wp-content/uploads/2018/07/aljuteh-garazhnaja-450x300.jpg" name="Автоматика Alutech Levigato LG-1000f*" desc="привод для скоростных гаражных ворот" price={5148} cube="грн" />,
            <ItemBox button="Рассчитать стоимость" img="https://www.vsv-group.com.ua/wp-content/uploads/2018/07/aljuteh-garazhnaja-450x300.jpg" name="Автоматика Alutech Levigato LG-1200*" desc="привод для гаражных ворот" price={4653} cube="грн" />,
            <ItemBox button="Рассчитать стоимость" img="https://www.vsv-group.com.ua/wp-content/uploads/2018/07/aljuteh-garazhnaja-450x300.jpg" name="Автоматика Alutech Levigato LG-600f*" desc="привод для скоростных гаражных ворот" price={4653} cube="грн" />,
            <ItemBox button="Рассчитать стоимость" img="https://www.vsv-group.com.ua/wp-content/uploads/2018/07/an-motors-garazhnaja-1-450x300.jpg" name="AN-Motors ASG600 3KIT-L" desc="комплект привода для гаражных ворот" price={4340} cube="грн" />,
            <ItemBox button="Рассчитать стоимость" img="https://www.vsv-group.com.ua/wp-content/uploads/2018/07/an-motors-garazhnaja-1-450x300.jpg" name="AN-Motors ASG1000 3KIT-L" desc="комплект привода для гаражных ворот" price={4613} cube="грн" />,
            <ItemBox button="Рассчитать стоимость" img="https://www.vsv-group.com.ua/wp-content/uploads/2018/07/an-motors-garazhnaja-1-450x300.jpg" name="AN-Motors ASG1000 4KIT" desc="комплект привода для гаражных ворот" price={4848} cube="грн" />,
            <ItemBox button="Рассчитать стоимость" img="https://www.vsv-group.com.ua/wp-content/uploads/2018/07/komunello-garazhnaja-1-450x300.jpg" name="Автоматика Comunello Rampart 600" desc="привод для гаражных ворот" price={7425} cube="грн" />,
            <ItemBox button="Рассчитать стоимость" img="https://www.vsv-group.com.ua/wp-content/uploads/2018/07/komunello-garazhnaja-1-450x300.jpg" name="Автоматика Comunello Rampart 600 L" desc="привод для гаражных ворот" price={7590} cube="грн" />,
            <ItemBox button="Рассчитать стоимость" img="https://www.vsv-group.com.ua/wp-content/uploads/2018/07/komunello-garazhnaja-1-450x300.jpg" name="Автоматика Comunello Rampart 1000L" desc="привод для гаражных ворот" price={8085} cube="грн" />,
            <ItemBox button="Рассчитать стоимость" img="https://www.vsv-group.com.ua/wp-content/uploads/2018/07/komunello-garazhnaja-1-450x300.jpg" name="Автоматика Comunello Rampart 1000" desc="привод для гаражных ворот" price={7920} cube="грн" />,
        ]
        this.itemBox4 = [
            <ItemBox button="Рассчитать стоимость" img="https://www.vsv-group.com.ua/wp-content/uploads/2017/12/aljuteh1-2-450x300.jpg" name="Автоматика Alutech Targo TR-3531-230KIT" desc="привод для промышленных ворот" price={10527} cube="грн" />,
            <ItemBox button="Рассчитать стоимость" img="https://www.vsv-group.com.ua/wp-content/uploads/2017/12/aljuteh1-2-450x300.jpg" name="Автоматика Alutech Targo TR-5024-230KIT" desc="привод для промышленных ворот" price={12177} cube="грн" />,
            <ItemBox button="Рассчитать стоимость" img="https://www.vsv-group.com.ua/wp-content/uploads/2017/12/aljuteh1-2-450x300.jpg" name="Автоматика Alutech Targo TR-5024-400KIT" desc="привод для промышленных ворот" price={14784} cube="грн" />,
            <ItemBox button="Рассчитать стоимость" img="https://www.vsv-group.com.ua/wp-content/uploads/2017/12/aljuteh1-2-450x300.jpg" name="Автоматика Alutech Targo TR-10024-400KIT" desc="привод для промышленных ворот" price={16401} cube="грн" />,
            <ItemBox button="Рассчитать стоимость" img="https://www.vsv-group.com.ua/wp-content/uploads/2017/12/aljuteh1-2-450x300.jpg" name="Автоматика Alutech Targo TR-13018-400KIT" desc="привод для промышленных ворот" price={16830} cube="грн" />,
        ]
        this.itemBox5 = [         
            <ItemBox button="Рассчитать стоимость" img="https://www.vsv-group.com.ua/wp-content/uploads/2020/04/pult-komunello-2.jpg" name="Пульты дистанционного управления" desc="Alutech" price="Цена договорная"/>,
            <ItemBox button="Рассчитать стоимость" img="https://www.vsv-group.com.ua/wp-content/uploads/2020/04/pult-anmotors-2.jpg" name="Пульты дистанционного управления" desc="An-Motors" price="Цена договорная"/>,
            <ItemBox button="Рассчитать стоимость" img="https://www.vsv-group.com.ua/wp-content/uploads/2020/04/pult-komunello.jpg" name="Пульты дистанционного управления" desc="Comunello" price="Цена договорная"/>,
        ]
        this.itemBox6 = [
            <ItemBox button="Рассчитать стоимость" img="https://www.vsv-group.com.ua/wp-content/uploads/2020/04/fotojelementy-aljuteh.jpg" name="Фотоэлементы(датчики) для ворот" desc="Alutech" price="Цена договорная"/>,
            <ItemBox button="Рассчитать стоимость" img="https://www.vsv-group.com.ua/wp-content/uploads/2020/04/fotojelementy-anmotors.jpg" name="Фотоэлементы(датчики) для ворот" desc="An-Motors" price="Цена договорная"/>,
            <ItemBox button="Рассчитать стоимость" img="https://www.vsv-group.com.ua/wp-content/uploads/2020/04/fotojelementy-komunello.jpg" name="Фотоэлементы(датчики) для ворот" desc="Comunello" price="Цена договорная"/>,
        ]
        this.itemBox8 = [
            <ItemBox button="Рассчитать стоимость" img="https://www.vsv-group.com.ua/wp-content/uploads/2020/04/signalnaja-lampa-aljuteh.jpg" name="Сигнальные лампы" desc="Alutech" price="Цена договорная"/>,
            <ItemBox button="Рассчитать стоимость" img="https://www.vsv-group.com.ua/wp-content/uploads/2020/04/signalnaja-lampa-anmotors..jpg" name="Сигнальные лампы" desc="An-Motors" price="Цена договорная"/>,
            <ItemBox button="Рассчитать стоимость" img="https://www.vsv-group.com.ua/wp-content/uploads/2020/04/signalnaja-lampa-komunello.jpg" name="Сигнальные лампы" desc="Comunello" price="Цена договорная"/>,
        ]
        this.state = {
            itemBox: [
                <ItemBox button="Рассчитать стоимость" img="https://www.vsv-group.com.ua/wp-content/uploads/2017/12/aljuteh1-450x300.jpg" category="Откатные" name="Автоматика Alutech Roto RTO-500KIT(вес до 500 кг)" desc="комплект привода для откатных ворот" price={7854} cube="грн" />,
                <ItemBox button="Рассчитать стоимость" img="https://www.vsv-group.com.ua/wp-content/uploads/2017/12/aljuteh1-450x300.jpg" category="Откатные" name="Автоматика Alutech Roto RTO-1000KIT(до 1000 кг)" desc="комплект привода для откатных ворот" price={8778} cube="грн" />,
                <ItemBox button="Рассчитать стоимость" img="https://www.vsv-group.com.ua/wp-content/uploads/2017/12/aljuteh1-450x300.jpg" category="Откатные" name="Автоматика Alutech Roto RTO-2000KIT(до 2000 кг)" desc="комплект привода для откатных ворот" price={12243} cube="грн" />,

                <ItemBox button="Рассчитать стоимость" img="https://www.vsv-group.com.ua/wp-content/uploads/2017/12/an-motors-otkatnaja-1-450x300.jpg" category="Откатные" name="Автоматика AN-Motors ASL500Kit(вес до 500 кг)" desc="комплект привода для откатных ворот" price={7145} cube="грн"/>,
                <ItemBox button="Рассчитать стоимость" img="https://www.vsv-group.com.ua/wp-content/uploads/2017/12/an-motors-otkatnaja-1-450x300.jpg" category="Откатные" name="Автоматика AN-Motors ASL1000Kit(вес до 1000 кг)" desc="комплект привода для откатных ворот" price={7999} cube="грн" />,
                <ItemBox button="Рассчитать стоимость" img="https://www.vsv-group.com.ua/wp-content/uploads/2017/12/an-motors-otkatnaja-1-450x300.jpg" category="Откатные" name="Автоматика AN-Motors ASL2000Kit(вес до 2000 кг)" desc="комплект привода для откатных ворот" price={11650} cube="грн" />,
                
                <ItemBox button="Рассчитать стоимость" img="https://www.vsv-group.com.ua/wp-content/uploads/2017/12/komunello-otkatnaja-1-450x300.jpg" category="Откатные" name="Автоматика Comunello Fort 424(вес до 400 кг)" desc="комплект привода для откатных ворот" price={7425} cube="грн" />,
                <ItemBox button="Рассчитать стоимость" img="https://www.vsv-group.com.ua/wp-content/uploads/2017/12/komunello-otkatnaja-1-450x300.jpg" category="Откатные" name="Автоматика Comunello Fort 500(вес до 500 кг)" desc="комплект привода для откатных ворот" price={8415} cube="грн" />,
                <ItemBox button="Рассчитать стоимость" img="https://www.vsv-group.com.ua/wp-content/uploads/2017/12/komunello-otkatnaja-1-450x300.jpg" category="Откатные" name="Автоматика Comunello Fort 624(вес до 600 кг)" desc="комплект привода для откатных ворот" price={8560} cube="грн" />,
                <ItemBox button="Рассчитать стоимость" img="https://www.vsv-group.com.ua/wp-content/uploads/2017/12/komunello-otkatnaja-1-450x300.jpg" category="Откатные" name="Автоматика Comunello Fort 700(вес до 700 кг)" desc="комплект привода для откатных ворот" price={9240} cube="грн" />,
                <ItemBox button="Рассчитать стоимость" img="https://www.vsv-group.com.ua/wp-content/uploads/2017/12/komunello-otkatnaja-1-450x300.jpg" category="Откатные" name="Автоматика Comunello Fort 1000(вес до 1000 кг)" desc="комплект привода для откатных ворот" price={10487} cube="грн" />,

                <ItemBox button="Рассчитать стоимость" img="https://www.vsv-group.com.ua/wp-content/uploads/2017/12/aljuteh1-1-450x300.jpg" category="Откатные" name="Автоматика Alutech Ambio AM-5000KIT" desc="комплект привода для распашных ворот" price={14817} cube="грн" />,
                <ItemBox button="Рассчитать стоимость" img="https://www.vsv-group.com.ua/wp-content/uploads/2017/12/anmotors-raspashnaja-2-450x300.jpg" category="Откатные" name="Комплект автоматики AN-Motors ASW 3000 Kit" desc="комплект привода для распашных ворот" price={13652} cube="грн" />,
                <ItemBox button="Рассчитать стоимость" img="https://www.vsv-group.com.ua/wp-content/uploads/2017/12/anmotors-raspashnaja-2-450x300.jpg" category="Откатные" name="Комплект автоматики AN-Motors ASW 5000 Kit" desc="комплект привода для распашных ворот" price={14276} cube="грн" />,
                <ItemBox button="Рассчитать стоимость" img="https://www.vsv-group.com.ua/wp-content/uploads/2017/12/anmotors-raspashnaja-1-450x300.jpg" category="Откатные" name="Комплект автоматики AN-Motors ASW 4000 Kit" desc="комплект привода для распашных ворот" price={14276} cube="грн" />,
                <ItemBox button="Рассчитать стоимость" img="https://www.vsv-group.com.ua/wp-content/uploads/2016/04/anmotors-raspashnaja-4-450x300.jpg" category="Откатные" name="Комплект автоматики AN-Motors ASW 5000" desc="комплект привода для распашных ворот" price={6306} cube="грн" />,
                <ItemBox button="Рассчитать стоимость" img="https://www.vsv-group.com.ua/wp-content/uploads/2016/04/anmotors-raspashnaja-5-450x300.jpg" category="Откатные" name="Комплект автоматики AN-Motors ASW 4000" desc="комплект привода для распашных ворот" price={6623} cube="грн" />,
                <ItemBox button="Рассчитать стоимость" img="https://www.vsv-group.com.ua/wp-content/uploads/2017/12/komunello-raspashnye-1-450x300.jpg" category="Откатные" name="Автоматика Comunello Abacus 224" desc="комплект привода для распашных ворот" price={13200} cube="грн" />,
                <ItemBox button="Рассчитать стоимость" img="https://www.vsv-group.com.ua/wp-content/uploads/2017/12/komunello-raspashnye-1-450x300.jpg" category="Откатные" name="Автоматика Comunello Abacus 300" desc="комплект привода для распашных ворот" price={14520} cube="грн" />,
                <ItemBox button="Рассчитать стоимость" img="https://www.vsv-group.com.ua/wp-content/uploads/2017/12/komunello-raspashnye-1-450x300.jpg" category="Откатные" name="Автоматика Comunello Abacus 500" desc="комплект привода для распашных ворот" price={16338} cube="грн" />,

                <ItemBox button="Рассчитать стоимость" img="https://www.vsv-group.com.ua/wp-content/uploads/2018/07/aljuteh-garazhnaja-450x300.jpg" name="Автоматика Alutech Levigato LG-800*" desc="привод для гаражных ворот" price={4191} cube="грн" />,
                <ItemBox button="Рассчитать стоимость" img="https://www.vsv-group.com.ua/wp-content/uploads/2018/07/aljuteh-garazhnaja-450x300.jpg" name="Автоматика Alutech Levigato LG-1000f*" desc="привод для скоростных гаражных ворот" price={5148} cube="грн" />,
                <ItemBox button="Рассчитать стоимость" img="https://www.vsv-group.com.ua/wp-content/uploads/2018/07/aljuteh-garazhnaja-450x300.jpg" name="Автоматика Alutech Levigato LG-1200*" desc="привод для гаражных ворот" price={4653} cube="грн" />,
                <ItemBox button="Рассчитать стоимость" img="https://www.vsv-group.com.ua/wp-content/uploads/2018/07/aljuteh-garazhnaja-450x300.jpg" name="Автоматика Alutech Levigato LG-600f*" desc="привод для скоростных гаражных ворот" price={4653} cube="грн" />,
                <ItemBox button="Рассчитать стоимость" img="https://www.vsv-group.com.ua/wp-content/uploads/2018/07/an-motors-garazhnaja-1-450x300.jpg" name="AN-Motors ASG600 3KIT-L" desc="комплект привода для гаражных ворот" price={4340} cube="грн" />,
                <ItemBox button="Рассчитать стоимость" img="https://www.vsv-group.com.ua/wp-content/uploads/2018/07/an-motors-garazhnaja-1-450x300.jpg" name="AN-Motors ASG1000 3KIT-L" desc="комплект привода для гаражных ворот" price={4613} cube="грн" />,
                <ItemBox button="Рассчитать стоимость" img="https://www.vsv-group.com.ua/wp-content/uploads/2018/07/an-motors-garazhnaja-1-450x300.jpg" name="AN-Motors ASG1000 4KIT" desc="комплект привода для гаражных ворот" price={4848} cube="грн" />,
                <ItemBox button="Рассчитать стоимость" img="https://www.vsv-group.com.ua/wp-content/uploads/2018/07/komunello-garazhnaja-1-450x300.jpg" name="Автоматика Comunello Rampart 600" desc="привод для гаражных ворот" price={7425} cube="грн" />,
                <ItemBox button="Рассчитать стоимость" img="https://www.vsv-group.com.ua/wp-content/uploads/2018/07/komunello-garazhnaja-1-450x300.jpg" name="Автоматика Comunello Rampart 600 L" desc="привод для гаражных ворот" price={7590} cube="грн" />,
                <ItemBox button="Рассчитать стоимость" img="https://www.vsv-group.com.ua/wp-content/uploads/2018/07/komunello-garazhnaja-1-450x300.jpg" name="Автоматика Comunello Rampart 1000L" desc="привод для гаражных ворот" price={8085} cube="грн" />,
                <ItemBox button="Рассчитать стоимость" img="https://www.vsv-group.com.ua/wp-content/uploads/2018/07/komunello-garazhnaja-1-450x300.jpg" name="Автоматика Comunello Rampart 1000" desc="привод для гаражных ворот" price={7920} cube="грн" />,

                <ItemBox button="Рассчитать стоимость" img="https://www.vsv-group.com.ua/wp-content/uploads/2017/12/aljuteh1-2-450x300.jpg" name="Автоматика Alutech Targo TR-3531-230KIT" desc="привод для промышленных ворот" price={10527} cube="грн" />,
                <ItemBox button="Рассчитать стоимость" img="https://www.vsv-group.com.ua/wp-content/uploads/2017/12/aljuteh1-2-450x300.jpg" name="Автоматика Alutech Targo TR-5024-230KIT" desc="привод для промышленных ворот" price={12177} cube="грн" />,
                <ItemBox button="Рассчитать стоимость" img="https://www.vsv-group.com.ua/wp-content/uploads/2017/12/aljuteh1-2-450x300.jpg" name="Автоматика Alutech Targo TR-5024-400KIT" desc="привод для промышленных ворот" price={14784} cube="грн" />,
                <ItemBox button="Рассчитать стоимость" img="https://www.vsv-group.com.ua/wp-content/uploads/2017/12/aljuteh1-2-450x300.jpg" name="Автоматика Alutech Targo TR-10024-400KIT" desc="привод для промышленных ворот" price={16401} cube="грн" />,
                <ItemBox button="Рассчитать стоимость" img="https://www.vsv-group.com.ua/wp-content/uploads/2017/12/aljuteh1-2-450x300.jpg" name="Автоматика Alutech Targo TR-13018-400KIT" desc="привод для промышленных ворот" price={16830} cube="грн" />,

                
                <ItemBox button="Рассчитать стоимость" img="https://www.vsv-group.com.ua/wp-content/uploads/2020/04/pult-komunello-2.jpg" name="Пульты дистанционного управления" desc="Alutech" price="Цена договорная"/>,
                <ItemBox button="Рассчитать стоимость" img="https://www.vsv-group.com.ua/wp-content/uploads/2020/04/pult-anmotors-2.jpg" name="Пульты дистанционного управления" desc="An-Motors" price="Цена договорная"/>,
                <ItemBox button="Рассчитать стоимость" img="https://www.vsv-group.com.ua/wp-content/uploads/2020/04/pult-komunello.jpg" name="Пульты дистанционного управления" desc="Comunello" price="Цена договорная"/>,

            
                <ItemBox button="Рассчитать стоимость" img="https://www.vsv-group.com.ua/wp-content/uploads/2020/04/fotojelementy-aljuteh.jpg" name="Фотоэлементы(датчики) для ворот" desc="Alutech" price="Цена договорная"/>,
                <ItemBox button="Рассчитать стоимость" img="https://www.vsv-group.com.ua/wp-content/uploads/2020/04/fotojelementy-anmotors.jpg" name="Фотоэлементы(датчики) для ворот" desc="An-Motors" price="Цена договорная"/>,
                <ItemBox button="Рассчитать стоимость" img="https://www.vsv-group.com.ua/wp-content/uploads/2020/04/fotojelementy-komunello.jpg" name="Фотоэлементы(датчики) для ворот" desc="Comunello" price="Цена договорная"/>,

                
                <ItemBox button="Рассчитать стоимость" img="https://www.vsv-group.com.ua/wp-content/uploads/2020/04/signalnaja-lampa-aljuteh.jpg" name="Сигнальные лампы" desc="Alutech" price="Цена договорная"/>,
                <ItemBox button="Рассчитать стоимость" img="https://www.vsv-group.com.ua/wp-content/uploads/2020/04/signalnaja-lampa-anmotors..jpg" name="Сигнальные лампы" desc="An-Motors" price="Цена договорная"/>,
                <ItemBox button="Рассчитать стоимость" img="https://www.vsv-group.com.ua/wp-content/uploads/2020/04/signalnaja-lampa-komunello.jpg" name="Сигнальные лампы" desc="Comunello" price="Цена договорная"/>,


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
        button[6].classList.remove(style)
        button[7].classList.remove(style)



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

        button[0].classList.remove(style)
        button[1].classList.add(style)
        button[2].classList.remove(style)
        button[3].classList.remove(style)
        button[4].classList.remove(style)
        button[5].classList.remove(style)
        button[6].classList.remove(style)
        button[7].classList.remove(style)




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
        button[6].classList.remove(style)
        button[7].classList.remove(style)




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
        button[6].classList.remove(style)
        button[7].classList.remove(style)


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
        button[6].classList.remove(style)
        button[7].classList.remove(style)

        
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
        button[6].classList.remove(style)
        button[7].classList.remove(style)



        
        const arr = this.itemBox5
        if(arr){
            this.setState({
                itemBox: arr,
            })
        }
    }
    ToItemBox6(e){
        e.preventDefault()

        const button = document.getElementsByClassName('MarketMain-filter-button')
        const style = 'MarketMain-filter-button_active'

        button[0].classList.remove(style)
        button[1].classList.remove(style)
        button[2].classList.remove(style)
        button[3].classList.remove(style)
        button[4].classList.remove(style)
        button[5].classList.remove(style)
        button[6].classList.add(style)
        button[7].classList.remove(style)

        
        const arr = this.itemBox6
        if(arr){
            this.setState({
                itemBox: arr,
            })
        }
    }
    ToItemBox8(e){
        e.preventDefault()

        const button = document.getElementsByClassName('MarketMain-filter-button')
        const style = 'MarketMain-filter-button_active'

        button[0].classList.remove(style)
        button[1].classList.remove(style)
        button[2].classList.remove(style)
        button[3].classList.remove(style)
        button[4].classList.remove(style)
        button[5].classList.remove(style)
        button[6].classList.remove(style)
        button[7].classList.add(style)

        
        const arr = this.itemBox8
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
                                Ворота откатные
                            </a>
                            <a className="MarketMain-filter-button" onClick={this.ToItemBox2 = this.ToItemBox2.bind(this)} href="/">
                                Ворота распашные
                            </a>
                            <a className="MarketMain-filter-button" onClick={this.ToItemBox3 = this.ToItemBox3.bind(this)} href="/">
                                Гаражные Ворота
                            </a>
                            <a className="MarketMain-filter-button" onClick={this.ToItemBox4 = this.ToItemBox4.bind(this)} href="/">
                                Секционные Ворота
                            </a>
                            <a className="MarketMain-filter-button" onClick={this.ToItemBox5 = this.ToItemBox5.bind(this)} href="/">
                                Пульты
                            </a>
                            <a className="MarketMain-filter-button" onClick={this.ToItemBox6 = this.ToItemBox6.bind(this)} href="/">
                                Сигнальные лампы
                            </a>
                            <a className="MarketMain-filter-button" onClick={this.ToItemBox8 = this.ToItemBox8.bind(this)} href="/">
                                Датчики
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
class Parking extends React.Component{
    constructor(){
        super()
        this.itemBox = [
            <ItemBox button="Заказать" img="https://h44ykq.am.files.1drv.com/y4mgjqvDIepMFgY3-2b0MeXVNRF5hm6Z7wJemjNnW1-f6cpX-CWt0jV8XSoypPHs_y7QJ1Ws0289oE5O4XvZJpn-o3zUImKH8qm0wQtQLXZtuH5Y3SqK1KzSqfc4qIUK9Wo2uAd7pEzjYkiHrmZm8USIgLtVnLMosWiBAQH53fgZ3BYB6-iy8gulmV0PLgdclYVCuus2TJTD2l6u8EfxoR3Rg?width=1024&height=576&cropmode=none" category="Паркинг" name="Антипарковка" price='Цена договорная' />,
        ]
        this.state = {
            itemBox: [
                <ItemBox button="Заказать" img="https://h44ykq.am.files.1drv.com/y4mgjqvDIepMFgY3-2b0MeXVNRF5hm6Z7wJemjNnW1-f6cpX-CWt0jV8XSoypPHs_y7QJ1Ws0289oE5O4XvZJpn-o3zUImKH8qm0wQtQLXZtuH5Y3SqK1KzSqfc4qIUK9Wo2uAd7pEzjYkiHrmZm8USIgLtVnLMosWiBAQH53fgZ3BYB6-iy8gulmV0PLgdclYVCuus2TJTD2l6u8EfxoR3Rg?width=1024&height=576&cropmode=none" category="Паркинг" name="Антипарковка" price='Цена договорная' />,
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
            <ItemBox button="Заказать" img="https://lrxbpw.am.files.1drv.com/y4mXqUlofBiw6zDQEuPyaWkif4QT7s-esyCjOQ53gmYD-Wfjg67OZDKkujKObk9yoO0e-9QII2X8p-LiTEAjBmID0DeI8b8gCYFjM-owMsuxAYBieENe_8DkZzcNJ1M7SVt0d-q0XYW_nvJ_-O_teI_BNqZnn3npuer07ozycHSFPwCzbrBILCVjj6tc_otwoHhtJwamsZa9K_YNlPXN-sFBw?width=800&height=600&cropmode=none" category="Плитка" name="Плитка" price="Цена договорная" />,
        ]
        this.state = {
            itemBox: [
                <ItemBox button="Заказать" img="https://lrxbpw.am.files.1drv.com/y4mXqUlofBiw6zDQEuPyaWkif4QT7s-esyCjOQ53gmYD-Wfjg67OZDKkujKObk9yoO0e-9QII2X8p-LiTEAjBmID0DeI8b8gCYFjM-owMsuxAYBieENe_8DkZzcNJ1M7SVt0d-q0XYW_nvJ_-O_teI_BNqZnn3npuer07ozycHSFPwCzbrBILCVjj6tc_otwoHhtJwamsZa9K_YNlPXN-sFBw?width=800&height=600&cropmode=none" category="Плитка" name="Плитка" price="Цена договорная" />,
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
                <div className='MarketMain-container3' >
                    <div className="MarketMain-container3-box">
                        {this.state.itemBox}
                    </div>
                </div>
            </div>
        )
    }

    
}
class TileEco extends React.Component{
    constructor(){
        super()
        this.itemBox = [
            <ItemBox button="Заказать" img="https://g7we7q.am.files.1drv.com/y4mlqwnIr_jHyoccTzSQ2LT0nbGf1gya6kSs6DCR44edAGV-sW-CtGzTPpak6fiBEwPeSorSP99kNGPVL5zVIZLzbv-_EzYcw1J4Mut2U7IVDh3dijOvq3qDyEuOjmaQgUFY8uo-mzYKnh9nJvOIrmOI5uPFwuO37P7QJlHMvt0dvKRYIQgFQg8sh4fsdYClQqqZ52fne37odaAVcPiu_bt_Q?width=450&height=327&cropmode=none" category="Плитка Экология" name="Плитка 'Экология'" price="Цена договорная" />,
        ]
        this.state = {
            itemBox: [
                <ItemBox button="Заказать" img="https://g7we7q.am.files.1drv.com/y4mlqwnIr_jHyoccTzSQ2LT0nbGf1gya6kSs6DCR44edAGV-sW-CtGzTPpak6fiBEwPeSorSP99kNGPVL5zVIZLzbv-_EzYcw1J4Mut2U7IVDh3dijOvq3qDyEuOjmaQgUFY8uo-mzYKnh9nJvOIrmOI5uPFwuO37P7QJlHMvt0dvKRYIQgFQg8sh4fsdYClQqqZ52fne37odaAVcPiu_bt_Q?width=450&height=327&cropmode=none" category="Плитка Экология" name="Плитка 'Экология'" price="Цена договорная" />,
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
            <ItemBox button="Заказать" img="https://lrwmvg.am.files.1drv.com/y4mvEK1bD_uewKSxakGdgV0vqOtv_07ojttf4IMOa9ENbzK8X2HJY-weETqlwrZ7BYNK48n3qDBTctr2H5Zrv1YOvXpaIBpyGbcl-fHKJxvMVkjp0HUKkkKhOaGI1s3NmAu_UlNGMP5GxVrAfEJzVPWuDiokS9F2rg7MnKamHxaKBPCNg-CMDCHODgghSxItIp696lViwuuD1TtlSrGljV4zA?width=1024&height=768&cropmode=none" category="Термофасад" name="Термофасад" price="Цена договорная" />,
        ]
        this.state = {
            itemBox: [
                <ItemBox button="Заказать" img="https://lrwmvg.am.files.1drv.com/y4mvEK1bD_uewKSxakGdgV0vqOtv_07ojttf4IMOa9ENbzK8X2HJY-weETqlwrZ7BYNK48n3qDBTctr2H5Zrv1YOvXpaIBpyGbcl-fHKJxvMVkjp0HUKkkKhOaGI1s3NmAu_UlNGMP5GxVrAfEJzVPWuDiokS9F2rg7MnKamHxaKBPCNg-CMDCHODgghSxItIp696lViwuuD1TtlSrGljV4zA?width=1024&height=768&cropmode=none" category="Термофасад" name="Термофасад" price="Цена договорная" />,
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
                <div className='MarketMain-container3' >
                    <div className="MarketMain-container3-box">
                        {this.state.itemBox}
                    </div>
                </div>
            </div>
        )
    }

    
}