import React from 'react';
import ReactDOM from 'react-dom';
import { Navbar } from '../navbar';
import { Helmet } from 'react-helmet';

export class Home extends React.Component{
    constructor(){
        super()
    }

    render(){
        return(
            <div>
                <Header />
                <Phone />
                <div className="Wrapper">
                    <OurPropose />
                    <Form />
                </div>
            </div>
        )
    }

}
export class Phone extends React.Component{
    constructor(){
        super()
    }
    componentDidMount(){
        window.addEventListener('scroll', () =>{
            const value = window.scrollY;
            let phone = document.getElementById('phone')
            
            phone.style.top = value + 'px'

        })
    }

    render(){
        return(
            <a id="phone" href="tel:+380951681833">
                <img style={{transition:'1s', margin:'auto', width:'35px',height:'35px'}} src="phone copy.svg" alt="phone"></img>
            </a>
        )
    }
}
export class Header extends React.Component{
    constructor(){
        super()
    }

    render(){
        return(
            <div>
                <Helmet>
                <meta
                  name="description"
                  content="Еврозабор в Полтаве. Установка еврозабора в Полтаве. Автоматика на ворота. Термофасад. Строим с нами." 
                />
                <meta 
                  name="keywords"
                  content="Еврозабор в полтаве, Автоматика на ворота, термофасад, покраска забора полтава, установка еврозабора, забор полтава"
                />
                <meta
                  property="og:image"
                  content="https://www.dropbox.com/s/sq95a32ya6h3unk/bg.jpg?dl=1"
                />
                <meta 
                    property="og:description" 
                    content="Еврозабор в полтаве, Автоматика на ворота, термофасад, покраска забора полтава, установка еврозабора, забор полтава"
                />
    
                <title>Установка и Покраска Еврозабора в Полтаве — Строим с Нами</title>
                </Helmet>
            <div id="Header">
                <div className="Wrapper">
                    <div className="Header-container">
                        <h1 className="Header-headline1">Строим с Нами</h1>
                        <h2 className="Header-headline2">
                            Еврозабор Полтава Установка Покраска<br /> Заборы и ворота всех видов
                            Автоматика Термофасад Плитка
                        </h2>
                        <a className="Header-button" href="/form">Оставить заявку</a>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}
class OurPropose extends React.Component{
    constructor(){
        super()
    }

    render(){
        return(
            <div>
            <section id="OurPropose">
                <div className="OurPropose-title">Мы предлагаем</div>
                <div className="OurPropose-line"></div>
                <div className="OurPropose-container">
                    <div className="OurPropose-container-box">
                        <img 
                            className="OurPropose-container-box-photo" 
                            src="https://tjdkza.am.files.1drv.com/y4mKqqlULniJ1Fyy64vCOxN1bhjKEivXr_27ibCozf9fJtKfAf1mIdqiJasLMfTkwLxUL2EWRbJaG7sI8v_aFRGuHpd15nkkd0gqP7TR9BUsMzwqyC1WUdELq6L9ZvkDsZejXoPzBT1QPQa60eBY0HgzWhEI1OLPWA-N05n-ccPn2hXVjIuFoC7MCvcXM4UM0jQvxiPbMq3peAGa4OSlr0pqw?width=480&height=360&cropmode=none" 
                            alt="OurPropose-photo" />
                        <div className="OurPropose-container-box-border">
                            <div className='OurPropose-container-box-name'>Заборы</div>
                            <div className="OurPropose-container-box-desc">
                                Еврозабор собственного производства. На сегодняшний день это оптимальный вариант, соотношения цены и качества при выборе и строительстве забора. Еврозабор имеет ряд достоинств, перед иными капитальными строениями. Всё изготовлено из качественного материала.            
                            </div>
                            <a href="/market" className="OurPropose-container-box-button">Все предложения</a>
                        </div>
                    </div>
                    <div className="OurPropose-container-box">
                        <img 
                            className="OurPropose-container-box-photo"
                            src="https://q11y8a.am.files.1drv.com/y4mXEio0kro6Ilc2EykztOxJebDeva8dSv-gdMlbv2CqV1OqQWNAoZ6jf44gExu9qIJdHsQbLzDqwzvz0_JmjXXdSloBY4Hk8mlET8Q3rtmBh6_M4CcyhcGQxSS_Yc7nhgfizUSnGiBInrsgUS649JN1oBm9S4_Irbz32fNm5RSFJPFTu4si7nSUEkgZFzrGRiWjNbHOqfVPlhmoExo2JnHlQ?width=1280&height=693&cropmode=none" 
                            alt="OurPropose-photo" 
                        />
                        <div className="OurPropose-container-box-border">
                            <div className='OurPropose-container-box-name'>Ворота</div>
                            <div style={{fontSize:'15px'}} className="OurPropose-container-box-desc">
                                На сегодняшний день компания «Строим с Нами» предлагает ворота:

                                    <br />из разных материалов (профнастил, металлические, филенчатые);
                                    <br />учитывая предназначение (въездные, гаражные)
                                    <br />любой стоимостью (бюджетные, дорогостоящие);
                                    <br />необходимого качества;
                                    <br />для выполнения нужных функций.                           
                            </div>
                            <a href="/market" className="OurPropose-container-box-button">Все предложения</a>
                        </div>
                    </div>
                    <div className="OurPropose-container-box">
                        <img 
                            className="OurPropose-container-box-photo" 
                            src="https://n9lqkg.am.files.1drv.com/y4mRLS002GbbGFtHSxBYoiUpQniXYr93o8pAKB4JNVsk08XUO08WftvW10hrVCQnoLZFTwmMEC7Hgj7dxfHl-FfCa8j2PEY0E69S554IcfFs1pMMjRlXkPn31Q6V1hMQbcMi1qgnjYXRmt_0LjJkZc2D9u63xxcTyl6wmmekFA3DfpM3bvmwt4RolGqWizDqB6yCIlZf6eE4xHIEzlIuT4NNQ?width=1024&height=768&cropmode=none" 
                            alt="OurPropose-photo"
                        />

                        <div className="OurPropose-container-box-border">
                            <div className='OurPropose-container-box-name'>Покраска</div>
                            <div className="OurPropose-container-box-desc">
                                Покраска еврозаборов высококачественными материалами. Поможет сохранить забор от разрушений и сделает ограждение индивидуальным, выделив форму и особенности плит.
                            </div>
                            <a href="/market" className="OurPropose-container-box-button">Все предложения</a>
                        </div>
                    </div>
                    <div className="OurPropose-container-box">
                        <img 
                            className="OurPropose-container-box-photo" 
                            src="https://h47nbq.am.files.1drv.com/y4mytOi0VZ3fxiFZ0qC48Gk4RoOGpSWpHJr59gxnTAQTA-WQY1jGd-WDJolcwlt-aCyM6Iqw-zhG7jHU5YIIjimhtU3Rc0P1ooWiCFzYQIRfXMOKrVlP0Nk7N6JDsOFQVUnFKkSE0zZiysqvYK4MXjhV12eF-LNv0eCMoLGg6TZ_0Iy_T40nNpzmsad8MrdPL7KeZQ_JgQmO30z5R-_6-EI5g?width=795&height=600&cropmode=none" 
                            alt="OurPropose-photo" 
                        />
                        <div className="OurPropose-container-box-border">
                            <div className='OurPropose-container-box-name'>Автоматика для ворот</div>
                            <div className="OurPropose-container-box-desc">
                            Любой дом оснащается забором и воротами. Специальная автоматика для ворот обеспечивает комфортное управление дверьми. Данная аппаратура выполняет их автоматическое открывание / закрывание. 
                            </div>
                            <a href="/market" className="OurPropose-container-box-button">Все предложения</a>
                        </div>
                    </div>
                    <div className="OurPropose-container-box">
                        <img 
                            className="OurPropose-container-box-photo" 
                            src="https://gecsvw.am.files.1drv.com/y4mT1rXcDy64M6meaogUlp4S4cY2sGyQLmrNTaLIOhfXKbqCBDd_6BXosJc8lc-MB2rwGdMc6y-uCpPEZux_MtE3RE7g5U5CPYhxIkqRj9l_K3Q5eQ1Cq3CVmlyAAZlDVQSvnXRKd90NFaLUy_H9nhPP7obL81hODlsvBEupQHm8hljt4t2WMnJ9lxzXT7-nZS5phuLJ5qarA9XL4FNyQVaEw?width=1024&height=852&cropmode=none" 
                            alt="OurPropose-photo"
                        />
                        <div className="OurPropose-container-box-border">
                            <div className='OurPropose-container-box-name'>Роллеты</div>
                            <div className="OurPropose-container-box-desc">
                                Системы роллет являются защитными конструкциями для дверных, оконных проемов. Это алюминиевые полотна, движущие по направляющим, которые сворачиваются в короб рулоном.
                            </div>
                            <a href="/market" className="OurPropose-container-box-button">Все предложения</a>
                        </div>
                    </div>
                    <div className="OurPropose-container-box">
                        <img 
                            className="OurPropose-container-box-photo" 
                            src="https://g7we7q.am.files.1drv.com/y4mlqwnIr_jHyoccTzSQ2LT0nbGf1gya6kSs6DCR44edAGV-sW-CtGzTPpak6fiBEwPeSorSP99kNGPVL5zVIZLzbv-_EzYcw1J4Mut2U7IVDh3dijOvq3qDyEuOjmaQgUFY8uo-mzYKnh9nJvOIrmOI5uPFwuO37P7QJlHMvt0dvKRYIQgFQg8sh4fsdYClQqqZ52fne37odaAVcPiu_bt_Q?width=450&height=327&cropmode=none" 
                            alt="OurPropose-photo"
                        />
                        <div className="OurPropose-container-box-border">
                            <div className='OurPropose-container-box-name'>Плитка "Экология"</div>
                            <div className="OurPropose-container-box-desc">
                                Плитка газонная (решетка, экология) ― это плитка для создания автомобильных парковок, проезда транспорта в зоне озеленения. Защищает грунт от эрозии, гарантирует нормальную циркуляцию воды и рост газонной травы.                            </div>
                            <a href="/market" className="OurPropose-container-box-button">Все предложения</a>
                        </div>
                    </div>

                </div>
            </section>
            <section id='OurPartners'>
                <div className="OurPropose-title">Наши партнёры</div>
                <div className="OurPartners-container"> 
                    <a target="_blank" href="https://www.vsv-group.com.ua/" className="OurPartners-box">
                        <img  className="OurPartners-box-img" src="https://www.vsv-group.com.ua/wp-content/themes/vsv/img/logo-ver2.svg"></img>
                    </a>
                    <a target="_blank" href="https://www.facebook.com/mebelvorotakharkov" className="OurPartners-box">
                        <img  className="OurPartners-box-img" src="https://scontent.fiev25-2.fna.fbcdn.net/v/t1.0-9/1904221_621151037954769_404123452_n.jpg?_nc_cat=111&_nc_sid=174925&_nc_ohc=qtoCjw4ADwQAX_DHQFR&_nc_ht=scontent.fiev25-2.fna&oh=6761b18d46d003c5b1612b145762e68e&oe=5F45C022"></img>
                    </a>
                </div>
            </section>
            </div>
        )
    }
}
export class Form extends React.Component{
    constructor(){
        super()
    }

    render(){
        return(
            <section id="Homepage-form">
                <div className="OurPropose-title">Форма обратной связи</div>
                <div className="OurPropose-line"></div>
                <div className="OurPropose-title1">Заполните форму, мы с Вами свяжемся<br /> и сделаем бесплатный просчёт Вашего объекта!</div>

                <div>
                    <form action="telegram.php" method="POST" className="Homepage-form-form" >
                        <div class="Homepage-form-form-group">
                            <label>
                                <input name="user_name" type="text" className="Homepage-form-input" placeholder="Ваше имя"></input>
                            </label>
                        </div>
                        <div class="form-group">
                            <label>
                                <input name="user_phone" type="text" className="Homepage-form-input" placeholder="Ваш номер телефона"></input>
                            </label>
                        </div>
                        <div className='Homepage-form-buttonBox'>
                            <button type="submit" className="Homepage-form-button">Отправить форму!</button>
                        </div>
                    </form>
                </div>
            </section>
        )
    }
}