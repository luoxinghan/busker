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
import Trail from "./pages/trail";
import Moment from "./pages/moment";
import Login from "./pages/login/temp";
import Register from "./adds/register";
import TrailAdd from "./adds/trailAdd";
import TrailDetail from "./details/trailDetail";
import MomentDetail from "./details/momentDetail";
import MomentAdd from "./adds/momentAdd";
import BuskerDetail from "./details/buskerDetail";
import BuskerUpdate from "./updates/buskerUpdate";
import UserDetail from "./details/userDetail";
import UserUpdate from "./updates/userUpdate";
import Feedback from "./common/feedback";
import AboutUs from "./common/about";
import Albums from "./pages/album";
import AlbumDetail from "./details/albumDetail";
import AlbumAdd from "./adds/albumAdd";
import SponsorUs from "./pages/sponsor";
import Personal from "./pages/personal";
/*import "./mock";*/
import PrivateRoute from "./router/PrivateRoute";

/*
function requireAuth(nextState, replaceState) {
    if (!document.cookie)
        replaceState('/login');
}
*/

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <GlobalStyled/>
          <GlobalIconFont/>
          <BrowserRouter>
              <Header/>
                  <main>
                      <Route path="/" exact component={Home}/>
                      <Route path="/busker" exact component={Busker}/>
                      <Route path='/busker/detail/:id' exact component={BuskerDetail}/>
                      <Route path="/busker/update/:id" exact component={BuskerUpdate}/>
                      <Route path='/user/detail/:id' exact component={UserDetail}/>
                      <Route path="/user/update/:id" exact component={UserUpdate}/>
                      <Route path="/trail" exact component={Trail}/>
                      <Route path="/trail/add" exact component={TrailAdd}/>
                      <Route path="/trail/detail/:id" exact component={TrailDetail}/>
                      <Route path="/moment" exact component={Moment}/>
                      <Route path='/moment/detail/:id' exact component={MomentDetail}/>
                      <Route path="/moment/add" exact component={MomentAdd}/>
                      <Route path="/album" exact component={Albums}/>
                      <Route path="/album/detail/:id" exact component={AlbumDetail}/>
                      <Route path="/album/add" exact component={AlbumAdd}/>
                      <Route path="/login" exact component={Login}/>
                      <Route path="/register" exact component={Register}/>
                      <Route path="/feedback" exact component={Feedback}/>
                      <Route path="/aboutus" exact component={AboutUs}/>
                      <Route path="/sponsor" exact component={SponsorUs}/>
                      <Route path="/personal/:id" exact component={Personal}/>
                      <PrivateRoute path="/manage">
                          <div>这里就是管理界面</div>
                      </PrivateRoute>
                  </main>
              <Footer/>
          </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
