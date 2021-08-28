import React from 'react';
import ReactDOM from 'react-dom';
import {Switch, Route, BrowserRouter as Router, Redirect} from 'react-router-dom'

import { Home } from './pages/homePage';
import { Market } from './pages/market/marketPage';
import { AboutUs } from './pages/aboutUsPage';
import { Navbar } from './navbar';
import { Desivery } from './pages/desiveryPage';
import { Gallery } from './pages/galleryPage';
import { Footer } from './footer';
import { Header } from './header';
import { MainFormPage } from './formPage';
import { ThanksPage } from './thanksPage';
import { Price } from './pages/price';




ReactDOM.render(
  <Router >
    <Header />
    <Navbar />
    <div id="Content">
      <Switch>
        <Route path="/" exact component={Home} />
        
        <Route path="/market" component={Market} />

        <Route path="/aboutus" component={AboutUs} />
        <Route path="/desivery" component={Desivery} />
        <Route path="/price" component={Price} />
        <Route path="/gallery" component={Gallery} />

        <Route path="/form" component={MainFormPage} />
        <Route path="/thankspage" component={ThanksPage} />



        <Redirect to="/"></Redirect>
      </Switch>
    </div>
    <Footer />
  </Router>,

  




  document.getElementById('root')
);


