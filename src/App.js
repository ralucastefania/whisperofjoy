import React from "react";
import reactDom from "react-dom";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Cookies from "./components/Cookies";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Impressum from "./components/Impressum";
import Menu from "./components/Menu";
import Newsletter from "./components/Newsletter";
import Popup from "./components/Popup";
import SearchButton from "./components/SearchButton";
import Sidebar from "./components/Sidebar";
import SocialMedia from "./components/SocialMedia";
import Stories from "./components/Stories";

export const MessengerPiggeon = React.createContext(null);

function App() {
   const [popups, dispatch] = React.useReducer(popupReducer, {
     subscribePopupVisible: false,
     cookiePopupVisible: true,
   });

   function popupReducer(state, action) {
     console.log('action', action)
     const newState = { ...state };
     if(action.type === 'cookiePopupVisibleOFF') newState.cookiePopupVisible = false
     if(action.type === 'subscribePopupVisibleON') newState.subscribePopupVisible = true
     if(action.type === 'subscribePopupVisibleOFF') newState.subscribePopupVisible = false
     if(action.type === 'updateEmail') newState.subscribedEmail = action.newEmail
     return newState;
   }
    
  React.useEffect(() => {
    fetch("https://api.mocki.io/v1/da124ea4")
      .then(response => response.json())
      .then(response => dispatch({
        type: 'updateEmail',
        newEmail: response.email
      }))
    setTimeout(() => {
      dispatch({type: 'subscribePopupVisibleON'})
    }, 2000);
  }, []);

  return (
    <MessengerPiggeon.Provider value={{ dispatch, popups }}>
      <div>
        <Header />
        <Menu />
        {popups.subscribePopupVisible ? <Popup email={popups.subscribedEmail}/> : <></>}
        <Switch>
          <Route path="/stories">
            <Stories />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/Impressum">
            <Impressum />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
        {popups.cookiePopupVisible ? <Cookies /> : <></>}
      </div>
    </MessengerPiggeon.Provider>
  );
}

export default App;
