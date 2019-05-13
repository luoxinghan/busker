import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { GlobalStyled } from "./style";
import { GlobalIconFont } from "./statics/iconfont/iconfont";
import store from "./store";

import Header from "./common/header";
import Footer from "./common/footer";
import Home from "./pages/home";
import Busker from "./pages/busker";
import Performance from "./pages/performance";
import Moment from "./pages/moment";
import Login from "./pages/login";
import MomentDetail from "./details/momentDetail";
import BuskerDetail from "./details/buskerDetail";


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <GlobalStyled/>
          <GlobalIconFont/>
          <BrowserRouter>
              <Header/>
              <Route path="/" exact component={Home}/>
              <Route path="/busker" exact component={Busker}/>
              <Route path='/busker/detail/:id' exact component={BuskerDetail}></Route>
              <Route path="/performance" exact component={Performance}/>
              <Route path="/moment" exact component={Moment}/>
              <Route path='/moment/detail/:id' exact component={MomentDetail}></Route>
              <Route path="/login" exact component={Login}/>
              <Footer/>
          </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
